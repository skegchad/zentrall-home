import Link from "next/link";
import { categories } from "../../data/home-data";
import { wrap } from "../../lib/constants";
import { SectionTitle } from "./section-title";

export function Categories() {
  return (
    <section className={`${wrap} pt-10`}>
      <SectionTitle>Compra por categoría</SectionTitle>
      <div
        aria-hidden="true"
        className="mt-3 h-[6px] w-full max-w-[500px] bg-[repeating-linear-gradient(135deg,var(--color-descuento)_0_4px,var(--color-borde)_4px_8px)]"
      />
      <br></br>
      <br></br>
      <div className="zentrall-no-scrollbar -mt-2 flex gap-6 overflow-x-auto pb-2 pt-2 lg:justify-between">
        {categories.map(({ name, icon: Icon }) => (
          <Link
            key={name}
            href="/explorar"
            className="group flex w-20 shrink-0 flex-col items-center gap-3 sm:w-24"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-circulo)] text-[var(--color-texto)] transition duration-200 group-hover:-translate-y-1 group-hover:bg-[var(--color-primario)] group-hover:text-[var(--color-sobre-primario)] sm:h-[72px] sm:w-[72px]">
              <Icon size={26} strokeWidth={1.75} />
            </span>
            <span className="text-center text-xs font-medium text-[var(--color-texto)]">
              {name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}