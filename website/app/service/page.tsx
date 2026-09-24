// The old WordPress services list was merged into /services/ (owner approved,
// Thursday 24 September 2026). The individual /service/... pages still live here.
import { permanentRedirect } from "next/navigation";

export default function Page() {
  permanentRedirect("/services/");
}
