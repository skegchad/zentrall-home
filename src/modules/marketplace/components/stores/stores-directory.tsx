"use client";

import { useMemo, useState } from "react";
import type { AffiliatedStore } from "../../data/stores-data";
import { storeMatchesQuery } from "../../lib/stores-utils";
import { StoreCard } from "./store-card";
import { SearchIcon } from "./stores-icons";
const ALL = "Todas";

type Props = {
  stores: AffiliatedStore[];
  now: Date | null;
};

export function StoresDirectory({ stores, now }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(stores.map((s) => s.category))).sort()],
    [stores],
  );

  const results = useMemo(
    () =>
      stores.filter(
        (s) => (category === ALL || s.category === category) && storeMatchesQuery(s, query),
      ),
    [stores, category, query],
  );

  return (
    <section id="directorio" className="scroll-mt-28 px-6 py-14 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-primario)]">
              Directorio local
            </p>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-[var(--color-texto)] md:text-4xl">
              Todas las tiendas
            </h2>
          </div>
          <p
            aria-live="polite"
            className="pb-1 text-sm font-semibold text-[var(--color-texto-suave)]"
          >
            {results.length} {results.length === 1 ? "resultado" : "resultados"}
          </p>
        </header>

        {/* Buscador + categorías */}
        <div className="mb-8 rounded-3xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] p-5 md:p-6">
          <label className="relative block">
            <span className="sr-only">Buscar tienda, producto o categoría</span>
            <SearchIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-texto-suave)]" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca una tienda, producto o categoría…"
              className="h-12 w-full rounded-full border border-transparent bg-[var(--color-imagen)] pl-12 pr-5 text-sm text-[var(--color-texto)] outline-none placeholder:text-[var(--color-texto-suave)] focus:border-[var(--color-primario)]"
            />
          </label>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="mr-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-texto-suave)]">
              Categoría
            </span>
            {categories.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                    active
                      ? "border-[var(--color-primario)] bg-[var(--color-primario)] text-[var(--color-sobre-primario)]"
                      : "border-[var(--color-borde)] bg-[var(--color-superficie)] text-[var(--color-texto-suave)] hover:border-[var(--color-primario)] hover:text-[var(--color-texto)]"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tarjetas */}
        {results.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[var(--color-borde)] px-6 py-16 text-center">
            <p className="text-lg font-semibold text-[var(--color-texto)]">
              No encontramos tiendas
            </p>
            <p className="mt-1 text-sm text-[var(--color-texto-suave)]">
              Prueba con otra palabra o cambia la categoría.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory(ALL);
              }}
              className="mt-5 rounded-full bg-[var(--color-primario)] px-5 py-2 text-sm font-semibold text-[var(--color-sobre-primario)]"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <ul className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
  {results.map((store) => (
    <li key={store.id}>
      <StoreCard store={store} now={now} />
    </li>
  ))}
</ul>
        )}
      </div>
    </section>
  );
}