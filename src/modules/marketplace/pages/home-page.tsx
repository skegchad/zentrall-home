"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Headphones,
  Heart,
  HeartHandshake,
  MapPin,
  Menu,
  Quote,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Truck,
  X,
} from "lucide-react";

/**
 * Cambia esto por la foto real del hero (por ejemplo "/hero.jpg" dentro de /public).
 * Mientras sea null se usa un fondo con degradados de la paleta de Zentrall.
 */
const HERO_IMAGE: "../../../../assets/img/hero.png";

/* ───────── Datos ───────── */

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Explorar", href: "/explorar" },
  { label: "Tiendas", href: "/tiendas" },
  { label: "Rutas", href: "/rutas" },
  { label: "Ofertas", href: "/explorar" },
];

const benefits = [
  { icon: Truck, title: "Envío a domicilio", detail: "En toda la ciudad" },
  { icon: RotateCcw, title: "Cambios fáciles", detail: "Política de 30 días" },
  { icon: ShieldCheck, title: "Pagos seguros", detail: "Compra 100% protegida" },
  { icon: Headphones, title: "Atención cercana", detail: "Te ayudamos cuando quieras" },
];

const favorites = [
  { id: 1, name: "Bolso urbano", category: "Moda", price: 28, emoji: "👜" },
  { id: 2, name: "Vela aromática", category: "Hogar", price: 18.5, emoji: "🕯️" },
  { id: 3, name: "Botella térmica", category: "Accesorios", price: 24, emoji: "🧴" },
  { id: 4, name: "Café de especialidad", category: "Gastronomía", price: 8.5, emoji: "☕" },
  { id: 5, name: "Set facial", category: "Belleza", price: 24.5, emoji: "🌸" },
];

const values = [
  { icon: ShoppingBag, label: "Compra local\ny con propósito" },
  { icon: Globe, label: "Hecho en\nGuayaquil" },
  { icon: HeartHandshake, label: "Impacto positivo\nen cada compra" },
];

const serif = "font-[Georgia,'Times_New_Roman',serif]";

