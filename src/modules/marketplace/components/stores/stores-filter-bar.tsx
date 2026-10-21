"use client";

import type { QuickFilter } from "../../lib/stores-utils";
import {
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StoreIcon,
  TruckIcon,
} from "./stores-icons";

const OPTIONS: {
  value: QuickFilter;
  label: string;
  Icon: (props: { className?: string }) => React.ReactElement;
}[] = [
  { value: "all", label: "Todas", Icon: StoreIcon },
  { value: "open", label: "Abiertas ahora", Icon: ClockIcon },
  { value: "delivery", label: "Entrega hoy", Icon: TruckIcon },
  { value: "new", label: "Nuevas", Icon: SparklesIcon },
  { value: "verified", label: "Verificadas", Icon: ShieldCheckIcon },
];

type Props = {
  value: QuickFilter;
  onChange: (value: QuickFilter) => void;
  counts: Record<QuickFilter, number>;
};

export function StoresFilterBar({ value, onChange, counts }: Props) {
  return (
    <div className="px-6 pb-6 md:px-10 lg:px-16">
      <div
        role="tablist"
        aria-label="Filtrar negocios"
        className="mx-auto flex max-w-[1400px] gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {OPTIONS.map(({ value: optionValue, label, Icon }) => {
          const active = value === optionValue;
          return (
            <button
              key={optionValue}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(optionValue)}
              className={`flex shrink-0 items-center gap-2.5 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
                active
                  ? "border-[var(--color-primario)] bg-[var(--color-primario)] text-[var(--color-sobre-primario)]"
                  : "border-[var(--color-borde)] bg-[var(--color-superficie)] text-[var(--color-texto-suave)] hover:border-[var(--color-primario)] hover:text-[var(--color-texto)]"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
              {label}
              <span
                className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs ${
                  active
                    ? "bg-[color-mix(in_srgb,var(--color-sobre-primario)_25%,transparent)] text-[var(--color-sobre-primario)]"
                    : "bg-[var(--color-circulo)] text-[var(--color-circulo-icono)]"
                }`}
              >
                {counts[optionValue]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}