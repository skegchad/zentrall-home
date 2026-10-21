import type { AffiliatedStore } from "../data/stores-data";

export type QuickFilter = "all" | "open" | "delivery" | "new" | "verified";
export type StoreStatus = "open" | "closed" | "unknown";

function toMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

/** `now` es null antes de montar en el cliente, para evitar errores de hidratación. */
export function getStoreStatus(store: AffiliatedStore, now: Date | null): StoreStatus {
  if (!store.hours) return "unknown";
  if (!now) return "unknown";

  const { days, open, close } = store.hours;
  if (!days.includes(now.getDay())) return "closed";

  const minutes = now.getHours() * 60 + now.getMinutes();
  return minutes >= toMinutes(open) && minutes < toMinutes(close) ? "open" : "closed";
}

export const STATUS_LABEL: Record<StoreStatus, string> = {
  open: "Abierto ahora",
  closed: "Cerrado",
  unknown: "Horario por confirmar",
};

export function matchesQuickFilter(
  store: AffiliatedStore,
  filter: QuickFilter,
  now: Date | null,
) {
  switch (filter) {
    case "open":
      return getStoreStatus(store, now) === "open";
    case "delivery":
      return store.deliveryToday;
    case "new":
      return store.isNew;
    case "verified":
      return store.verified;
    default:
      return true;
  }
}

export function countByQuickFilter(stores: AffiliatedStore[], now: Date | null) {
  const filters: QuickFilter[] = ["all", "open", "delivery", "new", "verified"];
  return Object.fromEntries(
    filters.map((f) => [f, stores.filter((s) => matchesQuickFilter(s, f, now)).length]),
  ) as Record<QuickFilter, number>;
}

/** Quita tildes y pasa a minúsculas para que "iluminacion" encuentre "Iluminación". */
export function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function storeMatchesQuery(store: AffiliatedStore, query: string) {
  const q = normalizeText(query.trim());
  if (!q) return true;

  const haystack = normalizeText(
    [store.name, store.category, store.description, ...store.products.map((p) => p.name)].join(" "),
  );
  return haystack.includes(q);
}

/** Degradado de respaldo (distinto por negocio) cuando aún no hay imagen de fondo. */
export function placeholderGradient(name: string) {
  let hue = 0;
  for (const char of name) hue = (hue * 31 + char.charCodeAt(0)) % 360;
  return `linear-gradient(135deg, hsl(${hue} 35% var(--ph-l1)), hsl(${(hue + 50) % 360} 40% var(--ph-l2)))`;
}