import { SitePage } from "@/components/site-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Büro",
  description:
    "Balkan Hukuk Bürosu’nun çalışma yaklaşımı: dikkatli analiz, açık iletişim ve özenli süreç takibi.",
  path: "/buro",
  index: false,
});

export default function BuroPage() {
  return (
    <SitePage
      eyebrow="Büro"
      title="Büro"
      description="Yaklaşımımız; dikkatli analiz, açık iletişim ve özenli bir süreç takibi üzerine kuruludur. Bu sayfanın ayrıntılı içeriği hazırlanıyor."
    />
  );
}
