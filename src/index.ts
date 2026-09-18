/**
 * FiscalLink for ANAF — Stripe App backend.
 *
 * Self-hosted (e.g. Coolify on the VPS). Responsibilities:
 *  1. OAuth 2.0 install flow  — exchange the authorization code for a refresh token,
 *     stored in the Stripe Apps Secret Store (account scope) — never on disk.
 *  2. UI extension API (signed with the app secret):
 *       GET  /api/status      → connection state (OAuth, FiscalLink key, ANAF creds)
 *       POST /api/connect     → validate + store FiscalLink API key and ANAF SPV credentials
 *       POST /api/disconnect  → remove secrets
 *  3. App event receiver (ONE endpoint, developer-configured in the Stripe dashboard
 *     with "monitor events from connected accounts") — checkout.session.completed
 *     → FiscalLink invoice (EN 16931 / CIUS-RO UBL) submitted to ANAF via the core API
 *     using the merchant's FiscalLink API key; account.application.deauthorized → cleanup.
 *
 * Security: UI→backend calls carry a Stripe-Signature header signed with the APP secret;
 * Stripe→backend events carry the WEBHOOK endpoint secret. No merchant secrets are stored
 * locally — only the Stripe developer key in env (the platform key, not a merchant secret).
 */
import crypto from 'crypto';
import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT || 3001);
const APP_URL = process.env.APP_URL || 'https://stripe-app.autoanaf.ro';
const CORE_URL = process.env.FISCALLINK_CORE_URL || 'https://core.autoanaf.ro';
const STRIPE_APP_SECRET = process.env.STRIPE_APP_SECRET || '';
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
// Optional alternate-mode developer key. OAuth authorization codes are mode-bound:
// a code minted by a TEST-mode install link can ONLY be exchanged with a test key
// (and a live-mode code only with a live key) — a mismatch 400s with `invalid_grant
// … livemode API key but authorization code only supports returning test keys`.
// Stripe's review team installs apps in TEST mode, so during a review cycle the
// backend must accept test-mode codes even if the deployment's primary key is live
// (or vice versa). When one of these is set and the primary key is the other mode,
// the OAuth callback retries the exchange with the correct-mode key automatically.
const STRIPE_SECRET_KEY_TEST = process.env.STRIPE_SECRET_KEY_TEST || '';
const STRIPE_SECRET_KEY_LIVE = process.env.STRIPE_SECRET_KEY_LIVE || '';
// Signing secret of the dashboard-registered webhook endpoint (Developers → Webhooks →
// "Listen to events on connected accounts"). Stripe signs app events with it.
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';
// Alternate-mode webhook secret. Each event destination (live and test) has its OWN signing
// secret while the deployment holds a single primary secret, so a test-mode delivery would
// otherwise 400 the moment the primary secret flips to live. Set this to the secret of the
// OTHER mode's /hooks/app destination. Field-verified 2026-09-10.
const STRIPE_WEBHOOK_SECRET_TEST = process.env.STRIPE_WEBHOOK_SECRET_TEST || '';

// ── Secret Store names (account-scoped) ──────────────────────────────
const SECRET_REFRESH_TOKEN = 'fiscallink_stripe_refresh_token';
const SECRET_ACCOUNT_ID = 'fiscallink_stripe_account_id';
const SECRET_FISCALLINK_KEY = 'fiscallink_api_key';
const SECRET_ANAF_CIF = 'fiscallink_anaf_cif';
const SECRET_ANAF_CLIENT_ID = 'fiscallink_anaf_client_id';
const SECRET_ANAF_CLIENT_SECRET = 'fiscallink_anaf_client_secret';

import { createEventDeduplicator } from './dedupe';
import { mapCheckoutToInvoice } from './invoice-map';
import type { InvoicePayload } from './invoice-map';

const app = express();

// Dedupe /hooks/app deliveries: retries and duplicate destinations must not raise a second invoice.
const eventDedupe = createEventDeduplicator();

/**
 * Last failed invoice submission, per merchant account. Exposed on /api/status so a
 * rejection by core is visible in the app drawer instead of only in the logs.
 * (A 400 from core is permanent — Stripe retries would not help — so it must not be
 * lost the way the "Stripe merchant" 19%-VAT failure of 2026-09-18 nearly was.)
 */
