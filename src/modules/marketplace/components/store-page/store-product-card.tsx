import Link from "next/link";
import type { catalogProducts } from "../../data/catalog-data";

export type CatalogProduct = (typeof catalogProducts)[number];

type Props = { product: CatalogProduct };

export function StoreProductCard({ product: p }: Props) {
  return (
    <Link
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
  );
}
