export type ArticleStatus = "draft";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  status: ArticleStatus;
};

/**
 * Hukuki bilgi yazıları şimdilik yer tutucudur.
 * İleride aynı `slug` ve metadata alanlarıyla `src/content/articles/*.mdx`
 * dosyalarına taşınabilir. Taslaklar yayımlanmış hukuki içerik değildir.
 */
export const articles: readonly Article[] = [
  {
    slug: "kiraci-ve-kiraya-veren",
    title: "Kiracı ve kiraya veren ilişkisinde temel başlıklar",
    excerpt: "Bu içerik hazırlanıyor.",
    status: "draft",
  },
  {
    slug: "bosanma-surecinde-temel-cerceve",
    title: "Boşanma sürecinde temel hukuki çerçeve",
    excerpt: "Bu içerik hazırlanıyor.",
    status: "draft",
  },
  {
    slug: "sosyal-medyada-kisilik-hakki",
    title: "Sosyal medya içeriklerinde kişilik hakkı",
    excerpt: "Bu içerik hazırlanıyor.",
    status: "draft",
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