const lastInvoiceError = new Map<string, { status: number; session: string; at: string; detail: string }>();
app.use(cors());
// Request logging: leaves a forensic trail (method, path, status, latency, IP, UA)
// for support/review investigations — e.g. Stripe's app-review installs.
app.use((req, res, next) => {
  const startedAt = Date.now();
  res.on('finish', () => {
    const ua = (req.get('user-agent') || '').replace(/\s+/g, ' ').slice(0, 140);
    console.log(
      `${new Date().toISOString()} ${req.method} ${req.originalUrl} ${res.statusCode} ` +
        `${Date.now() - startedAt}ms ip=${req.ip || '-'} ua="${ua}"`,
    );
  });
  next();
});
// Capture the exact raw bytes for signature verification (JSON.stringify(req.body)
// can reorder keys/whitespace and break Stripe signature checks).
app.use(
  express.json({
    limit: '1mb',
    verify: (req, _res, buf) => {
      (req as express.Request & { rawBody?: Buffer }).rawBody = buf;
    },
  }),
);

// ── Stripe clients ────────────────────────────────────────────────────
const stripe = new Stripe(STRIPE_SECRET_KEY || 'sk_placeholder');

// ── Secret Store helpers (Stripe Apps Secret Store API) ───────────────
// Docs: https://docs.stripe.com/api/apps/secret_store
async function setSecret(name: string, payload: string, accountId?: string, apiKey?: string) {
  const key = apiKey || STRIPE_SECRET_KEY;
  const form = new URLSearchParams();
  form.set('name', name);
  form.set('payload', payload);
  form.set('scope[type]', 'account');
  const headers: Record<string, string> = {
    Authorization: `Bearer ${key}`,
  };
  if (accountId) headers['Stripe-Account'] = accountId;
  const res = await fetch('https://api.stripe.com/v1/apps/secrets', {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form,
  });
  if (!res.ok) throw new Error(`Secret Store write failed: ${res.status} ${await res.text()}`);
  return res.json();
}

async function findSecret(name: string, accountId?: string, apiKey?: string): Promise<string | null> {
  const headers: Record<string, string> = { Authorization: `Bearer ${apiKey || STRIPE_SECRET_KEY}` };
  if (accountId) headers['Stripe-Account'] = accountId;
  // payload is expandable — without expand[]=payload the response omits it and
  // every read returns null despite a successful write (field-verified 2026-08-31).
  const res = await fetch(
    `https://api.stripe.com/v1/apps/secrets/find?name=${encodeURIComponent(name)}&scope[type]=account&expand[]=payload`,
    { headers },
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Secret Store find failed: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as { payload?: string };
  return data.payload ?? null;
}

// Remove a Secret Store entry. Writing an empty payload is REJECTED by Stripe
// (`400 parameter_invalid_empty: "You passed an empty string for 'payload'"`) —
// caught by a marketplace reviewer on /api/disconnect (2026-09-09). The correct
// clearing call is POST /v1/apps/secrets/delete (name + account scope).
async function deleteSecret(name: string, accountId?: string): Promise<void> {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
  };
  if (accountId) headers['Stripe-Account'] = accountId;
  const form = new URLSearchParams();
  form.set('name', name);
  form.set('scope[type]', 'account');
  const res = await fetch('https://api.stripe.com/v1/apps/secrets/delete', {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form,
  });
  // 404 = already absent — treat as success so disconnect is idempotent.
  if (res.status === 404) return;
  if (!res.ok) throw new Error(`Secret Store delete failed: ${res.status} ${await res.text()}`);
}

