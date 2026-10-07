import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { articles } from "@/lib/content";

export function Insights() {
  return (
    <section
      id="hukuki-bilgi"
      aria-labelledby="hukuki-bilgi-baslik"
      className="shell py-20 md:py-28 lg:py-32"
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-xl">
          <h2 id="hukuki-bilgi-baslik" className="display text-[clamp(2.2rem,4vw,3.4rem)]">
            Hukuki Bilgi
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Güncel hukuki konular üzerine seçilmiş içerikler.
          </p>
        </div>
        <ArrowLink href="/hukuki-bilgi">Tüm içerikler</ArrowLink>
      </div>
      <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
        {articles.map((article) => (
          <article key={article.slug} className="border-t border-ink pt-6">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-accent">
              Yakında
            </p>
            <h3 className="mt-4 font-serif text-[1.65rem] leading-snug tracking-tight">
              <Link href={`/hukuki-bilgi/${article.slug}`} className="hover:text-ink-soft">
                {article.title}
              </Link>
            </h3>
            <p className="mt-4 text-sm leading-6 text-muted">{article.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
