import { notFound } from "next/navigation";
import { SitePage } from "@/components/site-page";
import { articles, getArticle, siteFeatures } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  if (!siteFeatures.hukukiBilgi) {
    return {};
  }

  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/hukuki-bilgi/${article.slug}`,
    index: false,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  if (!siteFeatures.hukukiBilgi) {
    notFound();
  }

  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <SitePage
      eyebrow="Hukuki Bilgi"
      title={article.title}
      description="Bu içerik hazırlanıyor. Başlık yer tutucudur; yayımlanmış bir hukuki bilgi yazısı değildir."
    />
  );
}
