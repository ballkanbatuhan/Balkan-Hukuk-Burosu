"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { StarRating } from "@/components/star-rating";
import type { Testimonial } from "@/lib/content";

const AUTOPLAY_MS = 5_000;
const FADE_MS = 280;

type TestimonialCarouselProps = {
  items: readonly Testimonial[];
};

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const fadeTimeoutRef = useRef<number | null>(null);
  const item = items[index];

  const [reduceMotion, setReduceMotion] = useState(false);

  const changeIndex = useCallback(
    (getNext: (current: number) => number) => {
      if (fadeTimeoutRef.current !== null) {
        window.clearTimeout(fadeTimeoutRef.current);
        fadeTimeoutRef.current = null;
      }

      const applyNext = () => {
        setIndex((current) => getNext(current));
        setContentVisible(false);
        fadeTimeoutRef.current = window.setTimeout(() => {
          setContentVisible(true);
          fadeTimeoutRef.current = null;
        }, 20);
      };

      if (reduceMotion) {
        setIndex((current) => getNext(current));
        setContentVisible(true);
        return;
      }

      setContentVisible(false);
      fadeTimeoutRef.current = window.setTimeout(applyNext, FADE_MS);
    },
    [reduceMotion],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setReduceMotion(mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => mediaQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current !== null) {
        window.clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (items.length <= 1 || paused) {
      return;
    }

    const timer = window.setInterval(() => {
      changeIndex((current) => (current + 1) % items.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [changeIndex, items.length, paused]);

  if (!item) {
    return null;
  }

  const previous = () => {
    changeIndex((current) => (current - 1 + items.length) % items.length);
  };

  const next = () => {
    changeIndex((current) => (current + 1) % items.length);
  };

  return (
    <figure
      className="max-w-[46rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <div
        key={item.id}
        className={
          reduceMotion
            ? undefined
            : `transition-opacity ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`
        }
        style={reduceMotion ? undefined : { transitionDuration: `${FADE_MS}ms` }}
      >
        <StarRating rating={item.rating} className="text-lg tracking-tight" />
        <blockquote className="mt-5">
          <p className="quote">“{item.quote}”</p>
        </blockquote>
        <figcaption className="mt-6 kicker">
          {item.author}
          {item.context ? ` · ${item.context}` : null}
          {" · "}
          Google
        </figcaption>
      </div>
      {items.length > 1 ? (
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={previous}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/30 transition-colors hover:border-current"
              aria-label="Önceki görüş"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/30 transition-colors hover:border-current"
              aria-label="Sonraki görüş"
            >
              →
            </button>
          </div>
          <p className="text-sm text-night-text/70" aria-live="polite">
            {index + 1} / {items.length}
          </p>
        </div>
      ) : null}
    </figure>
  );
}
