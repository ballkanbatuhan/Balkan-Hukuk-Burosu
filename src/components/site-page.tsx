import type { ReactNode } from "react";
import { ArrowLink } from "@/components/arrow-link";
import { pageHeadingClass, sectionLedeClass } from "@/components/section-header";

type SitePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  aside?: ReactNode;
};

export function SitePage({ eyebrow, title, description, children, aside }: SitePageProps) {
  const intro = (
    <>
      <p className="kicker">{eyebrow}</p>
      <h1 className={`mt-4 ${pageHeadingClass}`}>{title}</h1>
      <p className={sectionLedeClass}>{description}</p>
    </>
  );

  const backLink = (
    <div className="mt-12">
      <ArrowLink href="/">Ana sayfaya dön</ArrowLink>
    </div>
  );

  if (!aside) {
    return (
      <article className="section shell">
        {intro}
        {children ? <div className="mt-12 max-w-2xl md:mt-16">{children}</div> : null}
        {backLink}
      </article>
    );
  }

  return (
    <article className="section shell">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,42rem)_minmax(16rem,1fr)] lg:gap-x-16 lg:gap-y-16">
        <div className="lg:col-start-1">{intro}</div>
        <div className="flex justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-stretch">
          <div className="w-full max-w-xs lg:sticky lg:top-28 lg:h-fit">
            {aside}
          </div>
        </div>
        <div className="lg:col-start-1">
          {children}
          {backLink}
        </div>
      </div>
    </article>
  );
}
