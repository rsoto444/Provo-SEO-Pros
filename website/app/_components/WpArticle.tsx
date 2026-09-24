// Renders one carried-over WordPress page or post in this site's design:
// the shared header, the owner's words, and one booking button at the end.
import type { Metadata } from "next";
import SiteNav from "./SiteNav";
import type { WpPage } from "@/lib/wp-pages";

export function wpMetadata(p: WpPage): Metadata {
  const title = p.title.includes("Provo SEO Pros") ? p.title : `${p.title} | Provo SEO Pros`;
  return {
    title: { absolute: title },
    description: p.description,
    alternates: { canonical: p.path },
    openGraph: { title, description: p.description, type: p.kind === "post" ? "article" : "website" },
  };
}

// Shared pieces for the designed service pages. Facts only - every line here
// was given by the owner (see CLAUDE.md "My setup").
const heroCard = `<div class="wpx-hero-side wpx-card wpx-offer">
  <p class="wp-kicker">Free 30-minute Growth Audit</p>
  <h3>See what's holding your business back</h3>
  <ul>
    <li>We review your website, Google Business Profile and local search presence</li>
    <li>You get a recommended starting point</li>
    <li>Scope and pricing are confirmed in writing before any work begins</li>
  </ul>
  <a href="/book-a-growth-audit/" class="wp-btn">Book a free Growth Audit</a>
  <p class="wpx-small">We reply within one business day · Mon to Fri, 9am to 5pm MT</p>
</div>`;
const reviewBand = `<section class="wpx-band wpx-review"><div class="wpx-wrap"><div class="wpx-head"><p class="wp-kicker">Kind words</p><h2>What clients say</h2></div>
  <figure class="wpx-card wpx-quote"><p class="wpx-stars" aria-label="5 out of 5 stars">★★★★★</p>
  <blockquote>Rich is awesome! He is an expert in his field and I can't recommend him enough! Thank you!</blockquote>
  <figcaption>Zack V. · Google review · October 2025</figcaption></figure></div></section>`;

function designedHtml(d: string) {
  let html = d.replace('<div class="wpx-hero-side" data-default-card></div>', heroCard);
  const faq = html.indexOf('<section class="wpx-band wpx-alt wpx-faq-band') >= 0
    ? html.indexOf('<section class="wpx-band wpx-alt wpx-faq-band')
    : html.indexOf('<section class="wpx-band wpx-faq-band');
  html = faq >= 0 ? html.slice(0, faq) + reviewBand + html.slice(faq) : html + reviewBand;
  return html;
}

export default function WpArticle({ page }: { page: WpPage }) {
  if (page.designed) {
    return (
      <>
        <SiteNav />
        <main className="wp-content wpx" dangerouslySetInnerHTML={{ __html: designedHtml(page.designed) }} />
        <section className="wpx-band wpx-cta">
          <div className="wpx-wrap wpx-head">
            <h2>Want to know what&apos;s holding your business back?</h2>
            <p>Book a free 30-minute Growth Audit. We reply within one business day.</p>
            <div className="wpx-actions"><a href="/book-a-growth-audit/" className="wp-btn">Book a free Growth Audit</a></div>
          </div>
        </section>
      </>
    );
  }
  const isPost = page.kind === "post";
  const date = new Date(page.date + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  return (
    <>
      <SiteNav />
      <main style={{ maxWidth: 780, margin: "0 auto", padding: "64px 24px 96px", fontFamily: "var(--font-core, system-ui)" }}>
        {isPost ? (
          <header style={{ marginBottom: 24 }}>
            <p style={{ font: "var(--type-label)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", margin: 0 }}>
              <a href="/blog/" style={{ color: "inherit", textDecoration: "none" }}>Blog</a> · {date}
            </p>
            <h1 style={{ font: "var(--type-h1)", color: "var(--text-strong)", margin: "10px 0 0" }}>{page.title.replace(/ \| Provo SEO Pros$/, "")}</h1>
            <p style={{ color: "var(--text-muted)", margin: "10px 0 0" }}>By Rich Soto, founder of Provo SEO Pros</p>
          </header>
        ) : null}
        <article className="wp-content" dangerouslySetInnerHTML={{ __html: page.html }} />
        <aside style={{ marginTop: 56, padding: "28px", borderRadius: "var(--radius-card, 14px)", background: "var(--surface-tint, #f2f8ff)", border: "1px solid var(--line-hairline)" }}>
          <p style={{ font: "var(--type-h3)", color: "var(--text-strong)", margin: 0 }}>Want to know what&apos;s holding your business back?</p>
          <p style={{ color: "var(--text-body)", margin: "8px 0 16px" }}>Book a free 30-minute Growth Audit. We reply within one business day.</p>
          <a href="/book-a-growth-audit/" className="wp-btn">Book a free Growth Audit</a>
        </aside>
      </main>
    </>
  );
}
