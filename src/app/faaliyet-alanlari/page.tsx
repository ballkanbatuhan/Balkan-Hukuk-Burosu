import Link from "next/link";
import { SitePage } from "@/components/site-page";
import { formatPracticeNumber, practiceAreas } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Faaliyet Alanları",
  description:
    "Balkan Hukuk Bürosu’nun çalışma alanları. Her dosya, kendi usulü ve koşulları içinde ele alınır.",
  path: "/faaliyet-alanlari",
  index: false,
});

export default function PracticeAreasPage() {
  return (
    <SitePage
      eyebrow="Çalışma"
      title="Faaliyet Alanları"
      description="Her dosya, ait olduğu hukuk alanının kendi usulü ve koşulları içinde ele alınır. Alan sayfalarının ayrıntılı metinleri hazırlanıyor."
    >
      <ol className="border-t border-line">
        {practiceAreas.map((area, index) => (
          <li key={area.slug} className="border-b border-line">
            <Link
              href={`/faaliyet-alanlari/${area.slug}`}
              className="flex items-baseline gap-4 py-4"
            >
              <span className="w-8 text-xs tracking-[0.16em] text-accent">
                {formatPracticeNumber(index)}
              </span>
              <span className="font-serif text-2xl">{area.title}</span>
            </Link>
          </li>
        ))}
      </ol>
    </SitePage>
  );
}
