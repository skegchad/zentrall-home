"use client";

import { useMemo, useState } from "react";
import { Footer, Header, Reveal, SmoothScroll } from "../components/home";
import {
  ExploreCategoryChips,
  ExploreEmpty,
  ExploreHero,
  ExploreProductCard,
  ExploreProductSection,
  ExploreStoresSection,
  ExploreTabs,
  type ExploreTab,
} from "../components/search";
import { exploreProducts, exploreStores } from "../data/explore-data";
import {
  QUICK_ROUTES,
  SORT_ORDER,
  filterProducts,
  filterStores,
  type QuickRouteId,
  type SortKey,
} from "../lib/explore-utils";

import { AFFILIATED_STORES } from "../data/stores-data";

export function SearchPage() {
  const [cartCount] = useState(0);
  const [tab, setTab] = useState<ExploreTab>("productos");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todo");
  const [routes, setRoutes] = useState<QuickRouteId[]>([]);
  const [sort, setSort] = useState<SortKey>("recomendados");

  const categories = useMemo(
    () =>
      Array.from(
        new Set([...exploreProducts.map((p) => p.category), ...exploreStores.map((s) => s.category)]),
      ),
    [],
  );

  const quickRoutes = QUICK_ROUTES.map((r) => ({
    id: r.id,
    label: r.label,
    count: exploreProducts.filter(r.test).length,
  }));

  const products = useMemo(
    () => filterProducts(exploreProducts, { query, category, routes, sort }),
    [query, category, routes, sort],
  );
  const stores = useMemo(() => filterStores(exploreStores, { query, category }), [query, category]);

  const isFiltering = query.trim() !== "" || category !== "Todo" || routes.length > 0;
  const offers = exploreProducts.filter((p) => p.discount);

  const toggleRoute = (id: QuickRouteId) =>
    setRoutes((cur) => (cur.includes(id) ? cur.filter((r) => r !== id) : [...cur, id]));
  const cycleSort = () => setSort((s) => SORT_ORDER[(SORT_ORDER.indexOf(s) + 1) % SORT_ORDER.length]);
  const reset = () => {
    setQuery("");
    setCategory("Todo");
    setRoutes([]);
  };

  return (
    <div className="zentrall-home relative min-w-0 bg-[var(--color-fondo)] text-[var(--color-texto)]">
      <SmoothScroll />
      <Header cartCount={cartCount} />

      <main>
        <Reveal>
          <ExploreHero
            query={query}
            onQueryChange={setQuery}
            routes={quickRoutes}
            active={routes}
            onToggleRoute={toggleRoute}
          />
        </Reveal>
        <div className="mx-auto w-full max-w-[1180px] px-4 pb-[72px] pt-8 sm:px-6">

          <Reveal>
            <ExploreTabs
              tab={tab}
              onTabChange={setTab}
              productCount={exploreProducts.length}
              storeCount={exploreStores.length}
              sort={sort}
              onSortClick={cycleSort}
            />
          </Reveal>

          <Reveal>
            <ExploreCategoryChips categories={categories} value={category} onChange={setCategory} />
            <hr className="mt-[22px] border-0 border-t border-[var(--color-borde)]" />
          </Reveal>
          {tab === "productos" ? (
            isFiltering ? (
              products.length ? (
                <section className="mt-10">
                  <p className="text-sm text-[var(--color-texto-suave)]">
                    {products.length} resultado{products.length === 1 ? "" : "s"}
                  </p>
                  <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                    {products.map((p) => (
                      <ExploreProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </section>
              ) : (
                <ExploreEmpty onReset={reset} />
              )
            ) : (
              <>
                <Reveal>
                  <ExploreProductSection
                    eyebrow="Para empezar"
                    title="Una primera vuelta por las vitrinas"
                    description="Una selección breve para descubrir qué hay disponible ahora."
                    products={products.slice(0, 5)}
                    actionLabel="Ver catálogo completo"
                    onAction={() => setSort("recomendados")}
                  />
                </Reveal>
                <Reveal>
                  <ExploreProductSection
                    eyebrow="Precio especial"
                    title="Ofertas que vale la pena mirar"
                    description="Productos con descuento publicado por sus tiendas."
                    products={offers}
                    actionLabel="Ver todo"
                    onAction={() => toggleRoute("ofertas")}
                  />
                </Reveal>
                <Reveal>
                  <ExploreStoresSection stores={AFFILIATED_STORES} />
                </Reveal>
              </>
            )
          ) : stores.length ? (
            <ExploreStoresSection stores={AFFILIATED_STORES} panel={false} />
          ) : (
            <ExploreEmpty onReset={reset} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SearchPage;