"use client";

import type { AffiliatedStore } from "../../data/stores-data";
import { catalogProducts } from "../../data/catalog-data";
import { Reveal, SmoothScroll } from "../home";
import { Header } from "./header";
import { StoreBanner } from "./store-banner";
import { StoreInfo } from "./store-info";
import { StoreProductsSection } from "./store-products-section";

type Props = { store: AffiliatedStore };

export function StoreProfile({ store }: Props) {
  const products = catalogProducts.filter(
    (p) => p.storeId === store.id || p.storeId === store.slug,
  );

  return (
    <div className="zentrall-home min-h-screen bg-[var(--color-fondo)] text-[var(--color-texto)]">
      <SmoothScroll />
      <Header storeName={store.name} storeLogo={store.logo ?? undefined} />
      <main className="pb-20">
          <StoreBanner store={store} />


        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6">
          <Reveal>
            <StoreInfo store={store} />
          </Reveal>
          <Reveal>
            <StoreProductsSection products={products} />
          </Reveal>
        </div>
      </main>
    </div>
  );
}