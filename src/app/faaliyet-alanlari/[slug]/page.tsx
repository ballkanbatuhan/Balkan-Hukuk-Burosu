import { notFound } from "next/navigation";
import { SitePage } from "@/components/site-page";
import { getPracticeArea, practiceAreas } from "@/lib/content";
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
    description: `${area.title} alanında Balkan Hukuk Bürosu. Bu sayfanın ayrıntılı içeriği hazırlanıyor.`,
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
      eyebrow="Faaliyet Alanı"
      title={area.title}
      description="Bu alanın sayfası hazırlanıyor. Şimdilik başlık ve rota yapısı kuruldu; alan metni daha sonra eklenecek."
    />
  );
}
