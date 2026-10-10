import { site } from "@/lib/content";

type MapEmbedProps = {
  className?: string;
  layout?: "default" | "contact";
};

export function MapPlaceholder({
  className = "",
  layout = "default",
}: MapEmbedProps) {
  const mapsUrl = site.mapsEmbed;
  const mapsLink = site.mapsHref;

  const frameClass =
    layout === "contact"
      ? "relative w-full overflow-hidden border border-line bg-map aspect-[2/1] sm:aspect-[5/2]"
      : "relative min-h-[16rem] w-full overflow-hidden border border-line bg-map aspect-[3/2] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[28rem]";

  return (
    <figure className={`flex flex-col ${className}`}>
      <div className={frameClass}>
        <iframe
          title={`${site.name} konumu`}
          src={mapsUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <figcaption className="mt-3.5 shrink-0 kicker">
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink transition-colors hover:text-accent"
        >
          Haritada aç
        </a>
        <span className="text-muted"> · {site.address.district}</span>
      </figcaption>
    </figure>
  );
}
