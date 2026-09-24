// Short address kept for anyone who saw it; the booking page lives at its WordPress address.
import { permanentRedirect } from "next/navigation";

export default function Page() {
  permanentRedirect("/book-a-growth-audit/");
}
