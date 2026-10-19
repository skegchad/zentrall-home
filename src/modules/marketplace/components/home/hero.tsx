import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroFeatures } from "../../data/home-data";
import { HERO_IMAGE, serif, wrap, hero_object } from "../../lib/constants";

/** Hero a pantalla completa. El header y la barra de anuncios se superponen desde la página. */
export function Hero() {
    return (
        <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#0d0c1d] text-white">
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
            {/* Imagen decorativa flotante */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            >
                <div className="pointer-events-auto absolute right-[7%] top-[22%] objeto-flotante">
                    <img
                        src={hero_object}
                        alt=""
                        className="hero-floating-image w-56 sm:w-72 lg:w-135"
                    />
                </div>
            </div>
            <div className={`${wrap} relative pb-28 pt-40 md:pb-40`}>
                <h1
                    className={`${serif} m-0 mt-4 max-w-xl text-5xl font-normal leading-[1.08] tracking-tight text-white sm:text-6xl`}
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

                <ul className="mt-10 hidden flex-wrap gap-x-8 gap-y- sm:flex">
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

            {/* Borde inferior líquido animado */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 overflow-hidden md:h-28"
            >
                <svg
                    viewBox="0 0 2880 120"
                    preserveAspectRatio="none"
                    className="zentrall-wave-b absolute bottom-0 left-0 h-full w-[200%]"
                >
                    <path
                        d="M0,40 C180,95 540,95 720,40 C900,-15 1260,-15 1440,40 C1620,95 1980,95 2160,40 C2340,-15 2700,-15 2880,40 L2880,120 L0,120 Z"
                        style={{
                            fill: "color-mix(in srgb, var(--color-fondo) 45%, transparent)",
                        }}
                    />
                </svg>
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