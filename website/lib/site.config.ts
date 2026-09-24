// THE ONE FILE TO EDIT FIRST.
// Every page reads from here - fill it in (or let /build-website fill it for you).

export const site = {
  name: "Provo SEO Pros",
  tagline: "SEO for local businesses across the United States and Canada.",
  // GHL inbound webhook - /build-website step 6 collects this and writes it here.
  // Kept out of the code on purpose: anyone with this URL could post fake leads.
  // Set LEAD_WEBHOOK_URL in .env.local (local) and in Vercel > Settings > Environment Variables (live).
  leadWebhook: (process.env.LEAD_WEBHOOK_URL ?? null) as string | null,
  // GHL calendar booking link - collected on the first /service-page run.
  // Set it and /thank-you renders the booking widget after a form submit (the
  // money pages stay form-only, one primary CTA each). Leave it null and that
  // section simply doesn't render.
  // GHL > Calendars > the calendar > copy the booking link.
  bookingUrl: "https://api.leadconnectorhq.com/widget/booking/zzAK5q1XnER39WzXYv6o" as string | null, // Rich Soto Calendar, 30 min
  phone: "+1 866-402-6849",
  email: "contact@provoseopros.com",
  address: "Remote - serving the United States and Canada",
  city: "United States and Canada",
  url: "https://provoseopros.com", // your live domain - used by sitemap + metadata

  // Your services - each becomes a card on the homepage.
  // The SEO Blueprint's /build-website turns these into full service pages.
  services: [
    { name: "Growth Engine System", slug: "growth-engine-system", blurb: "One coordinated marketing system covering SEO, AI search, your website, your Google Business Profile, reviews, campaigns, and tracking, run from a single plan so you don't have to manage separate vendors.", price: "From $2,500 one-time" , photo: "/images/stock/small-business-owner-using-laptop-5.jpeg", photoAlt: "Two cafe owners looking at their laptop together", more: { label: "Part of the Growth Engine: Local Authority Managed Growth™", href: "/local-authority-managed-growth/" } },
    { name: "Guided Implementation™", slug: "guided-implementation", blurb: "A focused buildout of your local SEO, Google Business Profile, service pages, website conversion, and trust assets, followed by ongoing approved marketing work.", price: "From $7,500 + $2,500/mo" , photo: "/images/stock/consultant-meeting-small-business-owner-1.jpeg", photoAlt: "Consultant walking a business owner through charts on a tablet" },
    { name: "Local Visibility Starter", slug: "local-visibility-starter", blurb: "Ongoing local visibility support: a stronger Google Business Profile, local SEO essentials, light technical cleanup, and monthly reporting.", price: "From $900/mo + $500 setup" , photo: "/images/stock/smartphone-map-search-4.jpg", photoAlt: "Person searching a map on a smartphone" },
    { name: "SEO & AI Search Optimization", slug: "seo-and-ai-search-optimization", blurb: "Clearer service pages, stronger local relevance, and a technically sound site, so Google, Maps, and AI search tools can understand your business and more of the people who find you reach out.", price: "From $2,500 one-time" , photo: "/images/stock/marketing-analytics-dashboard-laptop-4.jpeg", photoAlt: "Website traffic chart trending upward" },
    { name: "Google Business Profile Management", slug: "google-business-profile-management", blurb: "A complete, accurate, and trusted Google Business Profile, with the right categories, services, reviews, and contact paths, so local searchers can compare you easily and contact you.", price: "From $900/mo + $500 setup" , photo: "/images/stock/smartphone-map-search-2.jpeg", photoAlt: "Local search results on a map on a tablet" },
    { name: "Website Design & Conversion Optimization", slug: "website-design-and-conversion-optimization", blurb: "A clear, mobile-ready website with strong service pages, proof, and calls to action, built to turn visitors into calls and form submissions.", price: "From $3,500" , photo: "/images/stock/marketing-analytics-dashboard-laptop-3.jpeg", photoAlt: "Laptop showing a website dashboard" },
    { name: "CRM Automation & Lead Follow-Up", slug: "crm-automation-and-lead-follow-up", blurb: "Automated lead capture, instant text and email responses, and follow-up sequences, so every new inquiry gets a fast reply and doesn't slip through the cracks.", price: "From $1,500 setup + $300/mo" , photo: "/images/stock/small-business-owner-using-laptop-2.jpeg", photoAlt: "Business owner answering inquiries on a laptop" },
    { name: "PPC Advertising Management", slug: "ppc-advertising-management", blurb: "Google Ads campaigns built around your highest-value services, with focused landing pages, call and form tracking, and regular optimization.", price: "From $750/mo + ad spend" , photo: "/images/stock/marketing-analytics-dashboard-laptop-5.jpeg", photoAlt: "Laptop showing ad campaign performance charts" },
    { name: "Social Media Management", slug: "social-media-management", blurb: "Consistent, on-brand posts that show your work, reviews, and expertise, so prospects who check you out see an active, credible business.", price: "From $750/mo" , photo: "/images/stock/social-media-marketing-phone-2.jpeg", photoAlt: "Scrolling a business social media feed on a phone" },
  ],

  // Google Ads sitelinks. Written here at build time, while the value of each
  // page is fresh - /write-ads reads them rather than inventing them months later.
  // Titles max 25 characters, each description line max 35.
  sitelinks: [
    { title: "Free Growth Audit", url: "/book-a-growth-audit/",    lines: ["Free 30-minute call", "Reply in 1 business day"] },
    { title: "Our Services",      url: "/services/", lines: ["Local SEO, GBP, AI search", "Websites, CRM and Google Ads"] },
    { title: "Pricing",           url: "/pricing/",  lines: ["Starting prices up front", "Terms confirmed in writing"] },
    { title: "About Us",          url: "/about/",    lines: ["Founder-led since 2001", "Serving the US and Canada"] },
    { title: "Contact",           url: "/contact/",  lines: ["Call or book online", "Mon to Fri, 9am to 5pm MT"] },
  ],
};