/* ───────── Hero (topbar + forma líquida) ───────── */

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-[#14132a] text-white">
      {/* Fondo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "radial-gradient(circle at 78% 25%, color-mix(in srgb, var(--color-primario) 55%, transparent), transparent 48%), radial-gradient(circle at 12% 85%, color-mix(in srgb, var(--color-descuento) 38%, transparent), transparent 50%), linear-gradient(135deg, #1b1b2f 0%, #0d0c1d 100%)",
        }}
      />

      {/* Topbar */}
      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-10">
        <Link
          href="/"
          className={`${serif} italic text-3xl leading-none tracking-tight`}
        >
          Zentrall
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-medium md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={`border-b pb-1 transition hover:border-white ${
                index === 0
                  ? "border-white"
                  : "border-transparent text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="flex h-9 items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 text-xs font-semibold backdrop-blur transition hover:bg-white/20"
          >
            <ShoppingBag size={14} /> Ingresar
          </Link>
          <Link
            href="/login"
            className="flex h-9 items-center gap-2 rounded-full bg-[var(--color-primario)] px-4 text-xs font-semibold text-[var(--color-sobre-primario)] shadow-lg transition hover:opacity-90"
          >
            <Store size={14} /> Mi tienda
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur md:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="relative z-20 mx-5 mb-2 flex flex-col gap-1 rounded-2xl border border-white/20 bg-black/60 p-3 backdrop-blur md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="mt-1 rounded-xl bg-[var(--color-primario)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-sobre-primario)]"
          >
            Ingresar
          </Link>
        </div>
      )}

      {/* Contenido del hero */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-40 pt-10 md:px-10 md:pb-52 md:pt-14 lg:grid-cols-[1fr_1.05fr]">
        {/* Texto */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold backdrop-blur">
            <Store size={14} /> Comercio local de Guayaquil
          </span>

          <h1
            className={`${serif} m-0 mt-6 max-w-xl text-5xl font-medium italic leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-6xl xl:text-7xl`}
          >
            Descubre lo mejor,
            <span className="block text-[color-mix(in_srgb,var(--color-descuento)_60%,white)]">
              hecho con amor.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/80 sm:text-base">
            Productos, negocios y lugares únicos de tu ciudad, reunidos en un
            solo lugar para que encuentres algo que se sienta como en casa.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/explorar"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primario)] px-6 py-3 text-sm font-semibold text-[var(--color-sobre-primario)] shadow-lg transition hover:opacity-90"
            >
              Explorar ahora <ArrowRight size={16} />
            </Link>
            <Link
              href="/tiendas"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
            >
              Ver tiendas <MapPin size={16} />
            </Link>
          </div>
        </div>

        {/* Imagen con marco líquido animado */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Forma de atrás */}
          <div
            aria-hidden
            className="zentrall-blob-back absolute -inset-4 bg-[color-mix(in_srgb,var(--color-descuento)_35%,transparent)]"
          />

          {/* Imagen */}
          <div
            className="zentrall-blob relative flex aspect-[1/0.92] items-center justify-center overflow-hidden bg-cover bg-center shadow-2xl"
            style={
              HERO_IMAGE
                ? { backgroundImage: `url(${HERO_IMAGE})` }
                : {
                    backgroundImage:
                      "radial-gradient(circle at 30% 25%, color-mix(in srgb, var(--color-descuento) 45%, #2a2e78), transparent 55%), radial-gradient(circle at 75% 80%, color-mix(in srgb, var(--color-primario) 60%, #14132a), transparent 60%), linear-gradient(135deg, var(--color-circulo), #1b1b2f)",
                  }
            }
          >
            {!HERO_IMAGE && (
              <span className="select-none text-[9rem] drop-shadow-xl sm:text-[11rem]">
                img
              </span>
            )}
          </div>

          {/* Tarjeta de valoración */}
          <div
            className="zentrall-float absolute -right-2 top-0 rounded-2xl bg-white px-4 py-3 text-[#1b1b2f] shadow-xl sm:-right-6"
            style={{ ["--rot" as string]: "0deg" }}
          >
            <div className="flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={13} className="fill-current" />
              ))}
            </div>
            <p className="mt-1 text-xs font-bold">¡Querido por los vecinos!</p>
            <p className="text-[10px] text-[#6b6d85]">4.9 (230+ reseñas)</p>
          </div>

          {/* Sello */}
          <div
            className="zentrall-float absolute -bottom-4 left-2 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-descuento)] text-center text-xs font-bold leading-tight text-white shadow-xl sm:-left-4"
            style={{ ["--rot" as string]: "-8deg", animationDelay: "-2s" }}
          >
            Hecho
            <br />
            en tu
            <br />
            ciudad
          </div>
        </div>
      </div>

      {/* Borde líquido inferior */}
      <svg
        aria-hidden
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 z-10 block h-24 w-full md:h-36"
      >
        <path
          d="M0,96 C120,140 260,150 400,120 C560,86 640,40 800,52 C960,64 1060,128 1220,132 C1320,134 1390,112 1440,92 L1440,160 L0,160 Z"
          style={{ fill: "var(--color-fondo)" }}
        />
      </svg>
    </section>
  );
}

/* ───────── Estructura nueva ───────── */

function BenefitsBar() {
  return (
    <section className="relative z-10 -mt-10 px-5 md:px-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-6 rounded-3xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] px-4 py-7 shadow-[var(--sombra-suave)] md:grid-cols-4 md:divide-x md:divide-[var(--color-borde)]">
        {benefits.map(({ icon: Icon, title, detail }) => (
          <div
            key={title}
            className="flex flex-col items-center px-3 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-circulo)] text-[var(--color-circulo-icono)]">
              <Icon size={24} />
            </span>
            <h3 className="mt-3 text-sm font-semibold text-[var(--color-texto)]">
              {title}
            </h3>
            <p className="mt-1 text-[11px] text-[var(--color-texto-suave)]">
              {detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Favorites() {
  const [saved, setSaved] = useState<number[]>([]);

  const toggle = (id: number) =>
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );

  return (
    <section className="px-5 py-16 md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-end justify-between">
          <h2
            className={`${serif} m-0 text-2xl font-normal tracking-tight text-[var(--color-texto)] sm:text-3xl`}
          >
            Nuestros favoritos
          </h2>
          <Link
            href="/explorar"
            className="flex items-center gap-1 text-xs font-medium text-[var(--color-texto)] transition hover:text-[var(--color-primario)]"
          >
            Ver todos los productos <ChevronRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {favorites.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] transition hover:-translate-y-1 hover:shadow-[var(--sombra-media)]"
            >
              <Link href="/explorar" className="block">
                <div className="relative flex aspect-square items-center justify-center bg-[var(--color-imagen)]">
                  <span className="select-none text-6xl transition duration-300 group-hover:scale-110">
                    {product.emoji}
                  </span>
                  <button
                    type="button"
                    aria-label={`Guardar ${product.name}`}
                    onClick={(event) => {
                      event.preventDefault();
                      toggle(product.id);
                    }}
                    className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-superficie)]/80 text-[var(--color-texto)] backdrop-blur transition hover:text-[var(--color-descuento)]"
                  >
                    <Heart
                      size={16}
                      className={
                        saved.includes(product.id)
                          ? "fill-[var(--color-descuento)] text-[var(--color-descuento)]"
                          : ""
                      }
                    />
                  </button>
                </div>
              </Link>
              <div className="p-3">
                <h3 className="truncate text-xs font-semibold text-[var(--color-texto)]">
                  {product.name}
                </h3>
                <p className="mt-0.5 text-[10px] text-[var(--color-texto-suave)]">
                  {product.category}
                </p>
                <p className="mt-2 text-sm font-bold text-[var(--color-precio)]">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinBanner() {
  const [sent, setSent] = useState(false);

  return (
    <section className="px-5 md:px-10">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl text-white lg:grid-cols-[1.1fr_0.8fr_1fr]">
        {/* Newsletter */}
        <div className="bg-[color-mix(in_srgb,var(--color-primario)_55%,#14132a)] p-8 sm:p-10">
          <h2
            className={`${serif} m-0 text-2xl font-normal tracking-tight text-white sm:text-3xl`}
          >
            Únete al círculo Zentrall
          </h2>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
            Recibe ofertas exclusivas, novedades de negocios locales y rutas
            para disfrutar la ciudad.
          </p>

          {sent ? (
            <p className="mt-6 rounded-full bg-white/15 px-5 py-3 text-sm font-medium">
              ¡Gracias! Pronto sabrás de nosotros 💌
            </p>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
              className="mt-6 flex max-w-sm overflow-hidden rounded-full bg-white"
            >
              <input
                type="email"
                required
                aria-label="Correo electrónico"
                placeholder="Ingresa tu correo"
                className="min-w-0 flex-1 bg-transparent px-5 py-3 text-xs text-[#1b1b2f] outline-none placeholder:text-[#6b6d85]"
              />
              <button
                type="submit"
                className="bg-[var(--color-descuento)] px-5 text-xs font-semibold text-white transition hover:opacity-90"
              >
                Unirme
              </button>
            </form>
          )}
        </div>

        {/* Imagen central */}
        <div
          className="relative hidden min-h-[240px] items-center justify-center lg:flex"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--color-circulo), var(--color-imagen))",
          }}
        >
          {/* Reemplaza por una captura/foto real */}
          <div className="flex h-56 w-32 flex-col items-center justify-center rounded-[1.6rem] border-4 border-[#1b1b2f] bg-[var(--color-superficie)] text-[var(--color-texto)] shadow-[var(--sombra-media)]">
            <span className={`${serif} text-sm italic`}>Zentrall</span>
            <span className="mt-2 text-3xl">📍</span>
            <span className="mt-2 px-3 text-center text-[8px] text-[var(--color-texto-suave)]">
              Descubre tu ciudad
            </span>
          </div>
        </div>

        {/* Frase */}
        <div className="relative bg-[color-mix(in_srgb,var(--color-primario)_30%,#0d0c1d)] p-8 sm:p-10">
          <Quote
            size={30}
            className="fill-[var(--color-descuento)] text-[var(--color-descuento)]"
          />
          <p
            className={`${serif} mt-4 max-w-xs text-xl leading-snug text-white`}
          >
            Comprar con propósito hace que cada compra sea más significativa.
          </p>
          <Sparkles
            aria-hidden
            size={36}
            className="absolute bottom-6 right-6 text-white/20"
          />
        </div>
      </div>
    </section>
  );
}

function ValuesStrip() {
  return (
    <section className="px-5 pb-16 pt-12 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <p
          className={`${serif} m-0 text-2xl leading-snug tracking-tight text-[var(--color-texto)]`}
        >
          Bueno para ti.
          <br />
          Bueno para tu ciudad.
        </p>

        <div className="hidden h-12 w-px bg-[var(--color-borde)] lg:block" />

        <ul className="grid gap-6 sm:grid-cols-3 lg:gap-14">
          {values.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
              <Icon size={30} className="shrink-0 text-[var(--color-texto)]" />
              <span className="whitespace-pre-line text-xs leading-5 text-[var(--color-texto)]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────── Página ───────── */

export function MarketplaceHomePage() {
  return (
    <div className="min-w-0 bg-[var(--color-fondo)] text-[var(--color-texto)]">
      <Hero />
      <BenefitsBar />
      <Favorites />
      <JoinBanner />
      <ValuesStrip />
    </div>
  );
}