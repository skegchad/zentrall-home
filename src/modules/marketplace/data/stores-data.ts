
import { catalogProducts, catalogStores } from "./catalog-data";

export type StoreHours = {
  days: number[];
  open: string;
  close: string;
};

export type AffiliatedStore = {
  id: string;
  slug: string;
  name: string;
  tag: string;
  category: string;
  description: string;
  logo: string | null;
  background: string | null;
  whatsapp: string;
  hours: StoreHours | null;
  deliveryToday: boolean;
  isNew: boolean;
  verified: boolean;
  rating: number | null;
  reviewCount: number;
  products: { name: string; price?: string }[];
};

export const AFFILIATED_STORES: AffiliatedStore[] =
  catalogStores.map((store) => ({
    id: store.id,
    slug: store.slug,
    name: store.name,
    tag: store.category,
    category: store.category,
    description: store.description,
    logo: store.logo ?? null,
    background: store.cover ?? null,
    whatsapp: store.whatsapp,
    hours: store.hours,
    deliveryToday: store.deliveryToday,
    isNew: store.isNew,
    verified: store.verified,
    rating: store.rating,
    reviewCount: store.reviewCount,
    products: catalogProducts
      .filter((product) => product.storeId === store.id)
      .map((product) => ({
        name: product.name,
        price: product.price.toFixed(2),
      })),
  }));
