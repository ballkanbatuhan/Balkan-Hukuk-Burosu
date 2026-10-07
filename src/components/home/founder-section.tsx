import { ArrowLink } from "@/components/arrow-link";
import { EditorialImage } from "@/components/editorial-image";
import { founder, media } from "@/lib/content";

export function FounderSection() {
  return (
    <section id="kurucu" className="border-t border-line" aria-labelledby="kurucu-baslik">
      <div className="shell py-20 md:py-28 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1">
            <p className="eyebrow">{founder.role}</p>
            <h2
              id="kurucu-baslik"
              className="display mt-5 text-[clamp(2.2rem,4vw,3.3rem)]"
            >
              {founder.name}
            </h2>
          </div>
          <figure className="lg:col-span-4 lg:col-start-5 lg:row-span-2 lg:row-start-1">
            <EditorialImage
              src={media.portrait.src}
              alt={media.portrait.alt}
              sizes="(min-width: 1024px) 28vw, 100vw"
              className="aspect-[4/5] w-full"
            />
          </figure>
          <div className="lg:col-span-4 lg:col-start-1 lg:row-start-2">
            <p className="text-base leading-8 text-ink-soft">{founder.summary}</p>
            <div className="mt-8">
              <ArrowLink href="/av-zeynep-balkan">Profili İncele</ArrowLink>
            </div>
          </div>
          <dl className="divide-y divide-line border-y border-line lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1">
            {founder.facts.map((fact) => (
              <div key={fact.label} className="grid gap-2 py-5 sm:grid-cols-[7.5rem_1fr]">
                <dt className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-accent">
                  {fact.label}
                </dt>
                <dd className="text-sm leading-6 text-ink-soft">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
