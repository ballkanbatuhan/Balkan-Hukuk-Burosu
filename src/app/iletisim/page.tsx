import { Contact } from "@/components/home/contact";
import { JsonLd } from "@/components/json-ld";
import { seoCopy } from "@/content/seo";
import { office } from "@/lib/content";
import { breadcrumbHome, createMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: office.contactTitle,
  description: seoCopy.contact,
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          breadcrumbHome,
          { name: "İletişim", path: "/iletisim" },
        ])}
      />
      <Contact heading="h1" />
    </>
  );
}
