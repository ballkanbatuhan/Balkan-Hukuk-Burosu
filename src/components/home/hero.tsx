import { ArrowLink } from "@/components/arrow-link";

export function Hero() {
  return (
    <section className="section-hero shell">
      <div className="flex items-baseline justify-between gap-6 border-b border-line pb-3.5">
        <p className="kicker text-ink">İstanbul · Türkiye</p>
        <p className="kicker hidden sm:block">Balkan Hukuk Bürosu</p>
      </div>

      <div className="mt-8 md:mt-10 lg:mt-12 lg:grid lg:grid-cols-12 lg:items-end lg:gap-16">
        <h1
          className="rise display text-[clamp(2.75rem,6.2vw,5.5rem)] leading-[0.98] lg:col-span-7 xl:col-span-8"
        >
          <span className="block">Hukuki meselelerde</span>
          <span className="mt-[0.05em] block">
            <em className="italic">özenli</em> bir yaklaşım.
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 lg:col-span-5 lg:col-start-8 lg:mt-0 xl:col-span-4 xl:col-start-9">
          <p className="lede max-w-[26rem]">
            İstanbul’da hukuki danışmanlık ve avukatlık. Bireysel ve kurumsal
            müvekkiller için ölçülü, net ve sürdürülebilir bir hukuk pratiği.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8">
            <ArrowLink href="/buro">Büroyu Tanıyın</ArrowLink>
            <ArrowLink href="/faaliyet-alanlari">Faaliyet Alanları</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
