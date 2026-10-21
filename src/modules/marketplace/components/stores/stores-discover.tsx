import Link from "next/link";
import type { AffiliatedStore } from "../../data/stores-data";
import { getStoreStatus, type StoreStatus } from "../../lib/stores-utils";
import { StoreLogoTile } from "./store-logo-tile";
import { ArrowRightIcon } from "./stores-icons";

const DOT: Record<StoreStatus, string> = {
  open: "bg-emerald-400",
  closed: "bg-rose-400",
  unknown: "bg-slate-400",
};

type Props = {
  stores: AffiliatedStore[];
  now: Date | null;
};

export function StoresDiscover({ stores, now }: Props) {
  return (
    <section className="border-y border-[var(--color-borde)] bg-[var(--color-superficie)] px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-texto)]">Para descubrir hoy</h2>
            <p className="mt-1 text-sm text-[var(--color-texto-suave)]">
              Una selección del directorio local
            </p>
          </div>
          <a
            href="#directorio"
            className="text-sm font-bold text-[var(--color-primario)] hover:underline"
          >
            Ver directorio
          </a>
        </div>

        <ul className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
          {stores.map((store) => {
            const status = getStoreStatus(store, now);
            return (
              <li key={store.id}>
                <Link
                  href={`/tiendas/${store.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] p-3 transition-all hover:-translate-y-0.5 hover:border-[var(--color-primario)] hover:[box-shadow:var(--sombra-suave)]"
                >
                  <div className="relative">
                    <StoreLogoTile store={store} className="h-12 w-12 rounded-full" />
                    <span
                      aria-hidden
                      className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[var(--color-tarjeta)] ${DOT[status]}`}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-[var(--color-texto)] group-hover:text-[var(--color-primario)]">
                      {store.name}
                    </p>
                    <p className="truncate text-xs text-[var(--color-texto-suave)]">
                      {store.category}
                    </p>
                  </div>

                  <ArrowRightIcon className="mr-1 h-5 w-5 shrink-0 text-[var(--color-primario)] transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}