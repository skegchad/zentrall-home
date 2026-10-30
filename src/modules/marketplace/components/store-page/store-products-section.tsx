import { DISPLAY } from "./store-profile-constants";
import { StoreProductCard, type CatalogProduct } from "./store-product-card";

type Props = {
  products: CatalogProduct[];
  onAdd?: (product: CatalogProduct) => void;
};

export function StoreProductsSection({ products, onAdd }: Props) {
  return (
    <section className="mt-14">
      <header className="mb-8 text-center">
        <h2
          className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-tight tracking-tight text-[var(--color-texto)]"
          style={{ fontFamily: DISPLAY }}
        >
          Nuestros productos
        </h2>
        <p className="mt-2 text-sm text-[var(--color-texto-suave)]">
          Descubre lo que ofrece esta tienda.
        </p>
      </header>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <StoreProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-[var(--color-texto-suave)]">
          Esta tienda aún no tiene productos publicados.
        </p>
      )}
    </section>
  );
}