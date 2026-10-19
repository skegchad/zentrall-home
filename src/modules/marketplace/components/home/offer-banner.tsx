"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { PROMO_CODE, serif, wrap } from "../../lib/constants";

export function OfferBanner() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
    } catch {
      /* el portapapeles puede no estar disponible */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={`${wrap} pt-6`}>
      <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-[var(--color-borde)] bg-[var(--color-activo-fondo)] px-6 py-5 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-tarjeta)] text-2xl shadow-[var(--sombra-suave)]">
            🎁
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-activo-texto)]">
              Oferta especial
            </p>
            <h2
              className={`${serif} m-0 text-xl font-normal text-[var(--color-texto)] sm:text-2xl`}
            >
              ¡15% de descuento en tu primer pedido!
            </h2>
            <p className="text-xs text-[var(--color-texto-suave)]">
              Trae la belleza de lo local a tu día.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-xl border border-dashed border-[var(--color-activo-borde)] bg-[var(--color-tarjeta)] px-6 py-2.5 text-center">
            <p className="text-[9px] font-semibold uppercase tracking-widest text-[var(--color-texto-suave)]">
              Usa el código
            </p>
            <p className="text-lg font-bold tracking-wider text-[var(--color-texto)]">
              {PROMO_CODE}
            </p>
          </div>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-texto)] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--color-fondo)] transition hover:opacity-90"
          >
            {copied ? (
              <>
                <Check size={15} /> Copiado
              </>
            ) : (
              <>
                <Copy size={15} /> Reclamar oferta
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}