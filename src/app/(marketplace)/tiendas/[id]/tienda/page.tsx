import { notFound } from "next/navigation";
import { AFFILIATED_STORES } from "../../../../../modules/marketplace/data/stores-data";
import {
  catalogProducts,
  catalogStores,
} from "../../../../../modules/marketplace/data/catalog-data";
import { getStoreLinks } from "../../../../../modules/marketplace/lib/stores-links";
import { Reveal, SmoothScroll } from "../../../../../modules/marketplace/components/home";
import { Header } from "../../../../../modules/marketplace/components/store-page/header";
import { StoreSubBanner } from "../../../../../modules/marketplace/components/store-page/store-sub-banner";
import { StoreCatalog } from "../../../../../modules/marketplace/components/store-page/store-catalog";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return AFFILIATED_STORES.map((s) => ({ id: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const store = AFFILIATED_STORES.find((s) => s.slug === id);
  return {
    title: store ? `Tienda | ${store.name} | Zentrall` : "Tienda no encontrada",
  };
}

export default async function TiendaPage({ params }: Props) {
  const { id } = await params;
  const store = AFFILIATED_STORES.find((s) => s.slug === id);

  if (!store) notFound();

  const catalog = catalogStores.find((s) => s.slug === store.slug);
  const storeId = catalog?.id ?? store.id;
  const products = catalogProducts.filter(
    (p) => p.storeId === storeId || p.storeId === store.slug,
  );

  return (
    <div className="zentrall-home min-h-screen bg-[var(--color-fondo)] text-[var(--color-texto)]">
      <SmoothScroll />
      <Header
        store={store}
        links={getStoreLinks(store.slug)}
        activeLabel="Tienda"
        backHref={`/tiendas/${store.slug}`}
        backLabel="Volver"
      />

      <main className="pb-24">
        <Reveal>
          <section aria-labelledby="tienda-title">
            <StoreSubBanner store={store} title="Tienda" titleId="tienda-title" />
            <StoreCatalog products={products} />
          </section>
        </Reveal>
      </main>
    </div>
  );
}