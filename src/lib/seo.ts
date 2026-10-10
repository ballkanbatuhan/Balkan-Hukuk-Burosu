import type { Metadata } from "next";
import { seoCopy } from "@/content/seo";
import { site } from "@/content/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  absoluteTitle?: boolean;
};

export function absoluteUrl(path: string) {
  if (path === "/") return site.url;
  return new URL(path, site.url).toString();
}

export function createMetadata({
  title,
  description,
  path,
  index = true,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: path,
      siteName: site.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function getLegalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    url: site.url,
    description: seoCopy.home,
    telephone: "+905396041131",
    email: site.email,
    image: absoluteUrl("/opengraph-image"),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: "TR",
    },
    founder: {
      "@type": "Person",
      name: "Zeynep Balkan",
      jobTitle: "Avukat",
    },
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    sameAs: [site.mapsHref],
  };
}

export function getFounderJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zeynep Balkan",
    honorificPrefix: "Av.",
    jobTitle: "Avukat",
    description: seoCopy.founder,
    url: absoluteUrl("/av-zeynep-balkan"),
    image: absoluteUrl("/images/zeynep-balkan-portre.png"),
    worksFor: {
      "@type": "LegalService",
      name: site.name,
      url: site.url,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Yeditepe Üniversitesi Hukuk Fakültesi",
    },
  };
}

export const breadcrumbHome = { name: "Ana sayfa", path: "/" } as const;

export function getBreadcrumbJsonLd(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
