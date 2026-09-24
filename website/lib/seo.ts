// One place for every page's head tags and schema, so no page can forget its
// canonical, share tags or business details. Facts only - every value here
// comes from site.config.ts (owner-supplied, see CLAUDE.md "My setup").
import type { Metadata } from "next";
import { site } from "./site.config";

const OG_IMAGE = { url: "/images/og.png", width: 1200, height: 630, alt: "Provo SEO Pros logo" };

type PageMetaInput = {
  title: string; // full title, used as-is (no template)
  description: string;
  path: string; // "/about/"
  type?: "website" | "article";
  noindex?: boolean;
};

export function pageMeta({ title, description, path, type = "website", noindex }: PageMetaInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: site.name, type, locale: "en_US", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

// ---- Schema (JSON-LD) ----------------------------------------------------

const ORG_ID = `${site.url}/#business`;
const FOUNDER_ID = `${site.url}/about/#rich-soto`;
// The Google Business Profile - the one public profile the owner has confirmed.
const GBP_URL = "https://www.google.com/maps/place/?q=place_id:ChIJPQqUNYebTYcR9jBBeUaPb2U";

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: site.name,
  url: `${site.url}/`,
  logo: `${site.url}/images/logo.png`,
  image: `${site.url}/images/og.png`,
  description: "SEO for local businesses since 2001.",
  telephone: site.phone,
  email: site.email,
  foundingDate: "2001",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2650 W 820 N",
    addressLocality: "Provo",
    addressRegion: "UT",
    postalCode: "84601",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Provo, Utah" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  founder: { "@id": FOUNDER_ID },
  hasMap: GBP_URL,
  sameAs: [GBP_URL],
};

export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: "Rich Soto",
  jobTitle: "Founder",
  image: `${site.url}/images/rich-soto-founder.webp`,
  url: `${site.url}/about/`,
  worksFor: { "@id": ORG_ID },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    provider: { "@id": ORG_ID },
    areaServed: businessSchema.areaServed,
  };
}

export function articleSchema(headline: string, description: string, path: string, date: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    url: `${site.url}${path}`,
    mainEntityOfPage: `${site.url}${path}`,
    datePublished: date,
    image: `${site.url}/images/og.png`,
    author: { "@id": FOUNDER_ID, "@type": "Person", name: "Rich Soto", url: `${site.url}/about/` },
    publisher: { "@id": ORG_ID },
  };
}
