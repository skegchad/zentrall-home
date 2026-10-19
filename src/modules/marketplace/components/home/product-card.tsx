"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "../../types";
import { Stars } from "./stars";

type ProductCardProps = {
  product: Product;
  isNew?: boolean;
  onAdd: () => void;
};

export function ProductCard({ product, isNew, onAdd }: ProductCardProps) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] transition hover:-translate-y-1 hover:shadow-[var(--sombra-media)]">
      <Link href="/explorar" className="block">
        <div
          className={`relative flex aspect-square items-center justify-center bg-gradient-to-br ${product.tint}`}
        >
          <span className="select-none text-6xl transition duration-300 group-hover:scale-110">
            {product.emoji}
          </span>
          {isNew && (
            <span className="absolute left-2 top-2 rounded bg-[var(--color-descuento)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
              Nuevo
            </span>
          )}
          <button
            type="button"
            aria-label={`Guardar ${product.name}`}
            onClick={(event) => {
              event.preventDefault();
              setSaved((value) => !value);
            }}
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#1b1b2f] backdrop-blur transition hover:text-[var(--color-descuento)]"
          >
            <Heart
              size={15}
              className={
                saved
                  ? "fill-[var(--color-descuento)] text-[var(--color-descuento)]"
                  : ""
              }
            />
          </button>
        </div>
      </Link>

      <div className="p-3">
        <h3 className="truncate text-xs font-semibold text-[var(--color-texto)]">
          {product.name}
        </h3>
        <p className="mt-0.5 truncate text-[10px] text-[var(--color-texto-suave)]">
          {product.store}
        </p>
        <div className="mt-1.5 flex items-center gap-1.5">
          <Stars rating={product.rating} />
          <span className="text-[9px] text-[var(--color-texto-suave)]">
            ({product.reviews.toLocaleString("es-EC")})
          </span>
        </div>
        <p className="mt-2 text-sm font-bold text-[var(--color-precio)]">
          ${product.price.toFixed(2)}
        </p>
        <button
          type="button"
          onClick={onAdd}
          className={`mt-3 w-full rounded-md py-2.5 text-[10px] font-bold uppercase tracking-wider transition ${
            isNew
              ? "border border-[var(--color-texto)] text-[var(--color-texto)] hover:bg-[var(--color-texto)] hover:text-[var(--color-fondo)]"
              : "bg-[var(--color-texto)] text-[var(--color-fondo)] hover:opacity-90"
          }`}
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}