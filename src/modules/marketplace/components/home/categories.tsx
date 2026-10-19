import Link from "next/link";
import { categories } from "../../data/home-data";
import { wrap } from "../../lib/constants";
import { SectionTitle } from "./section-title";

export function Categories() {
  return (
    <section className={`${wrap} pt-10`}>
      <SectionTitle>Compra por categoría</SectionTitle>
      <div className="zentrall-no-scrollbar flex gap-5 overflow-x-auto pb-2 lg:justify-between">
        {categories.map(({ name, emoji }) => (
          <Link
            key={name}
            href="/explorar"
            className="group flex w-20 shrink-0 flex-col items-center gap-3 sm:w-24"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-circulo)] text-4xl shadow-[var(--sombra-suave)] transition group-hover:-translate-y-1 group-hover:shadow-[var(--sombra-media)] sm:h-24 sm:w-24">
              <span className="transition group-hover:scale-110">{emoji}</span>
            </span>
            <span className="text-center text-[11px] font-semibold text-[var(--color-texto)]">
              {name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}