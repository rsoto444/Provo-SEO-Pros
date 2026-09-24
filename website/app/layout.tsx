import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { site } from "@/lib/site.config";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Read at build time and inlined in <head>. Routed through the Tailwind
// pipeline the custom properties resolved to empty at runtime.
const ds = readFileSync(join(process.cwd(), "app", "ds.css"), "utf8");
// Archivo @font-face rules, snapshotted from Google Fonts and inlined so the
// stylesheet request stops render-blocking. Font files still load from gstatic.
const fontCss = readFileSync(join(process.cwd(), "app", "fonts.css"), "utf8");

// Deliberately a bare shell. The template pages carry their own header, nav and
// footer, so anything added here renders ON TOP of theirs and shows up as a
// stray bar above the promo strip.

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Archivo is what --font-core asks for. Without it every heading falls
            back to Helvetica and the display sizes stop reading as display. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <style dangerouslySetInnerHTML={{ __html: ds }} />
        <style dangerouslySetInnerHTML={{ __html: fontCss }} />
        {/* Google Analytics 4. gtag is defined up front so events fired before
            the library finishes loading (the thank-you lead event) are queued. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.ga4Id}');`,
          }}
        />
      </head>
      <body>
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`} strategy="afterInteractive" />
        {/* GoHighLevel chat widget (Provo SEO Pros). Required by the A2P campaign
            setup, and it collects text-message consent inside the chat. */}
        <script
          async
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6ab58410fad6c0284b9bf1e2"
          data-source="WEB_USER"
        />
        {/* Vercel Web Analytics: visitor counts, no cookies. */}
        <Analytics />
      </body>
    </html>
  );
}
