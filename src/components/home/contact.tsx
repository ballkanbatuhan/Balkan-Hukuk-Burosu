import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { MapPlaceholder } from "@/components/map-placeholder";
import { SectionHeader, sectionBlockSpacing, sectionBodyClass } from "@/components/section-header";
import { office, site } from "@/lib/content";

type ContactProps = {
  heading?: "h1" | "h2";
  layout?: "page" | "home";
};

const contactIntro = office.contactIntro;

export function Contact({ heading = "h2", layout = "page" }: ContactProps) {
  return (
    <section
      id="iletisim"
      aria-labelledby="iletisim-baslik"
      className={layout === "home" ? "bg-stone border-b border-line" : undefined}
    >
      <div className="section shell">
        <SectionHeader
          id="iletisim-baslik"
          heading={heading}
          variant={heading === "h1" ? "page" : "section"}
          kicker="Beyoğlu · İstanbul"
          title={office.contactTitle}
          description={contactIntro}
        />

        <div className={`${sectionBlockSpacing} border-t border-line pt-8 md:pt-10`}>
          {layout === "page" ? (
            <div className="flex flex-col gap-10 md:gap-12">
              <ContactDetails variant="grid" />
              <ArrowLink href={`mailto:${site.email}`}>
                E-posta gönderin
              </ArrowLink>
              <KvkkNotice />
              <MapPlaceholder
                layout="contact"
                className="mx-auto w-full max-w-[34rem] sm:max-w-[38rem]"
              />
            </div>
          ) : (
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-x-16">
              <div className="w-full lg:w-[42%] lg:max-w-[26rem] lg:shrink-0">
                <ContactDetails />
                <div className="mt-10">
                  <ArrowLink href={`mailto:${site.email}`}>
                    E-posta gönderin
                  </ArrowLink>
                  <KvkkNotice />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <MapPlaceholder layout="contact" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

type ContactDetailsProps = {
  variant?: "list" | "grid";
};

function KvkkNotice() {
  return (
    <p className="mt-6 max-w-sm text-sm leading-6 text-muted">
      <Link
        href="/kvkk"
        className="border-b border-current/30 pb-0.5 transition-colors hover:text-accent"
      >
        Kişisel verilerin işlenmesine ilişkin aydınlatma metni
      </Link>
    </p>
  );
}

function ContactDetails({ variant = "list" }: ContactDetailsProps) {
  const rowClass =
    "grid gap-1.5 border-b border-line pb-5 sm:grid-cols-[8.5rem_1fr] sm:items-baseline sm:gap-6";

  const gridItemClass = "flex flex-col gap-2.5";

  if (variant === "grid") {
    return (
      <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-10">
        <div className={gridItemClass}>
          <dt className="kicker">Adres</dt>
          <dd className={sectionBodyClass}>
            {site.address.street}
            <br />
            {site.address.district} / {site.address.city}{" "}
            {site.address.postalCode}
          </dd>
        </div>
        <div className={gridItemClass}>
          <dt className="kicker">Telefon</dt>
          <dd>
            <a
              href={site.phoneHref}
              className={`${sectionBodyClass} transition-colors hover:text-accent`}
            >
              {site.phoneDisplay}
            </a>
          </dd>
        </div>
        <div className={`${gridItemClass} sm:col-span-2 lg:col-span-1`}>
          <dt className="kicker">E-Posta</dt>
          <dd>
            <a
              href={`mailto:${site.email}`}
              className={`${sectionBodyClass} break-all transition-colors hover:text-accent sm:break-normal`}
            >
              {site.email}
            </a>
          </dd>
        </div>
      </dl>
    );
  }

  return (
    <dl>
      <div className={`${rowClass} pt-0`}>
        <dt className="kicker">Adres</dt>
        <dd className={sectionBodyClass}>
          {site.address.street}
          <br />
          {site.address.district} / {site.address.city} {site.address.postalCode}
        </dd>
      </div>
      <div className={`${rowClass} pt-5`}>
        <dt className="kicker">Telefon</dt>
        <dd>
          <a
            href={site.phoneHref}
            className={`${sectionBodyClass} transition-colors hover:text-accent`}
          >
            {site.phoneDisplay}
          </a>
        </dd>
      </div>
      <div className={`${rowClass} pt-5`}>
        <dt className="kicker">E-Posta</dt>
        <dd>
          <a
            href={`mailto:${site.email}`}
            className={`${sectionBodyClass} break-all transition-colors hover:text-accent sm:break-normal`}
          >
            {site.email}
          </a>
        </dd>
      </div>
    </dl>
  );
}
