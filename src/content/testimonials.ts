export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  context?: string;
  source: "google";
};

/**
 * TODO: Mevcut Google yorumları, metinleri kaynaklarıyla birlikte
 * doğrulandıktan sonra bu diziye eklenecek. Gerçek yorumlar burada
 * hard-code edilmedi.
 */
export const testimonials: readonly Testimonial[] = [];
