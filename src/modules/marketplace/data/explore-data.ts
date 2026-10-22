
import { catalogProducts, catalogStores } from "./catalog-data";

export type ExploreProduct = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image?: string;
  category: string;
  storeId: string;
  storeName: string;
  description: string;
  reviews: number;
  rating: number;
  isNew?: boolean;
  delivery?: boolean;
  href: string;
};

export type ExploreStore = {
  id: string;
  name: string;
  category: string;
  description: string;
  cover?: string;
  logo?: string;
  hours?: string;
  whatsapp?: string;
  reviews: number;
  href: string;
};

export const exploreProducts: ExploreProduct[] =
  catalogProducts.map(({ tint: _tint, ...product }) => product);

export const exploreStores: ExploreStore[] = catalogStores.map(
  (store) => ({
    id: store.id,
    name: store.name,
    category: store.category,
    description: store.description,
    ...(store.cover ? { cover: store.cover } : {}),
    ...(store.logo ? { logo: store.logo } : {}),
    ...(store.hours
      ? { hours: `${store.hours.open}–${store.hours.close}` }
      : {}),
    ...(store.whatsapp ? { whatsapp: store.whatsapp } : {}),
    reviews: store.reviewCount,
    href: store.href,
  })
);
