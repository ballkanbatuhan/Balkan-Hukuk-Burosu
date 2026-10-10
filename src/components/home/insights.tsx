import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { SectionHeader, sectionBlockSpacing } from "@/components/section-header";
import { articles, formatPracticeNumber } from "@/lib/content";

export function Insights() {
  return (
    <section id="hukuki-bilgi" aria-labelledby="hukuki-bilgi-baslik" className="bg-stone">
      <div className="section shell">
        <SectionHeader
          id="hukuki-bilgi-baslik"
          kicker="Seçilmiş içerikler"
          title="Hukuki Bilgi"
          description="Güncel hukuki konular üzerine seçilmiş içerikler."
          action={
            <ArrowLink href="/hukuki-bilgi">Tüm içerikler</ArrowLink>
          }
        />

        <ol className={`${sectionBlockSpacing} border-t border-line`}>
          {articles.map((article, index) => (
            <li key={article.slug} className="border-b border-line">
              <Link
                href={`/hukuki-bilgi/${article.slug}`}
                className="group grid gap-3 py-6 md:grid-cols-12 md:items-baseline md:gap-6 md:py-8"
              >
                <span className="kicker tabular-nums md:col-span-1">
                  {formatPracticeNumber(index)}
                </span>
                <h3 className="item-title text-ink transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1 md:col-span-5">
                  {article.title}
                </h3>
                <p className="text-base leading-7 text-muted md:col-span-4">{article.excerpt}</p>
                <span className="text-[0.9375rem] font-medium text-ink md:col-span-2 md:text-right">
                  <span className="border-b border-ink/25 pb-0.5 transition-colors duration-200 group-hover:border-ink">
                    Devamını oku
                  </span>
                  <span aria-hidden="true"> →</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
