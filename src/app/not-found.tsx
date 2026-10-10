import { ArrowLink } from "@/components/arrow-link";
import { pageHeadingClass, sectionLedeClass } from "@/components/section-header";

export default function NotFound() {
  return (
    <article className="section shell">
      <p className="kicker">404</p>
      <h1 className={`mt-4 ${pageHeadingClass}`}>Sayfa bulunamadı.</h1>
      <p className={sectionLedeClass}>
        Aradığınız sayfa taşınmış veya henüz yayımlanmamış olabilir.
      </p>
      <div className="mt-10">
        <ArrowLink href="/">Ana sayfaya dön</ArrowLink>
      </div>
    </article>
  );
}
