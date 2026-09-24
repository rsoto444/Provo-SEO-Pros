import WpArticle, { wpMetadata } from "../_components/WpArticle";
import { wpPage } from "@/lib/wp-pages";

const page = wpPage("/service/")!;
export const metadata = wpMetadata(page);

export default function Page() {
  return <WpArticle page={page} />;
}
