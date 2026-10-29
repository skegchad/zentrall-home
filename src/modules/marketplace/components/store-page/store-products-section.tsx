import { DISPLAY } from "./store-profile-constants";
import { StoreProductCard, type CatalogProduct } from "./store-product-card";

type Props = { products: CatalogProduct[] };

export function StoreProductsSection({ products }: Props) {
  return (
    <section>
      <h2
        className="mt-12 border-b border-[var(--color-borde)] pb-3 text-lg font-bold"
        style={{ fontFamily: DISPLAY }}
      >
        Productos
      </h2>

      {products.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <StoreProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-sm text-[var(--color-texto-suave)]">
          Esta tienda aún no tiene productos publicados.
        </p>
      )}
    </section>
  );
}
