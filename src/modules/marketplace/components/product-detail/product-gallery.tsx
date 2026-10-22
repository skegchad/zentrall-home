import type { CatalogProduct } from "../../data/catalog-data";

type Props = {
  product: CatalogProduct;
};

export function ProductGallery({ product }: Props) {
  return (
    <div className="self-start rounded-3xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] p-3 [box-shadow:var(--sombra-suave)] sm:p-4">
      <div
        className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl ${
          product.image
            ? "bg-[var(--color-imagen)]"
            : `bg-gradient-to-br ${product.tint}`
        }`}
      >
        {product.discount ? (
          <span
            className="absolute left-3 top-3 z-10 rounded-full bg-[var(--color-descuento)] px-3 py-1 text-xs font-bold text-white"
            style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
          >
            -{product.discount}%
          </span>
        ) : null}

        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span
            className="px-6 text-center text-[11px] uppercase tracking-[0.2em] text-black/50"
            style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
          >
            Imagen del producto
          </span>
        )}
      </div>
    </div>
  );
}