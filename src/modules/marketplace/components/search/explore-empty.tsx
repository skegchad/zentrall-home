import { SearchX } from "lucide-react";

export function ExploreEmpty({ onReset }: { onReset: () => void }) {
  return (
    <div
      role="status"
      className="mt-12 flex flex-col items-center gap-2 rounded-3xl border border-dashed border-[var(--color-borde)] bg-[var(--color-tarjeta)] px-4 py-14 text-center text-[var(--color-texto-suave)]"
    >
      <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-circulo)] text-[var(--color-circulo-icono)]">
        <SearchX size={22} aria-hidden />
      </span>
      <h3 className="mt-2 text-lg font-bold text-[var(--color-texto)]">No encontramos resultados</h3>
      <p className="max-w-[40ch] text-sm leading-relaxed">
        Prueba con otra palabra o quita algunos filtros.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-3 rounded-[10px] bg-[var(--color-primario)] px-5 py-2.5 text-xs font-bold text-[var(--color-sobre-primario)] transition hover:-translate-y-px hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primario)]"
      >
        Limpiar filtros
      </button>
    </div>
  );
}