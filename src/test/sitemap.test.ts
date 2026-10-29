import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { sitemapStaticPaths } from "@/lib/sitemap";

describe("sitemap", () => {
  it("lists every public page and nothing else", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(sitemapStaticPaths(router)).toEqual([
      "/",
      "/about",
      "/chilies",
      "/coffee",
      "/contact",
      "/dried-fruits",
      "/export-logistics",
      "/guides",
      "/guides/coffee-auction-vs-direct-trade-kenya",
      "/guides/coffee-moisture-and-water-activity-standards",
      "/guides/kenyan-coffee-crop-calendar",
      "/guides/kenyan-coffee-grades-explained",
      "/guides/kenyan-green-coffee-importing-guide",
      "/meats",
      "/privacy",
      "/quality",
      "/sustainability",
      "/terms",
    ]);
  });
  it("preserves the existing Chillies address without adding the excluded rename", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(sitemapStaticPaths(router)).toContain("/chilies");
    expect(sitemapStaticPaths(router)).not.toContain("/chillies");
  });
});
