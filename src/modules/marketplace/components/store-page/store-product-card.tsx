"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, ShoppingCart } from "lucide-react";
import type { catalogProducts } from "../../data/catalog-data";
import { Stars } from "../home/stars";

export type CatalogProduct = (typeof catalogProducts)[number];

const MONO = "var(--font-mono, ui-monospace, monospace)";
const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primario)]";

type Props = {
  product: CatalogProduct;
  onAdd?: (product: CatalogProduct) => void;
};

export function StoreProductCard({ product: p, onAdd }: Props) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(false), 1500);
    return () => clearTimeout(timer);
  }, [added]);

  function handleAdd() {
    onAdd?.(p);
    setAdded(true);
  }

  return (
    <article className="group flex flex-col rounded-2xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] p-3 transition hover:-translate-y-1 hover:border-[var(--color-primario)]">
      {/* Imagen */}
      <Link
        href={p.href}
        aria-label={`Ver ${p.name}`}
        className="relative block aspect-square overflow-hidden rounded-xl"
      >
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.image}
            alt={p.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${p.tint}`} />
        )}
      </Link>

      {/* Nombre + detalle */}
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="min-w-0 truncate text-[15px] font-bold text-[var(--color-texto)]">
          {p.name}
        </h3>
        <span
          className="shrink-0 text-[11px] text-[var(--color-texto-suave)]"
          style={{ fontFamily: MONO }}
        >
          {p.category}
        </span>
      </div>

      {/* Estrellas + precio */}
      <div className="mt-1.5 flex items-center justify-between gap-3">
        <Stars rating={p.rating} />
        <p className="text-base font-extrabold text-[var(--color-texto)]">
          ${p.price.toFixed(2)}
        </p>
      </div>

      {/* Botón */}
      <button
        type="button"
        onClick={handleAdd}
        className={`mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--color-accion)] px-5 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-sobre-accion)] transition hover:-translate-y-0.5 hover:brightness-105 ${FOCUS}`}
        style={{ fontFamily: MONO }}
      >
        {added ? <Check size={14} aria-hidden /> : <ShoppingCart size={14} aria-hidden />}
        {added ? "Añadido" : "Añadir al carrito"}
      </button>
    </article>
  );
}