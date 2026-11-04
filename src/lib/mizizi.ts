// Browser-safe Mizizi retail rules: price, options and delivery charges shared by the
// shop page, its order email and tests.

export const MIZIZI_BAG = { grams: 500, priceUsd: 30 } as const;
/** Bag size as shown to buyers everywhere: grams with ounces in brackets. */
export const MIZIZI_SIZE_LABEL = "500g (17.6 oz)";
/** Flagship retail origin as shown to buyers. */
export const MIZIZI_ORIGIN_LABEL = "Single-Origin Kenya Arabica · Nyeri";
export const MIZIZI_CARTON_BAGS = 20;
export const MAX_BAGS_PER_ORDER = 12;

export const ROASTS = [
  { value: "Medium Roast", note: "Balanced and sweet: red currant, brown sugar, stone fruit." },
  { value: "Light Roast", note: "Bright and lively: blackcurrant, jasmine, citrus." },
  { value: "Dark Roast", note: "Bold and smooth: dark cocoa, full body, low acidity." },
] as const;

export const GRINDS = ["Whole Bean", "Filter / Pour-over", "French Press / Cold Brew", "Espresso"] as const;

export const SHIPPING = {
  international: { label: "International express", flatUsd: 18, freeFromBags: 3 },
  kenya: { label: "Within Kenya", flatUsd: 3 },
} as const;
export type ShippingRegion = keyof typeof SHIPPING;

export function clampBags(bags: number) {
  if (!Number.isFinite(bags)) return 1;
  return Math.min(MAX_BAGS_PER_ORDER, Math.max(1, Math.round(bags)));
}

export function shippingUsd(region: ShippingRegion, bags: number) {
  if (region === "kenya") return SHIPPING.kenya.flatUsd;
  return clampBags(bags) >= SHIPPING.international.freeFromBags ? 0 : SHIPPING.international.flatUsd;
}

export function orderTotals(region: ShippingRegion, bags: number) {
  const qty = clampBags(bags);
  const subtotal = qty * MIZIZI_BAG.priceUsd;
  const shipping = shippingUsd(region, qty);
  const bagsToFreeShipping = region === "international" ? Math.max(0, SHIPPING.international.freeFromBags - qty) : 0;
  return { bags: qty, subtotal, shipping, total: subtotal + shipping, bagsToFreeShipping };
}

export const usd = (value: number) => `$${value.toFixed(2)} USD`;

export function buildMiziziOrderEmail(order: { roast: string; grind: string; bags: number; region: ShippingRegion; name: string; destination: string }) {
  const t = orderTotals(order.region, order.bags);
  const subject = `Mizizi Coffee order: ${t.bags} × ${MIZIZI_SIZE_LABEL} Single-Origin Nyeri`;
  const body = [
    subject,
    `Name: ${order.name.trim()}`,
    `Delivery city & country: ${order.destination.trim()}`,
    `Roast: ${order.roast}`,
    `Grind: ${order.grind}`,
    `Bags: ${t.bags} × ${MIZIZI_SIZE_LABEL} at ${usd(MIZIZI_BAG.priceUsd)}`,
    `Subtotal: ${usd(t.subtotal)}`,
    `Delivery (${SHIPPING[order.region].label}): ${t.shipping === 0 ? "Free" : usd(t.shipping)}`,
    `Order total: ${usd(t.total)}`,
  ].join("\n");
  return { subject, body, href: `mailto:info@vonschelling.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
}
