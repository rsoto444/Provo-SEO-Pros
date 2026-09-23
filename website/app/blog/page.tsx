// The /blog branch index - baked into the template. A real index shape
// (pyramid rule 7): kicker + H1 naming the branch, intro, one entry per post.
// Never an <article>, never a post wearing the index URL.
//
// /blog-post appends one entry per published post: title as a descriptive
// link, one-sentence hook, date. Posts live FLAT at /blog/[slug].
import type { CSSProperties } from "react";
import SiteNav from "../_components/SiteNav";

export const metadata = {
  title: "Blog",
  description: "Plain-English advice on local SEO, Google Business Profile and AI search for local business owners.",
};

const wrap: CSSProperties = { maxWidth: "var(--container-max, 1160px)", margin: "0 auto", padding: "0 var(--gutter, 24px)" };
const eyebrow: CSSProperties = { font: "var(--type-label)", letterSpacing: "var(--track-label)", textTransform: "uppercase", color: "var(--text-muted)" };
const h1s: CSSProperties = { font: "var(--type-display)", letterSpacing: "var(--track-display)", color: "var(--text-strong)", margin: "var(--space-4) 0 0" };
const body: CSSProperties = { font: "var(--type-body-lg)", color: "var(--text-body)", margin: "var(--space-3) 0 0", maxWidth: "52ch" };

// /blog-post adds entries here, newest first: { slug, title, hook, date }
const POSTS: ReadonlyArray<{ slug: string; title: string; hook: string; date: string }> = [];

export default function BlogIndex() {
  return (
    <>
    <SiteNav />
    <main style={{ background: "var(--surface-page, #f9f8f6)", minHeight: "70vh" }}>
      <section style={{ padding: "var(--space-9, 88px) 0 var(--space-7, 48px)" }}>
        <div style={wrap}>
          <p style={eyebrow}>The blog</p>
          <h1 style={h1s}>Local SEO advice, written to be used.</h1>
          <p style={body}>
            Plain-English advice on local SEO, Google Business Profile and AI search, for local
            business owners who would rather understand what they&rsquo;re paying for.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 var(--space-9, 88px)" }}>
        <div style={wrap}>
          {POSTS.length === 0 ? (
            <div
              style={{
                border: "1px dashed var(--line-strong, #c5c4bf)",
                borderRadius: "var(--radius-card, 14px)",
                padding: "var(--space-7, 48px)",
                textAlign: "center",
                color: "var(--text-muted, #73726e)",
                font: "var(--type-body)",
              }}
            >
              The first posts are on their way. Have a question now?{" "}
              <a href="/contact#book" style={{ color: "var(--text-link, #0b62c9)" }}>Ask it on a free Growth Audit call</a>.
            </div>
          ) : (
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "var(--space-5, 24px)" }}>
              {POSTS.map((post) => (
                <li key={post.slug} style={{ borderBottom: "1px solid var(--line-hairline, #e3e2de)", paddingBottom: "var(--space-5, 24px)" }}>
                  <p style={{ ...eyebrow, marginBottom: 6 }}>{post.date}</p>
                  <a href={`/blog/${post.slug}`} style={{ font: "var(--type-h2)", color: "var(--text-strong)", textDecoration: "none" }}>
                    {post.title}
                  </a>
                  <p style={{ ...body, marginTop: 8 }}>{post.hook}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  </>
  );
}
