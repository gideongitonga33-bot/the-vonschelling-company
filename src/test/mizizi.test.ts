import { describe, expect, it } from "vitest";
import { buildMiziziOrderEmail, MIZIZI_BAG, MIZIZI_ORIGIN_LABEL, MIZIZI_SIZE_LABEL, orderTotals, shippingUsd } from "@/lib/mizizi";

describe("Mizizi retail pricing", () => {
  it("sells a 500g bag at $30 USD", () => {
    expect(MIZIZI_BAG).toEqual({ grams: 500, priceUsd: 30 });
  });
  it("charges $18 international express for one or two bags", () => {
    expect(shippingUsd("international", 1)).toBe(18);
    expect(orderTotals("international", 2).total).toBe(78);
  });
  it("ships free internationally from three bags", () => {
    expect(orderTotals("international", 3)).toMatchObject({ subtotal: 90, shipping: 0, total: 90 });
  });
  it("charges a $3 flat delivery within Kenya", () => {
    expect(orderTotals("kenya", 3).total).toBe(93);
  });
  it("shows the bag size as 500g (17.6 oz)", () => {
    expect(MIZIZI_SIZE_LABEL).toBe("500g (17.6 oz)");
  });
  it("presents Mizizi as single-origin Nyeri, not Kenya AA", () => {
    expect(MIZIZI_ORIGIN_LABEL).toBe("Single-Origin Kenya Arabica · Nyeri");
    const email = buildMiziziOrderEmail({ roast: "Medium Roast", grind: "Whole Bean", bags: 1, region: "kenya", name: "A", destination: "Nairobi" });
    expect(email.subject).toContain("Single-Origin Nyeri");
    expect(email.subject).not.toContain("AA");
  });
});