// Real webhook health check for /api/status. The drawer used to claim
// "Checkout webhook: enabled" unconditionally (hardcoded true) — a marketplace
// reviewer proved that misleading when Stripe never delivered events because the
// dashboard endpoint was registered WITHOUT "Listen to events on connected
// accounts" (2026-09-09). Query the developer account's endpoints instead.
async function webhookEndpointHealthy(): Promise<boolean> {
  try {
    const res = await fetch('https://api.stripe.com/v1/webhook_endpoints?limit=100', {
      headers: { Authorization: `Bearer ${STRIPE_SECRET_KEY}` },
    });
    if (!res.ok) return false;
    const data = (await res.json()) as {
      data?: { id?: string; url?: string; status?: string; enabled_events?: string[] }[];
    };
    const candidates = (data.data ?? []).filter(
      (e) =>
        e.url === `${APP_URL}/hooks/app` &&
        e.status === 'enabled' &&
        (e.enabled_events ?? []).includes('checkout.session.completed'),
    );
    if (!candidates.length) return false;

    // Scope ("Events from") is what decides whether merchant events ever arrive, and v1
    // hides it: a destination registered as "Your account" looks identical (url, status,
    // events) and, when created by hand in the dashboard, also reports application: null.
    // v2 exposes the routing as events_from: 'other_accounts' = Connected accounts (what a
    // marketplace app needs), 'self' = Your account (silently drops every merchant event —
    // 2026-09-09/14). Scope can only be set at creation; it is not updatable afterwards.
    const v2 = await fetch('https://api.stripe.com/v2/core/event_destinations?limit=100', {
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
        'Stripe-Version': '2025-12-15.clover',
      },
    });
    if (!v2.ok) return false;
    const destinations = (await v2.json()) as { data?: { id?: string; events_from?: string[] }[] };
    const ids = new Set(candidates.map((c) => c.id));
    return (destinations.data ?? []).some(
      (d) =>
        d.id !== undefined &&
        ids.has(d.id) &&
        (d.events_from ?? []).includes('other_accounts'),
    );
  } catch {
    return false;
  }
}


// ── Signature verification for UI-extension → backend calls ───────────
// App-embedded signatures (fetchStripeSignature) cover exactly the string
// `{"user_id":...,"account_id":...}` (field order matters) — verify with
// verifyHeader, NOT constructEvent (that one is for real webhook events).
// Typed so route handlers can map it to 401; anything else thrown after a
// valid signature is a server-side failure → 500 (a catch-all 401 made the
// reviewer's disconnect failure look like an auth problem, 2026-09-09).
class SignatureError extends Error {}

function verifyAppSignature(req: express.Request): { accountId: string; userId: string } {
  const sig = (req.headers['stripe-signature'] as string) || '';
  if (!sig) throw new SignatureError('Missing Stripe-Signature header');
  const body = (req.body ?? {}) as { user_id?: string; account_id?: string };
  if (!body.user_id || !body.account_id) {
    throw new SignatureError('Missing user_id/account_id in signed request');
  }
  const payload = JSON.stringify({ user_id: body.user_id, account_id: body.account_id });
  try {
    if (!stripe.webhooks.signature) throw new SignatureError('verifyHeader unavailable');
    stripe.webhooks.signature.verifyHeader(payload, sig, STRIPE_APP_SECRET);
  } catch (e) {
    if (e instanceof SignatureError) throw e;
    throw new SignatureError(`Signature verification failed: ${(e as Error).message}`);
  }
  return { accountId: body.account_id, userId: body.user_id };
}

// ── OAuth helpers ─────────────────────────────────────────────────────
interface OAuthTokens {
  access_token: string;
  refresh_token: string;
  stripe_user_id: string;
  livemode: boolean;
}

function isModeMismatchError(message: string): boolean {
  // Stripe rejects the exchange when the API key's mode doesn't match the
  // authorization code's mode, e.g.:
  //   "Passed in livemode API key but authorization code only supports
  //    returning test keys"
  return /invalid_grant/.test(message) && /livemode|test keys|live keys|mode mismatch/i.test(message);
}

async function exchangeCode(code: string, apiKey: string): Promise<OAuthTokens> {
  const form = new URLSearchParams();
  form.set('code', code);
  form.set('grant_type', 'authorization_code');
  const res = await fetch('https://api.stripe.com/v1/oauth/token', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: form,
  });
  if (!res.ok) throw new Error(`OAuth token exchange failed: ${res.status} ${await res.text()}`);
  return res.json() as Promise<OAuthTokens>;
}

/**
 * Exchange an authorization code with the mode-appropriate developer key.
 * The code's mode is fixed by the install link the user clicked and only an API
 * key of the SAME mode can exchange it. Try the deployment's primary key first;
 * if Stripe reports a test/live key mismatch, retry once with the other mode's
 * key (when configured) so both test-mode review installs and live marketplace
 * installs complete regardless of which key the deployment primarily runs.
 */
