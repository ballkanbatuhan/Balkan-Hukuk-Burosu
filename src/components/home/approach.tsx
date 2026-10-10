import Image from "next/image";
import { ArrowLink } from "@/components/arrow-link";
import { SectionHeader, sectionBlockSpacing } from "@/components/section-header";
import { media, office } from "@/lib/content";

export function Approach() {
  return (
    <section
      id="yaklasim"
      aria-labelledby="yaklasim-baslik"
      className="relative overflow-hidden bg-night text-night-text"
    >
      <Image
        src={media.workspace.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[58%_42%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-night/82 via-night/70 to-night/58 lg:via-night/58 lg:to-night/30"
      />

      <div className="section shell relative [&_.kicker]:text-[#e4d3b4]">
        <SectionHeader
          id="yaklasim-baslik"
          kicker="Büro"
          title="Vizyonumuz, misyonumuz ve değerlerimiz."
        />

        <div className={`${sectionBlockSpacing} max-w-xl`}>
          <dl className="space-y-8">
            {office.principles.map((principle) => (
              <div key={principle.title}>
                <dt className="kicker text-[#e4d3b4]">{principle.title}</dt>
                <dd className="mt-3 text-pretty text-base leading-7 text-night-text/90">{principle.text}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <ArrowLink href="/buro">Büro</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
