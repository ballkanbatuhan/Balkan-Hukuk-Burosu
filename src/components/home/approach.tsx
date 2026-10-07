import { ArrowLink } from "@/components/arrow-link";
import { EditorialImage } from "@/components/editorial-image";
import { media } from "@/lib/content";

export function Approach() {
  return (
    <section id="yaklasim" className="border-t border-line" aria-labelledby="yaklasim-baslik">
      <div className="shell grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <figure className="order-2 lg:order-1 lg:col-span-6">
          <EditorialImage
            src={media.workspace.src}
            alt={media.workspace.alt}
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="aspect-[4/3] w-full"
          />
        </figure>
        <div className="order-1 lg:order-2 lg:col-span-6">
          <p className="eyebrow">Balkan Hukuk Bürosu</p>
          <h2
            id="yaklasim-baslik"
            className="display mt-6 text-[clamp(2.1rem,4vw,3.4rem)]"
          >
            Her hukuki mesele
            <span className="block">kendi koşulları içinde değerlendirilir.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            Yaklaşımımız; dikkatli analiz, açık iletişim ve özenli bir süreç takibi
            üzerine kuruludur. Amacımız, müvekkillerimizin hukuki süreçlerinde
            güvenilir, anlaşılır ve sürdürülebilir çözümler sunmaktır.
          </p>
          <div className="mt-8">
            <ArrowLink href="/buro">Büroyu Tanıyın</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
