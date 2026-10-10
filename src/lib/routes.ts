import { articles } from "@/content/articles";
import { practiceAreas } from "@/content/practice-areas";
import { siteFeatures } from "@/content/site";

export type ChangeFrequency = "weekly" | "monthly" | "yearly";

export type SiteRoute = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  /** Hazır olmayan sayfalar sitemap dışında ve noindex kalır. */
  indexable: boolean;
};

/**
 * Sitemap bu listeden üretilir. Bir sayfa yayına hazır olduğunda
 * ilgili kaydın `indexable` alanı true yapılır.
 */
export function getSiteRoutes(): SiteRoute[] {
  const pages: SiteRoute[] = [
    { path: "/", changeFrequency: "weekly", priority: 1, indexable: true },
    {
      path: "/av-zeynep-balkan",
      changeFrequency: "monthly",
      priority: 0.8,
      indexable: false,
    },
    {
      path: "/faaliyet-alanlari",
      changeFrequency: "monthly",
      priority: 0.8,
      indexable: false,
    },
    { path: "/yayin", changeFrequency: "monthly", priority: 0.7, indexable: false },
    ...(siteFeatures.hukukiBilgi
      ? [
          {
            path: "/hukuki-bilgi",
            changeFrequency: "weekly" as const,
            priority: 0.6,
            indexable: false,
          },
        ]
      : []),
    { path: "/iletisim", changeFrequency: "yearly", priority: 0.7, indexable: false },
    { path: "/kvkk", changeFrequency: "yearly", priority: 0.3, indexable: true },
  ];

  const areas = practiceAreas.map<SiteRoute>((area) => ({
    path: `/faaliyet-alanlari/${area.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
    indexable: false,
  }));

  const posts = siteFeatures.hukukiBilgi
    ? articles.map<SiteRoute>((article) => ({
        path: `/hukuki-bilgi/${article.slug}`,
        changeFrequency: "monthly",
        priority: 0.5,
        indexable: false,
      }))
    : [];

  return [...pages, ...areas, ...posts];
}

export function getIndexableRoutes() {
  return getSiteRoutes().filter((route) => route.indexable);
}
