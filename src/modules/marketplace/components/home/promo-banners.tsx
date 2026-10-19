import Link from "next/link";
import { serif, wrap } from "../../lib/constants";

export function PromoBanners() {
  return (
    <section className={`${wrap} grid gap-5 pt-12 md:grid-cols-2`}>
      <div className="relative flex min-h-[220px] items-center overflow-hidden rounded-2xl bg-[color-mix(in_srgb,var(--color-primario)_55%,#14132a)] p-8 text-white">
        <div className="relative z-10 max-w-[55%]">
          <p className="text-xs text-white/80">Lo mejor de lo local</p>
          <h3 className={`${serif} m-0 mt-1 text-3xl font-normal leading-tight`}>
            Estilo atemporal
          </h3>
          <p className="mt-3 text-xs leading-5 text-white/80">
            Marcas independientes, texturas cálidas y diseño con identidad
            guayaquileña.
          </p>
          <Link
            href="/tiendas"
            className="mt-5 inline-block rounded-md bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-[#1b1b2f] transition hover:opacity-90"
          >
            Ver la colección
          </Link>
        </div>
        <span
          aria-hidden
          className="absolute -right-4 bottom-0 select-none text-[9rem] leading-none opacity-90"
        >
          🏺
        </span>
      </div>

      <div className="relative flex min-h-[220px] items-center overflow-hidden rounded-2xl bg-[var(--color-activo-fondo)] p-8 text-[var(--color-texto)]">
        <div className="relative z-10 max-w-[55%]">
          <p className="text-xs text-[var(--color-texto-suave)]">
            Renueva tu espacio
          </p>
          <h3 className={`${serif} m-0 mt-1 text-3xl font-normal leading-tight`}>
            Vida de temporada
          </h3>
          <p className="mt-3 text-xs leading-5 text-[var(--color-texto-suave)]">
            Ligero, fresco y lleno de nuevos comienzos para tu día a día.
          </p>
          <Link
            href="/explorar"
            className="mt-5 inline-block rounded-md bg-[var(--color-texto)] px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-fondo)] transition hover:opacity-90"
          >
            Ver ofertas
          </Link>
        </div>
        <span
          aria-hidden
          className="absolute -right-2 bottom-0 select-none text-[9rem] leading-none opacity-90"
        >
          🛋️
        </span>
      </div>
    </section>
  );
}