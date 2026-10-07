import Image from "next/image";
import { ArrowLink } from "@/components/arrow-link";
import { SitePage } from "@/components/site-page";
import { media, publication } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: publication.title,
  description: publication.description,
  path: "/yayin",
  index: false,
});

export default function PublicationPage() {
  return (
    <SitePage
      eyebrow={publication.eyebrow}
      title={publication.title}
      description={publication.description}
    >
      <p className="kicker text-ink">{publication.author}</p>
      <Image
        src={media.bookCover.src}
        alt={media.bookCover.alt}
        width={media.bookCover.width}
        height={media.bookCover.height}
        className="mt-8 h-auto w-52"
      />
      <div className="mt-8">
        <ArrowLink href={publication.storeUrl}>Kitabın sayfası</ArrowLink>
      </div>
    </SitePage>
  );
}
