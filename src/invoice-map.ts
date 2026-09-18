import type Stripe from 'stripe';

export interface InvoicePayload {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  currency: string;
  issuer: { name: string; vatNumber?: string };
  buyer: { name: string; vatNumber?: string; email?: string };
  items: {
    name: string;
    quantity: number;
    unitPrice: number;
    vatRate: number;
    vatAmount: number;
    totalAmount: number;
  }[];
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
  apiLineItems?: {
    description?: string | null;
    quantity?: number | null;
    amount_subtotal?: number | null;
    amount_total?: number | null;
  }[],
): InvoicePayload {
  const currency = (session.currency || 'RON').toUpperCase();
  const totalCents = session.amount_total ?? 0;
  const taxCents = Math.max(0, session.total_details?.amount_tax ?? 0);
  const netCents = Math.max(0, totalCents - taxCents);

  // VAT comes from what the merchant actually charged — never from a constant.
  // No tax charged => 0%: a supplier that is not registered for VAT may not
  // mention VAT, and core rejects such a document outright.
  // (Live failure 2026-09-18: a hardcoded 19% made every invoice invalid.)
  const vatRate = taxCents > 0 && netCents > 0 ? Math.round((taxCents / netCents) * 100) : 0;

  // Core's LineItem carries vatAmount/totalAmount as optional fields, but the PDF
  // prints items[].totalAmount verbatim: leaving them out rendered "Total: null" on
  // the real 2 RON invoice of 2026-09-18. Always send both, derived from the line.
  const round2 = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;
  const withTotals = (item: {
    name: string;
    quantity: number;
    unitPrice: number;
    vatRate: number;
  }) => {
    const lineNet = round2(item.unitPrice * item.quantity);
    const vatAmount = round2((lineNet * item.vatRate) / 100);
    return { ...item, vatAmount, totalAmount: round2(lineNet + vatAmount) };
  };

  const rawItems = apiLineItems ?? session.line_items?.data ?? [];
  const lineItems = rawItems.map((li) => {
    const quantity = li.quantity ?? 1;
    // Prefer the net amount; Stripe's amount_total includes tax when the merchant
    // adds it on top, and the invoice carries the VAT as a separate line.
    const net = li.amount_subtotal ?? li.amount_total ?? 0;
    return withTotals({
      name: li.description || 'Stripe checkout item',
      quantity,
      unitPrice: net / 100 / quantity,
      vatRate,
    });
  });
  if (lineItems.length === 0) {
    lineItems.push(withTotals({ name: 'Stripe checkout', quantity: 1, unitPrice: netCents / 100, vatRate }));
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
      subtotal: Math.round(netCents) / 100,
      totalVAT: Math.round(taxCents) / 100,
      total: Math.round(totalCents) / 100,
    },
  };
}
