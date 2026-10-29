import { createFileRoute } from "@tanstack/react-router";
import { BuyerGuidePage, guideHead } from "@/components/site/BuyerGuide";
import { getBuyerGuide } from "@/lib/buyer-guides";

const guide = getBuyerGuide(3);
export const Route = createFileRoute("/guides/coffee-auction-vs-direct-trade-kenya")({
  staticData: { sitemap: true },
  head: () => guideHead(guide),
  component: () => <BuyerGuidePage guide={guide} />,
});