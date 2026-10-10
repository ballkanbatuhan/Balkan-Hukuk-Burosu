import { Contact } from "@/components/home/contact";
import { createMetadata } from "@/lib/seo";
import { office } from "@/lib/content";

export const metadata = createMetadata({
  title: office.contactTitle,
  description: office.contactIntro,
  path: "/iletisim",
  index: false,
});

export default function ContactPage() {
  return <Contact heading="h1" />;
}
