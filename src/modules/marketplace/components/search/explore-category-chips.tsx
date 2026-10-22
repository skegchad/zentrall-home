"use client";

type Props = {
  categories: string[]; // sin incluir "Todo"
  value: string;
  onChange: (c: string) => void;
};

export function ExploreCategoryChips({ categories, value, onChange }: Props) {
  return (
    <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Categorías">
      {["Todo", ...categories].map((c) => {
        const on = value === c;
        return (
          <button
            key={c}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(c)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primario)] ${
              on
                ? "border-[var(--color-primario)] bg-[var(--color-primario)] text-[var(--color-sobre-primario)]"
                : "border-[var(--color-borde)] bg-[var(--color-tarjeta)] text-[var(--color-texto)] hover:border-[var(--color-primario)]"
            }`}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}