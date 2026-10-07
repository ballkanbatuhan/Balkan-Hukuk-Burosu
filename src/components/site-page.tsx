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
    <article className="shell py-20 md:py-28">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display mt-5 max-w-3xl text-[clamp(2.6rem,6vw,4.5rem)]">{title}</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">{description}</p>
      {children ? <div className="mt-12 max-w-2xl">{children}</div> : null}
      <div className="mt-12">
        <ArrowLink href="/">Ana sayfaya dön</ArrowLink>
      </div>
    </article>
  );
}
