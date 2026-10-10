import { notFound } from "next/navigation";
import { SitePage } from "@/components/site-page";
import { getPracticeArea, practiceAreas, practiceDescription } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type PracticeAreaPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PracticeAreaPageProps) {
  const { slug } = await params;
  const area = getPracticeArea(slug);

  if (!area) {
    return {};
  }

  return createMetadata({
    title: area.title,
    description: practiceDescription(area.body),
    path: `/faaliyet-alanlari/${area.slug}`,
    index: false,
  });
}

export default async function PracticeAreaPage({ params }: PracticeAreaPageProps) {
  const { slug } = await params;
  const area = getPracticeArea(slug);

  if (!area) {
    notFound();
  }

  return (
    <SitePage
      eyebrow="Faaliyet Alanlarımız"
      title={area.title}
      description={area.body}
    />
  );
}
