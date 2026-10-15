import { getPracticeArea, office, practiceAreas } from "@/lib/content";
import { createOgImage, ogContentType, ogSize } from "@/lib/og-card";

export const dynamic = "force-static";
export const alt = office.practiceTitle;
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getPracticeArea(slug);

  return createOgImage(area?.title ?? office.practiceTitle);
}
