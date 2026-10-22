type ProductRatingProps = {
  value: number;
  reviews: number;
};

export function ProductRating({ value, reviews }: ProductRatingProps) {
  const MONO = "var(--font-mono, ui-monospace, monospace)";

  if (reviews <= 0) {
    return (
      <div className="mt-3 text-sm text-[var(--color-texto-suave)]">
        <span style={{ fontFamily: MONO }} className="text-xs">
          Este producto aún no tiene reseñas
        </span>
      </div>
    );
  }

  return (
    <div className="mt-3 flex items-center gap-3 text-sm text-[var(--color-texto-suave)]">
      <span
        aria-label={`Valoración de ${value} sobre 5`}
        className="flex gap-0.5 text-[var(--tienda-estrella)]"
      >
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            aria-hidden="true"
            className={index < Math.round(value) ? "" : "opacity-25"}
          >
            ★
          </span>
        ))}
      </span>

      <span style={{ fontFamily: MONO }} className="text-xs">
        {value.toFixed(1)} · {reviews} reseñas
      </span>
    </div>
  );
}