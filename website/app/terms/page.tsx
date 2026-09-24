// The WordPress site (and every existing link) uses /terms-and-conditions/.
// This short address just forwards there.
import { permanentRedirect } from "next/navigation";

export default function Page() {
  permanentRedirect("/terms-and-conditions/");
}
