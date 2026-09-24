// Standard page, minimally styled to the shipped design system.
// The booking page, at the same address it had on WordPress. Also the ads-sitelink landing page.
import SmsConsent from "../_components/SmsConsent";
import { site } from "@/lib/site.config";
import SiteNav from "../_components/SiteNav";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "../_components/JsonLd";

export const metadata = pageMeta({ title: "Book a Free Growth Audit | Provo SEO Pros", description: "Book a free 30-minute Growth Audit call with Provo SEO Pros. We reply within one business day.", path: "/book-a-growth-audit/" });

const field = { width: "100%", minHeight: "var(--control-h, 44px)", padding: "var(--pad-control, 10px 14px)", font: "var(--type-body)", color: "var(--text-strong)", background: "var(--surface-sunken, #f0efec)", border: "1px solid var(--line-hairline, #e3e2de)", borderRadius: "var(--radius-input, 10px)" };
const lab = { display: "grid", gap: 6, font: "var(--type-label)", letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "var(--text-muted, #73726e)" };

export default function Page() {
  return (
    <><JsonLd data={breadcrumbSchema([{ name: "Book a Free Growth Audit", path: "/book-a-growth-audit/" }])} />
    <SiteNav />
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "96px 24px", fontFamily: "var(--font-core, system-ui)" }}>
      <p style={{ font: "var(--type-label)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted, #73726e)" }}>Start here</p>
      <h1 style={{ font: "var(--type-h1)", color: "var(--text-strong, #1a1a19)", margin: "10px 0 16px" }}>Book your free Growth Audit</h1>
      <p style={{ color: "var(--text-body, #3f3f3c)", margin: 0 }}>
        A free 30-minute call about your website, Google Business Profile and local search presence, and what&apos;s
        getting in the way of more inquiries. We reply within one business day to set up your call.
      </p>
      <form method="post" action="/api/lead/" style={{ display: "grid", gap: 18, marginTop: 32 }}>
        <input type="hidden" name="form" value="book-a-growth-audit" />
        <label style={lab}>Your name *<input name="name" required autoComplete="name" placeholder="Your name" style={field} /></label>
        <label style={lab}>Email *<input type="email" name="email" required autoComplete="email" placeholder="Your email address" style={field} /></label>
        {/* Hidden: A2P: the GoHighLevel chat widget is the only SMS opt-in (owner decision) */}{false && (<label style={lab}>Phone<input type="tel" name="phone" autoComplete="tel" placeholder="Best number to reach you" style={field} /></label>)}
        <label style={lab}>Your website<input type="text" inputMode="url" name="website" autoComplete="url" placeholder="Your website address" style={field} /></label>
        <label style={lab}>Which service?
          <select name="service" style={field} defaultValue="">
            <option value="">Choose a service</option>
            {site.services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
        {/* Hidden: A2P: the GoHighLevel chat widget is the only SMS opt-in (owner decision) */}{false && <SmsConsent />} <button type="submit" style={{ minHeight: "var(--control-h, 44px)", borderRadius: "var(--radius-control, 999px)", border: 0, background: "var(--surface-brand, #0b62c9)", color: "var(--text-inverse, #fff)", font: "var(--type-button)", cursor: "pointer" }}>Book my free Growth Audit</button>
        <p style={{ font: "var(--type-caption)", color: "var(--text-muted, #73726e)", margin: 0, textAlign: "center" }}>
          Rather talk now? Call <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} style={{ color: "var(--text-link, #0b62c9)" }}>{site.phone}</a>, Monday to Friday, 9am to 5pm MT.
        </p>
      </form>
      <p style={{ marginTop: 32 }}><a href="/" style={{ color: "var(--text-link, #0b62c9)" }}>&larr; Back to the site</a></p>
    </main>
  </>
  );
}
