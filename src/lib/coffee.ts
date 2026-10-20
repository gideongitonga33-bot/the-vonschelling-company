export const PRIVATE_LABEL_MOQ_KG = 1000;
export const CONTAINER_PLANNING = { bagKg: 60, minBags: 320, maxBags: 330 } as const;
export function plannedCoffeeTonnes(bags: number) {
  return bags * CONTAINER_PLANNING.bagKg / 1000;
}

export const COFFEE_GRADES = [
  ["AA", "Large flat beans; commonly associated with screens 17/18."],
  ["AB", "Medium flat beans; commonly associated with screens 15/16."],
  ["PB · Peaberry", "Rounded single beans, separated by shape and graded with round-hole screens."],
  ["C", "Smaller flat beans; commonly associated with screens 14/15."],
] satisfies [string, string][];