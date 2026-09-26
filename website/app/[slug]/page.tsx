// Top-level pages and blog posts carried over from WordPress, at their original addresses.
import { notFound } from "next/navigation";
import WpArticle, { wpMetadata } from "../_components/WpArticle";
import { wpPage, wpPages } from "@/lib/wp-pages";
import { blogPosts } from "@/lib/blog-posts";

const findPage = (path: string) => wpPage(path) ?? blogPosts.find((p) => p.path === path);

export const dynamicParams = false;

export function generateStaticParams() {
  return [...wpPages, ...blogPosts].filter((p) => /^\/[^/]+\/$/.test(p.path) && p.path !== "/service/").map((p) => ({ slug: p.path.split("/")[1] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = findPage(`/${slug}/`);
  if (!p) return {};
  // Drafts render for preview but are kept out of Google until /publish.
  return "draft" in p && p.draft ? { ...wpMetadata(p), robots: { index: false, follow: true } } : wpMetadata(p);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = findPage(`/${slug}/`);
  if (!p) notFound();
  return <WpArticle page={p} />;
}
