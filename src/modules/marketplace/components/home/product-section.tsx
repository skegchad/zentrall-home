"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { greenPanel, wrap } from "../../lib/constants";
import type { Product } from "../../types";
import { ProductCard } from "./product-card";
import { ProductCardWide } from "./product-card-wide";

type ProductSectionProps = {
  title: string;
  products: Product[];
  variant?: "vertical" | "wide";
  isNew?: boolean;
  onAdd: () => void;
};

const layouts = {
  // 2 → 3 → 4 → 5 tarjetas visibles
  vertical: {
    gap: "gap-4",
    item: "w-[calc((100%-1rem)/2)] sm:w-[calc((100%-2rem)/3)] md:w-[calc((100%-3rem)/4)] lg:w-[calc((100%-4rem)/5)]",
  },
  // 1 → 2 → 3 tarjetas visibles
  wide: {
    gap: "gap-5",
    item: "w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]",
  },
};

export function ProductSection({
  title,
  products,
  variant = "vertical",
  isNew,
  onAdd,
}: ProductSectionProps) {
  const layout = layouts[variant];
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateButtons();
    const el = trackRef.current;
    if (!el) return;
    const observer = new ResizeObserver(updateButtons);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateButtons, products.length]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  };

  const arrowClass =
    "flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-borde)] bg-[var(--color-tarjeta)] text-[var(--color-texto)] transition hover:bg-[var(--color-texto)] hover:text-[var(--color-fondo)] disabled:pointer-events-none disabled:opacity-35";

  return (
    <section className={`${wrap} pt-12`}>
      {/* Encabezado (fuera del contenedor) */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-texto)]">
          {title}
        </h2>

        <div className="flex items-center gap-3">
          <Link
            href="/explorar"
            className="flex items-center gap-1 text-[11px] font-semibold text-[var(--color-texto)] transition hover:text-[var(--color-primario)]"
          >
            Ver todos <ChevronRight size={14} />
          </Link>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => scrollByPage(-1)}
              disabled={!canPrev}
              className={arrowClass}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => scrollByPage(1)}
              disabled={!canNext}
              className={arrowClass}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Contenedor verde suave con el carrusel */}
      <div className={`${greenPanel} p-4 sm:p-5`}>
        <div
            ref={trackRef}
            onScroll={updateButtons}
            className={`-mx-4 -mt-4 -mb-4 flex snap-x snap-mandatory ${layout.gap} overflow-x-auto scroll-smooth px-4 pb-6 pt-6 [scroll-padding-inline:1rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-5 sm:px-5 sm:[scroll-padding-inline:1.25rem]`}
          >
          {products.map((product) => (
            <div
              key={product.id}
              className={`shrink-0 snap-start ${layout.item}`}
            >
              {variant === "wide" ? (
                <ProductCardWide product={product} onAdd={onAdd} />
              ) : (
                <ProductCard product={product} isNew={isNew} onAdd={onAdd} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}