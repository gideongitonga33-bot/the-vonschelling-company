import { createFileRoute } from "@tanstack/react-router";
import { BuyerGuidePage, guideHead } from "@/components/site/BuyerGuide";
import { BUYER_GUIDES } from "@/lib/buyer-guides";

const guide = BUYER_GUIDES[1];
export const Route = createFileRoute("/guides/kenyan-coffee-crop-calendar")({
  staticData: { sitemap: true },
  head: () => guideHead(guide),
  component: () => <BuyerGuidePage guide={guide} />,
});