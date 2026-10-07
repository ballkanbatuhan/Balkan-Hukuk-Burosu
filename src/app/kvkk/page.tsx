import { SitePage } from "@/components/site-page";
import { createMetadata } from "@/lib/seo";

const legalNotice =
  "Bu metin hazırlanıyor. Yayımlanmadan önce ayrıca hukuki metin olarak yazılacaktır.";

export const metadata = createMetadata({
  title: "KVKK",
  description: legalNotice,
  path: "/kvkk",
  index: false,
});

export default function KvkkPage() {
  return <SitePage eyebrow="Yasal" title="KVKK" description={legalNotice} />;
}
