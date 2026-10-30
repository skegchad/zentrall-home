"use client";

import { useMemo } from "react";
import type { AffiliatedStore } from "../../data/stores-data";
import { catalogProducts } from "../../data/catalog-data";
import { getStoreLinks } from "../../lib/stores-links";
import { Reveal, SmoothScroll } from "../home";
import { Header } from "./header";
import { StoreBanner } from "./store-banner";
import { StoreInfo } from "./store-info";
import { StoreProductsSection } from "./store-products-section";
import { StoreFeaturedProducts } from "./store-featured-products";

type Props = { store: AffiliatedStore };

export function StoreProfile({ store }: Props) {
  const products = catalogProducts.filter(
    (p) => p.storeId === store.id || p.storeId === store.slug,
  );

  // Inicio y Tienda hacen scroll en esta página; Conócenos es una página aparte.
  // Memoizado para que el efecto de scroll del Header no se re-ejecute en cada render.
  const links = useMemo(() => getStoreLinks(store.slug), [store.slug]);

  return (
    <div className="zentrall-home min-h-screen bg-[var(--color-fondo)] text-[var(--color-texto)]">
      <SmoothScroll />
      <Header store={store} links={links} />
      <main className="pb-20">
        <div id="inicio">
          <StoreBanner store={store} />
        </div>

        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6">
          <Reveal>
            <StoreInfo store={store} />
          </Reveal>
          <Reveal>
            <StoreFeaturedProducts products={products} />
          </Reveal>
          <section id="tienda">
            <Reveal>
              <StoreProductsSection products={products} />
            </Reveal>
          </section>
        </div>
      </main>
    </div>
  );
}