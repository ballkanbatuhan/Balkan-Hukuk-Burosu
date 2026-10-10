import Link from "next/link";
import { SitePage } from "@/components/site-page";
import { formatPracticeNumber, office, practiceAreas } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: office.practiceTitle,
  description: office.practiceIntro,
  path: "/faaliyet-alanlari",
  index: false,
});

export default function PracticeAreasPage() {
  return (
    <SitePage
      eyebrow="Balkan Hukuk Bürosu"
      title={office.practiceTitle}
      description={office.practiceIntro}
    >
      <ol className="border-t border-line">
        {practiceAreas.map((area, index) => (
          <li key={area.slug} className="border-b border-line">
            <Link
              href={`/faaliyet-alanlari/${area.slug}`}
              className="flex items-baseline gap-4 py-5 md:py-6"
            >
              <span className="kicker w-8 tabular-nums">{formatPracticeNumber(index)}</span>
              <span className="item-title">{area.title}</span>
            </Link>
          </li>
        ))}
      </ol>
    </SitePage>
  );
}
