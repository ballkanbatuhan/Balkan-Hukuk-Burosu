/**
 * İçerik erişim katmanı.
 * Sayfalar veri dosyalarına doğrudan bağlanmak yerine bu fonksiyonları kullanır.
 * Yazılar ileride MDX dosyalarına taşınırsa dışarıdaki imzalar aynı kalabilir.
 */
export { articles, getArticle } from "@/content/articles";
export type { Article } from "@/content/articles";
export { founder } from "@/content/founder";
export type { FounderSection } from "@/content/founder";
export { office } from "@/content/office";
export { media } from "@/content/media";
export {
  formatPracticeNumber,
  getPracticeArea,
  practiceAreas,
  practiceDescription,
} from "@/content/practice-areas";
export type { PracticeArea } from "@/content/practice-areas";
export { publication } from "@/content/publication";
export { legalNav, mainNav, site, siteFeatures } from "@/content/site";
export { testimonials } from "@/content/testimonials";
export type { Testimonial } from "@/content/testimonials";
