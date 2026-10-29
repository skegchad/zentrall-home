"use client";

import type { AffiliatedStore } from "../../data/stores-data";
import { useNow } from "../../hooks/use-now";
import { StoreCard } from "../stores/store-card";

const DISPLAY = "var(--font-display, 'Arvo', Georgia, serif)";
const MONO = "var(--font-mono, ui-monospace, monospace)";

type Props = {
  stores: AffiliatedStore[];
  /** true = dentro de un panel destacado; false = listado normal (pestaña Tiendas) */
  panel?: boolean;
};

export function ExploreStoresSection({ stores, panel = true }: Props) {
  const now = useNow();

  if (stores.length === 0) return null;
  return (
    <section
      className={
        panel
          ? "mt-14 rounded-[28px] bg-[color-mix(in_srgb,var(--color-primario)_14%,var(--color-fondo))] p-5 sm:p-8"
          : "mt-10"
      }
    >
      {panel && (
        <header className="mb-6">
          <p
            className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-precio)]"
            style={{ fontFamily: MONO }}
          >
            Detrás de cada producto
          </p>
          <h2
            className="mb-1 text-[clamp(1.5rem,2.8vw,2rem)] font-bold leading-tight tracking-tight text-[var(--color-texto)]"
            style={{ fontFamily: DISPLAY }}
          >
            Conoce las tiendas
          </h2>
          <p className="text-sm text-[var(--color-texto-suave)]">
            Negocios locales con una vitrina activa en Zentrall.
          </p>
        </header>
      )}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
        {stores.map((s) => (
          <StoreCard key={s.id} store={s} now={now} />
        ))}
      </div>
    </section>
  );
}