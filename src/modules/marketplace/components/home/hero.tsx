"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroFeatures } from "../../data/home-data";
import { HERO_IMAGE, serif, wrap, hero_object } from "../../lib/constants";

/**
 * Hero a pantalla completa.
 * Al hacer scroll, el contenido sube y se desvanece (variable CSS --hero-p: 0 → 1);
 * el fondo y el borde líquido se quedan.
 */
export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let raf = 0;
        const update = () => {
            raf = 0;
            const range = el.offsetHeight * 0.6; // al 60% del hero ya no se ve
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
            className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#0d0c1d] pb-16 text-white md:pb-28"
        >
            {/* Imagen de fondo */}
            <div
                aria-hidden
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${HERO_IMAGE}), radial-gradient(circle at 75% 25%, color-mix(in srgb, var(--color-primario) 55%, transparent), transparent 50%), linear-gradient(135deg, #1b1b2f 0%, #0d0c1d 100%)`,
                }}
            />
            {/* Velos: izquierda (texto) + arriba (menú) + abajo */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/35 to-transparent"
            />
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-transparent to-black/45"
            />
            {/* Imagen decorativa flotante (sube más despacio que el texto) */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 overflow-hidden will-change-transform"
                style={{
                    opacity: "calc(1 - var(--hero-p, 0))",
                    transform: "translateY(calc(var(--hero-p, 0) * -60px))",
                }}
            >
                <div className="pointer-events-auto absolute right-[7%] top-[22%] zentrall-objeto">
                    <img
                        src={hero_object}
                        alt=""
                        className="hero-floating-image w-56 sm:w-72 lg:w-135"
                    />
                </div>
            </div>

            {/* Contenido (sube y se desvanece) */}
            <div
                className={`${wrap} relative pb-28 pt-40 will-change-transform md:pb-40`}
                style={{
                    opacity: "calc(1 - var(--hero-p, 0))",
                    transform: "translateY(calc(var(--hero-p, 0) * -110px))",
                }}
            >
                <h1
                    className={`${serif} m-0 mt-4 max-w-xl text-5xl font-[620] leading-[1.08] tracking-tight text-white sm:text-6xl`}
                >
                    Todas tus compras
                    <span className="block italic text-[color-mix(in_srgb,var(--color-descuento)_60%,white)]">
                        a un solo click.
                    </span>
                </h1>

                <p className="mt-5 max-w-sm text-sm leading-6 text-white/85">
                    Productos y negocios únicos de Guayaquil, reunidos en un solo lugar.
                    Todo lo que buscas, más cerca de lo que imaginas.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Link
                        href="/explorar"
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primario)] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--color-sobre-primario)] shadow-lg transition hover:opacity-90"
                    >
                        Comprar ahora <ArrowRight size={15} />
                    </Link>
                    <Link
                        href="/tiendas"
                        className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider backdrop-blur transition hover:bg-white/15"
                    >
                        Explorar tiendas
                    </Link>
                </div>

                <ul className="mt-10 hidden flex-wrap gap-x-8 gap-y-3 sm:flex">
                    {heroFeatures.map(({ icon: Icon, title, detail }) => (
                        <li key={title} className="flex items-center gap-2.5">
                            <Icon size={18} className="text-white/80" />
                            <span className="text-[10px] leading-tight">
                                <span className="block font-semibold">{title}</span>
                                <span className="text-white/60">{detail}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 overflow-hidden md:h-28"
            >
                {/* Ola trasera: misma forma, más arriba y translúcida */}
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