import { describe, expect, it } from "vitest";
import { coffeeProductSchema, organizationSchema } from "@/lib/coffee-schema";
import { seo, SITE_URL } from "@/lib/seo";

describe("Approved buyer search facts", () => {
  it("uses the official production domain for canonical and share URLs", () => {
    expect(SITE_URL).toBe("https://vonschelling.co.ke");
    expect(seo("Coffee", "Buyer information", "/coffee", "coffee.jpg").links).toEqual([
      { rel: "canonical", href: "https://vonschelling.co.ke/coffee" },
    ]);
  });
  it("keeps the stated export moisture target at 10% to 11%", () => {
    expect(coffeeProductSchema.additionalProperty.find(item => item.name === "Moisture target")?.value).toBe("10% to 11%");
  });
  it("includes all five approved grade offerings", () => {
    expect(coffeeProductSchema.additionalProperty.find(item => item.name === "Grades")?.value).toBe("AA, AB, PB, C and specialty micro-lots");
  });
  it("retains the approved office address", () => {
    expect(organizationSchema.address.streetAddress).toBe("90 JGO Building, Ikigai, Lavington");
  });
});