// The /services branch index - baked into the template so the nav never lands
// on junk. This IS a real hub page shape (pyramid rule 7): kicker + H1 naming
// the branch, intro, one section per service, no forms, no offer pricing.
//
// /build-website Step 2 replaces the three placeholder sections below with one
// section per keyword-map service hub (name, 2-4 real sentences, photo,
// descriptive link) and keeps this page's shape exactly.
import type { CSSProperties } from "react";
import { site } from "@/lib/site.config";
import SiteNav from "../_components/SiteNav";

export const metadata = {
  title: "Local SEO and Marketing Services",
  description: "Local SEO, Google Business Profile, AI search, websites, CRM follow-up and Google Ads for local businesses in the US and Canada. Book a free Growth Audit.",
};

const wrap: CSSProperties = { maxWidth: "var(--container-max, 1160px)", margin: "0 auto", padding: "0 var(--gutter, 24px)" };
const eyebrow: CSSProperties = { font: "var(--type-label)", letterSpacing: "var(--track-label)", textTransform: "uppercase", color: "var(--text-muted)" };
const h1s: CSSProperties = { font: "var(--type-display)", letterSpacing: "var(--track-display)", color: "var(--text-strong)", margin: "var(--space-4) 0 0" };
const h2s: CSSProperties = { font: "var(--type-h2)", letterSpacing: "var(--track-heading)", color: "var(--text-strong)", margin: 0 };
const body: CSSProperties = { font: "var(--type-body-lg)", color: "var(--text-body)", margin: "var(--space-3) 0 0", maxWidth: "52ch" };

const SERVICES = site.services.map((s) => ({ name: s.name, blurb: s.blurb, photo: s.photo, photoAlt: s.photoAlt, more: "more" in s ? s.more : undefined }));

export default function ServicesIndex() {
  return (
    <>
    <SiteNav />
    <main style={{ background: "var(--surface-page, #f9f8f6)" }}>
      <section style={{ padding: "var(--space-9, 88px) 0 var(--space-7, 48px)" }}>
        <div style={wrap}>
          <p style={eyebrow}>What we do</p>
          <h1 style={h1s}>Services</h1>
          <p style={body}>
            Everything Provo SEO Pros does for local businesses across the United States and Canada.
            Not sure where to start? That&rsquo;s what the free 30-minute Growth Audit is for.
          </p>
          <p style={{ ...body, margin: "var(--space-5) 0 0" }}>
            <a href="/contact/#book" style={{ display: "inline-block", padding: "12px 22px", borderRadius: "var(--radius-control, 999px)", background: "var(--surface-accent, #1a1a1a)", color: "var(--text-on-accent, #fff)", textDecoration: "none", font: "var(--type-button)" }}>Book a free Growth Audit</a>
          </p>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section
          key={s.name}
          style={{
            padding: "var(--space-8, 64px) 0",
            background: i % 2 ? "var(--surface-page, #f9f8f6)" : "var(--surface-card, #fff)",
            borderTop: "1px solid var(--line-hairline, #e3e2de)",
          }}
        >
          <div style={{ ...wrap, display: "grid", gap: "var(--space-7, 48px)", gridTemplateColumns: "minmax(0,1fr) minmax(0,420px)", alignItems: "center" }}>
            <div>
              <h2 style={h2s}>{s.name}</h2>
              <p style={body}>{s.blurb}</p>
              {s.more ? (
                <p style={{ ...body, margin: "var(--space-3) 0 0" }}>
                  <a href={s.more.href} style={{ color: "var(--text-link, #0b62c9)" }}>{s.more.label} &rarr;</a>
                </p>
              ) : null}
              <p style={{ ...body, margin: "var(--space-4) 0 0" }}>
                <a href="/contact/#book" style={{ color: "var(--text-link, #0b62c9)" }}>Ask about {s.name} on a free Growth Audit call &rarr;</a>
              </p>
            </div>
            <img
              src={s.photo}
              alt={s.photoAlt}
              loading="lazy"
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "var(--radius-media, 14px)", display: "block" }}
            />
          </div>
        </section>
      ))}

      <section style={{ padding: "var(--space-8, 64px) 0", borderTop: "1px solid var(--line-hairline, #e3e2de)" }}>
        <div style={wrap}>
          <p style={{ ...body, margin: 0 }}>
            <a href="/" style={{ color: "var(--text-link, #0b62c9)" }}>&larr; Back to the site</a>
          </p>
        </div>
      </section>
    </main>
  </>
  );
}
