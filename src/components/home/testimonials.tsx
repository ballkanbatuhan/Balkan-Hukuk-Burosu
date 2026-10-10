import Image from "next/image";
import { SectionHeader, sectionBlockSpacing } from "@/components/section-header";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { media, office, testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section aria-labelledby="guven-baslik" className="relative overflow-hidden bg-night text-night-text">
      <Image
        src={media.justice.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[62%_18%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-night/84 via-night/70 to-night/58 lg:via-night/58 lg:to-night/32"
      />

      <div className="section shell relative [&_.kicker]:text-[#e4d3b4]">
        <SectionHeader
          id="guven-baslik"
          kicker="Balkan Hukuk Bürosu"
          title={office.reviewsTitle}
        />

        {testimonials.length > 0 ? (
          <div className={sectionBlockSpacing}>
            <TestimonialCarousel items={testimonials} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
