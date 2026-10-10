import { ArrowLink } from "@/components/arrow-link";
import { sectionHeadingClass, sectionLedeClass } from "@/components/section-header";
import { office } from "@/lib/content";

export function Hero() {
  const secondPhrase = office.slogan[1];
  const secondPhraseLead = secondPhrase.slice(0, secondPhrase.lastIndexOf(" "));
  const secondPhraseEmphasis = secondPhrase.slice(secondPhrase.lastIndexOf(" ") + 1);

  return (
    <section className="section-hero shell">
      <div className="flex items-baseline justify-between gap-6 border-b border-line pb-3.5">
        <p className="kicker text-ink">İstanbul · Türkiye</p>
        <p className="kicker hidden sm:block">Balkan Hukuk Bürosu</p>
      </div>

      <div className="mt-10 md:mt-12 lg:mt-14">
        <h1 className={`rise ${sectionHeadingClass}`}>
          <span className="block sm:inline">{office.slogan[0]},</span>{" "}
          <span className="block sm:inline">
            {secondPhraseLead}{" "}
            <em className="italic">{secondPhraseEmphasis}</em>.
          </span>
        </h1>

        <p className={sectionLedeClass}>{office.heroIntro}</p>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8">
          <ArrowLink href="/av-zeynep-balkan">Hakkımızda</ArrowLink>
          <ArrowLink href="/iletisim">İletişim</ArrowLink>
        </div>
      </div>
    </section>
  );
}
