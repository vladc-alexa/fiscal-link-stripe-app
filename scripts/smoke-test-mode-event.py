"""Post a signed test-mode Stripe app event to a locally running app backend.

Proves the mode routing: with STRIPE_SECRET_KEY set to a live key and
STRIPE_SECRET_KEY_TEST to a test key, a test-mode event must be served with the
TEST key — visible in the log as `[secrets] ... read with the test key failed`
(the fake key is rejected by Stripe) instead of the 400 "a live mode key was
used to make this request" that blocked the review.
"""
import hashlib
import hmac
import json
import sys
import time
import urllib.request

PORT = int(__import__("os").environ.get("PORT", "3311"))
SECRET = 'whsec_local_smoke_secret'


def main() -> int:
    event = {
        'id': 'evt_smoke_test_mode',
        'object': 'event',
        'type': 'checkout.session.completed',
        'account': 'acct_smoke000000000000000',
        'livemode': False,
        'data': {
            'object': {
                'id': 'cs_test_smoke123',
                'object': 'checkout.session',
                'payment_status': 'paid',
                'currency': 'ron',
                'amount_total': 1000,
                'metadata': {},
            }
        },
    }
    raw = json.dumps(event).encode()
    ts = str(int(time.time()))
    sig = hmac.new(SECRET.encode(), f'{ts}.'.encode() + raw, hashlib.sha256).hexdigest()
    req = urllib.request.Request(
        f'http://127.0.0.1:{PORT}/hooks/app',
        data=raw,
        headers={'Content-Type': 'application/json', 'Stripe-Signature': f't={ts},v1={sig}'},
    )
    started = time.time()
    try:
        with urllib.request.urlopen(req, timeout=120) as res:
            print('HTTP', res.status, res.read().decode()[:400])
    except Exception as exc:  # noqa: BLE001
        print('POST failed:', exc)
    print(f'elapsed {time.time() - started:.1f}s')
    return 0


if __name__ == '__main__':
    sys.exit(main())
