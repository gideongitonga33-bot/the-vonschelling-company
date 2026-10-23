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
      "/meats",
      "/quality",
      "/sustainability",
    ]);
  });
});
