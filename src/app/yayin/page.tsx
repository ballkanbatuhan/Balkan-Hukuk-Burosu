import Image from "next/image";
import { ArrowLink } from "@/components/arrow-link";
import { SitePage } from "@/components/site-page";
import { seoCopy } from "@/content/seo";
import { media, publication } from "@/lib/content";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbHome, createMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: publication.title,
  description: seoCopy.publication,
  path: "/yayin",
});

export default function PublicationPage() {
  return (
    <SitePage
      eyebrow={publication.eyebrow}
      title={publication.title}
      description={publication.description}
      aside={
        <figure className="w-full">
          <Image
            src={media.bookCover.src}
            alt={media.bookCover.alt}
            width={media.bookCover.width}
            height={media.bookCover.height}
            sizes="(min-width: 1024px) 18rem, 70vw"
            className="h-auto w-full shadow-[0_28px_50px_-32px_rgba(23,26,31,0.55)]"
          />
          <figcaption className="mt-3.5 kicker text-ink">{publication.author}</figcaption>
        </figure>
      }
    >
      <JsonLd
        data={getBreadcrumbJsonLd([
          breadcrumbHome,
          { name: publication.title, path: "/yayin" },
        ])}
      />
      <ArrowLink href={publication.storeUrl}>Kitabın sayfası</ArrowLink>
    </SitePage>
  );
}
