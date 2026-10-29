import { createFileRoute } from "@tanstack/react-router";
import { BuyerGuidePage, guideHead } from "@/components/site/BuyerGuide";
import { getBuyerGuide } from "@/lib/buyer-guides";

const guide = getBuyerGuide(0);
export const Route = createFileRoute("/guides/kenyan-coffee-grades-explained")({
  staticData: { sitemap: true },
  head: () => guideHead(guide),
  component: () => <BuyerGuidePage guide={guide} />,
});