import type Stripe from 'stripe';

export interface InvoicePayload {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  currency: string;
  issuer: { name: string; vatNumber?: string };
  buyer: { name: string; vatNumber?: string; email?: string };
  items: { name: string; quantity: number; unitPrice: number; vatRate: number }[];
  totals: { subtotal: number; totalVAT: number; total: number };
}

/** Strip separators and the RO prefix; returns '' unless it is a plausible CIF. */
export function normalizeCif(raw: string | null | undefined): string {
  const digits = String(raw ?? '').replace(/^\s*RO/i, '').replace(/[^0-9]/g, '');
  if (digits.length < 2 || digits.length > 10) return '';
  return `RO${digits}`;
}

/** Official RO CIF checksum: multiplier 753217532 right-to-left, (sum*10)%11, 10→0. */
export function validCif(raw: string | null | undefined): boolean {
  const norm = normalizeCif(raw);
  if (!norm) return false;
  const digits = norm.slice(2);
  const control = Number(digits.slice(-1));
  let rest = Number(digits.slice(0, -1) || '0');
  let v = 753217532;
  let total = 0;
  while (rest > 0) {
    total += (rest % 10) * (v % 10);
    rest = Math.floor(rest / 10);
    v = Math.floor(v / 10);
  }
  let computed = (total * 10) % 11;
  if (computed === 10) computed = 0;
  return control === computed;
}

/**
 * Buyer CIF, in order of trust: the tax id Stripe collected for the checkout,
 * then a merchant-defined checkout custom field labelled CIF/VAT.
 * Consumer checkouts legitimately return undefined.
 */
export function extractBuyerVat(session: Stripe.Checkout.Session): string | undefined {
  const details = session.customer_details as
    | (Stripe.Checkout.Session.CustomerDetails & { tax_ids?: { value?: string | null }[] | null })
    | null;

  for (const id of details?.tax_ids ?? []) {
    if (validCif(id?.value)) return normalizeCif(id?.value);
  }

  // The SDK types `label` as a localised `Label`, not a string — read it defensively.
  const fields = (session.custom_fields ?? []) as unknown as Array<{
    key?: string | null;
    label?: unknown;
    text?: { value?: string | null } | null;
    numeric?: { value?: string | null } | null;
  }>;
  for (const field of fields) {
    const label = `${field.key ?? ''} ${typeof field.label === 'string' ? field.label : ''}`;
    if (!/cif|vat|tva|tax|fiscal/i.test(label)) continue;
    const raw = field.text?.value ?? field.numeric?.value ?? '';
    if (validCif(raw)) return normalizeCif(raw);
  }
  return undefined;
}

export function mapCheckoutToInvoice(
  session: Stripe.Checkout.Session,
  issuer: { name: string; vatNumber?: string },
  apiLineItems?: { description?: string | null; quantity?: number | null; amount_total?: number | null }[],
): InvoicePayload {
  const currency = (session.currency || 'RON').toUpperCase();
  const amountTotal = session.amount_total ?? 0;
  const vatRate = 19;
  const subtotal = Math.round((amountTotal * 100) / (100 + vatRate)) / 100;
  const totalVAT = Math.round((amountTotal - subtotal * 100) / 100 * 100) / 100;

  const rawItems = apiLineItems ?? session.line_items?.data ?? [];
  const lineItems = rawItems.map((li) => ({
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
  const buyerVat = extractBuyerVat(session);

  const ts = Math.floor(Date.now() / 1000);
  const issueDate = new Date().toISOString().slice(0, 10);
  const due = new Date(Date.now() + 15 * 86400_000).toISOString().slice(0, 10);

  return {
    invoiceNumber: `INV-STRIPE-${ts}`,
    issueDate,
    dueDate: due,
    currency,
    issuer,
    buyer: {
      name: buyerName,
      ...(buyerEmail ? { email: buyerEmail } : {}),
      ...(buyerVat ? { vatNumber: buyerVat } : {}),
    },
    items: lineItems,
    totals: {
      subtotal: Math.round(subtotal * 100) / 100,
      totalVAT: Math.round(totalVAT * 100) / 100,
      total: amountTotal / 100,
    },
  };
}
