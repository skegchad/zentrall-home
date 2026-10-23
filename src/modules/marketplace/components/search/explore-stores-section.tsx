import type { ExploreStore } from "../../data/explore-data";
import { ExploreStoreCard } from "./explore-store-card";

const DISPLAY = "var(--font-display, 'Arvo', Georgia, serif)";
const MONO = "var(--font-mono, ui-monospace, monospace)";

type Props = {
  stores: ExploreStore[];
  /** true = dentro de un panel destacado; false = listado normal (pestaña Tiendas) */
  panel?: boolean;
};

export function ExploreStoresSection({ stores, panel = true }: Props) {
  if (stores.length === 0) return null;
  return (
    <section
      className={
        panel
          ? "mt-14 rounded-[28px] border border-[var(--tienda-borde)] bg-[var(--tienda-fondo)] p-5 sm:p-8"
          : "mt-10"
      }
    >
      {panel && (
        <header className="mb-6">
          <p
            className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--tienda-acento)]"
            style={{ fontFamily: MONO }}
          >
            Detrás de cada producto
          </p>
          <h2
            className="mb-1 text-[clamp(1.5rem,2.8vw,2rem)] font-bold leading-tight tracking-tight text-[var(--tienda-texto)]"
            style={{ fontFamily: DISPLAY }}
          >
            Conoce las tiendas
          </h2>
          <p className="text-sm text-[var(--tienda-texto-suave)]">
            Negocios locales con una vitrina activa en Zentrall.
          </p>
        </header>
      )}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
        {stores.map((s) => (
          <ExploreStoreCard key={s.id} store={s} />
        ))}
      </div>
    </section>
  );
}