async function exchangeCodeWithFallback(code: string): Promise<{ tokens: OAuthTokens; apiKey: string }> {
  const primaryIsLive = STRIPE_SECRET_KEY.startsWith('sk_live');
  const primaryIsTest = STRIPE_SECRET_KEY.startsWith('sk_test');
  const altKey = primaryIsLive ? STRIPE_SECRET_KEY_TEST : primaryIsTest ? STRIPE_SECRET_KEY_LIVE : '';
  const attempts = [STRIPE_SECRET_KEY, altKey].filter((k) => k.length > 0);
  let lastError: Error | null = null;
  for (const apiKey of attempts) {
    try {
      const tokens = await exchangeCode(code, apiKey);
      return { tokens, apiKey };
    } catch (e) {
      lastError = e as Error;
      // Only a mode mismatch is worth retrying — an expired or already-used code
      // fails identically on both keys, so stop rather than burn the retry.
      if (!isModeMismatchError(lastError.message)) break;
      console.log(
        `[oauth] exchange with the ${apiKey.startsWith('sk_test') ? 'test' : 'live'} key hit a mode mismatch — retrying with the other mode's key`,
      );
    }
  }
  throw lastError ?? new Error('OAuth token exchange failed: no API key configured');
}

async function refreshAccessToken(refreshToken: string) {
  const form = new URLSearchParams();
  form.set('refresh_token', refreshToken);
  form.set('grant_type', 'refresh_token');
  const res = await fetch('https://api.stripe.com/v1/oauth/token', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: form,
  });
  if (!res.ok) throw new Error(`OAuth refresh failed: ${res.status} ${await res.text()}`);
  return res.json() as Promise<{ access_token: string; refresh_token: string }>;
}

/**
 * Fresh OAuth access token for a merchant account. Returned raw rather than wrapped in
 * an SDK client because the checkout handler also needs it for a plain REST read of
 * /v1/account — an account-scoped token may not call /v1/accounts/{id}, only "me".
 * Stripe rotates the refresh token on every exchange, so the new one must be stored.
 */
async function merchantAccessToken(accountId: string): Promise<string> {
  const refreshToken = await findSecret(SECRET_REFRESH_TOKEN, accountId);
  if (!refreshToken) throw new Error('Not installed: missing OAuth refresh token');
  const { access_token, refresh_token } = await refreshAccessToken(refreshToken);
  await setSecret(SECRET_REFRESH_TOKEN, refresh_token, accountId);
  return access_token;
}

/**
 * Best-effort issuer name for the invoice. `session.metadata.merchant_name` is the
 * merchant's own choice; otherwise read the connected account's business name with its
 * own OAuth token. The literal fallback would land on a filed fiscal document, so a
 * miss is logged loudly rather than passed off as a real name.
 */
async function merchantBusinessName(accessToken: string): Promise<string | undefined> {
  try {
    const res = await fetch('https://api.stripe.com/v1/account', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!res.ok) {
      console.warn(`[invoice] business name lookup failed (${res.status})`);
      return undefined;
    }
    const account = (await res.json()) as {
      business_profile?: { name?: string | null } | null;
      company?: { name?: string | null } | null;
    };
    const name = account?.business_profile?.name ?? account?.company?.name;
    const trimmed = typeof name === 'string' ? name.trim() : '';
    return trimmed || undefined;
  } catch (e) {
    console.warn(`[invoice] business name lookup error: ${(e as Error).message}`);
    return undefined;
  }
}

// ── FiscalLink core helpers ───────────────────────────────────────────
async function submitInvoiceToFiscalLink(
  apiKey: string,
  payload: InvoicePayload,
): Promise<{ ok: boolean; status: number; body: unknown }> {
  const res = await fetch(`${CORE_URL}/v1/invoices`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });
  const body = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, body };
}

// ── 1. OAuth install flow ─────────────────────────────────────────────
app.get('/oauth/callback', async (req, res) => {
  try {
    const code = req.query.code as string;
    const state = req.query.state as string;
    if (!code) throw new Error('Missing authorization code');
    const { tokens, apiKey } = await exchangeCodeWithFallback(code);
    // Persist refresh token + account id in the Secret Store (account scope) using
    // the SAME-mode developer key — Secret Store scopes are mode-bound like OAuth.
    console.log(`[oauth] code exchanged → account ${tokens.stripe_user_id} (livemode=${tokens.livemode})`);
    await setSecret(SECRET_REFRESH_TOKEN, tokens.refresh_token, tokens.stripe_user_id, apiKey);
    await setSecret(SECRET_ACCOUNT_ID, tokens.stripe_user_id, tokens.stripe_user_id, apiKey);
    // state may carry a return path — default to the installed landing page.
    const redirect = state && state.startsWith('/') ? state : '/installed?account=' + tokens.stripe_user_id;
    res.redirect(`${APP_URL}${redirect}`);
  } catch (e) {
    res.status(400).send(`Installation failed: ${(e as Error).message}`);
  }
});

