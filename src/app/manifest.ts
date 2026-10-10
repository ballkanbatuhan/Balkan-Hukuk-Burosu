import type { MetadataRoute } from "next";
import { seoCopy } from "@/content/seo";
import { site } from "@/lib/content";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: seoCopy.home,
    start_url: "/",
    lang: "tr",
    display: "standalone",
    background_color: "#f3eee6",
    theme_color: "#1c2430",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
