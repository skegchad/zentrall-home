
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import type { CatalogProduct } from "./store-product-card";
import { DISPLAY } from "./store-profile-constants";

type Props = {
  products: CatalogProduct[];
};

type Position = "left" | "center" | "right";

const MONO = "var(--font-mono, ui-monospace, monospace)";

export function StoreFeaturedProducts({ products }: Props) {
  const featured = products.slice(0, 5);

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (featured.length < 2 || paused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featured.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [featured.length, paused]);

  if (!featured.length) return null;

  const activeProduct = featured[activeIndex];

  const previous = () => {
    setActiveIndex((current) =>
      (current - 1 + featured.length) % featured.length,
    );
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % featured.length);
  };

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  const visibleProducts: {
    position: Position;
    product: CatalogProduct;
    index: number;
  }[] = [
    {
      position: "left",
      product:
        featured[(activeIndex - 1 + featured.length) % featured.length],
      index: (activeIndex - 1 + featured.length) % featured.length,
    },
    {
      position: "center",
      product: activeProduct,
      index: activeIndex,
    },
    {
      position: "right",
      product: featured[(activeIndex + 1) % featured.length],
      index: (activeIndex + 1) % featured.length,
    },
  ].filter(
    (item, index, array) =>
      array.findIndex((other) => other.index === item.index) === index,
  );

  return (
    <section className="mt-16 overflow-hidden">
      {/* Encabezado */}
      <header className="mb-9 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
        </div>

        <h2
          className="text-[clamp(1.8rem,3.2vw,2.5rem)] font-bold leading-tight tracking-tight text-[var(--color-texto)]"
          style={{ fontFamily: DISPLAY }}
        >
          Productos destacados
        </h2>
      </header>

      {/* Escenario principal */}
      <div
        className="relative mx-auto grid min-h-[680px] max-w-[1180px] grid-cols-1 items-center gap-6 overflow-hidden rounded-[2rem] border border-[var(--color-borde)] bg-[var(--color-panel)]/40 px-5 py-8 sm:min-h-[700px] sm:px-8 lg:h-[530px] lg:min-h-0 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] lg:gap-6 lg:px-10 lg:py-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Decoración */}
        <div className="pointer-events-none absolute right-[10%] top-1/2 hidden h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-[var(--color-borde)] opacity-50 lg:block" />

        {/* INFORMACIÓN IZQUIERDA */}
        <div className="relative z-20 flex min-w-0 flex-col items-start justify-center lg:h-full">
          <span
            className="mb-4 max-w-full truncate rounded-full border border-[var(--color-borde)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-texto-suave)]"
            style={{ fontFamily: MONO }}
          >
            {activeProduct.category}
          </span>

          <div
            key={activeProduct.id}
            className="featured-content-enter flex w-full min-w-0 flex-col items-start"
          >
            <p className="mb-2 text-xs font-medium text-[var(--color-texto-suave)]">
              {activeProduct.storeName}
            </p>

            <h3
              className="line-clamp-3 max-w-full text-[clamp(1.65rem,3vw,3rem)] font-bold leading-[1.08] tracking-tight text-[var(--color-texto)]"
              style={{ fontFamily: DISPLAY }}
            >
              {activeProduct.name}
            </h3>

            <p className="mt-4 line-clamp-3 min-h-[72px] max-w-full text-[clamp(0.78rem,1vw,0.9rem)] leading-6 text-[var(--color-texto-suave)]">
              {activeProduct.description}
            </p>

            <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-2">
              <span className="text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold text-[var(--color-texto)]">
                {formatPrice(activeProduct.price)}
              </span>

              {activeProduct.oldPrice && (
                <span className="text-sm text-[var(--color-texto-suave)] line-through">
                  {formatPrice(activeProduct.oldPrice)}
                </span>
              )}

              {activeProduct.discount && (
                <span className="rounded-full bg-[var(--color-primario)] px-3 py-1 text-[10px] font-bold text-white">
                  -{activeProduct.discount}%
                </span>
              )}
            </div>

            <Link
              href={activeProduct.href}
              className="mt-6 inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accion)] px-5 py-3 text-center text-[clamp(0.62rem,0.8vw,0.75rem)] font-bold uppercase tracking-[0.08em] text-[var(--color-sobre-accion)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ fontFamily: MONO }}
            >
              Descubrir producto
              <ArrowUpRight size={16} className="shrink-0" />
            </Link>
          </div>

          {/* Controles inferiores */}
          {featured.length > 1 && (
            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                onClick={previous}
                aria-label="Producto anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-borde)] text-[var(--color-texto)] transition hover:bg-[var(--color-panel)]"
              >
                <ChevronLeft size={19} />
              </button>

              <span
                className="text-xs font-semibold tabular-nums text-[var(--color-texto-suave)]"
                style={{ fontFamily: MONO }}
              >
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(featured.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={next}
                aria-label="Siguiente producto"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-borde)] text-[var(--color-texto)] transition hover:bg-[var(--color-panel)]"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          )}
        </div>

        {/* TARJETAS FLOTANTES DERECHA */}
        <div className="relative z-10 mx-auto h-[360px] w-full min-w-0 max-w-[650px] overflow-visible sm:h-[410px] lg:h-[420px]">
          {visibleProducts.map(({ position, product, index }) => {
            const isCenter = position === "center";
            const isLeft = position === "left";
            const floatClass =
              position === "center"
                ? "featured-float-center"
                : position === "left"
                  ? "featured-float-left"
                  : "featured-float-right";
            return (
              <article
                key={product.id}
                className={`absolute top-1/2 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isCenter
                  ? "left-1/2 z-30 w-[44%] max-w-[245px] -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100"
                  : isLeft
                    ? "left-[2%] z-10 w-[29%] max-w-[175px] -translate-y-1/2 scale-[0.82] opacity-70"
                    : "right-[2%] z-10 w-[29%] max-w-[175px] -translate-y-1/2 scale-[0.82] opacity-70"
                  } ${floatClass}`}
              >
                <Link
                  href={product.href}
                  tabIndex={isCenter ? 0 : -1}
                  aria-label={`Ver ${product.name}`}
                  className={`group relative block aspect-[3/4] overflow-hidden rounded-[1.6rem] border border-[var(--color-borde)] bg-[var(--color-tarjeta)] shadow-xl transition duration-500 ${isCenter
                    ? "shadow-[0_25px_55px_-20px_rgba(0,0,0,0.25)]"
                    : "shadow-md"
                    }`}
                >
                  {product.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-105 sm:p-5"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${product.tint}`}
                    >
                      <span
                        className="px-3 text-center text-lg font-bold text-black/40"
                        style={{ fontFamily: DISPLAY }}
                      >
                        {product.name}
                      </span>
                    </div>
                  )}

                  {product.isNew && (
                    <span className="absolute left-3 top-3 rounded-full bg-[var(--color-accion)] px-3 py-1 text-[9px] font-bold uppercase text-[var(--color-sobre-accion)]">
                      Nuevo
                    </span>
                  )}

                  {product.discount && (
                    <span className="absolute right-3 top-3 rounded-full bg-[var(--color-primario)] px-2.5 py-1 text-[10px] font-bold text-white">
                      -{product.discount}%
                    </span>
                  )}
                </Link>

                {/* Tarjeta de información flotante */}
                <div
                  className={`relative z-20 mx-auto -mt-8 w-[92%] min-w-0 rounded-xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)]/95 shadow-lg backdrop-blur-xl ${isCenter ? "p-3 sm:p-4" : "p-2.5"
                    }`}
                >
                  <p
                    className="truncate text-[9px] font-medium uppercase tracking-wider text-[var(--color-texto-suave)]"
                    style={{ fontFamily: MONO }}
                  >
                    {product.category}
                  </p>

                  <h4
                    className={`mt-1 line-clamp-2 font-bold leading-tight text-[var(--color-texto)] ${isCenter ? "text-base sm:text-xl" : "text-xs sm:text-sm"
                      }`}
                    style={{ fontFamily: DISPLAY }}
                  >
                    {product.name}
                  </h4>

                  <p
                    className={`mt-1 font-extrabold text-[var(--color-texto)] ${isCenter ? "text-base sm:text-lg" : "text-xs"
                      }`}
                  >
                    {formatPrice(product.price)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Indicadores */}
      {featured.length > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {featured.map((product, index) => (
            <button
              key={product.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Mostrar ${product.name}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index
                ? "w-8 bg-[var(--color-primario)]"
                : "w-1.5 bg-[var(--color-borde)] hover:bg-[var(--color-texto-suave)]"
                }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
