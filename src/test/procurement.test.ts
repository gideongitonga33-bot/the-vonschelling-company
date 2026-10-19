import { describe, expect, it } from "vitest";
import { buildEnquiryEmail, COFFEE_MOISTURE, parseRequestKind, SAMPLE_SIZES } from "@/lib/procurement";

describe("Coffee procurement", () => {
  it("keeps the confirmed moisture target at 10% to 11%", () => {
    expect(COFFEE_MOISTURE).toEqual({ min: 10, max: 11 });
  });
  it("offers 300g and 500g evaluation sample preferences", () => {
    expect(SAMPLE_SIZES).toEqual([300, 500]);
  });
  it("defaults unknown request kinds to commercial quotations", () => {
    expect(parseRequestKind("invalid")).toBe("quote");
    expect(parseRequestKind("sample")).toBe("sample");
    expect(parseRequestKind("documents")).toBe("documents");
  });
  it("includes the requested sample, grade and destination in the email", () => {
    const data = new FormData();
    data.set("sampleSize", "500"); data.set("grade", "AA"); data.set("destination", "Berlin, Germany");
    const result = buildEnquiryEmail(data, "sample");
    expect(result.body).toContain("Sample: 500g");
    expect(result.body).toContain("Grade: AA");
    expect(result.body).toContain("Destination: Berlin, Germany");
    expect(result.href).toStartWith("mailto:info@vonschelling.co.ke?");
    expect(decodeURIComponent(result.href.split("&body=")[1])).toBe(result.body);
  });
  it("retains commercial volume and Incoterm in quotation emails", () => {
    const data = new FormData(); data.set("volume", "10"); data.set("unit", "Metric Tons"); data.set("incoterm", "FOB");
    expect(buildEnquiryEmail(data, "quote").body).toContain("Volume: 10 Metric Tons\nIncoterm: FOB");
  });
});