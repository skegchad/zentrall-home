import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { ExploreStore } from "../../data/explore-data";
import { ExplorePlaceholder } from "./explore-placeholder";

const MONO = "var(--font-mono, ui-monospace, monospace)";

const waBase =
  "relative z-10 inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-transform";

export function ExploreStoreCard({ store: s }: { store: ExploreStore }) {
  const hours = s.hours ?? "Horario por confirmar";

  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] p-5 transition-all [box-shadow:var(--sombra-suave)] hover:-translate-y-1 hover:border-[var(--color-primario)] hover:[box-shadow:var(--sombra-media)]">
      {/* Encabezado: categoría / reseñas */}
      <div
        className="mb-4 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-texto-suave)]"
        style={{ fontFamily: MONO }}
      >
        <span className="truncate">{s.category}</span>
        <span className="shrink-0">{s.reviews > 0 ? `${s.reviews} reseñas` : "Sin reseñas"}</span>
      </div>

      {/* Portada + sello con el logo */}
      <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-[var(--color-borde)] bg-[var(--color-imagen)] [box-shadow:var(--sombra-suave)]">
        {s.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={s.cover}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ExplorePlaceholder />
        )}
        <div aria-hidden className="absolute inset-0 bg-black/20" />

        <div className="absolute left-1/2 top-1/2 grid h-[26%] min-h-14 w-[26%] min-w-14 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full border-[3px] border-[var(--tienda-acento)] bg-[var(--color-superficie)] text-xl font-extrabold text-[var(--color-primario)]">
          {s.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={s.logo} alt="" className="h-full w-full object-cover" />
          ) : (
            <span aria-hidden>{s.name.charAt(0).toUpperCase()}</span>
          )}
        </div>
      </div>

      {/* Nombre (el enlace cubre toda la tarjeta) */}
      <h3 className="mt-5 truncate text-xl font-extrabold leading-tight tracking-tight text-[var(--color-texto)]">
        <Link
          href={s.href}
          className="after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-[color:var(--color-primario)]"
        >
          {s.name}
        </Link>
      </h3>

      <p
        className="mt-2 text-[11px] leading-relaxed text-[var(--color-texto-suave)]"
        style={{ fontFamily: MONO }}
      >
        Horario · {hours}
      </p>

      <div aria-hidden className="mb-4 mt-4 border-t border-dashed border-[var(--color-borde)]" />

      {/* Pie: WhatsApp por encima del enlace de la tarjeta */}
      <div className="mt-auto flex items-center justify-end">
        {s.whatsapp ? (
          <a
            href={s.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Escribir por WhatsApp a ${s.name}`}
            className={`${waBase} bg-[var(--tienda-whatsapp)] text-[var(--tienda-sobre-whatsapp)] hover:-translate-y-0.5`}
            style={{ fontFamily: MONO }}
          >
            <MessageCircle size={14} aria-hidden />
            WhatsApp
          </a>
        ) : (
          <span
            aria-disabled="true"
            className={`${waBase} pointer-events-none bg-[var(--tienda-whatsapp)] text-[var(--tienda-sobre-whatsapp)] opacity-40`}
            style={{ fontFamily: MONO }}
          >
            <MessageCircle size={14} aria-hidden />
            WhatsApp
          </span>
        )}
      </div>
    </article>
  );
}