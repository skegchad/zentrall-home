
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header, Footer } from "../home";
import type { CatalogProduct } from "../../data/catalog-data";
import { ProductGallery } from "./product-gallery";
import { ProductInfo } from "./product-info";

const MONO = "var(--font-mono, ui-monospace, monospace)";

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primario)]";

type Props = {
  product: CatalogProduct;
};

export function ProductDetail({ product }: Props) {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart(quantity: number) {
    setCartCount((current) => current + quantity);
  }

  return (
    <div className="zentrall-home min-h-screen bg-[var(--color-fondo)] text-[var(--color-texto)]">
      <Header cartCount={cartCount} />

      <main className="pb-20 pt-28">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6">
          <Link
            href="/explorar"
            className={`mb-6 inline-flex items-center gap-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-texto-suave)] transition-colors hover:text-[var(--color-primario)] ${FOCUS}`}
            style={{ fontFamily: MONO }}
          >
            <ArrowLeft size={14} aria-hidden />
            Volver a explorar
          </Link>

          <div className="grid gap-8 md:grid-cols-[1.05fr_1fr] lg:gap-14">
            <ProductGallery product={product} />

            <ProductInfo
              product={product}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
