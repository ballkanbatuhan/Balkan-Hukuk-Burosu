import { notFound } from "next/navigation";
import { SitePage } from "@/components/site-page";
import { getPracticeArea, office, practiceAreas, practiceDescription } from "@/lib/content";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbHome, createMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

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
  });
}

export default async function PracticeAreaPage({ params }: PracticeAreaPageProps) {
  const { slug } = await params;
  const area = getPracticeArea(slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          breadcrumbHome,
          { name: office.practiceTitle, path: "/faaliyet-alanlari" },
          { name: area.title, path: `/faaliyet-alanlari/${area.slug}` },
        ])}
      />
      <SitePage eyebrow="Faaliyet Alanlarımız" title={area.title} description={area.body} />
    </>
  );
}
