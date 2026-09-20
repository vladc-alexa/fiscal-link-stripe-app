# Live end-to-end test on a second (non-publishing) Stripe account

Status: **run 2026-09-18 — see "Result" at the end.** Receiver side verified clean 2026-09-16 (see
"Preconditions"); the live run on account #2 produced a real Connect delivery, an invoice in core and an
**accepted** ANAF filing.
Decision (Vlad, 2026-09-16): create a fresh Stripe account rather than use a friendly merchant.

## Why a second account at all

Stripe App Review (mail 2026-09-16 04:53): Connect webhook delivery is **never sent to the
publishing account**. So the publishing account (`acct_1TAmizLTiCaSkyGU`) can install + configure
the app but can never produce the one piece of evidence that matters: a live
`checkout.session.completed` arriving at `/hooks/app`. A second **activated live** account is the
only way to trigger it.

## Preconditions (all verified 2026-09-16)

| item | value | verdict |
|---|---|---|
| live app destination | `we_1UFZgLLTiCaSkyGU59lEkCIq` → `https://stripe-app.autoanaf.ro/hooks/app` | `events_from=['other_accounts']`, enabled, bound to live client `ca_VARxkgiNIUaauzddBnMiCoaIrkfkGnqS` ✅ |
| core billing destination | `we_1U9oJ4LTiCaSkyGUM3RKdIuc` → `core.autoanaf.ro/v1/webhooks/stripe` | `events_from=['self']` — correct for the platform's own billing, leave alone |
| live install link | `https://stripe-app.autoanaf.ro/install` | 302 → marketplace oauth with the **live** `ca_…`, no test-mode banner ✅ |
| publishing account | `acct_1TAmizLTiCaSkyGU` (RO, charges+payouts enabled) | ready |

## Account creation recipe (minimal blast radius)

Creating it is Vlad's step (identity/KYC).

