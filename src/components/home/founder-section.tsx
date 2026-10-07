import { ArrowLink } from "@/components/arrow-link";
import { EditorialImage } from "@/components/editorial-image";
import { sectionBodyClass, sectionLedeClass } from "@/components/section-header";
import { founder, media } from "@/lib/content";

export function FounderSection() {
  return (
    <section id="kurucu" aria-labelledby="kurucu-baslik">
      <div className="section shell">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <figure className="lg:col-span-5 lg:pr-4 xl:pr-10">
            <EditorialImage
              src={media.portrait.src}
              alt={media.portrait.alt}
              width={media.portrait.width}
              height={media.portrait.height}
              zoom
              objectFit="contain"
              objectPosition="top center"
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="w-full bg-white"
            />
            <figcaption className="mt-3.5 flex items-baseline justify-between gap-4">
              <span className="kicker text-ink">{founder.name}</span>
              <span className="kicker">{founder.role}</span>
            </figcaption>
          </figure>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-2 xl:pt-8">
            <p className="kicker">Kurucu</p>
            <h2 id="kurucu-baslik" className="heading mt-4">
              {founder.name}
            </h2>
            <p className={sectionLedeClass}>{founder.summary}</p>
            <div className="mt-8">
              <ArrowLink href="/av-zeynep-balkan">Profili İncele</ArrowLink>
            </div>

            <dl className="mt-12 border-t border-line md:mt-16">
              {founder.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-1.5 border-b border-line py-5 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
                >
                  <dt className="kicker">{fact.label}</dt>
                  <dd className={sectionBodyClass}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
