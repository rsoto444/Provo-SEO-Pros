// Standard page, minimally styled to the shipped design system.
// /build-website fills it with the real business; until then it stays honest.
// Kept out of search (noindex + out of the sitemap) until there are at least 3 real reviews - one review alone is a thin page.
import SiteNav from "../_components/SiteNav";

export const metadata = { title: "Reviews", robots: { index: false, follow: true } };

export default function Page() {
  return (
    <>
    <SiteNav />
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "96px 24px", fontFamily: "var(--font-core, system-ui)" }}>
      <p style={{ font: "var(--type-label)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted, #73726e)" }}>What clients say</p>
      <h1 style={{ font: "var(--type-h1)", color: "var(--text-strong, #1a1a19)", margin: "10px 0 16px" }}>Reviews</h1>
      <p style={{ color: "var(--text-body, #3f3f3c)" }}>
        We only publish reviews that clients actually leave, copied word for word.
      </p>
      <figure style={{ margin: "32px 0 0", padding: "24px", borderRadius: "var(--radius-card, 14px)", background: "var(--surface-card, #fff)", border: "1px solid var(--line-hairline, #e3e2de)" }}>
        <p aria-label="5 out of 5 stars" style={{ margin: 0, color: "var(--star-filled, #2272e0)", letterSpacing: "2px" }}>★★★★★</p>
        <blockquote style={{ margin: "10px 0 0", font: "var(--type-body-lg)", color: "var(--text-strong, #1a1a19)" }}>
          Rich is awesome! He is an expert in his field and I can&apos;t recommend him enough! Thank you!
        </blockquote>
        <figcaption style={{ marginTop: 12, color: "var(--text-muted, #73726e)" }}>Zack V. · Google review · October 2025</figcaption>
      </figure>
      <p style={{ color: "var(--text-body, #3f3f3c)", marginTop: 24 }}>
        Worked with us?{" "}
        <a href="https://search.google.com/local/writereview?placeid=ChIJPQqUNYebTYcR9jBBeUaPb2U" target="_blank" rel="noopener" style={{ color: "var(--text-link, #0b62c9)" }}>Leave an honest review on Google</a>.
        Thinking about working with us? The best way to judge us is a free 30-minute Growth Audit call.
      </p>
      <p style={{ marginTop: 24 }}>
        <a href="/contact/#book" style={{ display: "inline-block", padding: "12px 22px", borderRadius: "var(--radius-control, 999px)", background: "var(--surface-accent, #1a1a1a)", color: "var(--text-on-accent, #fff)", textDecoration: "none", font: "var(--type-button)" }}>Book a free Growth Audit</a>
      </p>
      <p style={{ marginTop: 32 }}><a href="/" style={{ color: "var(--text-link, #0b62c9)" }}>&larr; Back to the site</a></p>
    </main>
  </>
  );
}
