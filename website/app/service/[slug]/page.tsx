// Service pages carried over from WordPress, at their original /service/... addresses.
import { notFound } from "next/navigation";
import WpArticle, { wpMetadata } from "../../_components/WpArticle";
import { wpPage, wpPages } from "@/lib/wp-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return wpPages.filter((p) => /^\/service\/[^/]+\/$/.test(p.path)).map((p) => ({ slug: p.path.split("/")[2] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = wpPage(`/service/${slug}/`);
  return p ? wpMetadata(p) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = wpPage(`/service/${slug}/`);
  if (!p) notFound();
  return <WpArticle page={p} />;
}
