import { ArrowLink } from "@/components/arrow-link";

export function FinalCta() {
  return (
    <section className="border-t border-line" aria-labelledby="gorusme-baslik">
      <div className="shell py-24 text-center md:py-32">
        <h2
          id="gorusme-baslik"
          className="display mx-auto max-w-3xl text-[clamp(2.2rem,5vw,3.8rem)]"
        >
          Hukuki bir konuda
          <span className="block">görüşmek ister misiniz?</span>
        </h2>
        <div className="mt-10">
          <ArrowLink href="/iletisim" variant="solid">
            İletişime Geç
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
