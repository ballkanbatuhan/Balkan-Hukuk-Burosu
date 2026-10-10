import { ArrowLink } from "@/components/arrow-link";
import { EditorialImage } from "@/components/editorial-image";
import { SectionHeader, sectionBodyClass } from "@/components/section-header";
import { founder, media } from "@/lib/content";

export function FounderSection() {
  return (
    <section id="kurucu" aria-labelledby="kurucu-baslik">
      <div className="section shell">
        <div className="flex flex-col gap-y-10 lg:grid lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-16 lg:gap-y-12">
          <div className="order-1 lg:col-span-7 lg:row-start-1">
            <SectionHeader
              id="kurucu-baslik"
              kicker="Kurucu"
              title={founder.name}
            />
          </div>

          <figure
            className="order-2 mx-auto w-full max-w-[17.5rem] sm:max-w-xs md:max-w-sm lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:max-w-none lg:self-center"
          >
            <EditorialImage
              src={media.portrait.src}
              alt={media.portrait.alt}
              width={media.portrait.width}
              height={media.portrait.height}
              objectFit="contain"
              objectPosition="top center"
              sizes="(min-width: 1024px) 34vw, 24rem"
              className="w-full bg-white"
            />
            <figcaption className="mt-3.5 flex items-baseline justify-between gap-4">
              <span className="kicker text-ink">{founder.name}</span>
              <span className="kicker">{founder.role}</span>
            </figcaption>
          </figure>

          <div className="order-3 lg:col-span-7 lg:row-start-2">
            <p className="lede max-w-2xl text-pretty">{founder.summary}</p>
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
