"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNow } from "../../hooks/use-now";
import { AFFILIATED_STORES } from "../../data/stores-data";
import { StoreCard } from "../stores/store-card";
import { serif } from "../../lib/constants";

export function StoresSection() {
  const now = useNow();
  const stores = AFFILIATED_STORES.slice(0, 8);

  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    setCanPrev(el.scrollLeft > 4);
    setCanNext(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
    );
  }, []);

  useEffect(() => {
    updateButtons();

    const el = trackRef.current;
    if (!el) return;

    const observer = new ResizeObserver(updateButtons);
    observer.observe(el);

    return () => observer.disconnect();
  }, [updateButtons, stores.length]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction * el.clientWidth,
      behavior: "smooth",
    });
  };

  const arrowClass =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--tienda-borde)] bg-[var(--tienda-fondo)] text-[var(--tienda-texto)] transition-colors hover:bg-[var(--tienda-texto)] hover:text-[var(--tienda-fondo)] disabled:pointer-events-none disabled:opacity-35";

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* Decoración de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <div className="min-w-0">
            <p
              className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--tienda-acento)]"
              style={{
                fontFamily:
                  "var(--font-mono, ui-monospace, monospace)",
              }}
            >
              Hecho cerca de ti
            </p>

            <h2
              className={`${serif} text-2xl font-extrabold tracking-tight text-[var(--tienda-texto)] sm:text-5xl lg:text-6xl`}
            >
              Negocios en Zentrall
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--tienda-texto-suave)] sm:text-base">
              Descubre tiendas locales, conoce sus productos y apoya a los
              negocios de nuestra comunidad.
            </p>

            <div
              aria-hidden="true"
              className="mt-3 h-[6px] w-full max-w-[570px] bg-[repeating-linear-gradient(135deg,var(--color-descuento)_0_4px,var(--color-borde)_4px_8px)]"
            />
          </div>

          {/* Enlace y controles */}
          <div className="mb-1 flex shrink-0 items-center gap-3">
            <Link
              href="/tiendas"
              className="hidden items-center gap-1 text-sm font-bold text-[var(--tienda-acento)] transition-opacity hover:opacity-70 sm:flex"
            >
              Ver todos <ChevronRight size={16} />
            </Link>

            {stores.length > 0 && (
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Negocios anteriores"
                  onClick={() => scrollByPage(-1)}
                  disabled={!canPrev}
                  className={arrowClass}
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  aria-label="Siguientes negocios"
                  onClick={() => scrollByPage(1)}
                  disabled={!canNext}
                  className={arrowClass}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Carrusel: una sola fila */}
        {stores.length > 0 ? (
          <div
            ref={trackRef}
            onScroll={updateButtons}
            className="-mx-4 -mt-4 -mb-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-10 pt-4 [scroll-padding-inline:1rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {stores.map((store) => (
              <div
                key={store.id}
                className="w-[min(82vw,310px)] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]"
              >
                <StoreCard store={store} now={now} />
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-[var(--tienda-borde)] p-6 text-sm text-[var(--tienda-texto-suave)]">
            Próximamente encontrarás negocios locales aquí.
          </p>
        )}

        {/* Botón inferior para móviles */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/tiendas"
            className="rounded-full border border-[var(--tienda-borde)] px-5 py-3 text-sm font-semibold text-[var(--tienda-texto)] transition-colors hover:bg-[var(--tienda-fondo-2)]"
          >
            Explorar todos los negocios
          </Link>
        </div>
      </div>
    </section>
  );
}
