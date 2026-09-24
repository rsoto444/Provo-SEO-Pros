// Standard legal page. The text lives in lib/legal.ts, copied from the owner's WordPress site.
import SiteNav from "../_components/SiteNav";
import { privacyPolicyHtml } from "@/lib/legal";

export const metadata = {
  title: "Privacy Policy",
  description: "How Provo SEO Pros collects, uses and protects information from website visitors, leads, clients, CRM and SMS communications.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function Page() {
  return (
    <>
      <SiteNav />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px 96px", fontFamily: "var(--font-core, system-ui)" }}>
        <p style={{ font: "var(--type-label)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted, #73726e)", margin: 0 }}>Privacy Policy</p>
        <article className="legal" dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }} />
        <p style={{ marginTop: 40 }}><a href="/" style={{ color: "var(--text-link, #0b62c9)" }}>&larr; Back to the site</a></p>
      </main>
    </>
  );
}
