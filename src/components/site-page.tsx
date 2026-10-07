import type { ReactNode } from "react";
import { ArrowLink } from "@/components/arrow-link";

type SitePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function SitePage({ eyebrow, title, description, children }: SitePageProps) {
  return (
    <article className="section shell">
      <p className="kicker">{eyebrow}</p>
      <h1 className="page-title mt-4 max-w-3xl">{title}</h1>
      <p className="lede mt-6 max-w-2xl">{description}</p>
      {children ? <div className="mt-12 max-w-2xl md:mt-16">{children}</div> : null}
      <div className="mt-12">
        <ArrowLink href="/">Ana sayfaya dön</ArrowLink>
      </div>
    </article>
  );
}
