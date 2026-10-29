"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroFeatures } from "../../data/home-data";
import { HERO_IMAGE, serif, hero_object } from "../../lib/constants";
import { FiIcon } from "../fi-icon";

/**
 * Escala del hero en pantallas grandes (>= 1024px).
 *
 * Todo se mide con una unidad `--u` que vale 16px hasta 1366px de ancho
 * (el diseño que ya se ve bien en 768p) y crece con el ancho de la ventana.
 * Así, en 1920, 2560 o 4K el hero se ve igual que en 1366 pero más grande:
 * mismas proporciones, mismo orden, nada desalineado.
 *
 * Está en CSS propio (no en clases de Tailwind) para que nada lo pise.
 */
const HERO_CSS = `
.hero-root { --u: clamp(1rem, 1.1713vw, 2.75rem); }

@media (min-width: 1024px) {
  .hero-root { padding-bottom: calc(var(--u) * 7); }

  .hero-wrap {
    max-width: calc(var(--u) * 80);
    padding-inline: calc(var(--u) * 2);
  }

  .hero-content { padding-top: calc(var(--u) * 10); padding-bottom: calc(var(--u) * 10); }

  .hero-title {
    margin-top: var(--u);
    max-width: calc(var(--u) * 36);
    font-size: calc(var(--u) * 3.75);
  }

  .hero-text {
    margin-top: calc(var(--u) * 1.25);
    max-width: calc(var(--u) * 24);
    font-size: var(--u);
  }

  .hero-cta { margin-top: calc(var(--u) * 1.75); gap: calc(var(--u) * 0.75); }
  .hero-btn {
    gap: calc(var(--u) * 0.5);
    padding: calc(var(--u) * 0.875) calc(var(--u) * 1.75);
    font-size: calc(var(--u) * 0.75);
  }
  .hero-btn svg { width: calc(var(--u) * 0.95); height: calc(var(--u) * 0.95); }

  .hero-feats { margin-top: calc(var(--u) * 2.5); column-gap: calc(var(--u) * 2); row-gap: calc(var(--u) * 0.75); }
  .hero-feat { gap: calc(var(--u) * 0.625); }
  .hero-feat > svg, .hero-feat > span:first-child:not(.hero-feat-text) { width: calc(var(--u) * 1.125); height: calc(var(--u) * 1.125); }
  .hero-feat-text { font-size: calc(var(--u) * 0.625); }

  /* Objeto: pegado al borde derecho de la columna, mismo 22% de altura de siempre */
  .hero-obj { top: 22%; right: 0; }
  .hero-obj-img { width: min(calc(var(--u) * 33.75), 72vh); }

  .hero-waves { height: calc(var(--u) * 7); }
}
`;

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let raf = 0;

        const update = () => {
            raf = 0;
            const range = el.offsetHeight * 0.6;
            const p = Math.min(Math.max(window.scrollY / range, 0), 1);
            el.style.setProperty("--hero-p", p.toFixed(3));
        };

        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="hero-root relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#0d0c1d] pb-16 text-white md:pb-28"
        >
            <style>{HERO_CSS}</style>

            {/* Imagen de fondo */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${HERO_IMAGE}), radial-gradient(circle at 75% 25%, color-mix(in srgb, var(--color-primario) 55%, transparent), transparent 50%), linear-gradient(135deg, #1b1b2f 0%, #0d0c1d 100%)`,
                }}
            />

            {/* Velos de contraste */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/35 to-transparent"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-transparent to-black/45"
            />

            {/* Objeto flotante de escritorio (mismo contenedor que el texto) */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-30 hidden overflow-visible md:block"
                style={{
                    opacity: "calc(1 - var(--hero-p, 0))",
                    transform: "translateY(calc(var(--hero-p, 0) * -60px))",
                }}
            >
                <div className="hero-wrap relative mx-auto h-full w-full max-w-7xl px-5 md:px-8 lg:px-12">
                    <div className="zentrall-objeto hero-obj pointer-events-auto absolute right-[7%] top-[22%]">
                        <img
                            src={hero_object}
                            alt=""
                            className="hero-floating-image hero-obj-img w-72"
                        />
                    </div>
                </div>
            </div>

            {/* Contenido principal */}
            <div
                className="hero-wrap hero-content relative z-20 mx-auto w-full max-w-7xl px-5 pb-8 pt-32 will-change-transform sm:pb-10 sm:pt-40 md:px-8 md:pb-40 md:pt-40 lg:px-12"
                style={{
                    opacity: "calc(1 - var(--hero-p, 0))",
                    transform: "translateY(calc(var(--hero-p, 0) * -110px))",
                }}
            >
                <h1
                    className={`${serif} hero-title m-0 mt-4 max-w-xl text-4xl font-[620] leading-[1.08] tracking-tight text-white min-[380px]:text-5xl sm:text-6xl`}
                >
                    Todas tus compras
                    <span className="block italic text-[color-mix(in_srgb,var(--color-descuento)_60%,white)]">
                        a un solo click.
                    </span>
                </h1>

                <p className="hero-text mt-5 max-w-sm text-sm leading-6 text-white/85 sm:text-base">
                    Productos y negocios únicos de Guayaquil, reunidos en un solo lugar.
                    Todo lo que buscas, más cerca de lo que imaginas.
                </p>

                {/* Botones */}
                <div className="hero-cta mt-7 flex flex-wrap items-center gap-3">
                    <Link
                        href="/explorar"
                        className="hero-btn inline-flex items-center gap-2 rounded-full bg-[var(--color-primario)] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--color-sobre-primario)] shadow-lg transition hover:opacity-90 sm:px-7"
                    >
                        Comprar ahora <ArrowRight size={15} />
                    </Link>

                    <Link
                        href="/tiendas"
                        className="hero-btn inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/5 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/15 sm:px-7"
                    >
                        Explorar tiendas
                    </Link>
                </div>

                {/* Características */}
                <ul className="hero-feats mt-10 hidden flex-wrap gap-x-8 gap-y-3 sm:flex">
                    {heroFeatures.map(({ icon: icon, title, detail }) => (
                        <li key={title} className="hero-feat flex items-center gap-2.5">
                            <FiIcon name={icon} size={18} className="text-white/80" />
                            <span className="hero-feat-text text-[10px] leading-tight">
                                <span className="block font-semibold">{title}</span>
                                <span className="text-white/60">{detail}</span>
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Objeto móvil: debajo del contenido, en el flujo normal */}
                <div aria-hidden="true" className="mt-6 flex justify-center sm:mt-8 md:hidden">
                    <img
                        src={hero_object}
                        alt=""
                        className="hero-floating-image w-40 max-w-[55vw] object-contain min-[380px]:w-44 sm:w-56"
                    />
                </div>
            </div>

            {/* Olas inferiores */}
            <div
                aria-hidden="true"
                className="hero-waves pointer-events-none absolute inset-x-0 bottom-0 z-30 h-20 overflow-hidden md:h-28"
            >
                {/* Ola trasera */}
                <svg
                    viewBox="0 0 2880 120"
                    preserveAspectRatio="none"
                    className="zentrall-wave-b absolute bottom-0 left-0 h-full w-[200%]"
                >
                    <path
                        d="M0,60 C240,115 480,115 720,60 C960,5 1200,5 1440,60 C1680,115 1920,115 2160,60 C2400,5 2640,5 2880,60 L2880,120 L0,120 Z"
                        style={{
                            fill: "color-mix(in srgb, var(--color-fondo) 40%, transparent)",
                        }}
                    />
                </svg>

                {/* Ola frontal */}
                <svg
                    viewBox="0 0 2880 120"
                    preserveAspectRatio="none"
                    className="zentrall-wave-a absolute bottom-0 left-0 h-[78%] w-[200%]"
                >
                    <path
                        d="M0,60 C240,115 480,115 720,60 C960,5 1200,5 1440,60 C1680,115 1920,115 2160,60 C2400,5 2640,5 2880,60 L2880,120 L0,120 Z"
                        style={{ fill: "var(--color-fondo)" }}
                    />
                </svg>
            </div>
        </section>
    );
}