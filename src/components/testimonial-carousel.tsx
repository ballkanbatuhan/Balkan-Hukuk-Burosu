"use client";

import { useState } from "react";
import type { Testimonial } from "@/lib/content";

type TestimonialCarouselProps = {
  items: readonly Testimonial[];
};

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const item = items[index];

  if (!item) {
    return null;
  }

  const previous = () => {
    setIndex((current) => (current - 1 + items.length) % items.length);
  };

  const next = () => {
    setIndex((current) => (current + 1) % items.length);
  };

  return (
    <figure>
      <blockquote>
        <p className="font-serif text-2xl leading-snug text-ink md:text-[1.7rem]">
          {item.quote}
        </p>
      </blockquote>
      <figcaption className="mt-6 text-sm tracking-wide text-muted">
        {item.author}
        {item.context ? ` · ${item.context}` : null}
      </figcaption>
      {items.length > 1 ? (
        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={previous}
            className="inline-flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-ink"
            aria-label="Önceki görüş"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-ink"
            aria-label="Sonraki görüş"
          >
            →
          </button>
        </div>
      ) : null}
    </figure>
  );
}
