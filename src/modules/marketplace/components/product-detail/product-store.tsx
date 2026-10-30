import Link from "next/link";
import { Store } from "lucide-react";
import { catalogStores, type CatalogProduct } from "../../data/catalog-data";

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primario)]";

type Props = {
  product: CatalogProduct;
};

export function ProductStore({ product }: Props) {
  const store = catalogStores.find((s) => s.id === product.storeId);
  const storeHref = store?.href ?? `/tiendas/${product.storeId}`;

  return (
    <div className="mt-8 flex items-center gap-4 rounded-3xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] p-4 [box-shadow:var(--sombra-suave)]">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-[3px] border-[var(--tienda-acento)] bg-[var(--color-superficie)] text-lg font-extrabold text-[var(--color-primario)]">
        {product.storeName.charAt(0).toUpperCase()}
      </span>

      <div className="min-w-0 flex-1">
        <p
          className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-texto-suave)]"
          style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
        >
          Vendido por
        </p>

        <p className="truncate font-extrabold">{product.storeName}</p>
      </div>

      <Link
        href={storeHref}
        className={`inline-flex shrink-0 items-center gap-1.5 rounded-[10px] border border-[var(--color-borde)] px-3.5 py-2.5 text-xs font-bold transition hover:-translate-y-px hover:border-[var(--color-primario)] ${FOCUS}`}
      >
        <Store size={14} aria-hidden />
        Ver tienda
      </Link>
    </div>
  );
}