**Pitfall hit 2026-09-18: the account country is chosen at creation and is immutable.** Stripe: *"You can't
change the country of a Stripe account, including connected accounts... If you need to change the country, you must
create a new Stripe account"* (support.stripe.com/questions/stripe-account-country-can-t-be-changed-after-activation).
Creating the account while in Vienna defaults the country to **Austria**, and the country select in the onboarding
address block then renders greyed-out — that is the account country, not a form glitch. An AT account cannot carry
the RO entity: the business address, the CUI and the (RO) payout IBAN all contradict it, and activation would want
an Austrian business or an Austrian individual with an Austrian tax ID.
So: **set Country = Romania on the first step of the new-account flow** (Dashboard → account name (top-left) →
*New account* — Stripe's documented way to add an account on the same email). If no country choice is offered there,
register fresh from a different email (autoanaf.ro has no catch-all — only contact@ receives mail). Leave the
Austrian draft unactivated and inert; never put a live charge on it (one livemode charge locks the country too).

**Using the SRL's own CUI + IBAN + phone is allowed — settled 2026-09-18.** Stripe's article *Create and manage
multiple Stripe accounts* (support.stripe.com/questions/create-and-manage-multiple-stripe-accounts, read
2026-09-18) states: *"If your projects or businesses operate under the same legal entity, you can use the same tax
ID and business information across multiple accounts. Provide suitable public business information to avoid
customer confusion."* The prohibited pattern is duplicate accounts opened to evade limits, reviews or fees — not a
second account for the same entity used for a documented validation that App Review itself recommended. The earlier
rule 1 here (different entity / sole-trader route) was stricter than Stripe's policy and is superseded.

Rules that still matter:

1. **Zero publishing activity from account #2.** It only installs from the public listing. Publishing/uploading is
   what attracts a listing review; installing does not.
2. **Distinct public business info** — own email address plus a non-confusing account name / statement descriptor
   (that is literally what Stripe asks for). Suggested descriptor: `FISCLINK TEST`.
3. **Accept the link.** Two accounts for one legal entity are related by design; that is the sanctioned setup and
   App Review already knows the account is ours. The one real cost is *shared* risk: a dispute, Radar flag or
   restricted-activity signal on #2 lands on the same entity record that carries the published listing and the
   platform's own billing destination (`we_1U9oJ4…`, events_from=self). Mitigation is scope — one 1 RON payment,
   refunded, nothing else.
4. Optionally use a Stripe **Organization** instead of two standalone accounts: Stripe's first-class way to run
   multiple accounts for one business with centralized reporting (same article, "Manage multiple accounts for one
   business"). A shared dashboard login is normal either way — Stripe's own flow creates extra accounts from the
   account switcher.

**Consequence of using the SRL's identity: the ANAF tail runs for real.** Step 2 below notes that the drawer CIF
decides whether submission happens, and only RO54346276 (= the SRL's own CIF) has live ANAF credentials in core.
With account #2 being the same entity the natural CIF *is* RO54346276, so the 1 RON test invoice is issued by
FISCAL LINK S.R.L. and **really submitted to ANAF as an e-Factura**. That is the strongest evidence available (full
tail proven) and the books stay consistent — payment account and invoice issuer are the same entity — but a real
filing needs Vlad's explicit approval naming the amount. For an inert run, point the drawer at a CIF with no live
creds: everything up to invoice creation is proven, submission fails by design.

Signup: Dashboard → account switcher → **New account**, or https://dashboard.stripe.com/register → activate
payments (business details, IBAN, phone). Must be activated for live-mode events before the test can run; a new
account inherits no statuses or pricing from the publishing account.

## Test procedure (≈10 min once the account is activated)

1. Log into account #2 → **Live** mode → open `https://stripe-app.autoanaf.ro/install` → authorize.
   Expect backend log: `[oauth] code exchanged → account acct_… (livemode=true)`.
2. Drawer → paste the FiscalLink API key + CIF → Connect.
   Expect: `[connect] core probe status=200` → `[connect] secrets stored for acct_…`.
   **CIF choice decides whether the ANAF tail runs**: only RO54346276 has live ANAF creds in core,
   so any other CIF proves everything up to invoice creation and then fails submission (by design).
3. Create a **Payment Link for 1 RON** on account #2, pay it with a real card.
4. Verify, in order:
   - `docker logs <w0w8cgs…> | grep 'POST /hooks/app'` → one hit, `livemode:true`, `event.account = acct_<#2>`
   - core logs: invoice created for the tenant
   - Stripe dashboard on account #2: destination delivery = **Succeeded** (not the silent-drop state)
   - duplicate delivery of the same `event.id` is acked (`{"received":true,"duplicate":true}`)
5. Refund the payment, then remove the install (`account.application.deauthorized` → expect 200,
   secrets cleared).

## Honest scope to report afterwards

- **Proven**: live OAuth install, live Connect delivery + signature verification + dedupe, invoice
  creation in core.
- **Not proven by this test**: the ANAF submission tail, unless the drawer CIF has live creds
  (RO54346276) *and* Vlad explicitly approves the real filing amount — a real e-Factura is a real
  filing, never fire one as a side effect of a webhook test.
- **Still unproven for real merchants** until the first actual merchant installs: nothing changes
  about the merchant onboarding gap (API key minted in the SaaS dashboard by hand).

---

## Result — executed 2026-09-18 on account #2

Status line above is superseded: the test **ran**. Account `acct_1UGwFmPuUWLnKzDp` (`dalimagics@gmail.com`,
RO, activated, `charges_enabled`) against publishing account `acct_1TAmizLTiCaSkyGU`.

### What happened (everything below in UTC)

- **7 × 2.00 RON** one-time payment-link payments, 08:44 → 11:15 — `mode=payment`, `currency=ron`, all
  `complete`/`paid`. Not the single 1 RON of the procedure; the early attempts predate the app being
  reachable, so only the last one is in a surviving log.
- The app received `checkout.session.completed` and created **6 invoices** in core (tenant
  `contact@autoanaf.ro`), every one issued by **Fiscal Link SRL / `RO54346276`** — a real e-Factura tail,
  under the SRL's own live ANAF credentials:

  | invoice | created | verdict |
  |---|---|---|
  | `INV-STRIPE-1789721781` | 08:56:21 | rejected |
  | `INV-STRIPE-1789722119` | 09:01:59 | rejected |
  | `INV-STRIPE-1789723030` | 09:17:10 | rejected |
  | `INV-STRIPE-1789724060` | 09:34:21 | rejected |
  | `INV-STRIPE-1789726501` | 10:15:02 | rejected |
  | `INV-STRIPE-1789730266` | **11:17:47** | **accepted** |

### Why five were rejected — analysed and fixed the same day

The first four payloads carried `buyer.address: null`: Checkout collected a **country only** (billing
address collection off), so ANAF refused the whole document — `[BR-10]` buyer postal address,
`[BR-RO-080]` buyer address line 1, `[BR-RO-090]` buyer city, *"nu a fost identificat cui cumparator"* —
which also left a rejection on the merchant's SPV record and burnt a quota slot.

Fixed in `fiscal-link-stripe-app` on 2026-09-18:

| MR | commit | fix |
|---|---|---|
| #11 | `019955a` | send both party addresses; refuse to file without the **issuer** address |
| #12 | `2733a45` | resolve the buyer address (billing → `shipping_details` fallback); **refuse to file** when neither is usable — the handler now acks and records `skipped: buyer-address-missing` instead of knowingly filing an invalid document |
| #13 | `fe53be3` | use the buyer's business name for BT-44 when Checkout collected one |
| #9/#10 | `dbf3f4a`, `0d928b1` | VAT derived from the payment; line-level `vatAmount`/`totalAmount`; never ack a silent failure |

plus core **#89** (`55d8cfa`) — send BT-47 for a private buyer so B2C invoices stop bouncing.

The **11:17:47 accepted filing is the fixed build's first live pass**: the running container image is
`f8e17ef` (= MR #13) and the app version is **0.1.5**; the five rejections (08:56 → 10:15) all predate
the fix. The log sequence is the fix working, not evidence of an outstanding bug.

### Proof gathered

- app log: `POST /hooks/app 200` at `2026-09-18T11:17:47` with
  `ua="Stripe/1.0 (+https://stripe.com/docs/webhooks)"`, immediately after
  `Invoice created for acct_1UGwFmPuUWLnKzDp from cs_live_a1XjWo7GELRZUq9I3rTF5kXr4f6wZjh7ZZcZNF191KUvUKfOyb2JDx9L1k`
  → a genuine Connect delivery to `/hooks/app`, signature verified, 200.
- core: 6 `Invoice` rows for the tenant, the last **accepted** — real e-Factura, 2 RON, issuer
  `RO54346276`, buyer address complete (`Piatra Neamt`, `Str Plevnei br 3 G10`, `610066`).
- **Caveat on the log evidence:** the container was replaced at 11:17 (current image `f8e17ef`), so
  `docker logs` retains only that single POST. The earlier invoices are the delivery evidence for the
  earlier events.
- Note on the precondition table above: the v2 API now reports the app destination's scope as
  `events_from=["@accounts"]` (Connected accounts) — `other_accounts` is the older spelling of the same
  value. Re-verified 2026-09-20.

### Not proven / not done

- Only one delivery survives in the log, so the **duplicate-ack** path
  (`{"received":true,"duplicate":true}`) was not observed live.
- **The install was never removed.** `account.application.deauthorized` and secret clearing (step 5) are
  still untested; the app is still installed on account #2.
- **No refund exists on account #2** — `/v1/refunds` on that account lists 0. The refund on record is
  unrelated: 2026-09-20, 19.00 EUR on the **platform** account, subscription
  `sub_1UHf55LTiCaSkyGU57ir4CSE` (created 09:22:35, canceled 09:26:39 CEST) reversed as
  `re_3UHf55LTiCaSkyGU12jZmm5O` under customer `e2e-smoke-1787830822@autoanaf.ro`. Account #2's 2 RON
  payments are all still captured.
- Still true for real merchants: nothing here closes the onboarding gap (API key minted by hand in the
  SaaS dashboard).
