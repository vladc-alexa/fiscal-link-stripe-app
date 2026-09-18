import assert from 'node:assert';
import { mapCheckoutToInvoice, extractBuyerVat, validCif, normalizeCif, mapStripeAddress, extractBuyerAddress, buyerAddressGap } from '../src/invoice-map';

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

// Line totals must be present: core's PDF prints items[].totalAmount verbatim and
// rendered "Total: null" on the real 2 RON invoice of 2026-09-18.
assert.equal(noTaxInvoice.items[0].totalAmount, 119, 'line total present');
assert.equal(noTaxInvoice.items[0].vatAmount, 0, 'line VAT present');
assert.equal(withVatInvoice.items[0].totalAmount, 121, 'line total includes VAT');
assert.equal(withVatInvoice.items[0].vatAmount, 21, 'line VAT set');
assert.equal(netItems.items[0].vatAmount, 21, 'line VAT follows the derived rate');

// ── addresses: ANAF rejects the document without street + city for both parties ──
// Live rejection 2026-09-18: BR-08 / BR-10 / BR-RO-080 / BR-RO-090 on both parties.
const ISSUER_ADDRESS = {
  street: 'Str. Părăul Stroii 40A',
  city: 'Pângărați',
  postalCode: '617307',
  country: 'RO',
  countrySubentity: 'Neamț',
};
assert.equal(mapStripeAddress(null), undefined, 'no collected address → no half-filled block');
assert.equal(mapStripeAddress({ line1: 'Str. X 1', city: null }), undefined, 'street without city is not filable');
assert.deepEqual(
  mapStripeAddress({
    line1: 'Calea Victoriei 1',
    line2: 'Ap. 4',
    city: 'București',
    postal_code: '010001',
    state: 'București',
    country: 'ro',
  }),
  {
    street: 'Calea Victoriei 1, Ap. 4',
    city: 'București',
    postalCode: '010001',
    country: 'RO',
    countrySubentity: 'București',
  },
  'street/postal/county mapped for the UBL PostalAddress block',
);

const withAddress = {
  ...base,
  customer_details: {
    ...base.customer_details,
    address: { line1: 'Calea Victoriei 1', city: 'București', postal_code: '010001', state: 'București', country: 'RO' },
  },
} as any;
const addressed = mapCheckoutToInvoice(withAddress, { name: 'Fiscal Link SRL', address: ISSUER_ADDRESS });
assert.deepEqual(addressed.issuer.address, ISSUER_ADDRESS, 'issuer address flows into the payload');
assert.equal(addressed.buyer.address?.street, 'Calea Victoriei 1', 'buyer billing address mapped');

// ── buyer address: collected where Stripe offers it, refused where it does not ──
// Live rejection 2026-09-18 09:35 UTC (2 RON payment on a payment link with address
// collection off): customer_details.address carried country=RO only, so the payload went
// out with no buyer address and ANAF answered ERORI FACTURA with BR-10, BR-RO-080,
// BR-RO-090 — a rejection on the merchant's SPV record for data the app cannot invent.
const countryOnly = {
  ...base,
  customer_details: { ...base.customer_details, address: { country: 'RO', line1: null, city: null, postal_code: null, state: null } },
} as any;
assert.equal(extractBuyerAddress(countryOnly), undefined, 'country-only address is not filable');
assert.equal(mapCheckoutToInvoice(countryOnly, { name: 'X' }).buyer.address, undefined, 'no half-filled buyer block');
assert.ok(
  buyerAddressGap(countryOnly)?.includes('Collect billing address'),
  'the gap names the Stripe setting to turn on',
);
assert.ok(buyerAddressGap(countryOnly)?.includes('CIF'), 'a CIF-less consumer checkout is told about the CIF too');
assert.equal(buyerAddressGap(withAddress), null, 'a complete buyer address clears the gap');
assert.equal(
  buyerAddressGap(withTaxId)?.includes('tax_id_collection'),
  false,
  'a merchant that already supplies the CIF is not nagged about it',
);

// Shipping address is the fallback: merchants that collect shipping but not billing still
// give ANAF BT-50/BT-52.
const shippingOnly = {
  ...base,
  customer_details: { ...base.customer_details, address: { country: 'RO' } },
  shipping_details: { address: { line1: 'Str. Fabricii 9', city: 'Cluj-Napoca', postal_code: '400001', country: 'RO' } },
} as any;
assert.equal(extractBuyerAddress(shippingOnly)?.city, 'Cluj-Napoca', 'shipping address used when billing is empty');
assert.equal(mapCheckoutToInvoice(shippingOnly, { name: 'X' }).buyer.address?.street, 'Str. Fabricii 9');
assert.equal(buyerAddressGap(shippingOnly), null, 'shipping-only checkout is filable');

console.log('invoice-map checks: 41 assertions passed');
