/**
 * İçerik erişim katmanı.
 * Sayfalar veri dosyalarına doğrudan bağlanmak yerine bu fonksiyonları kullanır.
 * Yazılar ileride MDX dosyalarına taşınırsa dışarıdaki imzalar aynı kalabilir.
 */
export { articles, getArticle } from "@/content/articles";
export type { Article } from "@/content/articles";
export { founder } from "@/content/founder";
export { media } from "@/content/media";
export {
  formatPracticeNumber,
  getPracticeArea,
  practiceAreas,
} from "@/content/practice-areas";
export type { PracticeArea } from "@/content/practice-areas";
export { publication } from "@/content/publication";
export { legalNav, mainNav, site } from "@/content/site";
export { testimonials } from "@/content/testimonials";
export type { Testimonial } from "@/content/testimonials";
