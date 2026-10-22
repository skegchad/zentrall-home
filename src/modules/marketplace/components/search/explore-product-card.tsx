import Link from "next/link";
import { Store } from "lucide-react";
import type { ExploreProduct } from "../../data/explore-data";
import { formatPrice } from "../../lib/explore-utils";
import { ExplorePlaceholder } from "./explore-placeholder";

const MONO = "var(--font-mono, ui-monospace, monospace)";

type Props = { product: ExploreProduct; className?: string };

export function ExploreProductCard({ product: p, className = "" }: Props) {
  return (
    <Link
      href={p.href}
      className={`group flex flex-col overflow-hidden rounded-3xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] text-inherit no-underline transition duration-300 [box-shadow:var(--sombra-suave)] hover:-translate-y-1 hover:border-[var(--color-primario)] hover:[box-shadow:var(--sombra-media)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primario)] ${className}`}
    >
      <div className="relative aspect-square overflow-hidden bg-[var(--color-imagen)]">
        {p.discount ? (
          <span
            className="absolute left-3 top-3 z-10 rounded-full bg-[var(--color-descuento)] px-2.5 py-1 text-[0.68rem] font-bold text-white"
            style={{ fontFamily: MONO }}
          >
            -{p.discount}%
          </span>
        ) : null}
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ExplorePlaceholder />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-[0.82rem] font-bold uppercase leading-snug tracking-wide text-[var(--color-texto)]">
          {p.name}
        </h3>
        <p className="flex items-baseline gap-2">
          <strong className="text-lg font-extrabold text-[var(--color-primario)]">{formatPrice(p.price)}</strong>
          {p.oldPrice ? (
            <s className="text-[0.72rem] text-[var(--color-texto-suave)]">{formatPrice(p.oldPrice)}</s>
          ) : null}
        </p>

        <div
          aria-hidden
          className="mt-auto border-t border-dashed border-[var(--color-borde)]"
        />
        <div
          className="flex items-center justify-between gap-2 text-[0.68rem] text-[var(--color-texto-suave)]"
          style={{ fontFamily: MONO }}
        >
          <span className="inline-flex min-w-0 items-center gap-1.5">
            <Store size={13} aria-hidden className="shrink-0" />
            <span className="truncate">{p.storeName}</span>
          </span>
          <span className="shrink-0">
            {p.reviews > 0 ? (
              <>
                <span className="text-[var(--tienda-estrella)]">★</span> {p.rating?.toFixed(1) ?? "–"} · {p.reviews}
              </>
            ) : (
              "Sin reseñas"
            )}
          </span>
        </div>
      </div>
    </Link>
  );
}