import type { MetadataRoute } from "next";
import { getIndexableRoutes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return getIndexableRoutes().map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
