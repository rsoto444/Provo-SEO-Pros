import type { MetadataRoute } from "next";
import { site } from "@/lib/site.config";
import { wpPages } from "@/lib/wp-pages";

export const dynamic = "force-static"; // required for static export (SSG)

// The sitemap mirrors your page tree exactly.
// DELIBERATELY EXCLUDED: /thank-you (must never be indexed - it would
// wreck your conversion count) and the legal pages (no search value).
export default function sitemap(): MetadataRoute.Sitemap {
  // /reviews stays out until real reviews exist (it is noindexed too).
  const pages = ["", "/services", "/about", "/contact", "/book-a-growth-audit", "/free-seo-audit", "/pricing", "/blog",
    ...wpPages.filter((p) => p.path !== "/service/").map((p) => p.path.replace(/\/$/, ""))];
  return pages.map((path) => ({
    url: `${site.url}${path}/`,
    lastModified: new Date(),
    priority: path === "" ? 1 : 0.8,
  }));
}
