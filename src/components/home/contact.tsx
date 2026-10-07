import { MapPlaceholder } from "@/components/map-placeholder";
import { site } from "@/lib/content";

type ContactProps = {
  heading?: "h1" | "h2";
};

export function Contact({ heading = "h2" }: ContactProps) {
  return (
    <section id="iletisim" className="border-t border-line" aria-labelledby="iletisim-baslik">
      <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <div className="lg:col-span-5">
          {heading === "h1" ? (
            <h1 id="iletisim-baslik" className="display text-[clamp(2.2rem,4vw,3.4rem)]">
              İletişim
            </h1>
          ) : (
            <h2 id="iletisim-baslik" className="display text-[clamp(2.2rem,4vw,3.4rem)]">
              İletişim
            </h2>
          )}
          <p className="mt-6 text-lg leading-8 text-muted">
            Görüşmek için bize ulaşabilirsiniz.
          </p>
          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-accent">
                Adres
              </dt>
              <dd className="mt-2 text-base leading-7 text-ink-soft">
                {site.address.street}
                <br />
                {site.address.district} / {site.address.city} {site.address.postalCode}
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-accent">
                Telefon
              </dt>
              <dd className="mt-2">
                <a href={site.phoneHref} className="text-base text-ink-soft hover:text-ink">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-accent">
                E-posta
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="text-base text-ink-soft hover:text-ink"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-7">
          <MapPlaceholder label={`${site.name}, ${site.address.district}`} />
        </div>
      </div>
    </section>
  );
}
