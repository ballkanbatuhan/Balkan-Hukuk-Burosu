import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { EditorialImage } from "@/components/editorial-image";
import { SectionHeader, sectionBlockSpacing } from "@/components/section-header";
import { formatPracticeNumber, media, practiceAreas } from "@/lib/content";

const practiceIntro =
  "Danışmanlık ve avukatlık hizmetlerimizi, uyuşmazlığın niteliğine göre şekillenen hukuk dallarında sunuyoruz. Her dosya, ilgili alanın usulü ve koşulları çerçevesinde; ölçülü hazırlık ve net bir süreç takibiyle ele alınır.";

export function PracticeAreas() {
  return (
    <section id="faaliyet-alanlari" aria-labelledby="faaliyet-baslik" className="bg-stone">
      <div className="section shell">
        <SectionHeader
          id="faaliyet-baslik"
          kicker="Çalışma"
          title="Faaliyet Alanları"
          description={practiceIntro}
        />

        <ol
          className={`${sectionBlockSpacing} border-t border-line lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-6 lg:gap-x-16`}
        >
          {practiceAreas.map((area, index) => (
            <li key={area.slug} className="border-b border-line">
              <Link
                href={`/faaliyet-alanlari/${area.slug}`}
                className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-4 py-5 md:gap-5 md:py-6"
              >
                <span className="kicker tabular-nums">{formatPracticeNumber(index)}</span>
                <span className="item-title text-ink transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1">
                  {area.title}
                </span>
                <span
                  aria-hidden="true"
                  className="text-sm text-muted transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <ArrowLink href="/faaliyet-alanlari">Tüm faaliyet alanları</ArrowLink>
        </div>

        <figure className="mt-12 md:mt-16 lg:mt-20">
          <EditorialImage
            src={media.columns.src}
            alt={media.columns.alt}
            zoom
            objectPosition="center bottom"
            sizes="(min-width: 1024px) 68rem, 100vw"
            className="aspect-[16/9] w-full lg:aspect-[2.2/1]"
          />
          <figcaption className="mt-3.5 kicker">Taş ve ölçü</figcaption>
        </figure>
      </div>
    </section>
  );
}
