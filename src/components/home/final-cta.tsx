import { ArrowLink } from "@/components/arrow-link";
import { sectionHeadingClass } from "@/components/section-header";
import { office } from "@/lib/content";

export function FinalCta() {
  return (
    <section aria-labelledby="gorusme-baslik" className="bg-night text-night-text">
      <div className="section shell">
        <h2 id="gorusme-baslik" className={sectionHeadingClass}>
          {office.contactTitle}
        </h2>
        <div className="mt-8">
          <ArrowLink href="/iletisim">İletişim</ArrowLink>
        </div>
      </div>
    </section>
  );
}
