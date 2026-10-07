import { SitePage } from "@/components/site-page";
import { createMetadata } from "@/lib/seo";

const legalNotice =
  "Bu metin hazırlanıyor. Yayımlanmadan önce ayrıca hukuki metin olarak yazılacaktır.";

export const metadata = createMetadata({
  title: "Yasal Bilgilendirme",
  description: legalNotice,
  path: "/yasal-bilgilendirme",
  index: false,
});

export default function LegalNoticePage() {
  return (
    <SitePage eyebrow="Yasal" title="Yasal Bilgilendirme" description={legalNotice} />
  );
}
