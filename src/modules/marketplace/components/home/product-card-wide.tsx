"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { cardSurface, serif } from "../../lib/constants";
import type { Product } from "../../types";
import { Stars } from "./stars";

type ProductCardWideProps = {
  product: Product;
  onAdd: () => void;
};

export function ProductCardWide({ product, onAdd }: ProductCardWideProps) {
  const [saved, setSaved] = useState(false);

  // Requiere uuid?: string y href?: string en el tipo Product (types/index.ts)
  const href =
    product.href ?? (product.uuid ? `/producto/${product.uuid}` : "/explorar");

  return (
    <article
      className={`${serif} ${cardSurface} group relative flex h-full overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[var(--sombra-media)]`}
    >
      {/* Imagen (izquierda): el marco se estira al alto de la tarjeta */}
      <div className="w-[40%] shrink-0 self-stretch p-3">
        <Link
          href={href}
          aria-label={`Ver ${product.name}`}
          className="relative block h-full min-h-[10rem] w-full transform-gpu overflow-hidden rounded-xl"
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 14vw, (min-width: 640px) 20vw, 40vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${product.tint}`}
            />
          )}
        </Link>
      </div>

      {/* Insignia */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-lg bg-[var(--color-texto)] px-2.5 py-1 text-xs font-semibold leading-none text-[var(--color-fondo)]">
        Más vendido
      </span>

      {/* Guardar */}
      <button
        type="button"
        aria-label={`Guardar ${product.name}`}
        onClick={() => setSaved((value) => !value)}
        className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center text-[var(--color-texto)] transition hover:text-[var(--color-descuento)]"
      >
        <Heart
          size={20}
          className={
            saved
              ? "fill-[var(--color-descuento)] text-[var(--color-descuento)]"
              : ""
          }
        />
      </button>

      {/* Datos (derecha) */}
      <div className="flex min-w-0 flex-1 flex-col py-4 pl-1 pr-4">
        <p className="pr-8 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-primario)]">
          {product.category ?? product.store}
        </p>
        <h3 className="mt-1 truncate text-lg text-[var(--color-texto)]">
          {product.name}
        </h3>
        {product.description && (
          <p className="mt-1 line-clamp-2 text-sm leading-snug text-[var(--color-texto-suave)]">
            {product.description}
          </p>
        )}

        <div className="mt-auto flex items-end justify-between gap-3 pt-3">
          <div className="min-w-0">
            <p className="text-xl font-bold text-[var(--color-texto)]">
              ${product.price.toFixed(2)}
            </p>

            <div className="mt-1 flex flex-wrap items-center gap-1.5">
              <Stars rating={product.rating} />

              <span className="text-[11px] font-semibold text-[var(--color-texto)]">
                {product.rating.toFixed(1)}
              </span>

              <span className="text-[11px] text-[var(--color-texto-suave)]">
                ({product.reviews.toLocaleString("es-EC")})
              </span>
            </div>
          </div>

          <button
            type="button"
            aria-label={`Agregar ${product.name} al carrito`}
            onClick={onAdd}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accion)] text-[var(--color-sobre-accion)] transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accion)]"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}