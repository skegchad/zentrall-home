"use client";

import { ArrowUpDown, Store, Tag } from "lucide-react";
import { SORT_LABELS, type SortKey } from "../../lib/explore-utils";

export type ExploreTab = "productos" | "tiendas";

type Props = {
  tab: ExploreTab;
  onTabChange: (t: ExploreTab) => void;
  productCount: number;
  storeCount: number;
  sort: SortKey;
  onSortClick: () => void;
};

const MONO = "var(--font-mono, ui-monospace, monospace)";
const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primario)]";
const tabBase =
  "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.8rem] font-semibold transition-colors";

export function ExploreTabs({ tab, onTabChange, productCount, storeCount, sort, onSortClick }: Props) {
  const cls = (active: boolean) =>
    `${tabBase} ${FOCUS} ${
      active
        ? "bg-[var(--color-superficie)] text-[var(--color-texto)] [box-shadow:var(--sombra-suave)]"
        : "text-[var(--color-circulo-icono)] hover:text-[var(--color-texto)]"
    }`;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div
        role="tablist"
        aria-label="Qué quieres explorar"
        className="inline-flex gap-1 rounded-full border border-[var(--color-borde)] bg-[var(--color-circulo)] p-1"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "productos"}
          className={cls(tab === "productos")}
          onClick={() => onTabChange("productos")}
        >
          <Tag size={14} aria-hidden /> Productos
          <span className="text-[0.68rem] font-bold opacity-80" style={{ fontFamily: MONO }}>
            {productCount}
          </span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "tiendas"}
          className={cls(tab === "tiendas")}
          onClick={() => onTabChange("tiendas")}
        >
          <Store size={14} aria-hidden /> Tiendas
          <span className="text-[0.68rem] font-bold opacity-80" style={{ fontFamily: MONO }}>
            {storeCount}
          </span>
        </button>
      </div>

      {tab === "productos" && (
        <button
          type="button"
          onClick={onSortClick}
          className={`inline-flex items-center gap-1.5 rounded-full border border-[var(--color-borde)] bg-[var(--color-tarjeta)] px-4 py-2 text-xs font-semibold text-[var(--color-texto)] transition-colors hover:border-[var(--color-primario)] ${FOCUS}`}
        >
          <ArrowUpDown size={13} aria-hidden /> {SORT_LABELS[sort]}
        </button>
      )}
    </div>
  );
}