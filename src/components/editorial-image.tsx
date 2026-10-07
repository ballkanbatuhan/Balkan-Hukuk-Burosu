import Image from "next/image";

type EditorialImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function EditorialImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: EditorialImageProps) {
  return (
    <div className={`relative overflow-hidden bg-cream-deep ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
