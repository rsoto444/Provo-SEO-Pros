// Free written SEO audit - the landing page for the review + referral campaign
// (owner, 25 September 2026). Separate from the 30-minute Growth Audit call.
// The review ask happens AFTER delivery and is never a condition of the audit
// (Google's review policy bans reviews in exchange for services).
import { pageMeta, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import JsonLd from "../_components/JsonLd";
import SiteNav from "../_components/SiteNav";
import { site } from "@/lib/site.config";

const PATH = "/free-seo-audit/";
const TITLE = "Free Written SEO Audit for Local Businesses | Provo SEO Pros";
const DESC = "A free written SEO audit from Provo SEO Pros: your website, Google Business Profile and AI search readiness, with your top fixes first. No cost or obligation.";

export const metadata = pageMeta({ title: TITLE, description: DESC, path: PATH });

const wrap = { maxWidth: "var(--container-max, 1160px)", margin: "0 auto", padding: "0 var(--gutter, 24px)" };
const field = { width: "100%", minHeight: "var(--control-h, 44px)", padding: "var(--pad-control, 10px 14px)", font: "var(--type-body)", color: "var(--text-strong)", background: "var(--surface-sunken, #f0efec)", border: "1px solid var(--line-hairline, #e3e2de)", borderRadius: "var(--radius-input, 10px)" };
const lab = { display: "grid", gap: 6, font: "var(--type-label)", letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "var(--text-muted)" };
const kicker = { font: "var(--type-label)", letterSpacing: "var(--track-label)", textTransform: "uppercase" as const, color: "var(--text-brand)", margin: 0 };
const h2 = { font: "var(--type-h2)", letterSpacing: "var(--track-heading)", color: "var(--text-strong)", margin: "8px 0 16px" };
const card = { background: "var(--surface-card)", border: "1px solid var(--line-hairline)", borderRadius: "var(--radius-card, 16px)", padding: 24 };

const checks = [
  { t: "Your website", d: "Titles, headings, speed on a phone, broken links, and whether Google can find every page." },
  { t: "Your Google Business Profile", d: "Categories, services, hours, photos, reviews, and whether it matches your website." },
  { t: "How you show up in search", d: "What people see when they search for your service in your area, on Google and Maps." },
  { t: "AI search readiness", d: "Whether tools like Google's AI answers can read who you are, what you do and where you work." },
];

const steps = [
  { n: "1", t: "Send your details", d: "Your name, email, business and website. No logins or passwords needed." },
  { n: "2", t: "Rich reviews it personally", d: "Rich Soto, founder of Provo SEO Pros, does every audit himself." },
  { n: "3", t: "You get a written report", d: "Emailed to you, with your top fixes first. Yours to keep and use however you like." },
];

const faqs = [
  { q: "Is the audit really free?", a: "Yes. There is no cost, and you don't have to buy anything or book a call to get your report." },
  { q: "What do I need to give you?", a: "Just your name, email, business name and website. The audit starts from what's publicly visible, so no logins or passwords are needed." },
  { q: "Who does the audit?", a: "Rich Soto, who has done SEO for local businesses since 2001. It is not an automated tool report." },
  { q: "What happens after I get the report?", a: "Nothing, unless you want it to. If you'd like help with the fixes, we can talk. If not, the report is still yours to use on your own." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: "Free Written SEO Audit", path: PATH }]),
        serviceSchema("Free Written SEO Audit", DESC, PATH),
      ]} />
      <SiteNav />
      <main style={{ fontFamily: "var(--font-core, system-ui)" }}>
        {/* Hero + form */}
        <section style={{ background: "var(--surface-brand)", color: "var(--white)", padding: "64px 0 72px" }}>
          <div style={{ ...wrap, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40, alignItems: "start" }}>
            <div>
              <p style={{ ...kicker, color: "var(--white)" }}>Free written audit</p>
              <h1 style={{ font: "var(--type-display)", letterSpacing: "var(--track-display)", color: "var(--white)", margin: "12px 0 18px" }}>
                Get a free written SEO audit of your business
              </h1>
              <p style={{ font: "var(--type-body-lg)", color: "var(--white)", margin: "0 0 14px", maxWidth: "52ch" }}>
                Rich Soto reviews your website, your Google Business Profile and how you show up on Google, Maps and AI search.
                Then you get a short written report with your top fixes first.
              </p>
              <p style={{ font: "var(--type-body-lg)", color: "var(--white)", margin: 0, fontWeight: 700 }}>No cost. No obligation. No sales pressure.</p>
            </div>
            <form method="post" action="/api/lead/" style={{ ...card, display: "grid", gap: 16, boxShadow: "0 18px 50px rgba(10, 30, 70, .28)", border: 0 }}>
              <input type="hidden" name="form" value="free-seo-audit" />
              <input type="hidden" name="service" value="Free Written SEO Audit" />
              <h2 style={{ font: "var(--type-h3)", color: "var(--text-strong)", margin: 0 }}>Request your free audit</h2>
              <label style={lab}>Your name *<input name="name" required autoComplete="name" placeholder="Your name" style={field} /></label>
              <label style={lab}>Email *<input type="email" name="email" required autoComplete="email" placeholder="Where we send your report" style={field} /></label>
              <label style={lab}>Business name *<input name="business" required autoComplete="organization" placeholder="Your business name" style={field} /></label>
              <label style={lab}>Your website<input type="text" inputMode="url" name="website" autoComplete="url" placeholder="Your website address" style={field} /></label>
              <label style={lab}>City<input name="city" autoComplete="address-level2" placeholder="Where you do business" style={field} /></label>
              <button type="submit" style={{ minHeight: "var(--control-h, 44px)", borderRadius: "var(--radius-control, 999px)", border: 0, background: "var(--text-strong)", color: "var(--white)", font: "var(--type-button)", cursor: "pointer" }}>
                Send me my free audit
              </button>
              <p style={{ font: "var(--type-caption)", color: "var(--text-muted)", margin: 0, textAlign: "center" }}>
                Questions? Call <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} style={{ color: "var(--text-link)" }}>{site.phone}</a>, Monday to Friday, 9am to 5pm MT.
              </p>
            </form>
          </div>
        </section>

        {/* What's checked */}
        <section style={{ padding: "72px 0" }}>
          <div style={wrap}>
            <p style={kicker}>What&apos;s in the audit</p>
            <h2 style={h2}>Four things that decide whether local customers find you</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {checks.map((c) => (
                <div key={c.t} style={card}>
                  <h3 style={{ font: "var(--type-h3)", color: "var(--text-strong)", margin: "0 0 8px" }}>{c.t}</h3>
                  <p style={{ margin: 0, color: "var(--text-body)" }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ padding: "72px 0", background: "var(--surface-tint)" }}>
          <div style={wrap}>
            <p style={kicker}>How it works</p>
            <h2 style={h2}>Three steps, and the report is yours</h2>
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {steps.map((s) => (
                <li key={s.n} style={card}>
                  <p style={{ font: "var(--type-label)", color: "var(--text-brand)", margin: "0 0 6px" }}>Step {s.n}</p>
                  <h3 style={{ font: "var(--type-h3)", color: "var(--text-strong)", margin: "0 0 8px" }}>{s.t}</h3>
                  <p style={{ margin: 0, color: "var(--text-body)" }}>{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Proof */}
        <section style={{ padding: "72px 0" }}>
          <div style={{ ...wrap, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <img src="/images/rich-soto-founder.webp" alt="Rich Soto, founder of Provo SEO Pros" width={120} height={120} loading="lazy" style={{ borderRadius: "50%", flex: "0 0 auto" }} />
              <div>
                <p style={kicker}>Who does your audit</p>
                <h2 style={{ ...h2, margin: "8px 0 8px" }}>Rich Soto, founder</h2>
                <p style={{ margin: 0, color: "var(--text-body)" }}>SEO for local businesses since 2001. Based in Provo, Utah.</p>
              </div>
            </div>
            <figure style={{ ...card, margin: 0 }}>
              <p aria-label="5 out of 5 stars" style={{ color: "#f5a623", margin: "0 0 8px", letterSpacing: 2 }}>★★★★★</p>
              <blockquote style={{ margin: 0, font: "var(--type-body-lg)", color: "var(--text-strong)" }}>
                Rich is awesome! He is an expert in his field and I can&apos;t recommend him enough! Thank you!
              </blockquote>
              <figcaption style={{ marginTop: 10, color: "var(--text-muted)" }}>Zack V. · Google review · October 2025</figcaption>
            </figure>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "72px 0", background: "var(--surface-tint)" }}>
          <div style={{ ...wrap, maxWidth: 820 }}>
            <p style={kicker}>Questions</p>
            <h2 style={h2}>Free SEO audit questions</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {faqs.map((f) => (
                <div key={f.q} style={card}>
                  <h3 style={{ font: "var(--type-h3)", color: "var(--text-strong)", margin: "0 0 8px" }}>{f.q}</h3>
                  <p style={{ margin: 0, color: "var(--text-body)" }}>{f.a}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 32 }}>
              Prefer to talk it through live? <a href="/book-a-growth-audit/" style={{ color: "var(--text-link)" }}>Book a free 30-minute Growth Audit call</a> instead.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
