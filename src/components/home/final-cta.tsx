import { ArrowLink } from "@/components/arrow-link";

export function FinalCta() {
  return (
    <section aria-labelledby="gorusme-baslik" className="bg-night text-night-text">
      <div className="section shell">
        <h2 id="gorusme-baslik" className="heading">
          <span className="block">Hukuki bir konuda</span>
          <span className="block">görüşmek ister misiniz?</span>
        </h2>
        <div className="mt-8">
          <ArrowLink href="/iletisim">İletişime Geç</ArrowLink>
        </div>
      </div>
    </section>
  );
}
