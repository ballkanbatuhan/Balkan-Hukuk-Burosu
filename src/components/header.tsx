"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-cream/95 backdrop-blur-md transition-[padding,border-color] duration-200 motion-safe ${
        compact ? "border-line py-3" : "border-transparent py-5"
      }`}
    >
      <div className="shell flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0 leading-none">
          <span className="block font-serif text-[0.95rem] font-medium tracking-[0.16em]">
            BALKAN
          </span>
          <span className="kicker mt-1.5 block text-muted">Hukuk Bürosu</span>
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Ana menü">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.9375rem] font-medium transition-colors hover:text-ink ${
                pathname === item.href ? "text-ink" : "text-ink-soft"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/iletisim"
            className="hidden items-center gap-2 bg-ink px-4 py-2.5 text-[0.9375rem] font-medium text-cream transition-colors hover:bg-ink-soft xl:inline-flex"
          >
            İletişime Geç
            <span aria-hidden="true">→</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center xl:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
            <span className="relative block h-3.5 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 h-px w-6 bg-ink transition duration-200 motion-safe ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-6 bg-ink transition duration-200 motion-safe ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-ink transition duration-200 motion-safe ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="site-menu"
          className="shell flex max-h-[calc(100dvh-4.5rem)] flex-col gap-1 overflow-auto pb-8 pt-6 xl:hidden"
          aria-label="Mobil menü"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-line py-4 text-2xl font-medium tracking-tight"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            className="mt-6 inline-flex w-fit items-center gap-2 bg-ink px-5 py-3 text-[0.9375rem] font-medium text-cream"
          >
            İletişime Geç
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
