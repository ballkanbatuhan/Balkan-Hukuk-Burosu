import { ArrowLink } from "@/components/arrow-link";
import { sectionHeadingClass, sectionLedeClass } from "@/components/section-header";
import { office, site } from "@/lib/content";

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="size-3.5 shrink-0"
    >
      <path
        d="M2.5 4.5h11v7h-11v-7Z"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 5.25 8 9l5.5-3.75"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="size-3.5 shrink-0"
    >
      <path
        d="M4.25 2.75c.35-.35.9-.4 1.3-.15l1.45.9c.35.22.5.62.38 1l-.55 1.45c-.1.28 0 .6.22.78l1.05.85c.25.2.62.22.9.05l1.35-.85c.38-.24.88-.12 1.12.25l.85 1.45c.22.38.12.88-.25 1.12l-1.2.75c-.95.6-2.15.45-3.05-.35-1.35-1.2-2.45-2.65-3.25-4.2-.55-1-.45-2.25.35-3.05l.88-.95Z"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  const secondPhrase = office.slogan[1];
  const secondPhraseLead = secondPhrase.slice(0, secondPhrase.lastIndexOf(" "));
  const secondPhraseEmphasis = secondPhrase.slice(secondPhrase.lastIndexOf(" ") + 1);

  return (
    <section className="section-hero shell">
      <div className="flex items-baseline justify-between gap-6 border-b border-line pb-3.5">
        <p className="kicker text-ink">İstanbul · Türkiye</p>
        <div className="hidden shrink-0 items-baseline gap-4 sm:flex md:gap-5">
          <a
            href={`mailto:${site.email}`}
            className="kicker inline-flex items-center gap-2 normal-case transition-colors hover:text-ink"
          >
            <MailIcon />
            {site.email}
          </a>
          <a
            href={site.phoneHref}
            className="kicker inline-flex items-center gap-2 normal-case transition-colors hover:text-ink"
          >
            <PhoneIcon />
            {site.phoneDisplay}
          </a>
        </div>
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
