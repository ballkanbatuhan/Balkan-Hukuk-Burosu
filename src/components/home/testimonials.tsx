import type { ReactNode } from "react";
import { testimonials } from "@/lib/content";

export async function Testimonials() {
  if (testimonials.length > 0) {
    const { TestimonialCarousel } = await import("@/components/testimonial-carousel");

    return (
      <section
        aria-labelledby="guven-baslik"
        className="border-t border-line bg-[#efe8dc]"
      >
        <TestimonialsLayout>
          <TestimonialCarousel items={testimonials} />
        </TestimonialsLayout>
      </section>
    );
  }

  return (
    <section aria-labelledby="guven-baslik" className="border-t border-line bg-[#efe8dc]">
      <TestimonialsLayout>
        <p className="max-w-sm text-base leading-7 text-muted">
          Müvekkil görüşleri, kaynakları doğrulandıktan sonra bu alanda paylaşılacak.
        </p>
      </TestimonialsLayout>
    </section>
  );
}

function TestimonialsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="shell grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:py-32">
      <div className="lg:col-span-7">
        <p className="eyebrow">Müvekkillerimizden</p>
        <h2
          id="guven-baslik"
          className="display mt-6 max-w-xl text-[clamp(2.1rem,4vw,3.3rem)]"
        >
          Güven, yalnızca sonuçla değil;
          <span className="block">süreçle de kurulur.</span>
        </h2>
      </div>
      <div className="lg:col-span-5 lg:pt-16">{children}</div>
    </div>
  );
}
