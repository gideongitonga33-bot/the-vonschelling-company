import { describe, expect, it } from "vitest";
import { coffeeProductSchema, organizationSchema } from "@/lib/coffee-schema";
import { seo, SITE_URL } from "@/lib/seo";

describe("Approved buyer search facts", () => {
  it("uses the official production domain for canonical and share URLs", () => {
    expect(SITE_URL).toBe("https://www.vonschelling.co.ke");
    expect(seo("Coffee", "Buyer information", "/coffee", "coffee.jpg").links).toEqual([
      { rel: "canonical", href: "https://www.vonschelling.co.ke/coffee" },
    ]);
  });
  it("uses www for share images and organization and product identities", () => {
    expect(seo("Coffee", "Buyer information", "/coffee", "coffee.jpg").meta).toEqual(expect.arrayContaining([
      { property: "og:url", content: "https://www.vonschelling.co.ke/coffee" },
      { property: "og:image", content: "https://www.vonschelling.co.ke/og/coffee.jpg" },
      { name: "twitter:image", content: "https://www.vonschelling.co.ke/og/coffee.jpg" },
    ]));
    expect(organizationSchema.url).toBe("https://www.vonschelling.co.ke");
    expect(coffeeProductSchema.url).toBe("https://www.vonschelling.co.ke/coffee");
    expect(organizationSchema.email).toBe("info@vonschelling.co.ke");
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