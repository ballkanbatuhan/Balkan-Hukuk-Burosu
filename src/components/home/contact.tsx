import { ArrowLink } from "@/components/arrow-link";
import { MapPlaceholder } from "@/components/map-placeholder";
import { sectionBodyClass, sectionLedeClass } from "@/components/section-header";
import { site } from "@/lib/content";

type ContactProps = {
  heading?: "h1" | "h2";
  layout?: "page" | "home";
};

const contactIntro =
  "Görüşme talebi, randevu ve dosya ile ilgili sorularınız için bize ulaşabilirsiniz.";

export function Contact({ heading = "h2", layout = "page" }: ContactProps) {
  const TitleTag = heading;
  const titleClass =
    heading === "h1" ? "page-title mt-4" : "heading mt-4";

  return (
    <section
      id="iletisim"
      aria-labelledby="iletisim-baslik"
      className={layout === "home" ? "bg-stone" : undefined}
    >
      <div className="section shell">
        <p className="kicker">Beyoğlu · İstanbul</p>
        <TitleTag id="iletisim-baslik" className={titleClass}>
          İletişim
        </TitleTag>
        {layout === "page" ? (
          <p className={sectionLedeClass}>{contactIntro}</p>
        ) : null}

        <div className="mt-10 border-t border-line pt-8 md:mt-12 md:pt-10">
          {layout === "page" ? (
            <div className="flex flex-col gap-10 md:gap-12">
              <ContactDetails variant="grid" />
              <ArrowLink href={`mailto:${site.email}`}>
                E-posta gönderin
              </ArrowLink>
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
                </div>
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-5">
                <p className="lede m-0 w-full max-w-none text-pretty md:text-lg md:leading-8">
                  {contactIntro}
                </p>
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
          <dt className="kicker">E-posta</dt>
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
        <dt className="kicker">E-posta</dt>
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
