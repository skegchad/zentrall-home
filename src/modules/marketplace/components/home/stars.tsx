import { Star } from "lucide-react";

export function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={11}
          className={
            index + 1 <= Math.round(rating)
              ? "fill-[var(--color-descuento)] text-[var(--color-descuento)]"
              : "text-[var(--color-borde)]"
          }
        />
      ))}
    </span>
  );
}