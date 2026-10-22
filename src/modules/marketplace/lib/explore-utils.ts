import type { ExploreProduct, ExploreStore } from "../data/explore-data";

export type SortKey = "recomendados" | "precio-asc" | "precio-desc";

export const SORT_LABELS: Record<SortKey, string> = {
  recomendados: "Recomendados",
  "precio-asc": "Menor precio",
  "precio-desc": "Mayor precio",
};

export const SORT_ORDER: SortKey[] = ["recomendados", "precio-asc", "precio-desc"];

export type QuickRouteId = "ofertas" | "hasta20" | "novedades" | "entrega";

export const QUICK_ROUTES: {
  id: QuickRouteId;
  label: string;
  test: (p: ExploreProduct) => boolean;
}[] = [
  { id: "ofertas", label: "Ofertas", test: (p) => !!p.discount },
  { id: "hasta20", label: "Hasta $20", test: (p) => p.price <= 20 },
  { id: "novedades", label: "Novedades", test: (p) => !!p.isNew },
  { id: "entrega", label: "Entrega hoy", test: (p) => !!p.delivery },
];

const norm = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

export function filterProducts(
  products: ExploreProduct[],
  opts: { query: string; category: string; routes: QuickRouteId[]; sort: SortKey },
) {
  const q = norm(opts.query);
  const tests = QUICK_ROUTES.filter((r) => opts.routes.includes(r.id));
  const list = products.filter((p) => {
    if (opts.category !== "Todo" && p.category !== opts.category) return false;
    if (q && !norm(`${p.name} ${p.storeName} ${p.category}`).includes(q)) return false;
    return tests.every((r) => r.test(p));
  });
  if (opts.sort === "precio-asc") return [...list].sort((a, b) => a.price - b.price);
  if (opts.sort === "precio-desc") return [...list].sort((a, b) => b.price - a.price);
  return list;
}

export function filterStores(
  stores: ExploreStore[],
  opts: { query: string; category: string },
) {
  const q = norm(opts.query);
  return stores.filter((s) => {
    if (opts.category !== "Todo" && s.category !== opts.category) return false;
    return !q || norm(`${s.name} ${s.category}`).includes(q);
  });
}

export const formatPrice = (n: number) => `$${n.toFixed(2)}`;