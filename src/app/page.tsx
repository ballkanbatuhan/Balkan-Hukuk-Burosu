import { Approach } from "@/components/home/approach";
import { Contact } from "@/components/home/contact";
import { FinalCta } from "@/components/home/final-cta";
import { FounderSection } from "@/components/home/founder-section";
import { Hero } from "@/components/home/hero";
import { Insights } from "@/components/home/insights";
import { PracticeAreas } from "@/components/home/practice-areas";
import { Publication } from "@/components/home/publication";
import { Testimonials } from "@/components/home/testimonials";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/content";
import { createMetadata, getLegalServiceJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: site.name,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={getLegalServiceJsonLd()} />
      <Hero />
      <Approach />
      <FounderSection />
      <PracticeAreas />
      <Publication />
      <Insights />
      <Testimonials />
      <Contact />
      <FinalCta />
    </>
  );
}
