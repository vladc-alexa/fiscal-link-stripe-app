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

console.log('invoice-map checks: 13 assertions passed');
