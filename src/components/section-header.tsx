import type { ReactNode } from "react";

/** Büyük başlık: ana sayfa hero, bölüm başlıkları ve sayfa başlıkları */
export const sectionHeadingClass = "heading max-w-3xl text-balance";

export const pageHeadingClass = "page-title max-w-3xl text-balance";

/** Başlığın altındaki giriş paragrafı */
export const sectionLedeClass = "lede mt-6 max-w-2xl text-pretty";

/** Bölüm gövdesi / tanım listesi değerleri */
export const sectionBodyClass = "text-base leading-7 text-ink";

/** Başlık ile içerik arası boşluk */
export const sectionBlockSpacing = "mt-12 md:mt-16";

type SectionHeaderProps = {
  kicker: string;
  title: ReactNode;
  id?: string;
  heading?: "h1" | "h2";
  variant?: "section" | "page";
  description?: string;
  action?: ReactNode;
};

export function SectionHeader({
  kicker,
  title,
  id,
  heading = "h2",
  variant = "section",
  description,
  action,
}: SectionHeaderProps) {
  const Tag = heading;
  const headingClass = variant === "page" ? pageHeadingClass : sectionHeadingClass;

  return (
    <header>
      <p className="kicker">{kicker}</p>
      <Tag id={id} className={`mt-4 ${headingClass}`}>
        {title}
      </Tag>
      {description ? <p className={sectionLedeClass}>{description}</p> : null}
      {action ? <div className="mt-8">{action}</div> : null}
    </header>
  );
}
