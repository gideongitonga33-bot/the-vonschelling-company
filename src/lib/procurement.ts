export const COFFEE_MOISTURE = { min: 10, max: 11 } as const;
export const SAMPLE_SIZES = [300, 500] as const;
export type RequestKind = "quote" | "sample" | "documents";

export function parseRequestKind(value: unknown): RequestKind {
  return value === "sample" || value === "documents" ? value : "quote";
}

export function buildEnquiryEmail(data: FormData, kind: RequestKind) {
  const value = (key: string) => String(data.get(key) ?? "").trim();
  const subject = `VonSchelling ${kind === "sample" ? "evaluation sample" : kind === "documents" ? "buyer documentation" : "commercial quotation"} request`;
  const details = [
    subject,
    `Name: ${value("name")}`,
    `Company: ${value("company")}`,
    `Email: ${value("email")}`,
    `Commodity: ${kind === "sample" ? "Green Coffee Beans" : value("commodity")}`,
    ...(kind === "sample" ? [`Sample: ${value("sampleSize")}g`, `Grade: ${value("grade")}`, `Preferred origin / lot: ${value("origin")}`] : kind === "quote" ? [`Volume: ${value("volume")} ${value("unit")}`, `Incoterm: ${value("incoterm")}`, `Payment preference: ${value("payment")}`] : [`Documents requested: ${value("documents")}`]),
    `Destination: ${value("destination")}`,
    `Specifications & notes: ${value("specs")}`,
  ].join("\n");
  return { subject, body: details, href: `mailto:info@vonschelling.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}` };
}