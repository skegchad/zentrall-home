"use client";

import { Percent, Search, Sparkles, Tag, Truck, Zap } from "lucide-react";
import type { QuickRouteId } from "../../lib/explore-utils";

const ICONS: Record<QuickRouteId, typeof Percent> = {
  ofertas: Percent,
  hasta20: Tag,
  novedades: Sparkles,
  entrega: Truck,
};

const DISPLAY = "var(--font-display, 'Arvo', Georgia, serif)";
const MONO = "var(--font-mono, ui-monospace, monospace)";

export type QuickRouteView = { id: QuickRouteId; label: string; count: number };

type Props = {
  query: string;
  onQueryChange: (v: string) => void;
  routes: QuickRouteView[];
  active: QuickRouteId[];
  onToggleRoute: (id: QuickRouteId) => void;
};

export function ExploreHero({ query, onQueryChange, routes, active, onToggleRoute }: Props) {
  return (
    <section className="border-b border-[var(--color-borde)] bg-gradient-to-b from-[var(--color-superficie)] to-[var(--color-fondo)] pb-10 pt-32">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-8 px-4 sm:px-6 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h1
            className="text-[clamp(2.6rem,7vw,6rem)] font-bold leading-[1.05] tracking-tight text-[var(--color-texto)]"
            style={{ fontFamily: DISPLAY }}
          >
            Encuentra algo bueno,{" "}
            <em className="font-semibold italic text-[var(--color-primario)]">cerca de ti.</em>
          </h1>
          <p className="mb-6 mt-4 max-w-[52ch] leading-relaxed text-[var(--color-texto-suave)]">
            Busca en las vitrinas locales por producto, tienda, categoría o zona.
          </p>

          <label className="flex h-14 items-center gap-3 rounded-[var(--radio)] border border-[var(--color-borde)] bg-[var(--color-tarjeta)] px-4 text-[var(--color-texto-suave)] transition [box-shadow:var(--sombra-suave)] focus-within:border-[var(--color-primario)] focus-within:ring-4 focus-within:ring-[color-mix(in_srgb,var(--color-primario)_20%,transparent)]">
            <Search size={18} aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="¿Qué estás buscando hoy?"
              aria-label="Buscar en Zentrall"
              className="flex-1 bg-transparent text-[0.95rem] text-[var(--color-texto)] outline-none placeholder:text-[var(--color-texto-suave)]"
            />
          </label>
        </div>

        <aside
          aria-label="Rutas rápidas"
          className="rounded-3xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] p-4 [box-shadow:var(--sombra-suave)]"
        >
          <p
            className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-precio)]"
            style={{ fontFamily: MONO }}
          >
            <Zap size={13} aria-hidden /> Prueba una ruta rápida
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {routes.map((r) => {
              const Icon = ICONS[r.id];
              const on = active.includes(r.id);
              return (
                <button
                  key={r.id}
                  type="button"
                  disabled={r.count === 0}
                  aria-pressed={on}
                  onClick={() => onToggleRoute(r.id)}
                  className={`flex items-center gap-2.5 rounded-2xl border p-3 text-left transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primario)] enabled:hover:-translate-y-0.5 enabled:hover:border-[var(--color-primario)] disabled:cursor-not-allowed disabled:opacity-45 ${
                    on
                      ? "border-[var(--color-activo-borde)] bg-[var(--color-activo-fondo)]"
                      : "border-[var(--color-borde)] bg-[var(--color-superficie)]"
                  }`}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--color-circulo)] text-[var(--color-circulo-icono)]">
                    <Icon size={14} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <strong
                      className={`block text-xs ${on ? "text-[var(--color-activo-texto)]" : "text-[var(--color-texto)]"}`}
                    >
                      {r.label}
                    </strong>
                    <small
                      className="text-[0.66rem] text-[var(--color-texto-suave)]"
                      style={{ fontFamily: MONO }}
                    >
                      {r.count} opciones
                    </small>
                  </span>
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}