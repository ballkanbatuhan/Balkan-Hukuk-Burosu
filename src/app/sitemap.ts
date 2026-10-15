import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { getIndexableRoutes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const lastModified = new Date(site.contentUpdated);

export default function sitemap(): MetadataRoute.Sitemap {
  return getIndexableRoutes().map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