// ── 2. UI extension API (signed) ──────────────────────────────────────
app.post('/api/status', async (req, res) => {
  try {
    const { accountId } = verifyAppSignature(req);
    console.log(`[status] account=${accountId}`);
    const [fiscalLinkKey, cif, webhookOk] = await Promise.all([
      findSecret(SECRET_FISCALLINK_KEY, accountId),
      findSecret(SECRET_ANAF_CIF, accountId),
      webhookEndpointHealthy(),
    ]);
    console.log(`[status] key=${Boolean(fiscalLinkKey)} cif=${Boolean(cif)} webhook=${webhookOk}`);
    res.json({
      installed: true,
      fiscalLinkConnected: Boolean(fiscalLinkKey),
      anafConfigured: Boolean(cif),
      // Real check against the developer account's registered endpoints — was
      // hardcoded true before, which misled the reviewer (2026-09-09) into
      // believing events were flowing when no connected-account endpoint existed.
      webhookEnabled: webhookOk,
      // Set when the last checkout on this account failed to become an invoice.
      lastInvoiceError: lastInvoiceError.get(accountId) ?? null,
    });
  } catch (e) {
    res.status(e instanceof SignatureError ? 401 : 500).json({ error: (e as Error).message });
  }
});

app.post('/api/connect', async (req, res) => {
  try {
    const { accountId } = verifyAppSignature(req);
    const { apiKey, anafCif, anafClientId, anafClientSecret } = req.body ?? {};
    console.log(`[connect] account=${accountId} hasApiKey=${Boolean(apiKey)} cif=${anafCif ?? ''}`);

    if (!apiKey || typeof apiKey !== 'string') {
      return res.status(400).json({ error: 'apiKey is required' });
    }

    // Validate the key against FiscalLink core before storing anything.
    const probeCtl = AbortSignal.timeout(10000);
    const probe = await fetch(`${CORE_URL}/v1/keys`, {
      headers: { Authorization: `Bearer ${apiKey}` },
      signal: probeCtl,
    });
    console.log(`[connect] core probe status=${probe.status}`);
    if (probe.status === 401 || probe.status === 403) {
      return res.status(400).json({ error: 'FiscalLink API key is invalid or inactive' });
    }

    await setSecret(SECRET_FISCALLINK_KEY, apiKey, accountId);
    if (anafCif) await setSecret(SECRET_ANAF_CIF, String(anafCif), accountId);
    if (anafClientId) await setSecret(SECRET_ANAF_CLIENT_ID, String(anafClientId), accountId);
    if (anafClientSecret) await setSecret(SECRET_ANAF_CLIENT_SECRET, String(anafClientSecret), accountId);

    console.log(`[connect] secrets stored for ${accountId}`);
    res.json({ ok: true });
  } catch (e) {
    console.error(`[connect] failed: ${(e as Error).message}`);
    res.status(e instanceof SignatureError ? 401 : 500).json({ error: (e as Error).message });
  }
});

app.post('/api/disconnect', async (req, res) => {
  try {
    const { accountId } = verifyAppSignature(req);
    for (const name of [
      SECRET_FISCALLINK_KEY, SECRET_ANAF_CIF, SECRET_ANAF_CLIENT_ID, SECRET_ANAF_CLIENT_SECRET,
    ]) {
      // Empty-payload writes are rejected by the Secret Store (parameter_invalid_empty);
      // clearing must go through the delete endpoint (reviewer-caught 2026-09-09).
      await deleteSecret(name, accountId);
    }
    res.json({ ok: true });
  } catch (e) {
    // Signature errors → 401; anything after a valid signature is a backend
    // failure → 500 (a blanket 401 made the reviewer's disconnect look like an
    // auth problem, 2026-09-09).
    res.status(e instanceof SignatureError ? 401 : 500).json({ error: (e as Error).message });
  }
});

