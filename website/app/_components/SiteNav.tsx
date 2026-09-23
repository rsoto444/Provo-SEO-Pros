// Slim header for the standard pages (services, blog, pricing, quote, reviews),
// so every page carries the nav, the phone and the one booking button.
import { site } from "@/lib/site.config";

const link = { textDecoration: "none", font: "var(--weight-semibold) var(--size-body-sm)/1 var(--font-core)", color: "var(--text-body)" };

export default function SiteNav() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "var(--surface-card)", borderBottom: "var(--border-hairline, 1px) solid var(--line-hairline)" }}>
      <div style={{ maxWidth: "var(--container-max, 1160px)", margin: "0 auto", padding: "0 var(--gutter, 24px)", minHeight: 74, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-5, 24px)" }}>
        <a href="/" style={{ textDecoration: "none", display: "grid", gap: 2 }}>
          <span style={{ font: "var(--weight-black) 21px/1 var(--font-core)", letterSpacing: "-0.03em", color: "var(--text-strong)" }}>{site.name}</span>
          <span style={{ font: "var(--type-label)", letterSpacing: "var(--track-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>SEO for Local Businesses</span>
        </a>
        <nav style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-5, 24px)" }}>
          <a href="/" style={link}>Home</a>
          <a href="/services" style={link}>Services</a>
          <a href="/about" style={link}>About</a>
          <a href="/blog" style={link}>Blog</a>
          <a href="/contact" style={link}>Contact</a>
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--space-4, 16px)" }}>
          <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} style={{ ...link, font: "var(--type-body)", color: "var(--text-strong)" }}>{site.phone}</a>
          <a href="/contact#book" style={{ textDecoration: "none", padding: "12px 16px", borderRadius: "var(--radius-control, 999px)", background: "var(--surface-accent, #1a1a1a)", color: "var(--text-on-accent, #fff)", font: "var(--type-button)", whiteSpace: "nowrap" }}>Book a free Growth Audit</a>
        </div>
      </div>
    </header>
  );
}
