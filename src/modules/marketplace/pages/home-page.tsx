"use client";

import { useState } from "react";
import {
  BenefitsStrip,
  Categories,
  Footer,
  Header,
  Hero,
  ProductSection,
  PromoBanners,
  Reveal,
  SmoothScroll,
  Testimonials,
} from "../components/home";
import { bestSellers, newArrivals } from "../data/home-data";

export function MarketplaceHomePage() {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => setCartCount((value) => value + 1);

  return (
    <div className="zentrall-home relative min-w-0 bg-[var(--color-fondo)] text-[var(--color-texto)]">
      <SmoothScroll />

      {/* Barra de anuncios: flota sobre el hero y se va con el scroll */}
      <div className="absolute inset-x-0 top-0 z-40"></div>
      {/* Header: fixed, acompaña siempre al scroll */}
      <Header cartCount={cartCount} />

      <main>
        <Hero />
        <div
          aria-hidden
          className="pointer-events-none relative z-10 -mt-px h-[2px] bg-[var(--color-fondo)]"
        />
        <Reveal>
          <Categories />
        </Reveal>
        <Reveal>
          <ProductSection
            title="Más vendidos"
            products={bestSellers}
            variant="wide"
            onAdd={addToCart}
          />
        </Reveal>
        <Reveal>
          <ProductSection
            title="Nuevas llegadas"
            products={newArrivals}
            isNew
            onAdd={addToCart}
          />
        </Reveal>
        <Reveal>
          <PromoBanners />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <BenefitsStrip />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}