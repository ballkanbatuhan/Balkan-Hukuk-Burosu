import Image from "next/image";
import { ArrowLink } from "@/components/arrow-link";
import { media, publication } from "@/lib/content";

export function Publication() {
  return (
    <section id="yayin" className="border-b border-line" aria-labelledby="yayin-baslik">
      <div className="shell grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="lg:col-span-5">
          <p className="eyebrow">{publication.eyebrow}</p>
          <h2
            id="yayin-baslik"
            className="display mt-6 text-[clamp(2.1rem,4vw,3.15rem)]"
          >
            {publication.title}
          </h2>
          <p className="mt-6 text-sm tracking-wide text-muted">{publication.author}</p>
          <p className="mt-6 max-w-md text-base leading-8 text-ink-soft">
            {publication.description}
          </p>
          <div className="mt-8">
            <ArrowLink href="/yayin">Yayını İncele</ArrowLink>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-xs lg:col-span-3 lg:max-w-none">
          <Image
            src={media.bookCover.src}
            alt={media.bookCover.alt}
            width={media.bookCover.width}
            height={media.bookCover.height}
            sizes="(min-width: 1024px) 240px, 70vw"
            className="h-auto w-full"
          />
        </figure>
        <aside className="border-l border-line pl-6 lg:col-span-4">
          <p className="font-serif text-2xl leading-snug text-ink md:text-[1.7rem]">
            {publication.note}
          </p>
        </aside>
      </div>
    </section>
  );
}
