import Image from "next/image";

type EditorialImageProps = {
  src: string;
  alt: string;
  sizes: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  zoom?: boolean;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
};

export function EditorialImage({
  src,
  alt,
  sizes,
  width,
  height,
  priority = false,
  className = "",
  zoom = false,
  objectFit = "cover",
  objectPosition = "center",
}: EditorialImageProps) {
  const aspectStyle =
    width && height ? { aspectRatio: `${width} / ${height}` } : undefined;

  return (
    <div
      className={`group relative overflow-hidden bg-cream-deep ${className}`}
      style={aspectStyle}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit, objectPosition }}
        className={
          zoom
            ? "transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.025]"
            : undefined
        }
      />
    </div>
  );
}
