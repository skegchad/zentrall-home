"use client";

import { useMemo, useState } from "react";
import {
  Footer,
  Header,
  SmoothScroll,
  Reveal,
} from "../components/home";
import {
  StoresDirectory,
  StoresDiscover,
  StoresFilterBar,
  StoresHero,
  StoresSlideshow,
} from "../components/stores";
import { AFFILIATED_STORES } from "../data/stores-data";
import { useNow } from "../hooks/use-now";
import {
  countByQuickFilter,
  matchesQuickFilter,
  type QuickFilter,
} from "../lib/stores-utils";

export function StorePage() {
  const [cartCount, setCartCount] = useState(0);
  const [quickFilter, setQuickFilter] = useState<QuickFilter>("all");
  const now = useNow();

  const counts = useMemo(() => countByQuickFilter(AFFILIATED_STORES, now), [now]);
  const slideshowStores = useMemo(
    () => AFFILIATED_STORES.filter((s) => matchesQuickFilter(s, quickFilter, now)),
    [quickFilter, now],
  );

  return (
    <div className="zentrall-home relative min-w-0 bg-[var(--color-fondo)] text-[var(--color-texto)]">
      <SmoothScroll />

      {/* Barra de anuncios: flota sobre el hero y se va con el scroll */}
      <div className="absolute inset-x-0 top-0 z-40"></div>
      {/* Header: fixed, acompaña siempre al scroll */}
      <Header cartCount={cartCount} />

      <main>
        <div
          aria-hidden
          className="pointer-events-none relative z-10 -mt-px h-[2px] bg-[var(--color-fondo)]"
        />
        <Reveal>
          <StoresHero />
        </Reveal>
        {/* Filtros rápidos + slideshow */}
        <Reveal>
          <StoresFilterBar value={quickFilter} onChange={setQuickFilter} counts={counts} />
          <StoresSlideshow key={quickFilter} stores={slideshowStores} />
        </Reveal>
        {/* Tarjetas de todos los negocios */}
        <Reveal>
          <StoresDiscover stores={AFFILIATED_STORES} now={now} />
        </Reveal>
        {/* Buscador + directorio completo */}
        <Reveal>
          <StoresDirectory stores={AFFILIATED_STORES} now={now} />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}