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
  const signaturePayload = {
    account_id: userContext.account.id,
    // Omit user_id when it matches the account id (signed payload rule).
    user_id: userContext.account.id === userContext.id ? undefined : userContext.id,
  };
  const signature = await fetchStripeSignature();
  const payload = { ...signaturePayload, ...(body ?? {}) };
  const res = await fetch(`${API_BASE}${path}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Stripe-Signature': signature,
    },
    body: body ? JSON.stringify(payload) : undefined,
  });
  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(err.error || `Request failed (${res.status})`);
  }
  return res.json() as Promise<T>;
}
