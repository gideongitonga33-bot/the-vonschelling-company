export const SITE_URL = "https://the-vonschelling-company.lovable.app";

/**
 * Per-page head metadata. `path` is the page's own URL path (used for og:url and
 * canonical). `image` is a share-sized file under public/og/ showing the page's hero photo.
 */
export const seo = (title: string, description: string, path: string, image?: string) => {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image ? `${SITE_URL}/og/${image}` : undefined;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(imageUrl
        ? [
            { property: "og:image", content: imageUrl },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { name: "twitter:image", content: imageUrl },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
};
