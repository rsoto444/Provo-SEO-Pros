// Top-level pages and blog posts carried over from WordPress, at their original addresses.
import { notFound } from "next/navigation";
import WpArticle, { wpMetadata } from "../_components/WpArticle";
import { wpPage, wpPages } from "@/lib/wp-pages";
import { blogPosts } from "@/lib/blog-posts";

// Draft posts exist only on localhost and Vercel previews. On the live site (VERCEL_ENV=production) they are not built at all,
// so their address is a 404 until the post is published (draft: false).
const showDrafts = process.env.VERCEL_ENV !== "production";
const isDraft = (p: object) => "draft" in p && !!(p as { draft?: boolean }).draft;
const posts = blogPosts.filter((p) => showDrafts || !isDraft(p));

const findPage = (path: string) => wpPage(path) ?? posts.find((p) => p.path === path);

export const dynamicParams = false;

export function generateStaticParams() {
  return [...wpPages, ...posts].filter((p) => /^\/[^/]+\/$/.test(p.path) && p.path !== "/service/").map((p) => ({ slug: p.path.split("/")[1] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = findPage(`/${slug}/`);
  if (!p) return {};
  // On previews a draft renders but is kept out of Google until /publish.
  return isDraft(p) ? { ...wpMetadata(p), robots: { index: false, follow: true } } : wpMetadata(p);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = findPage(`/${slug}/`);
  if (!p) notFound();
  return <WpArticle page={p} />;
}
