import { SitePage } from "@/components/site-page";
import { kvkkNotice } from "@/content/legal";
import { site } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: kvkkNotice.title,
  description: kvkkNotice.description,
  path: "/kvkk",
});

export default function KvkkPage() {
  return (
    <SitePage eyebrow="Yasal" title={kvkkNotice.title} description={kvkkNotice.description}>
      <div className="space-y-10 text-base leading-7 text-ink-soft">
        <section aria-labelledby="veri-sorumlusu">
          <h2 id="veri-sorumlusu" className="font-serif text-[1.65rem] leading-tight text-ink">
            {kvkkNotice.sections[0].heading}
          </h2>
          <p className="mt-4">{kvkkNotice.sections[0].paragraphs[0]}</p>
          <address className="mt-4 not-italic text-ink">
            {site.address.street}
            <br />
            {site.address.district} / {site.address.city} {site.address.postalCode}
            <br />
            <a href={site.phoneHref} className="transition-colors hover:text-accent">
              {site.phoneDisplay}
            </a>
            <br />
            <a
              href={`mailto:${site.email}`}
              className="break-all transition-colors hover:text-accent sm:break-normal"
            >
              {site.email}
            </a>
          </address>
        </section>

        {kvkkNotice.sections.slice(1).map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <h2 id={section.id} className="font-serif text-[1.65rem] leading-tight text-ink">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section aria-labelledby="haklariniz">
          <h2 id="haklariniz" className="font-serif text-[1.65rem] leading-tight text-ink">
            Haklarınız
          </h2>
          <p className="mt-4">{kvkkNotice.rightsIntro}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {kvkkNotice.rights.map((right) => (
              <li key={right}>{right}</li>
            ))}
          </ul>
          <div className="mt-4 space-y-4">
            {kvkkNotice.application.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <p className="text-sm leading-6 text-muted">
          Bu metin {kvkkNotice.updated} tarihinde, sitenin bu tarihteki işleyişine göre
          yazılmıştır.
        </p>
      </div>
    </SitePage>
  );
}
