import { ArrowLink } from "@/components/arrow-link";
import { EditorialImage } from "@/components/editorial-image";
import { sectionBlockSpacing } from "@/components/section-header";
import { media } from "@/lib/content";

export function Approach() {
  return (
    <section id="yaklasim" aria-labelledby="yaklasim-baslik" className="bg-stone">
      <div className="section shell">
        <p className="kicker">Yaklaşım</p>
        <h2
          id="yaklasim-baslik"
          className="heading mt-4 max-w-[18ch]"
        >
          Her hukuki mesele
          <span className="block">kendi koşulları içinde değerlendirilir.</span>
        </h2>

        <div className={`${sectionBlockSpacing} grid items-end gap-12 lg:grid-cols-12 lg:gap-16`}>
          <figure className="lg:col-span-7">
            <EditorialImage
              src={media.workspace.src}
              alt={media.workspace.alt}
              zoom
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="aspect-[3/2] w-full"
            />
            <figcaption className="mt-3.5 kicker">Çalışma ortamı</figcaption>
          </figure>
          <div className="lg:col-span-4 lg:col-start-9 lg:pb-10">
            <p className="lede text-pretty">
              Yaklaşımımız; dikkatli analiz, açık iletişim ve özenli bir süreç takibi
              üzerine kuruludur. Amacımız, müvekkillerimizin hukuki süreçlerinde
              güvenilir, anlaşılır ve sürdürülebilir çözümler sunmaktır.
            </p>
            <div className="mt-8">
              <ArrowLink href="/buro">Büroyu Tanıyın</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
