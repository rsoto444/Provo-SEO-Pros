import { fileURLToPath } from "node:url";
import { readFileSync } from "node:fs";

// Old WordPress addresses and their new homes (see lib/redirects.json).
const wpRedirects = JSON.parse(readFileSync(new URL("./lib/redirects.json", import.meta.url), "utf8"));

// The old 3local site on local.provoseopros.com (32 cloned city pages), retired
// with the owner's yes on 24 September 2026. Once that subdomain points at this
// Vercel project, every one of its addresses lands on the matching page here.
const LOCAL = [{ type: "host", value: "local.provoseopros.com" }];
const MAIN = "https://provoseopros.com";
const localSubdomainRedirects = [
  ["/seo/:path*", "/service/seo-ai-search-optimization/"],
  ["/web-design/:path*", "/service/website-design-conversion-optimization/"],
  ["/social-media-marketing/:path*", "/service/social-media-management/"],
  ["/google-business-profile-management/:path*", "/service/google-business-profile-management/"],
  ["/:path*", "/"],
].map(([source, to]) => ({ source, has: LOCAL, destination: `${MAIN}${to}`, permanent: true }));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static-first, with a server available where one is genuinely needed.
  // Next prerenders every page to plain HTML at build time by default, so the
  // whole marketing site is still static - fastest loads, best Core Web Vitals.
  // What this leaves working that a full `output: "export"` would kill:
  //   - /api/lead      the form endpoint (keeps the webhook URL server-side)
  //   - /proposal/[slug]  reads Supabase at request time
  // Confirm it on the build output: every marketing route stays ○ (Static).
  // Match the old WordPress URLs exactly (they all end in "/"), so every existing
  // link and Google result lands on the same address with no redirect.
  trailingSlash: true,

  images: { unoptimized: true }, // no image CDN bill; compress to WebP at build instead

  // A stray package-lock.json in the home directory makes Next guess the wrong
  // workspace root, which breaks file tracing. Pin it to this folder.
  // fileURLToPath, NOT .pathname - .pathname leaves a folder with a space in it
  // percent-encoded ("Claude%20Code"), which points at a directory that does not exist.
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),

  // Permanent redirects for every old WordPress address that moved.
  async redirects() {
    return [...localSubdomainRedirects, ...wpRedirects.map((r) => ({ ...r, permanent: true }))];
  },

  // 301 redirects live at the HOST layer so they work identically on any host.
  // On Vercel: vercel.json "redirects". The SEO Blueprint's /build-website
  // writes them there automatically during a restructure.
};

export default nextConfig;
