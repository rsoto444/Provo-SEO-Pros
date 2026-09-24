// Top-level pages and blog posts carried over from WordPress, at their original addresses.
import { notFound } from "next/navigation";
import WpArticle, { wpMetadata } from "../_components/WpArticle";
import { wpPage, wpPages } from "@/lib/wp-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return wpPages.filter((p) => /^\/[^/]+\/$/.test(p.path) && p.path !== "/service/").map((p) => ({ slug: p.path.split("/")[1] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = wpPage(`/${slug}/`);
  return p ? wpMetadata(p) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = wpPage(`/${slug}/`);
  if (!p) notFound();
  return <WpArticle page={p} />;
}
