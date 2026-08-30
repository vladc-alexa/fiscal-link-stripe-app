# FiscalLink for ANAF — Stripe App

Packages the FiscalLink **Stripe webhook listener** as a distributed Stripe App
(strategy task #9): a merchant installs it from the Stripe dashboard, connects their
FiscalLink API key + ANAF SPV credentials (stored in the **Stripe Apps Secret Store API**,
never in local storage or on our servers), and every completed checkout automatically
becomes a Romanian ANAF e-invoice (EN 16931 / CIUS-RO UBL) submitted to the SPV.

```
Stripe checkout.session.completed
        │  (ONE developer-configured webhook endpoint, "listen to connected accounts")
        ▼
App backend  /hooks/app  (this repo, self-hosted)
        │  verifies signature (endpoint secret) · identifies merchant via event.account
        ▼
FiscalLink core  POST /v1/invoices  (merchant's FiscalLink API key from Secret Store)
        │  UBL generation + ANAF submission + answer polling + quota/metering
        ▼
ANAF SPV
```

**Event delivery model:** public Stripe Apps don't create webhooks on merchant accounts
(`webhook_write` is disallowed). Instead the developer registers ONE webhook endpoint in
their own dashboard with **"Listen to events on connected accounts"**; every event carries
the merchant's account id, which the backend uses to scope the Secret Store lookup.

## Structure

| Path | Purpose |
|---|---|
| `stripe-app.json` | v1/v2 app manifest — public distribution, OAuth 2.0, drawer view |
| `src/index.ts` | Express backend: OAuth callback, signed UI API, app event receiver, Secret Store access |
| `src/views/Setup.tsx` | Dashboard drawer view (loading / error / empty / connected states) |
| `src/helpers/backend.ts` | Signed fetch helper (`fetchStripeSignature`) for UI → backend calls |
| `icons/fiscallink_icon_32.png` | 300×300 app icon |

## Backend endpoints

| Route | Auth | Purpose |
|---|---|---|
| `GET /oauth/callback` | OAuth code | Exchange code → refresh token; store in Secret Store (account scope) |
| `GET /api/status` | app signature | Connection state: OAuth / FiscalLink key / ANAF creds |
| `POST /api/connect` | app signature | Validate + store FiscalLink API key + ANAF SPV creds (Secret Store) |
| `POST /api/disconnect` | app signature | Remove secrets |
| `POST /hooks/app` | webhook secret | checkout.session.completed → FiscalLink invoice + ANAF submission; account.application.deauthorized → cleanup |

No merchant secrets touch disk or the app's own DB — everything goes through
`POST /v1/apps/secrets` / `GET /v1/apps/secrets/find` (account scope).

## Local development

```bash
npm install
cp .env.example .env        # fill STRIPE_APP_SECRET + STRIPE_SECRET_KEY
npm run dev                 # backend on :3001

# UI extension preview (Stripe CLI):
#   stripe apps start --manifest stripe-app.json
```

Requirements: [Stripe CLI](https://docs.stripe.com/stripe-apps/how-to-use-stripe-cli) with
Apps enabled, a Stripe test-mode developer key, and `stripe apps upload` run once (it
generates the **App secret** used by `fetchStripeSignature` and backend verification).

## Deploy (Coolify on the VPS)

1. Push this repo to GitHub (`fiscal-link-stripe-app`).
2. Coolify → New application → this repo. Build `npm ci && npm run build`, start `npm start`.
3. Env: `STRIPE_APP_SECRET`, `STRIPE_SECRET_KEY` (test or live developer key),
   `APP_URL=https://stripe-app.autoanaf.ro`, `FISCALLINK_CORE_URL=https://core.autoanaf.ro`.
4. Point the domain `stripe-app.autoanaf.ro` at the app (HTTPS). Add
   `DNS A/AAAA`/`CNAME` as for the other apps.
5. `stripe apps upload` → **External test** → install the app on a test account and verify
   the whole flow (test-mode keys throughout; the invoice lands in FiscalLink with a
   test tenant, ANAF test SPV submission).

## Marketplace submission (#10 checklist)

1. `stripe apps submit` from the CLI.
2. Provide: tagline (≤60 chars), description, category, support email/URL, privacy URL,
   screenshots of the settings view (all four states).
3. Public install URL must be a page with the OAuth install link:
   `https://marketplace.stripe.com/oauth/v2/authorize?client_id=<clientId>&redirect_uri=<callback>&state=<token>`
   (live-mode link from the app's **Settings** tab).
4. Name restrictions: no "Stripe", "App", "free"/"paid" in the display name
   ("FiscalLink for ANAF" is fine).
5. Review notes: the app only reads checkout sessions + writes one webhook endpoint;
   credentials live in Stripe's own Secret Store.

## Known follow-ups (open items)

- [ ] Verify `Stripe-Account` header scoping of Secret Store calls during external test.
- [ ] Decide whether `checkout.session.expired` should also trigger anything (currently no-op).
- [ ] Buyer VAT capture: B2B customers can supply a VAT number via checkout custom fields;
      mapping to `buyer.vatNumber` is a follow-up (currently blank for consumers).
- [ ] `app.installed` handler: optionally pre-provision the webhook endpoint (currently done
      on first "Enable" click).
