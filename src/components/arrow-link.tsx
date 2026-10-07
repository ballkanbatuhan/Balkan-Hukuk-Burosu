import Link from "next/link";
import type { ReactNode } from "react";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "text" | "solid" | "outline";
  className?: string;
};

const variants = {
  text: "",
  solid: "bg-ink px-5 py-3 text-cream hover:bg-ink-soft",
  outline: "border border-ink/25 px-5 py-3 text-ink hover:border-ink",
};

export function ArrowLink({
  href,
  children,
  variant = "text",
  className = "",
}: ArrowLinkProps) {
  const classes = `group inline-flex items-center gap-2.5 text-[0.95rem] leading-none transition-colors duration-200 motion-safe ${variants[variant]} ${className}`;
  const content = (
    <>
      <span
        className={
          variant === "text"
            ? "border-b border-current/30 pb-1 transition-colors group-hover:border-current"
            : undefined
        }
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-0.5 motion-safe"
      >
        →
      </span>
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes} rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
