"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import type { AffiliatedStore } from "../../data/stores-data";
import { catalogProducts } from "../../data/catalog-data";
import { placeholderGradient } from "../../lib/stores-utils";
import { StoreLogoTile } from "../stores/store-logo-tile";
import { Header } from "./header";

const MONO = "var(--font-mono, ui-monospace, monospace)";
const DISPLAY = "var(--font-display, 'Arvo', Georgia, serif)";

type Props = { store: AffiliatedStore };

export function StoreProfile({ store }: Props) {
  const products = catalogProducts.filter(
    (p) => p.storeId === store.id || p.storeId === store.slug,
  );

  const phone = (store.whatsapp ?? "").replace(/\D/g, "");
  const message = encodeURIComponent(
    `Hola ${store.name}, vi su tienda en Zentrall y quisiera más información.`,
  );

  return (
    <div className="zentrall-home min-h-screen bg-[var(--color-fondo)] text-[var(--color-texto)]">
      <Header storeName={store.name} storeLogo={store.logo ?? undefined} />
      <main className="pb-20 pt-28">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6">
          <Link
            href="/tiendas"
            className="mb-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-texto-suave)] transition-colors hover:text-[var(--color-primario)]"
            style={{ fontFamily: MONO }}
          >
            <ArrowLeft size={14} aria-hidden />
            Volver a tiendas
          </Link>

          {/* Banner */}
          <div className="relative mb-16 aspect-[16/6] min-h-[180px]">
            <div className="absolute inset-0 overflow-hidden rounded-3xl border border-[var(--color-borde)]">
              {store.background ? (
                <img
                  src={store.background}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ backgroundImage: placeholderGradient(store.name) }}
                />
              )}
            </div>

            <div className="absolute -bottom-10 left-6 z-10 aspect-square w-24 overflow-hidden rounded-full border-2 border-[var(--tienda-acento)] bg-[var(--color-tarjeta)] shadow-lg sm:w-28">
              <StoreLogoTile store={store} className="h-full w-full !rounded-none !border-0" />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1
                className="text-[clamp(2rem,4.2vw,3rem)] font-bold leading-tight tracking-tight"
                style={{ fontFamily: DISPLAY }}
              >
                {store.name}
              </h1>
              <p className="mt-2 max-w-[62ch] leading-7 text-[var(--color-texto-suave)]">
                {store.description}
              </p>
            </div>

            {phone && (
              <a
                href={`https://wa.me/${phone}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[var(--radio)] px-6 text-sm font-bold transition hover:-translate-y-0.5"
                style={{
                  background: "var(--tienda-whatsapp)",
                  color: "var(--tienda-sobre-acento)",
                }}
              >
                <FaWhatsapp size={17} aria-hidden />
                Escribir por WhatsApp
              </a>
            )}
          </div>

          {/* Productos */}
          <h2
            className="mt-12 border-b border-[var(--color-borde)] pb-3 text-lg font-bold"
            style={{ fontFamily: DISPLAY }}
          >
            Productos
          </h2>

          {products.length > 0 ? (
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {products.map((p) => (
                <Link
                  key={p.id}
                  href={p.href}
                  className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] p-3 transition hover:-translate-y-1 hover:border-[var(--color-primario)]"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    {p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className={`h-full w-full bg-gradient-to-br ${p.tint}`} />
                    )}
                  </div>
                  <h3 className="mt-3 truncate text-[15px]">{p.name}</h3>
                  <p className="text-lg font-bold">${p.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-[var(--color-texto-suave)]">
              Esta tienda aún no tiene productos publicados.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}