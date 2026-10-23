
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  Utensils,
  Gift,
  Shirt,
  Sparkles,
  House,
  Laptop,
  Moon,
  PartyPopper,
  ShoppingBag,
} from "lucide-react";

import { cardSurface, greenPanel, serif, wrap } from "../../lib/constants";
import type { Product } from "../../types";
import { Stars } from "./stars";

type TodaysPlanProps = {
  products: Product[];
  onAdd: (product: Product) => void;
};

const categories = [
  { label: "Desayuno", icon: Coffee, slug: "desayuno" },
  { label: "Almuerzo", icon: Utensils, slug: "almuerzo" },
  { label: "Regalo", icon: Gift, slug: "regalos" },
  { label: "Mi look", icon: Shirt, slug: "moda" },
  { label: "Belleza", icon: Sparkles, slug: "belleza" },
  { label: "Mi hogar", icon: House, slug: "hogar" },
  { label: "Tech", icon: Laptop, slug: "tecnologia" },
  { label: "Noche", icon: Moon, slug: "noche" },
  { label: "Evento", icon: PartyPopper, slug: "eventos" },
  { label: "Compras", icon: ShoppingBag, slug: "compras" },
];

export function TodaysPlan({ products, onAdd }: TodaysPlanProps) {
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

    el.scrollBy({
      left: direction * el.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  const arrowClass =
    "flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-borde)] bg-[var(--color-tarjeta)] text-[var(--color-texto)] transition hover:bg-[var(--color-texto)] hover:text-[var(--color-fondo)] disabled:pointer-events-none disabled:opacity-35";

  return (
    <section className={`${wrap} pt-12`}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2
            className={`${serif} m-0 text-5xl font-semibold tracking-tight text-[var(--color-texto)] sm:text-5xl`}
          >
            Para tu plan de hoy
          </h2>

          <p className="mt-1 text-xs text-[var(--color-texto-suave)] sm:text-sm">
            Cuéntanos para qué y encontramos lo ideal
          </p>

          <div
            aria-hidden="true"
            className="mt-3 h-[6px] w-full max-w-[570px] bg-[repeating-linear-gradient(135deg,var(--color-descuento)_0_4px,var(--color-borde)_4px_8px)]"
          />
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/explorar"
            className="hidden items-center gap-1 text-xs font-semibold text-[var(--color-texto)] transition hover:text-[var(--color-primario)] sm:flex"
          >
            Ver todos <ChevronRight size={14} />
          </Link>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Deslizar hacia la izquierda"
              onClick={() => scrollByPage(-1)}
              disabled={!canPrev}
              className={arrowClass}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              aria-label="Deslizar hacia la derecha"
              onClick={() => scrollByPage(1)}
              disabled={!canNext}
              className={arrowClass}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <nav
        aria-label="Explorar por ocasión"
        className="mb-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map(({ label, icon: Icon, slug }) => (
          <Link
            key={slug}
            href={`/explorar?categoria=${slug}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-borde)] bg-[var(--color-tarjeta)] px-3.5 py-2 text-xs font-medium text-[var(--color-texto)] transition hover:border-[var(--color-texto)] hover:bg-[var(--color-texto)] hover:text-[var(--color-fondo)]"
          >
            <Icon size={14} />
            {label}
          </Link>
        ))}
      </nav>

      <div className={`${greenPanel} p-3 sm:p-5`}>
        <div
          ref={trackRef}
          onScroll={updateButtons}
          className="-mx-4 -mt-4 -mb-6 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 pb-10 pt-4 [scroll-padding-inline:1rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4"
        >
          {products.map((product) => (
            <article
              key={product.id}
              className={`${cardSurface} group relative flex w-[68%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[var(--sombra-media)] sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)] xl:w-[calc((100%-4rem)/5)]`}
            >
              <Link
                href="/explorar"
                aria-label={`Ver ${product.name}`}
                className="relative block aspect-[4/5] overflow-hidden"
              >
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1280px) 18vw, (min-width: 640px) 30vw, 68vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.tint}`}
                  />
                )}
              </Link>

              <div className="flex flex-1 flex-col p-3">
                <Link href="/explorar" className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-[var(--color-texto)]">
                    {product.name}
                  </h3>
                </Link>

                {product.description && (
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[var(--color-texto-suave)]">
                    {product.description}
                  </p>
                )}

                <div className="mt-auto pt-3">
                  <p className={`${serif} text-lg font-bold text-[var(--color-texto)]`}>
                    ${product.price.toFixed(2)}
                  </p>

                  {product.reviews > 0 ? (
                    <div className="mt-1 flex flex-wrap items-center gap-1.5">
                      <Stars rating={product.rating} />
                      <span className="text-[10px] font-semibold text-[var(--color-texto)]">
                        {product.rating.toFixed(1)}
                      </span>
                      <span className="text-[10px] text-[var(--color-texto-suave)]">
                        ({product.reviews.toLocaleString("es-EC")})
                      </span>
                    </div>
                  ) : (
                    <div className="mt-1 flex items-center gap-1.5">
                      <Stars rating={product.rating} />
                      <span className="text-[10px] font-semibold text-[var(--color-texto)]">
                        {product.rating.toFixed(1)}
                      </span>
                      <span className="text-[10px] text-[var(--color-texto-suave)]">
                        (0)
                      </span>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => onAdd(product)}
                    className="mt-3 w-full rounded-lg bg-[var(--color-texto)] px-3 py-2 text-xs font-semibold text-[var(--color-fondo)] transition hover:opacity-85"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
