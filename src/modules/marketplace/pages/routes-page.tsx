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

export function RoutesPage() {
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

  return (<>
    <Header cartCount={cartCount}></Header>
    
    <main>

    </main>
    
    <Footer></Footer>
  </>);
}

export default RoutesPage;