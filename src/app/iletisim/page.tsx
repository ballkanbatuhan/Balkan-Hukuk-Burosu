import { Contact } from "@/components/home/contact";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/content";

export const metadata = createMetadata({
  title: "İletişim",
  description: `${site.name} iletişim bilgileri. ${site.address.district} / ${site.address.city}.`,
  path: "/iletisim",
  index: false,
});

export default function ContactPage() {
  return <Contact heading="h1" />;
}
