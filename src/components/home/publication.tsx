import Image from "next/image";
import { ArrowLink } from "@/components/arrow-link";
import { sectionLedeClass } from "@/components/section-header";
import { media, publication } from "@/lib/content";

export function Publication() {
  return (
    <section id="yayin" aria-labelledby="yayin-baslik">
      <div className="section shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <figure className="order-2 lg:order-1 lg:col-span-5">
          <Image
            src={media.bookCover.src}
            alt={media.bookCover.alt}
            width={media.bookCover.width}
            height={media.bookCover.height}
            sizes="(min-width: 1024px) 340px, 72vw"
            className="mx-auto h-auto w-full max-w-[17.5rem] shadow-[0_28px_50px_-32px_rgba(23,26,31,0.55)] sm:max-w-[20rem] lg:mx-0 lg:max-w-[22.5rem]"
          />
        </figure>

        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <p className="kicker">{publication.eyebrow}</p>
          <h2 id="yayin-baslik" className="heading mt-4">
            Sosyal Medya Haberciliğinde
            <span className="block">Kişilik Hakkı İhlali</span>
          </h2>
          <p className="mt-6 kicker text-ink">{publication.author}</p>
          <p className={sectionLedeClass}>{publication.description}</p>
          <blockquote className="quote mt-10 border-t border-line pt-8 text-ink">
            {publication.note}
          </blockquote>
          <div className="mt-8">
            <ArrowLink href="/yayin">Yayını İncele</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
