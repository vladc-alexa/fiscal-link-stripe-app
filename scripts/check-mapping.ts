import assert from 'node:assert';
import { mapCheckoutToInvoice, extractBuyerVat, validCif, normalizeCif } from '../src/invoice-map';

// ── checksum ──
assert.equal(validCif('RO32736839'), true, 'valid RO CIF accepted');
assert.equal(validCif('32736839'), true, 'bare digits accepted');
assert.equal(validCif('RO12345678'), false, 'bad checksum rejected');
assert.equal(normalizeCif(' ro 32 736 839 '), 'RO32736839', 'normalised');

const base = {
  currency: 'ron',
  amount_total: 11900,
  customer_details: { name: 'Demo SRL', email: 'buyer@example.com' },
} as any;

// ── consumer checkout: no buyer VAT, still a valid payload ──
assert.equal(extractBuyerVat(base), undefined, 'no VAT source → undefined');
assert.equal(mapCheckoutToInvoice(base, { name: 'FiscalLink' }).buyer.vatNumber, undefined);
assert.equal(mapCheckoutToInvoice(base, { name: 'FiscalLink' }).totals.total, 119);

// ── Stripe-collected tax id ──
const withTaxId = {
  ...base,
  customer_details: { ...base.customer_details, tax_ids: [{ type: 'ro_vat', value: 'RO32736839' }] },
} as any;
assert.equal(extractBuyerVat(withTaxId), 'RO32736839', 'tax id wins');
assert.equal(mapCheckoutToInvoice(withTaxId, { name: 'X' }).buyer.vatNumber, 'RO32736839');

// ── merchant-defined checkout custom field ──
const withField = { ...base, custom_fields: [{ key: 'cif', label: 'CIF firma', text: { value: 'RO32736839' } }] } as any;
assert.equal(extractBuyerVat(withField), 'RO32736839', 'custom field read');
assert.equal(mapCheckoutToInvoice(withField, { name: 'X' }).buyer.name, 'Demo SRL');

// ── invalid CIF is dropped, not filed ──
const bad = { ...base, custom_fields: [{ key: 'cif', label: 'CIF', text: { value: 'RO12345678' } }] } as any;
assert.equal(extractBuyerVat(bad), undefined, 'invalid CIF ignored');

// ── unrelated custom fields ignored ──
const other = { ...base, custom_fields: [{ key: 'note', label: 'Gift note', text: { value: 'thanks' } }] } as any;
assert.equal(extractBuyerVat(other), undefined);
assert.equal(mapCheckoutToInvoice(other, { name: 'X' }).items.length, 1, 'fallback line item');

// ── VAT comes from the payment, never from a constant (live failure 2026-09-18) ──
// A hardcoded 19% + "gross includes VAT" produced a VAT line on every invoice, which
// core rejects for a supplier that is not registered for VAT ("must be 0 when
// issuer.vatRegistered is false"). The rate must follow what the merchant charged.
const noTax = {
  ...base,
  amount_subtotal: 11900,
  amount_total: 11900,
  total_details: { amount_tax: 0 },
} as any;
const noTaxInvoice = mapCheckoutToInvoice(noTax, { name: 'FiscalLink' });
assert.equal(noTaxInvoice.items[0].vatRate, 0, 'no tax charged → 0% (valid for a non-VAT issuer)');
assert.equal(noTaxInvoice.totals.totalVAT, 0, 'no VAT line');
assert.equal(noTaxInvoice.totals.total, 119, 'total unchanged');
assert.equal(noTaxInvoice.totals.subtotal, 119, 'subtotal = total when there is no tax');

const withVat = {
  ...base,
  amount_subtotal: 10000,
  amount_total: 12100,
  total_details: { amount_tax: 2100 },
} as any;
const withVatInvoice = mapCheckoutToInvoice(withVat, { name: 'VAT SRL', vatNumber: 'RO32736839' });
assert.equal(withVatInvoice.items[0].vatRate, 21, 'rate derived from the tax actually charged');
assert.equal(withVatInvoice.totals.subtotal, 100, 'net subtotal');
assert.equal(withVatInvoice.totals.totalVAT, 21, 'VAT extracted from the gross');
assert.equal(withVatInvoice.totals.total, 121, 'gross preserved');

// Line items are filed net of VAT, so their sum matches the net subtotal.
const netItems = mapCheckoutToInvoice(withVat, { name: 'X' }, [
  { description: 'Widget', quantity: 2, amount_subtotal: 10000, amount_total: 12100 },
] as any);
assert.equal(netItems.items[0].unitPrice, 50, 'unit price excludes VAT');

console.log('invoice-map checks: 20 assertions passed');
