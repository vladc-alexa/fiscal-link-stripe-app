/**
 * Signed fetch helper for the UI extension → app backend.
 * Every request is signed with the app secret via fetchStripeSignature() and
 * carries account_id/user_id so the backend can verify and scope it.
 */
import { fetchStripeSignature } from '@stripe/ui-extension-sdk/utils';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';

const API_BASE =
  (typeof window !== 'undefined' && (window as { __FL_APP_API_BASE__?: string }).__FL_APP_API_BASE__) ||
  'https://stripe-app.autoanaf.ro';

type UserContext = ExtensionContextValue['userContext'];

export async function signedRequest<T = unknown>(
  path: string,
  userContext: UserContext,
  body?: Record<string, unknown>,
): Promise<T> {
  // App-embedded signatures cover exactly {user_id, account_id} — always include
  // BOTH (field order matters) and always POST, so the backend has a body to verify.
  const signaturePayload = {
    user_id: userContext.id,
    account_id: userContext.account.id,
  };
  const signature = await fetchStripeSignature();
  const payload = { ...signaturePayload, ...(body ?? {}) };
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Stripe-Signature': signature,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(err.error || `Request failed (${res.status})`);
  }
  return res.json() as Promise<T>;
}
