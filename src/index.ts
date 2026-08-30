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
// Signing secret of the dashboard-registered webhook endpoint (Developers → Webhooks →
// "Listen to events on connected accounts"). Stripe signs app events with it.
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';

// ── Secret Store names (account-scoped) ──────────────────────────────
const SECRET_REFRESH_TOKEN = 'fiscallink_stripe_refresh_token';
const SECRET_ACCOUNT_ID = 'fiscallink_stripe_account_id';
const SECRET_FISCALLINK_KEY = 'fiscallink_api_key';
const SECRET_ANAF_CIF = 'fiscallink_anaf_cif';
const SECRET_ANAF_CLIENT_ID = 'fiscallink_anaf_client_id';
const SECRET_ANAF_CLIENT_SECRET = 'fiscallink_anaf_client_secret';

const app = express();
app.use(cors());
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
async function setSecret(name: string, payload: string, accountId?: string) {
  const form = new URLSearchParams();
  form.set('name', name);
  form.set('payload', payload);
  form.set('scope[type]', 'account');
  const headers: Record<string, string> = {
    Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
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

async function findSecret(name: string, accountId?: string): Promise<string | null> {
  const headers: Record<string, string> = { Authorization: `Bearer ${STRIPE_SECRET_KEY}` };
  if (accountId) headers['Stripe-Account'] = accountId;
  const res = await fetch(
    `https://api.stripe.com/v1/apps/secrets/find?name=${encodeURIComponent(name)}&scope[type]=account`,
    { headers },
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Secret Store find failed: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as { payload?: string };
  return data.payload ?? null;
}

// ── Signature verification for UI-extension → backend calls ───────────
// The UI signs every request with fetchStripeSignature() using the app secret.
function verifyAppSignature(req: express.Request): { accountId: string; userId: string } {
  const sig = (req.headers['stripe-signature'] as string) || '';
  if (!sig) throw new Error('Missing Stripe-Signature header');
  const raw = ((req as express.Request & { rawBody?: Buffer }).rawBody || Buffer.from('')).toString('utf8');
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, STRIPE_APP_SECRET);
  } catch (e) {
    throw new Error(`Signature verification failed: ${(e as Error).message}`);
  }
  // App requests carry account/user context in the event data.
  const data = event.data?.object as { account_id?: string; user_id?: string };
  if (!data?.account_id) throw new Error('Missing account_id in signed request');
  return { accountId: data.account_id, userId: data.user_id || '' };
}

// ── OAuth helpers ─────────────────────────────────────────────────────
async function exchangeCode(code: string) {
  const form = new URLSearchParams();
  form.set('code', code);
  form.set('grant_type', 'authorization_code');
  const res = await fetch('https://api.stripe.com/v1/oauth/token', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: form,
  });
  if (!res.ok) throw new Error(`OAuth token exchange failed: ${res.status} ${await res.text()}`);
  return res.json() as Promise<{
    access_token: string;
    refresh_token: string;
    stripe_user_id: string;
    livemode: boolean;
  }>;
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

// Merchant-scoped Stripe API client (via the account's OAuth access token).
async function merchantStripe(accountId: string): Promise<Stripe> {
  const refreshToken = await findSecret(SECRET_REFRESH_TOKEN, accountId);
  if (!refreshToken) throw new Error('Not installed: missing OAuth refresh token');
  const { access_token, refresh_token } = await refreshAccessToken(refreshToken);
  // Rotate the refresh token (Stripe rotates on every exchange).
  await setSecret(SECRET_REFRESH_TOKEN, refresh_token, accountId);
  return new Stripe(access_token);
}

// ── FiscalLink core helpers ───────────────────────────────────────────
interface InvoicePayload {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  currency: string;
  issuer: { name: string; vatNumber?: string };
  buyer: { name: string; vatNumber?: string; email?: string };
  items: { name: string; quantity: number; unitPrice: number; vatRate: number }[];
  totals: { subtotal: number; totalVAT: number; total: number };
}

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

function mapCheckoutToInvoice(
  session: Stripe.Checkout.Session,
  issuer: { name: string; vatNumber?: string },
): InvoicePayload {
  const currency = (session.currency || 'RON').toUpperCase();
  const amountTotal = session.amount_total ?? 0;
  // Romanian standard VAT rate for goods/services (19%) as the default split;
  // merchants should keep line items priced ex-VAT for an exact split.
  const vatRate = 19;
  const subtotal = Math.round((amountTotal * 100) / (100 + vatRate)) / 100;
  const totalVAT = Math.round((amountTotal - subtotal * 100) / 100 * 100) / 100;

  const lineItems = (session.line_items?.data ?? []).map((li) => ({
    name: li.description || 'Stripe checkout item',
    quantity: li.quantity ?? 1,
    unitPrice: (li.amount_total ?? 0) / 100 / (li.quantity ?? 1),
    vatRate,
  }));
  if (lineItems.length === 0) {
    lineItems.push({ name: 'Stripe checkout', quantity: 1, unitPrice: subtotal, vatRate });
  }

  const customer = session.customer_details;
  const buyerName = customer?.name || customer?.email || 'Stripe customer';
  const buyerEmail = customer?.email;
  // B2B buyers can supply a VAT number; consumer (B2C) checkouts leave it blank —
  // the core schema accepts it either way.

  const ts = Math.floor(Date.now() / 1000);
  const invoiceNumber = `INV-STRIPE-${ts}`;
  const issueDate = new Date().toISOString().slice(0, 10);
  const due = new Date(Date.now() + 15 * 86400_000).toISOString().slice(0, 10);

  return {
    invoiceNumber,
    issueDate,
    dueDate: due,
    currency,
    issuer,
    buyer: {
      name: buyerName,
      ...(buyerEmail ? { email: buyerEmail } : {}),
    },
    items: lineItems,
    totals: {
      subtotal: Math.round(subtotal * 100) / 100,
      totalVAT: Math.round(totalVAT * 100) / 100,
      total: amountTotal / 100,
    },
  };
}

// ── 1. OAuth install flow ─────────────────────────────────────────────
app.get('/oauth/callback', async (req, res) => {
  try {
    const code = req.query.code as string;
    const state = req.query.state as string;
    if (!code) throw new Error('Missing authorization code');
    const tokens = await exchangeCode(code);
    // Persist refresh token + account id in the Secret Store (account scope).
    await setSecret(SECRET_REFRESH_TOKEN, tokens.refresh_token, tokens.stripe_user_id);
    await setSecret(SECRET_ACCOUNT_ID, tokens.stripe_user_id, tokens.stripe_user_id);
    // state may carry a return path — default to the installed landing page.
    const redirect = state && state.startsWith('/') ? state : '/installed?account=' + tokens.stripe_user_id;
    res.redirect(`${APP_URL}${redirect}`);
  } catch (e) {
    res.status(400).send(`Installation failed: ${(e as Error).message}`);
  }
});

// ── 2. UI extension API (signed) ──────────────────────────────────────
app.get('/api/status', async (req, res) => {
  try {
    const { accountId } = verifyAppSignature(req);
    const [fiscalLinkKey, cif] = await Promise.all([
      findSecret(SECRET_FISCALLINK_KEY, accountId),
      findSecret(SECRET_ANAF_CIF, accountId),
    ]);
    res.json({
      installed: true,
      fiscalLinkConnected: Boolean(fiscalLinkKey),
      anafConfigured: Boolean(cif),
      // The checkout webhook is a single developer-configured endpoint (monitors
      // connected accounts) — always on once the app is installed.
      webhookEnabled: true,
    });
  } catch (e) {
    res.status(401).json({ error: (e as Error).message });
  }
});

app.post('/api/connect', async (req, res) => {
  try {
    const { accountId } = verifyAppSignature(req);
    const { apiKey, anafCif, anafClientId, anafClientSecret } = req.body ?? {};

    if (!apiKey || typeof apiKey !== 'string') {
      return res.status(400).json({ error: 'apiKey is required' });
    }

    // Validate the key against FiscalLink core before storing anything.
    const probe = await fetch(`${CORE_URL}/v1/keys`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    if (probe.status === 401 || probe.status === 403) {
      return res.status(400).json({ error: 'FiscalLink API key is invalid or inactive' });
    }

    await setSecret(SECRET_FISCALLINK_KEY, apiKey, accountId);
    if (anafCif) await setSecret(SECRET_ANAF_CIF, String(anafCif), accountId);
    if (anafClientId) await setSecret(SECRET_ANAF_CLIENT_ID, String(anafClientId), accountId);
    if (anafClientSecret) await setSecret(SECRET_ANAF_CLIENT_SECRET, String(anafClientSecret), accountId);

    res.json({ ok: true });
  } catch (e) {
    res.status(401).json({ error: (e as Error).message });
  }
});

app.post('/api/disconnect', async (req, res) => {
  try {
    const { accountId } = verifyAppSignature(req);
    for (const name of [
      SECRET_FISCALLINK_KEY, SECRET_ANAF_CIF, SECRET_ANAF_CLIENT_ID, SECRET_ANAF_CLIENT_SECRET,
    ]) {
      await setSecret(name, '', accountId); // empty payload effectively clears it
    }
    res.json({ ok: true });
  } catch (e) {
    res.status(401).json({ error: (e as Error).message });
  }
});

// ── 3. App event receiver (connected accounts) ────────────────────────
// One endpoint, registered in the DEVELOPER's Stripe dashboard with
// "Listen to events on connected accounts". Events carry the merchant's account id
// in the event `account` property. checkout.session.completed → FiscalLink invoice.
app.post('/hooks/app', async (req, res) => {
  try {
    if (!STRIPE_WEBHOOK_SECRET) throw new Error('STRIPE_WEBHOOK_SECRET not configured');
    const sig = (req.headers['stripe-signature'] as string) || '';
    const raw = ((req as express.Request & { rawBody?: Buffer }).rawBody || Buffer.from('')).toString('utf8');
    const event = stripe.webhooks.constructEvent(raw, sig, STRIPE_WEBHOOK_SECRET);

    const merchantAccountId = (event as Stripe.Event & { account?: string }).account || '';
    if (!merchantAccountId) throw new Error('Event missing account (connected merchant)');

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const apiKey = await findSecret(SECRET_FISCALLINK_KEY, merchantAccountId);
      const cif = await findSecret(SECRET_ANAF_CIF, merchantAccountId);
      if (!apiKey) {
        console.error(`checkout.session.completed for ${merchantAccountId}: FiscalLink API key not configured`);
        return res.json({ received: true, skipped: 'no-api-key' });
      }
      // Fetch the session expanded (webhook events are not expanded).
      const sm = await merchantStripe(merchantAccountId);
      const full = await sm.checkout.sessions.retrieve(session.id, {
        expand: ['line_items', 'customer'],
      });
      const issuer = {
        name: session.metadata?.merchant_name || 'Stripe merchant',
        vatNumber: cif || undefined,
      };
      const invoice = mapCheckoutToInvoice(full, issuer);
      const result = await submitInvoiceToFiscalLink(apiKey, invoice);
      if (!result.ok) {
        console.error(`FiscalLink submission failed (${result.status}) for ${session.id}:`,
          JSON.stringify(result.body).slice(0, 300));
      }
    } else if (event.type === 'account.application.deauthorized') {
      // App uninstalled — clear merchant secrets.
      for (const name of [
        SECRET_FISCALLINK_KEY, SECRET_ANAF_CIF, SECRET_ANAF_CLIENT_ID, SECRET_ANAF_CLIENT_SECRET,
        SECRET_REFRESH_TOKEN, SECRET_ACCOUNT_ID,
      ]) {
        await setSecret(name, '', merchantAccountId);
      }
      console.log(`App deauthorized for ${merchantAccountId} — secrets cleared`);
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

app.get('/health', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`FiscalLink Stripe App backend listening on :${PORT}`);
});