/**
 * Verify a delivery to /hooks/app against every configured secret.
 *
 * Two event destinations feed this endpoint — a live one and a test one — each with its own
 * signing secret, but the deployment holds one primary secret. Try the primary first, then
 * the alternate-mode secret, so test-mode installs (Stripe's external-testing flow and the
 * marketplace reviewer, who installs in test mode) keep working after the deployment's
 * primary key flips to live. Only the last error is surfaced so a wrong secret still reads
 * as a signature failure (401/400), not as a server error.
 */
function verifyAppEventSignature(raw: string, sig: string): Stripe.Event {
  const candidates = [STRIPE_WEBHOOK_SECRET, STRIPE_WEBHOOK_SECRET_TEST].filter((s) => s.length > 0);
  if (candidates.length === 0) throw new Error('STRIPE_WEBHOOK_SECRET not configured');
  let lastError: Error = new Error('Signature verification failed');
  for (const secret of candidates) {
    try {
      return stripe.webhooks.constructEvent(raw, sig, secret);
    } catch (e) {
      lastError = e as Error;
    }
  }
  throw lastError;
}

// ── 3. App event receiver (connected accounts) ────────────────────────
// One endpoint, registered in the DEVELOPER's Stripe dashboard with
// "Listen to events on connected accounts". Events carry the merchant's account id
// in the event `account` property. checkout.session.completed → FiscalLink invoice.
app.post('/hooks/app', async (req, res) => {
  try {
    if (!STRIPE_WEBHOOK_SECRET) throw new Error('STRIPE_WEBHOOK_SECRET not configured');
    const sig = (req.headers['stripe-signature'] as string) || '';
    const raw = ((req as express.Request & { rawBody?: Buffer }).rawBody || Buffer.from('')).toString('utf8');
    const event = verifyAppEventSignature(raw, sig);

    const merchantAccountId = (event as Stripe.Event & { account?: string }).account || '';
    if (!merchantAccountId) throw new Error('Event missing account (connected merchant)');

    if (eventDedupe.isDuplicate(event.id)) {
      console.log(`Duplicate delivery of ${event.id} (${event.type}) for ${merchantAccountId} — already handled`);
      return res.json({ received: true, duplicate: true });
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const apiKey = await findSecret(SECRET_FISCALLINK_KEY, merchantAccountId);
      const cif = await findSecret(SECRET_ANAF_CIF, merchantAccountId);
      if (!apiKey) {
        console.error(`checkout.session.completed for ${merchantAccountId}: FiscalLink API key not configured`);
        return res.json({ received: true, skipped: 'no-api-key' });
      }
      // Fetch the session + line items. NOTE (field-verified 2026-09-09): app-scoped
      // OAuth tokens (scope=stripe_apps) CANNOT expand reads — retrieve with
      // expand[]=line_items 403s with more_permissions_required_for_application
      // ("Having the 'read_only' scope would allow this request"). Plain retrieve
      // and the line_items sub-endpoint are both allowed, so list items separately.
      // One token acquisition for both the SDK client and the plain /v1/account read.
      const accessToken = await merchantAccessToken(merchantAccountId);
      const sm = new Stripe(accessToken);
      const [full, lineItemsRes] = await Promise.all([
        sm.checkout.sessions.retrieve(session.id),
        sm.checkout.sessions.listLineItems(session.id, { limit: 100 }),
      ]);
      const issuer = {
        name:
          session.metadata?.merchant_name || (await merchantBusinessName(accessToken)) || 'Stripe merchant',
        vatNumber: cif || undefined,
      };
      const invoice = mapCheckoutToInvoice(full, issuer, lineItemsRes.data);
      const result = await submitInvoiceToFiscalLink(apiKey, invoice);
      if (!result.ok) {
        const detail = JSON.stringify(result.body).slice(0, 500);
        console.error(`FiscalLink submission failed (${result.status}) for ${session.id}:`, detail);
        lastInvoiceError.set(merchantAccountId, {
          status: result.status,
          session: session.id,
          at: new Date().toISOString(),
          detail,
        });
        if (result.status >= 500 || result.status === 429) {
          // Transient upstream failure: clear the dedupe mark and answer non-2xx so
          // Stripe retries this delivery. Acking 200 here loses the invoice silently.
          eventDedupe.forget(event.id);
          return res.status(502).json({ error: 'invoice submission failed upstream', status: result.status });
        }
        // Permanent rejection (schema/validation, e.g. a VAT rule): a retry cannot help.
        // Ack to stop the retry storm, but leave it in /api/status and the logs.
      } else {
        lastInvoiceError.delete(merchantAccountId);
        console.log(`Invoice created for ${merchantAccountId} from ${session.id}`);
      }
    } else if (event.type === 'account.application.deauthorized') {
      // App uninstalled — clear merchant secrets. The account is already deauthorized, so
      // Stripe answers 403 `account_invalid` ("Application access may have been revoked")
      // for its whole Secret Store: that is the expected terminal state, not a failure.
      // Previously this threw, the handler answered 400, and Stripe retried the delivery
      // (seen as a red "failed" event in the reviewer's dashboard, 2026-09-10).
      const failures: string[] = [];
      for (const name of [
        SECRET_FISCALLINK_KEY, SECRET_ANAF_CIF, SECRET_ANAF_CLIENT_ID, SECRET_ANAF_CLIENT_SECRET,
        SECRET_REFRESH_TOKEN, SECRET_ACCOUNT_ID,
      ]) {
        try {
          await deleteSecret(name, merchantAccountId);
        } catch (e) {
          const message = (e as Error).message;
          if (/40[34]/.test(message)) continue; // already gone / no access left — done
          failures.push(`${name}: ${message}`);
        }
      }
      if (failures.length > 0) {
        // Still answer 2xx so Stripe does not retry forever; the account is gone either way.
        console.error(`App deauthorized for ${merchantAccountId}: ${failures.join('; ')}`);
      } else {
        console.log(`App deauthorized for ${merchantAccountId} — secrets cleared`);
      }
    }
    res.json({ received: true });
  } catch (e) {
    console.error('App event error:', (e as Error).message);
    res.status(400).json({ error: (e as Error).message });
  }
});

