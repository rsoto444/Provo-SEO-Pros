// Standard page, minimally styled to the shipped design system.
// Prices come from lib/site.config.ts - every figure there was given by the owner.
import { site } from "@/lib/site.config";
import SiteNav from "../_components/SiteNav";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "../_components/JsonLd";

export const metadata = pageMeta({ title: "Pricing | Provo SEO Pros", description: "Starting prices for local SEO, Google Business Profile, AI search, websites, CRM follow-up and Google Ads. Scope and terms confirmed in writing before any work begins.", path: "/pricing/" });

const label = { font: "var(--type-label)", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--text-muted, #73726e)" };
const body = { color: "var(--text-body, #3f3f3c)", margin: 0 };

export default function Page() {
  return (
    <><JsonLd data={breadcrumbSchema([{ name: "Pricing", path: "/pricing/" }])} />
    <SiteNav />
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "96px 24px", fontFamily: "var(--font-core, system-ui)" }}>
      <p style={label}>What it costs</p>
      <h1 style={{ font: "var(--type-h1)", color: "var(--text-strong, #1a1a19)", margin: "10px 0 16px" }}>Pricing</h1>
      <p style={body}>
        Starting prices for every service. Your exact scope, investment and deliverables are confirmed in writing
        before any work begins. Not sure what fits? Start with a free 30-minute Growth Audit call.
      </p>
      <p style={{ margin: "24px 0 0" }}>
        <a href="/contact/#book" style={{ display: "inline-block", padding: "12px 22px", borderRadius: "var(--radius-control, 999px)", background: "var(--surface-accent, #1a1a1a)", color: "var(--text-on-accent, #fff)", textDecoration: "none", font: "var(--type-button)" }}>Book a free Growth Audit</a>
      </p>

      <div style={{ display: "grid", gap: 16, marginTop: 48 }}>
        {site.services.map((s) => (
          <section key={s.slug} style={{ background: "var(--surface-card, #fff)", border: "1px solid var(--line-hairline, #e3e2de)", borderRadius: "var(--radius-card, 14px)", padding: "24px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
              <h2 style={{ font: "var(--type-h3)", color: "var(--text-strong, #1a1a19)", margin: 0 }}>{s.name}</h2>
              <strong style={{ color: "var(--text-strong, #1a1a19)" }}>{s.price}</strong>
            </div>
            <p style={{ ...body, marginTop: 8 }}>{s.blurb}</p>
            {"more" in s && s.more ? (
              <p style={{ ...body, marginTop: 8 }}>
                <a href={s.more.href} style={{ color: "var(--text-link, #0b62c9)" }}>{s.more.label} &rarr;</a>
              </p>
            ) : null}
          </section>
        ))}
      </div>

      <h2 style={{ font: "var(--type-h2)", color: "var(--text-strong, #1a1a19)", margin: "56px 0 12px" }}>Terms, in plain words</h2>
      <ul style={{ ...body, paddingLeft: 20, display: "grid", gap: 8 }}>
        <li>The Local Visibility Blueprint™ is a one-time project with no ongoing commitment.</li>
        <li>Ongoing plans have a 6-month minimum, then continue month to month. Cancel with 30 days&apos; notice.</li>
        <li>Google Ads spend is always separate from the management fee.</li>
        <li>Scope, investment and terms are confirmed in writing before any work begins.</li>
      </ul>
      <p style={{ marginTop: 32 }}><a href="/" style={{ color: "var(--text-link, #0b62c9)" }}>&larr; Back to the site</a></p>
    </main>
  </>
  );
}
