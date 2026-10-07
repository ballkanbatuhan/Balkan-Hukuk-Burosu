import { site } from "@/lib/content";

type MapEmbedProps = {
  className?: string;
  layout?: "default" | "contact";
};

function officeMapQuery() {
  return encodeURIComponent(
    `${site.address.street}, ${site.address.district}, ${site.address.city}`,
  );
}

export function MapPlaceholder({
  className = "",
  layout = "default",
}: MapEmbedProps) {
  const query = officeMapQuery();
  const mapsUrl = `https://www.google.com/maps?q=${query}&hl=tr&z=16&output=embed`;
  const mapsLink = `https://www.google.com/maps?q=${query}&hl=tr`;

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
