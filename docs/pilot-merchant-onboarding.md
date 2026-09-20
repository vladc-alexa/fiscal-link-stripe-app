# Pilot merchant onboarding — the live proof we need

Purpose: get one **real** merchant onto the published listing so the live Connect path
(`checkout.session.completed` → `https://stripe-app.autoanaf.ro/hooks/app` → invoice in core)
is exercised by a genuine installation. This is the route Stripe's App Review named as the
supported fallback when the developer holds no second activated account, so it is on the
critical path to declaring 0.1.x launch-verified — not a consolation prize.

## Division of labour

**We do (Vlad / Hermes) — before the merchant touches anything**

1. Create the merchant's FiscalLink account at `https://fiscal-link.autoanaf.ro` (or let them
   self-register — but pre-creating removes signup friction from a favour we are asking for).
2. Mint an `fl_…` API key in that account **and hand it to them in the same message as the
   install link** so the app is the short part of their day. The `fl_…` key is the only secret
   the drawer needs; the ANAF certificate authorization stays theirs (never ask for it).
3. Confirm the appraisal the app will do: `POST /v1/keys` on core must answer 200 for that key
   before we invite them, so a failed pilot is never an onboarding bug on our side.
4. Arm evidence capture for the window: `Stripe app live-traffic watchdog` (every 10m,
   job `5dcd40fe9961`) already alerts on real `POST /hooks/app` traffic — no setup needed.

**Merchant does — ~10 minutes, once**

1. Open `https://stripe-app.autoanaf.ro/install` **in Live mode** on their Stripe account and
   authorize. (Their account must have payments activated; a test-mode account installs a
   test-mode app and proves nothing.)
2. In the app drawer: paste the `fl_…` key, enter their **CIF** (their seller identity — this is
   the CIF that files to ANAF, so it must be the one authorized in their FiscalLink account),
   press Connect. Expect `core probe status=200` in the backend log.
3. Make one small real sale or a 1 RON test payment with their own card, then refund it
   (Stripe keeps a small non-refundable processing fee — mention it up front, don't let it be a
   surprise on a favour).

## Evidence to collect in that window

- backend log line for the delivery: `POST /hooks/app` with `livemode:true` and
  `event.account` = their `acct_…` (not ours) — the one thing our own account can never produce
- Stripe dashboard, their account → the app's destination delivery = **Succeeded**
- core: invoice created for that tenant, plus the ANAF submission result for their CIF
- a duplicated `event.id` acked as `{"received":true,"duplicate":true}`, if we can replay one
- after the pilot: `account.application.deauthorized` → 200, secrets cleared (uninstall is clean)

## Script for the ask (short, no hype)

> Bună [nume], am publicat integrarea FiscalLink pentru Stripe pe marketplace-ul lor. Îmi trebuie
> o singură instalare reală, ca să pot dovedi că fluxul live funcționează cap-coadă înainte să-l
> dau altor clienți. Durează ~10 minute: autorizezi aplicația în Stripe, lipești cheia de API pe
> care ți-o trimit eu mai jos și validezi cu un CIF-ul firmei tale. Faci o plată de 1 RON (o
> returnez imediat; Stripe reține doar comisionul de procesare). Îți arăt exact ce iese în logs,
> ca să vezi și tu că factura ajunge la ANAF.

## Do not

- Do not ask the merchant for their ANAF certificate or their Stripe secret key.
- Do not run this pilot on FISCAL LINK's own CIF and call it a merchant pilot — that is the same
  publishing-account blind spot, just with extra steps.
- Do not promise features that are not shipped/verified. As of 2026-09-20 the backend runs `f8e17ef`
  and the app is **0.1.5**: buyer CIF + address capture and the ANAF guards (MRs #9–#13, core #89) are
  deployed and live — see `live-second-account-test.md`, "Result".
