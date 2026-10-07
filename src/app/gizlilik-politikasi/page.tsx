import { SitePage } from "@/components/site-page";
import { createMetadata } from "@/lib/seo";

const legalNotice =
  "Bu metin hazırlanıyor. Yayımlanmadan önce ayrıca hukuki metin olarak yazılacaktır.";

export const metadata = createMetadata({
  title: "Gizlilik Politikası",
  description: legalNotice,
  path: "/gizlilik-politikasi",
  index: false,
});

export default function PrivacyPage() {
  return (
    <SitePage eyebrow="Yasal" title="Gizlilik Politikası" description={legalNotice} />
  );
}
