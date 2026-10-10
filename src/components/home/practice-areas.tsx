import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { SectionHeader, sectionBlockSpacing } from "@/components/section-header";
import { formatPracticeNumber, media, office, practiceAreas } from "@/lib/content";

export function PracticeAreas() {
  return (
    <section
      id="faaliyet-alanlari"
      aria-labelledby="faaliyet-baslik"
      className="section-night relative overflow-hidden bg-night text-night-text"
    >
      <Image
        src={media.columns.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_40%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-night/86 via-night/76 to-night/66"
      />

      <div className="section shell relative [&_.kicker]:text-[#e4d3b4]">
        <SectionHeader
          id="faaliyet-baslik"
          kicker="Balkan Hukuk Bürosu"
          title={office.practiceTitle}
          description={office.practiceIntro}
        />

        <ol
          className={`${sectionBlockSpacing} border-t border-white/20 lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-6 lg:gap-x-16`}
        >
          {practiceAreas.map((area, index) => (
            <li key={area.slug} className="border-b border-white/20">
              <Link
                href={`/faaliyet-alanlari/${area.slug}`}
                className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-4 py-5 md:gap-5 md:py-6"
              >
                <span className="kicker tabular-nums">{formatPracticeNumber(index)}</span>
                <span className="item-title text-night-text transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1">
                  {area.title}
                </span>
                <span
                  aria-hidden="true"
                  className="text-[0.9375rem] text-night-text/70 transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <ArrowLink href="/faaliyet-alanlari">Daha Fazlası</ArrowLink>
        </div>
      </div>
    </section>
  );
}
