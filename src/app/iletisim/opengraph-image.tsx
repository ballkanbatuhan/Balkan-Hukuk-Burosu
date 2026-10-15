import { office } from "@/lib/content";
import { createOgImage, ogContentType, ogSize } from "@/lib/og-card";

export const dynamic = "force-static";
export const alt = office.contactTitle;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return createOgImage(office.contactTitle);
}
