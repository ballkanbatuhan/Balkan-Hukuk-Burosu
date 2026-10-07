import type { ReactNode } from "react";

/** Ana sayfa bölümlerinde ortak giriş paragrafı stili */
export const sectionLedeClass =
  "lede mt-6 w-full max-w-none text-pretty md:text-lg md:leading-8";

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
  headingClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeader({
  kicker,
  title,
  id,
  heading = "h2",
  variant = "section",
  description,
  headingClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  const Tag = heading;
  const headingClass =
    headingClassName ??
    (variant === "page" ? "page-title mt-4" : "heading mt-4");

  return (
    <header>
      <p className="kicker">{kicker}</p>
      <Tag id={id} className={headingClass}>{title}</Tag>
      {description ? (
        <p className={descriptionClassName ?? sectionLedeClass}>{description}</p>
      ) : null}
    </header>
  );
}
