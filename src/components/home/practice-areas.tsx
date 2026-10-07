import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { formatPracticeNumber, practiceAreas } from "@/lib/content";

export function PracticeAreas() {
  return (
    <section
      id="faaliyet-alanlari"
      className="bg-night text-night-text"
      aria-labelledby="faaliyet-baslik"
    >
      <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <div className="lg:col-span-4">
          <h2 id="faaliyet-baslik" className="display text-[clamp(2.2rem,4vw,3.4rem)]">
            Faaliyet Alanları
          </h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-night-text/70">
            Her dosya, ait olduğu hukuk alanının kendi usulü ve koşulları içinde
            ele alınır.
          </p>
          <div className="mt-8">
            <ArrowLink href="/faaliyet-alanlari" className="text-night-text">
              Tüm faaliyet alanları
            </ArrowLink>
          </div>
        </div>
        <ol className="lg:col-span-8 lg:grid lg:grid-cols-2 lg:gap-x-12">
          {practiceAreas.map((area, index) => (
            <li key={area.slug} className="border-b border-white/15">
              <Link
                href={`/faaliyet-alanlari/${area.slug}`}
                className="group flex items-baseline gap-4 py-4 transition-colors duration-200 hover:text-white motion-safe"
              >
                <span className="w-8 shrink-0 text-xs tracking-[0.16em] text-accent">
                  {formatPracticeNumber(index)}
                </span>
                <span className="flex-1 font-serif text-xl tracking-tight md:text-[1.35rem]">
                  {area.title}
                </span>
                <span
                  aria-hidden="true"
                  className="translate-x-0 text-night-text/40 transition duration-200 group-hover:translate-x-1 group-hover:text-night-text motion-safe"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
