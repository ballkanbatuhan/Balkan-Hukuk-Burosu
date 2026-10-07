import { SitePage } from "@/components/site-page";
import { founder } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: founder.name,
  description: founder.summary,
  path: "/av-zeynep-balkan",
  index: false,
});

export default function FounderPage() {
  return (
    <SitePage
      eyebrow={founder.role}
      title={founder.name}
      description="Balkan Hukuk Bürosu’nun kurucusu."
    >
      <div className="space-y-6 text-base leading-8 text-ink-soft">
        {founder.profile.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </SitePage>
  );
}
