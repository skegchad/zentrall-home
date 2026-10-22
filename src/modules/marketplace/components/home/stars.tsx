
import { Star } from "lucide-react";

export function Stars({ rating }: { rating: number }) {
  const normalizedRating = Math.max(0, Math.min(5, rating));

  return (
    <span
      className="flex items-center gap-0.5"
      aria-label={`${normalizedRating} de 5 estrellas`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const fill = Math.max(
          0,
          Math.min(1, normalizedRating - index),
        );

        return (
          <span
            key={index}
            className="relative inline-flex shrink-0"
          >
            {/* Estrella vacía */}
            <Star
              size={11}
              className="text-[var(--color-borde)]"
            />

            {/* Relleno parcial o completo */}
            {fill > 0 && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star
                  size={11}
                  className="fill-[var(--color-descuento)] text-[var(--color-descuento)]"
                />
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}
