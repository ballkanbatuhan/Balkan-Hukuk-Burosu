import { SitePage } from "@/components/site-page";
import { sectionBodyClass } from "@/components/section-header";
import { office } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Büro",
  description: office.principles.map((principle) => principle.text).join(" "),
  path: "/buro",
  index: false,
});

export default function BuroPage() {
  return (
    <SitePage
      eyebrow="Büro"
      title={`${office.slogan[0]}, ${office.slogan[1].toLocaleLowerCase("tr")}`}
      description={office.practiceIntro}
    >
      <dl className="space-y-10">
        {office.principles.map((principle) => (
          <div key={principle.title}>
            <dt className="kicker text-ink">{principle.title}</dt>
            <dd className={`${sectionBodyClass} mt-3`}>{principle.text}</dd>
          </div>
        ))}
      </dl>
    </SitePage>
  );
}
