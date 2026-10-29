import { createFileRoute } from "@tanstack/react-router";
import { BuyerGuidePage, guideHead } from "@/components/site/BuyerGuide";
import { getBuyerGuide } from "@/lib/buyer-guides";

const guide = getBuyerGuide(4);
export const Route = createFileRoute("/guides/coffee-moisture-and-water-activity-standards")({
  staticData: { sitemap: true },
  head: () => guideHead(guide),
  component: () => <BuyerGuidePage guide={guide} />,
});