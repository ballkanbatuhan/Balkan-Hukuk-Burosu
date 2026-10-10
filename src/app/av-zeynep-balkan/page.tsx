import { EditorialImage } from "@/components/editorial-image";
import { SitePage } from "@/components/site-page";
import { sectionBodyClass } from "@/components/section-header";
import { seoCopy } from "@/content/seo";
import { founder, media } from "@/lib/content";
import { JsonLd } from "@/components/json-ld";
import {
  breadcrumbHome,
  createMetadata,
  getBreadcrumbJsonLd,
  getFounderJsonLd,
} from "@/lib/seo";

export const metadata = createMetadata({
  title: founder.name,
  description: seoCopy.founder,
  path: "/av-zeynep-balkan",
});

export default function FounderPage() {
  return (
    <SitePage
      eyebrow="Hakkımızda"
      title={founder.name}
      description={founder.summary}
      aside={
        <figure className="w-full">
          <EditorialImage
            src={media.portrait.src}
            alt={media.portrait.alt}
            width={media.portrait.width}
            height={media.portrait.height}
            objectFit="contain"
            objectPosition="top center"
            sizes="(min-width: 1024px) 18rem, 70vw"
            className="w-full bg-white"
          />
          <figcaption className="mt-3.5 flex items-baseline justify-between gap-4">
            <span className="kicker text-ink">{founder.name}</span>
            <span className="kicker">{founder.role}</span>
          </figcaption>
        </figure>
      }
    >
      <JsonLd data={getFounderJsonLd()} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          breadcrumbHome,
          { name: founder.name, path: "/av-zeynep-balkan" },
        ])}
      />
      <div className="space-y-10">
        {founder.sections.map((section) => (
          <section key={section.title}>
            <h2 className="item-title">{section.title}</h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className={sectionBodyClass}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SitePage>
  );
}
