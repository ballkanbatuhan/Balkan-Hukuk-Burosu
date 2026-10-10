type StarRatingProps = {
  rating: 1 | 2 | 3 | 4 | 5;
  max?: number;
  className?: string;
};

export function StarRating({ rating, max = 5, className = "" }: StarRatingProps) {
  return (
    <div
      className={`flex gap-0.5 text-accent ${className}`}
      role="img"
      aria-label={`${rating} üzerinden ${max} yıldız`}
    >
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={i < rating ? "opacity-100" : "opacity-20"}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}
