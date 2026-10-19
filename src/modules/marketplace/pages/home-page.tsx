"use client";

import { useState } from "react";
import {
  BenefitsStrip,
  Categories,
  Footer,
  Header,
  Hero,
  OfferBanner,
  ProductSection,
  PromoBanners,
  Testimonials,
} from "../components/home";
import { bestSellers, newArrivals } from "../data/home-data";

export function MarketplaceHomePage() {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => setCartCount((value) => value + 1);

  return (
    <div className="zentrall-home relative min-w-0 bg-[var(--color-fondo)] text-[var(--color-texto)]">
      {/* Barra + menú flotan encima del hero a pantalla completa */}
      <div className="absolute inset-x-0 top-0 z-30">
        <Header cartCount={cartCount} />
      </div>

      <main>
        <Hero />
        <OfferBanner />
        <Categories />
        <ProductSection
          title="Más vendidos"
          products={bestSellers}
          onAdd={addToCart}
        />
        <ProductSection
          title="Nuevas llegadas"
          products={newArrivals}
          isNew
          onAdd={addToCart}
        />
        <PromoBanners />
        <Testimonials />
        <BenefitsStrip />
      </main>
      <Footer />
    </div>
  );
}