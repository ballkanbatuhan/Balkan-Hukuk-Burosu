import { publication } from "@/lib/content";
import { createOgImage, ogContentType, ogSize } from "@/lib/og-card";

export const dynamic = "force-static";
export const alt = publication.title;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return createOgImage(publication.title);
}
