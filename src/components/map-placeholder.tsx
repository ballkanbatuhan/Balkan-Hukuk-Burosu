type MapPlaceholderProps = {
  label: string;
};

/**
 * TODO: Gerçek harita gömüsü bu bileşenin içine eklenecek.
 * Şimdilik iframe yok.
 */
export function MapPlaceholder({ label }: MapPlaceholderProps) {
  return (
    <div
      className="relative min-h-80 overflow-hidden border border-line bg-[#e4ddd0]"
      role="img"
      aria-label={`${label}. Harita henüz eklenmedi.`}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(28,36,48,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,36,48,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="mx-auto block h-2.5 w-2.5 rounded-full bg-ink" />
        <span className="mx-auto mt-1 block h-4 w-px bg-ink" />
        <p className="mt-3 text-sm text-ink">Balkan Hukuk Bürosu</p>
        <p className="mt-1 text-xs tracking-wide text-muted">Beyoğlu / İstanbul</p>
      </div>
    </div>
  );
}
