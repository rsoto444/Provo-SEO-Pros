// Standard legal page. The text lives in lib/legal.ts, copied from the owner's WordPress site.
import SiteNav from "../_components/SiteNav";
import { privacyPolicyHtml } from "@/lib/legal";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "../_components/JsonLd";

export const metadata = pageMeta({ title: "Privacy Policy | Provo SEO Pros", description: "How Provo SEO Pros collects, uses and protects information from website visitors, leads, clients, CRM and SMS communications.", path: "/privacy-policy/" });

export default function Page() {
  return (
    <><JsonLd data={breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy-policy/" }])} />
      <SiteNav />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px 96px", fontFamily: "var(--font-core, system-ui)" }}>
        <p style={{ font: "var(--type-label)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted, #73726e)", margin: 0 }}>Privacy Policy</p>
        <article className="legal" dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }} />
        <p style={{ marginTop: 40 }}><a href="/" style={{ color: "var(--text-link, #0b62c9)" }}>&larr; Back to the site</a></p>
      </main>
    </>
  );
}
