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

export default function WpArticle({ page }: { page: WpPage }) {
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
