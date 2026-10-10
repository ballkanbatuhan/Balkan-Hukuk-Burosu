import Image from "next/image";
import { ArrowLink } from "@/components/arrow-link";
import { SectionHeader } from "@/components/section-header";
import { media, publication } from "@/lib/content";

export function Publication() {
  return (
    <section id="yayin" aria-labelledby="yayin-baslik">
      <div className="section shell">
        <div className="grid items-start gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="contents lg:col-span-7 lg:block lg:space-y-8">
            <SectionHeader
              id="yayin-baslik"
              kicker={publication.eyebrow}
              title={publication.title}
            />

            <div className="order-3 lg:order-none">
              <p className="lede max-w-2xl text-pretty">{publication.description}</p>
              <div className="mt-8">
                <ArrowLink href="/yayin">Yayını İncele</ArrowLink>
              </div>
            </div>
          </div>

          <figure className="order-2 mx-auto w-full max-w-[16.5rem] sm:max-w-[18.5rem] lg:col-span-5 lg:col-start-8 lg:mx-0 lg:max-w-[22.5rem] lg:justify-self-end lg:order-none">
            <Image
              src={media.bookCover.src}
              alt={media.bookCover.alt}
              width={media.bookCover.width}
              height={media.bookCover.height}
              sizes="(min-width: 1024px) 360px, 70vw"
              className="h-auto w-full shadow-[0_28px_50px_-32px_rgba(23,26,31,0.55)]"
            />
            <figcaption className="mt-3.5 kicker text-ink">{publication.author}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
