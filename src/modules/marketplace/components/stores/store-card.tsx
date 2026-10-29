import Link from "next/link";
import type { AffiliatedStore } from "../../data/stores-data";
import { placeholderGradient } from "../../lib/stores-utils";
import { StoreLogoTile } from "./store-logo-tile";
import { StarIcon, TruckIcon } from "./stores-icons";
import { FaWhatsapp } from "react-icons/fa";

const MONO = "var(--font-mono, ui-monospace, monospace)";
const BODY = "var(--font-body, 'Space Grotesk', system-ui, sans-serif)";

type Props = {
  store: AffiliatedStore;
  now: Date | null;
};

export function StoreCard({ store }: Props) {
  const message = encodeURIComponent(
    `Hola ${store.name}, vi su tienda en Zentrall y quisiera más información.`,
  );

  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] p-5 transition-all [box-shadow:var(--sombra-suave)] hover:-translate-y-1 hover:border-[var(--color-primario)] hover:[box-shadow:var(--sombra-media)]">
      {/* Encabezado: entrega */}
      <div
        className="mb-4 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-texto-suave)]"
        style={{ fontFamily: MONO }}
      >
        {store.deliveryToday && (
          <span className="flex items-center gap-1.5 text-[var(--color-precio)]">
            <TruckIcon className="h-3.5 w-3.5" />
            Entrega hoy
          </span>
        )}
      </div>

      {/* Banner + logo que sobresale */}
      <div className="relative aspect-[5/4]">
        {/* Capa interna: recorta solo el fondo */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-[var(--color-borde)] [box-shadow:var(--sombra-suave)]">
          {store.background ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={store.background} alt="" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ backgroundImage: placeholderGradient(store.name) }}
            />
          )}
          <div aria-hidden className="absolute inset-0 bg-black/25" />
        </div>

        {/* Logo circular: sale del marco hacia abajo y a la derecha */}
        <div className="absolute -bottom-4 -right-3 z-10 aspect-square w-[24%] min-w-14 overflow-hidden rounded-full border-2 border-[var(--tienda-acento)] bg-[var(--color-tarjeta)] shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
          <StoreLogoTile
            store={store}
            className="h-full w-full !rounded-none !border-0"
          />
        </div>
      </div>

      {/* Meta */}
      <p
        className="mt-7 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-precio)]"
        style={{ fontFamily: MONO }}
      >
        {store.isNew && <> · Nueva</>}
      </p>

      {/* Nombre */}
      <h3
        className="mt-2 truncate text-xl font-extrabold leading-tight tracking-tight text-[var(--color-texto)]"
        style={{ fontFamily: BODY }}
      >
        <Link href={`/tiendas/${store.slug}`} className="after:absolute after:inset-0 after:content-['']">
          {store.name}
        </Link>
      </h3>

      {/* Descripción */}
      <p
        className="mt-1 line-clamp-2 text-[15px] italic leading-snug text-[var(--color-texto-suave)]"
        style={{ fontFamily: BODY }}
      >
        {store.description}
      </p>

      {/* Línea punteada */}
      <div aria-hidden className="mb-4 mt-4 border-t border-dashed border-[var(--color-borde)]" />

      {/* Pie: rating + WhatsApp */}
      <div className="mt-auto flex items-center justify-between gap-3">
        {store.rating != null ? (
          <div className="flex items-baseline gap-2">
            <StarIcon className="h-4 w-4 self-center text-[var(--tienda-estrella)]" />
            <span className="text-2xl font-extrabold text-[var(--color-texto)]" style={{ fontFamily: BODY }}>
              {store.rating.toFixed(1)}
            </span>
            <span className="text-xs text-[var(--color-texto-suave)]" style={{ fontFamily: MONO }}>
              ({store.reviewCount ?? 0})
            </span>
          </div>
        ) : (
          <span className="text-xs text-[var(--color-texto-suave)]" style={{ fontFamily: MONO }}>
            Sin reseñas
          </span>
        )}

        {store.whatsapp && (
          <a
            href={`https://wa.me/${store.whatsapp}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Escribir por WhatsApp a ${store.name}`}
            className="relative z-10 flex items-center gap-2 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-transform hover:-translate-y-0.5"
            style={{
              fontFamily: MONO,
              background: "var(--tienda-whatsapp)",
              color: "var(--tienda-sobre-acento)",
              borderRadius: 10,
            }}
          >
            <FaWhatsapp className="h-4 w-4" />
            WhatsApp
          </a>
        )}
      </div>
    </article>
  );
}