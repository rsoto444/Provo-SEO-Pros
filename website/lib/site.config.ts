// THE ONE FILE TO EDIT FIRST.
// Every page reads from here - fill it in (or let /build-website fill it for you).

export const site = {
  name: "Provo SEO Pros",
  tagline: "SEO for local businesses across the United States and Canada.",
  // GHL inbound webhook - /build-website step 6 collects this and writes it here.
  leadWebhook: null as string | null,
  // GHL calendar booking link - collected on the first /service-page run.
  // Set it and /thank-you renders the booking widget after a form submit (the
  // money pages stay form-only, one primary CTA each). Leave it null and that
  // section simply doesn't render.
  // GHL > Calendars > the calendar > copy the booking link.
  bookingUrl: null as string | null,
  phone: "+1 866-402-6849",
  email: "contact@provoseopros.com",
  address: "Remote - serving the United States and Canada",
  city: "United States and Canada",
  url: "https://provoseopros.com", // your live domain - used by sitemap + metadata

  // Your services - each becomes a card on the homepage.
  // The SEO Blueprint's /build-website turns these into full service pages.
  services: [
    { name: "Website Design & Conversion Optimization", slug: "website-design-and-conversion-optimization", blurb: "TODO: one line from the owner" },
    { name: "Social Media Management", slug: "social-media-management", blurb: "TODO: one line from the owner" },
    { name: "CRM Automation & Lead Follow-Up", slug: "crm-automation-and-lead-follow-up", blurb: "TODO: one line from the owner" },
    { name: "Google Business Profile Management", slug: "google-business-profile-management", blurb: "A complete, accurate, and trusted Google Business Profile, with the right categories, services, reviews, and contact paths, so local searchers can compare you easily and contact you." },
    { name: "Growth Engine System", slug: "growth-engine-system", blurb: "One coordinated marketing system covering SEO, AI search, your website, your Google Business Profile, reviews, campaigns, and tracking, run from a single plan so you don't have to manage separate vendors." },
    { name: "PPC Advertising Management", slug: "ppc-advertising-management", blurb: "TODO: one line from the owner" },
    { name: "SEO & AI Search Optimization", slug: "seo-and-ai-search-optimization", blurb: "Clearer service pages, stronger local relevance, and a technically sound site, so Google, Maps, and AI search tools can understand your business and more of the people who find you reach out." },
  ],

  // Google Ads sitelinks. Written here at build time, while the value of each
  // page is fresh - /write-ads reads them rather than inventing them months later.
  // Titles max 25 characters, each description line max 35.
  sitelinks: [
    { title: "Get a Quote",  url: "/quote",    lines: ["Free quote, no pressure", "Reply within a day"] },
    { title: "Our Services", url: "/services", lines: ["Everything we do", "Plain pricing"] },
    { title: "Reviews",      url: "/reviews",  lines: ["Real customer stories", "Word for word"] },
    { title: "Pricing",      url: "/pricing",  lines: ["What it costs", "No surprise fees"] },
    { title: "About Us",     url: "/about",    lines: ["Who we are", "Local and licensed"] },
    { title: "Contact",      url: "/contact",  lines: ["Call or book online", "A person replies"] },
  ],
};
