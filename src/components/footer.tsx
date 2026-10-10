import Link from "next/link";
import { legalNav, mainNav, office, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-night text-night-text">
      <div className="shell grid gap-12 border-t border-white/10 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-4">
          <p className="font-serif text-[0.95rem] font-medium tracking-[0.16em]">BALKAN</p>
          <p className="kicker mt-1.5 text-night-text/60">Hukuk Bürosu</p>
          <p className="mt-6 max-w-xs text-base leading-7 text-night-text/70">
            {office.practiceIntro}
          </p>
        </div>
        <nav className="md:col-span-4" aria-label="Alt menü">
          <ul className="space-y-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base text-night-text/80 transition-colors hover:text-night-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="md:col-span-4" aria-label="Yasal bağlantılar">
          <ul className="space-y-3">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base text-night-text/80 transition-colors hover:text-night-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-xs tracking-wide text-night-text/50 sm:flex-row sm:justify-between">
          <p>{`© ${site.copyrightYear} ${site.name}. Tüm hakları saklıdır.`}</p>
          <p>Beyoğlu / İstanbul</p>
        </div>
      </div>
    </footer>
  );
}
