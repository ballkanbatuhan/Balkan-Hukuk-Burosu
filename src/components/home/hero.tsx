import { ArrowLink } from "@/components/arrow-link";
import { EditorialImage } from "@/components/editorial-image";
import { media } from "@/lib/content";

export function Hero() {
  return (
    <section className="shell pb-20 pt-8 md:pb-28 md:pt-14">
      <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="rise lg:col-span-6 lg:pb-8">
          <p className="eyebrow">Balkan Hukuk Bürosu</p>
          <h1 className="display mt-6 max-w-xl text-[clamp(2.7rem,6.4vw,4.8rem)]">
            Hukuki meselelerde
            <span className="block">özenli bir yaklaşım.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-8 text-muted">
            İstanbul’da, Av. Zeynep Balkan’ın liderliğinde hukuki danışmanlık ve
            avukatlık hizmetleri.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ArrowLink href="/buro" variant="solid">
              Büroyu Tanıyın
            </ArrowLink>
            <ArrowLink href="/faaliyet-alanlari" variant="outline">
              Faaliyet Alanları
            </ArrowLink>
          </div>
        </div>
        <figure className="lg:col-span-6">
          <EditorialImage
            src={media.portrait.src}
            alt={media.portrait.alt}
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="aspect-[4/5] w-full"
          />
          <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[0.68rem] uppercase tracking-[0.18em] text-muted">
            <span>Av. Zeynep Balkan</span>
            <span>Portre eklenecek</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
