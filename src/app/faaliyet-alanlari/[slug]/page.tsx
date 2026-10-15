import Link from "next/link";
import { notFound } from "next/navigation";
import { SitePage } from "@/components/site-page";
import {
  getPracticeArea,
  getRelatedPracticeAreas,
  office,
  practiceAreas,
  practiceDescription,
} from "@/lib/content";
import { JsonLd } from "@/components/json-ld";
import {
  breadcrumbHome,
  createMetadata,
  getBreadcrumbJsonLd,
  getPracticeServiceJsonLd,
} from "@/lib/seo";

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

  const description = practiceDescription(area.body);
  const related = getRelatedPracticeAreas(area.slug);

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          breadcrumbHome,
          { name: office.practiceTitle, path: "/faaliyet-alanlari" },
          { name: area.title, path: `/faaliyet-alanlari/${area.slug}` },
        ])}
      />
      <JsonLd
        data={getPracticeServiceJsonLd({
          title: area.title,
          slug: area.slug,
          description,
        })}
      />
      <SitePage eyebrow="Faaliyet Alanlarımız" title={area.title} description={area.body}>
        <nav aria-label="Diğer faaliyet alanları" className="border-t border-line pt-8">
          <p className="kicker">Diğer faaliyet alanları</p>
          <ul className="mt-4 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/faaliyet-alanlari/${item.slug}`} className="item-title">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SitePage>
    </>
  );
}
