import { describe, expect, it } from "vitest";
import { CONTAINER_PLANNING, plannedCoffeeTonnes, PRIVATE_LABEL_MOQ_KG } from "@/lib/coffee";

describe("Coffee trade planning", () => {
  it("keeps private-label minimum at 1,000 kg per roast profile", () => {
    expect(PRIVATE_LABEL_MOQ_KG).toBe(1000);
  });
  it("calculates the blueprint's 60 kg, 320 to 330 bag planning range", () => {
    expect(CONTAINER_PLANNING).toEqual({ bagKg: 60, minBags: 320, maxBags: 330 });
    expect(plannedCoffeeTonnes(CONTAINER_PLANNING.minBags)).toBe(19.2);
    expect(plannedCoffeeTonnes(CONTAINER_PLANNING.maxBags)).toBe(19.8);
  });
});