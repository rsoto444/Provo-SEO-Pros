"use client";
// GoHighLevel chat widget - the site's only SMS opt-in (A2P). Rendered into the
// page HTML on every page EXCEPT /thank-you/, which embeds the booking calendar:
// GoHighLevel's checklist allows no other phone/consent form where the widget is.
import { usePathname } from "next/navigation";

export default function ChatWidget() {
  const path = usePathname() || "/";
  if (path.startsWith("/thank-you")) return null;
  return (
    <script
      async
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6ab58410fad6c0284b9bf1e2"
      data-source="WEB_USER"
    />
  );
}
