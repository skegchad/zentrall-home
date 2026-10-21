"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { AffiliatedStore } from "../../data/stores-data";
import { WhatsAppIcon } from "./stores-icons";

const AUTOPLAY_MS = 7000;
const DISPLAY_FONT = "var(--font-display, 'Fraunces', Georgia, serif)";
const BODY_FONT = "var(--font-body, 'Space Grotesk', system-ui, sans-serif)";
const MONO_FONT = "var(--font-mono, ui-monospace, monospace)";

function StoreLogo({ store }: { store: AffiliatedStore }) {
  const initials = store.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border backdrop-blur-sm md:h-24 md:w-24"
      style={{
        fontFamily: DISPLAY_FONT,
        borderColor: "var(--tienda-borde)",
        background: "var(--tienda-panel)",
      }}
    >
      {store.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={store.logo} alt={`Logo de ${store.name}`} className="h-full w-full object-cover" />
      ) : (
        <span className="text-2xl font-bold" style={{ color: "var(--tienda-texto)" }}>
          {initials}
        </span>
      )}
    </div>
  );
}

export function StoresSlideshow({ stores }: { stores: AffiliatedStore[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = stores.length;

  const goTo = useCallback((i: number) => setIndex(((i % total) + total) % total), [total]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Autoplay: se reinicia cada vez que cambia la diapositiva
  useEffect(() => {
    if (paused || total < 2) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, paused, total]);

  if (total === 0) {
    return (
      <section className="px-6 pb-20 md:px-10 lg:px-16">
        <div
          className="mx-auto max-w-[1400px] rounded-3xl border border-dashed px-6 py-20 text-center"
          style={{ borderColor: "var(--color-borde)", color: "var(--color-texto-suave)" }}
        >
          No hay negocios que coincidan con este filtro por ahora.
        </div>
      </section>
    );
  }

  return (
    <section
      aria-roledescription="carrusel"
      aria-label="Negocios afiliados"
      className="px-6 pb-20 md:px-10 lg:px-16"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }}
    >
      <style>{`
        @keyframes zt-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>

      <div
        className="relative mx-auto max-w-[1400px] overflow-hidden border"
        style={{
          background: "var(--tienda-fondo)",
          borderColor: "var(--tienda-borde)",
          borderRadius: 10 ,
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
          touchStartX.current = null;
        }}
      >
        {/* Todas las diapositivas en la misma celda: la altura se ajusta a la más alta */}
        <div className="grid">
          {stores.map((store, i) => {
            const active = i === index;
            const message = encodeURIComponent(
              `Hola ${store.name}, vi su tienda en Zentrall y quisiera más información.`,
            );

            return (
              <article
                key={store.id}
                aria-hidden={!active}
                aria-roledescription="diapositiva"
                aria-label={`${i + 1} de ${total}: ${store.name}`}
                className={`relative col-start-1 row-start-1 min-h-[560px] transition-opacity duration-700 ease-out md:min-h-[520px] ${
                  active ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                {/* Fondo del negocio */}
                {store.background ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={store.background}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="absolute inset-0 flex items-start justify-end p-5"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, var(--tienda-fondo-2) 0%, var(--tienda-fondo) 60%), repeating-linear-gradient(45deg, transparent 0 14px, var(--tienda-linea) 14px 15px)",
                    }}
                  >
                    <span
                      className="border border-dashed px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]"
                      style={{
                        fontFamily: MONO_FONT,
                        borderColor: "var(--tienda-borde)",
                        color: "var(--tienda-texto-suave)",
                      }}
                    >
                      Espacio para imagen de fondo
                    </span>
                  </div>
                )}

                {/* Capa para legibilidad del texto (cambia con el tema) */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(var(--tienda-velo), 0.95), rgba(var(--tienda-velo), 0.7), rgba(var(--tienda-velo), 0.2))",
                  }}
                />

                {/* Contenido */}
                <div className="relative z-10 grid h-full gap-10 p-6 pb-20 md:grid-cols-[1.1fr_0.9fr] md:p-12 md:pb-20">
                  {/* Izquierda: identidad */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-5">
                      <StoreLogo store={store} />
                      <div>
                        <p
                          className="text-[11px] uppercase tracking-[0.2em]"
                          style={{ color: "var(--tienda-acento)", fontFamily: MONO_FONT }}
                        >
                          {String(i + 1).padStart(2, "0")} / {store.tag}
                        </p>
                        <h2
                          className="text-4xl font-bold leading-none tracking-tight md:text-6xl"
                          style={{ color: "var(--tienda-texto)", fontFamily: DISPLAY_FONT }}
                        >
                          {store.name}
                        </h2>
                      </div>
                    </div>

                    <p
                      className="mt-6 max-w-md text-base leading-relaxed md:text-lg"
                      style={{ color: "var(--tienda-texto-suave)", fontFamily: BODY_FONT }}
                    >
                      {store.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={`/tiendas/${store.slug}`}
                        tabIndex={active ? 0 : -1}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-transform hover:-translate-y-0.5"
                        style={{
                          background: "var(--tienda-acento)",
                          color: "var(--tienda-sobre-acento)",
                        }}
                      >
                        Ver su tienda
                        <span aria-hidden>→</span>
                      </Link>

                      <a
                        href={`https://wa.me/${store.whatsapp}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={active ? 0 : -1}
                        className="inline-flex items-center gap-2 border border-[color-mix(in_srgb,var(--tienda-whatsapp)_60%,transparent)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--tienda-whatsapp)] transition-colors hover:bg-[var(--tienda-whatsapp)] hover:text-[var(--tienda-sobre-whatsapp)]"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Derecha: productos */}
                  <div className="flex flex-col justify-center">
                    <div
                      className="border p-6 backdrop-blur-sm"
                      style={{
                        borderColor: "var(--tienda-borde)",
                        background: "var(--tienda-panel)",
                      }}
                    >
                      <p
                        className="mb-4 text-[11px] uppercase tracking-[0.2em]"
                        style={{ color: "var(--tienda-acento)", fontFamily: MONO_FONT }}
                      >
                        Algunos productos
                      </p>
                      <ul>
                        {store.products.map((p) => (
                          <li
                            key={p.name}
                            className="flex items-baseline justify-between gap-4 border-b py-3 last:border-b-0"
                            style={{
                              color: "var(--tienda-texto)",
                              borderColor: "var(--tienda-linea)",
                              fontFamily: BODY_FONT,
                            }}
                          >
                            <span>{p.name}</span>
                            {p.price && (
                              <span className="shrink-0 text-sm" style={{ color: "var(--tienda-acento)" }}>
                                {p.price}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Controles */}
        {total > 1 && (
          <>
            <div className="absolute bottom-5 left-6 z-20 flex items-center gap-2 md:left-12">
              {stores.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Ir a ${s.name}`}
                  aria-current={i === index}
                  className="h-1.5 w-8 transition-colors"
                  style={{ background: i === index ? "var(--tienda-acento)" : "var(--tienda-inactivo)" }}
                />
              ))}
            </div>

            <div className="absolute bottom-3 right-6 z-20 flex gap-2 md:right-12">
              {[
                { label: "Negocio anterior", icon: "←", onClick: prev },
                { label: "Siguiente negocio", icon: "→", onClick: next },
              ].map((b) => (
                <button
                  key={b.label}
                  type="button"
                  onClick={b.onClick}
                  aria-label={b.label}
                  className="flex h-10 w-10 items-center justify-center border border-[var(--tienda-borde)] text-lg text-[var(--tienda-texto)] transition-colors hover:bg-[var(--tienda-texto)] hover:text-[var(--tienda-fondo)]"
                >
                  {b.icon}
                </button>
              ))}
            </div>

            {/* Barra de progreso del autoplay */}
            <div
              className="absolute inset-x-0 bottom-0 z-20 h-[3px]"
              style={{ background: "var(--tienda-linea)" }}
            >
              <div
                key={index}
                className="h-full origin-left"
                style={{
                  background: "var(--tienda-acento)",
                  animation: `zt-progress ${AUTOPLAY_MS}ms linear forwards`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}