// ── Install landing page (post_install_action target) ─────────────────
app.get('/installed', (_req, res) => {
  res
    .status(200)
    .type('html')
    .send(
      `<!doctype html><html><body style="font-family:sans-serif;text-align:center;padding:60px">
      <h1>FiscalLink for ANAF — installed ✅</h1>
      <p>Open the FiscalLink app in your Stripe dashboard (top-right Apps icon) to connect
      your FiscalLink API key and ANAF SPV credentials.</p></body></html>`,
    );
});

// ── Marketplace install page (the "Redirect to your website" target) ──
// Before publication Stripe accepts only its full, generated external-test link.
// Keep that URL verbatim rather than trying to reconstruct it from a client ID.
app.get('/install', (_req, res) => {
  const installUrl = process.env.STRIPE_INSTALL_URL || '';
  const clientId = process.env.OAUTH_CLIENT_ID || '';
  const redirectUri = `${APP_URL}/oauth/callback`;
  if (installUrl) {
    return res.redirect(302, installUrl);
  }
  if (!clientId) {
    return res
      .status(200)
      .type('html')
      .send(
        `<!doctype html><html><body style="font-family:sans-serif;text-align:center;padding:60px">
        <h1>FiscalLink for ANAF</h1>
        <p>Installation is not configured yet (STRIPE_INSTALL_URL missing on the server).</p>
        </body></html>`,
      );
  }
  // This fallback works only after Stripe publishes the Marketplace listing.
  const url = `https://marketplace.stripe.com/oauth/v2/authorize?client_id=${encodeURIComponent(
    clientId,
  )}&redirect_uri=${encodeURIComponent(redirectUri)}`;
  res
    .status(200)
    .type('html')
    .send(
      `<!doctype html><html><body style="font-family:sans-serif;text-align:center;padding:60px">
      <h1>FiscalLink for ANAF</h1>
      <p>Turn completed Stripe checkouts into Romanian ANAF e-invoices.</p>
      <p><a href="${url}" style="display:inline-block;background:#533AFD;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:bold">Install from Stripe</a></p>
      <p style="color:#666;font-size:14px">You'll be redirected to Stripe to authorize the installation.</p>
      </body></html>`,
    );
});

app.get('/health', (_req, res) => res.json({ ok: true }));

// Root → marketplace install page (the public domain's landing).
app.get('/', (_req, res) => res.redirect('/install'));

app.listen(PORT, () => {
  console.log(`FiscalLink Stripe App backend listening on :${PORT}`);
});
