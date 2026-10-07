import Link from "next/link";
import { SitePage } from "@/components/site-page";
import { articles } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hukuki Bilgi",
  description: "Güncel hukuki konular üzerine seçilmiş içerikler.",
  path: "/hukuki-bilgi",
  index: false,
});

export default function InsightsPage() {
  return (
    <SitePage
      eyebrow="Seçilmiş içerikler"
      title="Hukuki Bilgi"
      description="Güncel hukuki konular üzerine seçilmiş içerikler. Aşağıdaki başlıklar yer tutucudur; metinler henüz yayımlanmadı."
    >
      <ul className="border-t border-line">
        {articles.map((article) => (
          <li key={article.slug} className="border-b border-line">
            <Link href={`/hukuki-bilgi/${article.slug}`} className="block py-5">
              <span className="text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                Yakında
              </span>
              <span className="mt-2 block font-serif text-2xl">{article.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </SitePage>
  );
}
