// Standard page, minimally styled to the shipped design system.
// /build-website fills it with the real business; until then it stays honest.
// Kept out of search (noindex + out of the sitemap) until real client reviews exist.
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
        We only publish reviews that clients actually leave, copied word for word. The first ones will appear here
        as they come in. Until then, the best way to judge us is a free 30-minute Growth Audit call: you&apos;ll see
        exactly how we think about your business before you spend anything.
      </p>
      <p style={{ marginTop: 24 }}>
        <a href="/contact#book" style={{ display: "inline-block", padding: "12px 22px", borderRadius: "var(--radius-control, 999px)", background: "var(--surface-accent, #1a1a1a)", color: "var(--text-on-accent, #fff)", textDecoration: "none", font: "var(--type-button)" }}>Book a free Growth Audit</a>
      </p>
      <p style={{ marginTop: 32 }}><a href="/" style={{ color: "var(--text-link, #0b62c9)" }}>&larr; Back to the site</a></p>
    </main>
  </>
  );
}
