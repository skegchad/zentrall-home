"use client";

import { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import type { CatalogProduct } from "../../data/catalog-data";
import { FaWhatsapp } from "react-icons/fa";

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primario)]";

type Props = {
  product: CatalogProduct;
  /** Número de WhatsApp de la tienda, con código de país (ej. 593999999999) */
  whatsapp?: string;
};

export function ProductPurchase({ product, whatsapp }: Props) {
  const [qty, setQty] = useState(1);
  const [favorite, setFavorite] = useState(false);

  const total = product.price * qty;

  // Deja solo dígitos, por si el dato viene como "https://wa.me/593..." o con "+"
  const phone = (whatsapp ?? "").replace(/\D/g, "");

  const message = encodeURIComponent(
    `Hola, estoy interesado en el producto ${product.name}, con id ${product.uuid}.`,
  );

  const whatsappHref = phone ? `https://wa.me/${phone}?text=${message}` : null;

  return (
    <>
      <div aria-hidden className="my-6 border-t border-dashed border-[var(--color-borde)]" />

      <p
        className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-texto-suave)]"
        style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
      >
        Cantidad
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <div className="inline-flex items-center rounded-full border border-[var(--color-borde)] bg-[var(--color-circulo)] p-1">
          <button
            type="button"
            aria-label="Quitar una unidad"
            disabled={qty <= 1}
            onClick={() => setQty((current) => Math.max(1, current - 1))}
            className={`grid h-9 w-9 place-items-center rounded-full text-[var(--color-circulo-icono)] transition-colors enabled:hover:bg-[var(--color-superficie)] disabled:opacity-40 ${FOCUS}`}
          >
            <Minus size={15} aria-hidden />
          </button>

          <output
            aria-live="polite"
            className="w-10 text-center text-sm font-bold text-[var(--color-texto)]"
            style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
          >
            {qty}
          </output>

          <button
            type="button"
            aria-label="Agregar una unidad"
            onClick={() => setQty((current) => current + 1)}
            className={`grid h-9 w-9 place-items-center rounded-full text-[var(--color-circulo-icono)] transition-colors hover:bg-[var(--color-superficie)] ${FOCUS}`}
          >
            <Plus size={15} aria-hidden />
          </button>
        </div>

        <span
          className="text-xs text-[var(--color-texto-suave)]"
          style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
        >
          Total · ${total.toFixed(2)}
        </span>
      </div>

      <div className="mt-6 grid gap-3">
        {whatsappHref ? (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contactar por WhatsApp sobre ${product.name}`}
            className={`inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radio)] px-6 text-sm font-bold transition hover:-translate-y-0.5 hover:brightness-105 ${FOCUS}`}
            style={{
              background: "var(--tienda-whatsapp)",
              color: "var(--tienda-sobre-acento)",
            }}
          >
            <FaWhatsapp size={17} aria-hidden />
            Contactar por WhatsApp
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex h-12 cursor-not-allowed items-center justify-center gap-2 rounded-[var(--radio)] border border-[var(--color-borde)] px-6 text-sm font-bold text-[var(--color-texto-suave)] opacity-60"
          >
            <FaWhatsapp size={17} aria-hidden />
            WhatsApp no disponible
          </button>
        )}

        <button
          type="button"
          aria-pressed={favorite}
          onClick={() => setFavorite((current) => !current)}
          className={`inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radio)] border px-6 text-sm font-semibold transition-colors ${FOCUS} ${
            favorite
              ? "border-[var(--color-activo-borde)] bg-[var(--color-activo-fondo)] text-[var(--color-activo-texto)]"
              : "border-[var(--color-borde)] bg-[var(--color-tarjeta)] text-[var(--color-texto)] hover:border-[var(--color-primario)]"
          }`}
        >
          <Heart size={17} aria-hidden fill={favorite ? "currentColor" : "none"} />
          {favorite ? "En favoritos" : "Guardar en favoritos"}
        </button>
      </div>
    </>
  );
}