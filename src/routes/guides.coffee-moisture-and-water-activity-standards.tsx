import { createFileRoute } from "@tanstack/react-router";
import { BuyerGuidePage, guideHead } from "@/components/site/BuyerGuide";
import { BUYER_GUIDES } from "@/lib/buyer-guides";

const guide = BUYER_GUIDES[4];
export const Route = createFileRoute("/guides/coffee-moisture-and-water-activity-standards")({
  staticData: { sitemap: true },
  head: () => guideHead(guide),
  component: () => <BuyerGuidePage guide={guide} />,
});