import type { CatalogProduct } from "../../data/catalog-data";
import { ProductRating } from "./product-rating";
import { ProductPurchase } from "./product-purchase";
import { ProductStore } from "./product-store";

type Props = {
  product: CatalogProduct;
  whatsapp?: string;
};

export function ProductInfo({ product, whatsapp }: Props) {
  return (
    <section className="flex flex-col">
      <p
        className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-precio)]"
        style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
      >
        {product.category}
      </p>

      <h1
        className="mt-2 text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.05] tracking-tight"
        style={{ fontFamily: "var(--font-display, 'Arvo', Georgia, serif)" }}
      >
        {product.name}
      </h1>

      <ProductRating value={product.rating} reviews={product.reviews} />

      <div className="mt-6 flex flex-wrap items-baseline gap-3">
        <p className="text-4xl font-extrabold text-[var(--color-primario)]">
          ${product.price.toFixed(2)}
        </p>

        {product.oldPrice !== undefined && (
          <span className="text-sm text-[var(--color-texto-suave)] line-through">
            ${product.oldPrice.toFixed(2)}
          </span>
        )}
      </div>

      <ProductPurchase product={product} whatsapp={whatsapp} />

      <div className="mt-8">
        <h2
          className="border-b border-[var(--color-borde)] pb-3 text-lg font-bold"
          style={{ fontFamily: "var(--font-display, 'Arvo', Georgia, serif)" }}
        >
          Descripción
        </h2>

        <p className="mt-4 max-w-[62ch] leading-7 text-[var(--color-texto-suave)]">
          {product.description}
        </p>
      </div>

      <ProductStore product={product} />
    </section>
  );
}