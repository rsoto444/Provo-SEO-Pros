// Standard legal page. The text lives in lib/legal.ts, copied from the owner's WordPress site.
import SiteNav from "../_components/SiteNav";
import { termsHtml } from "@/lib/legal";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "../_components/JsonLd";

export const metadata = pageMeta({ title: "Terms and Conditions | Provo SEO Pros", description: "The terms that apply when you use the Provo SEO Pros website, book a Growth Audit, or engage us for marketing services.", path: "/terms-and-conditions/" });

export default function Page() {
  return (
    <><JsonLd data={breadcrumbSchema([{ name: "Terms and Conditions", path: "/terms-and-conditions/" }])} />
      <SiteNav />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px 96px", fontFamily: "var(--font-core, system-ui)" }}>
        <p style={{ font: "var(--type-label)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted, #73726e)", margin: 0 }}>Terms &amp; Conditions</p>
        <article className="legal" dangerouslySetInnerHTML={{ __html: termsHtml }} />
        <p style={{ marginTop: 40 }}><a href="/" style={{ color: "var(--text-link, #0b62c9)" }}>&larr; Back to the site</a></p>
      </main>
    </>
  );
}
