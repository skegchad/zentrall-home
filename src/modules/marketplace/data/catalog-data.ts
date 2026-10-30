export type CatalogProduct = {
  id: string;
  uuid: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image?: string;
  category: string;
  storeId: string;
  storeName: string;
  description: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  delivery?: boolean;
  href: string;
  tint: string;
};


export type CatalogStoreHours = {
  days: number[];
  open: string;
  close: string;
};

export type CatalogStore = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  cover?: string;
  logo?: string;
  hours: CatalogStoreHours | null;
  whatsapp: string;
  deliveryToday: boolean;
  isNew: boolean;
  verified: boolean;
  rating: number | null;
  reviews: number;
  reviewCount: number;
  href: string;
};

const placeholderDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
  "Descubre productos ideales para tus proyectos y necesidades.";

export const catalogProducts: CatalogProduct[] = [
  {
    id: "p1",
    uuid: "c02521e8-83b3-4004-91fa-cb755667f199",
    name: "Traje de Baño Mujer",
    price: 50,
    category: "General",
    storeId: "dz",
    storeName: "CreacionesDZ",
    description: placeholderDescription,
    rating: 0,
    reviews: 0,
    href: "/producto/c02521e8-83b3-4004-91fa-cb755667f199",
    image: "/producto/c02521e8-83b3-4004-91fa-cb755667f199.png",
    tint: "from-stone-100 to-amber-100",
  },
  {
    id: "p2",
    uuid: "TEMP-UUID-p2",
    name: "Oasis",
    price: 0.71,
    oldPrice: 0.75,
    discount: 5,
    category: "Velas",
    storeId: "dovi",
    storeName: "DOVI INSUMOS",
    description: placeholderDescription,
    rating: 4.5,
    reviews: 0,
    href: "/producto/TEMP-UUID-p2",
    tint: "from-amber-100 to-orange-100",
  },
  {
    id: "p3",
    uuid: "TEMP-UUID-p3",
    name: "Molde Papá Noel de pie",
    price: 6.55,  
    oldPrice: 6.9,
    discount: 5,
    category: "Velas",
    storeId: "dovi",
    storeName: "DOVI INSUMOS",
    description: placeholderDescription,
    rating: 4.5,
    reviews: 0,
    href: "/producto/TEMP-UUID-p3",
    tint: "from-red-100 to-orange-100",
  },
  {
    id: "p4",
    uuid: "TEMP-UUID-p4",
    name: "Fragancia Berry Bliss 120ml",
    price: 11.4,
    oldPrice: 12,
    discount: 5,
    category: "Velas",
    storeId: "dovi",
    storeName: "DOVI INSUMOS",
    description: placeholderDescription,
    rating: 4.5,
    reviews: 0,
    href: "/producto/TEMP-UUID-p4",
    tint: "from-pink-100 to-rose-100",
  },
  {
    id: "p5",
    uuid: "TEMP-UUID-p5",
    name: "Plancha navideña grande",
    price: 3.61,
    oldPrice: 3.8,
    discount: 5,
    category: "Velas",
    storeId: "dovi",
    storeName: "DOVI INSUMOS",
    description: placeholderDescription,
    rating: 4.5,
    reviews: 0,
    href: "/producto/TEMP-UUID-p5",
    tint: "from-green-100 to-emerald-100",
  },
  {
    id: "p6",
    uuid: "TEMP-UUID-p6",
    name: "Mini bubble x15",
    price: 9.83,
    oldPrice: 10.35,
    discount: 5,
    category: "Velas",
    storeId: "dovi",
    storeName: "DOVI INSUMOS",
    description: placeholderDescription,
    rating: 4.5,
    reviews: 0,
    href: "/producto/TEMP-UUID-p6",
    tint: "from-violet-100 to-purple-100",
  },
  {
    id: "p7",
    uuid: "TEMP-UUID-p7",
    name: "Bolso tejido a mano",
    price: 18,
    category: "General",
    storeId: "dz",
    storeName: "CreacionesDZ",
    description: placeholderDescription,
    rating: 4.5,
    reviews: 0,
    href: "/producto/TEMP-UUID-p7",
    tint: "from-stone-100 to-amber-100",
  },
  {
    id: "p8",
    uuid: "TEMP-UUID-p8",
    name: "Set crochet verano",
    price: 24.5,
    category: "General",
    storeId: "dz",
    storeName: "CreacionesDZ",
    description: placeholderDescription,
    rating: 4.5,
    reviews: 0,
    href: "/producto/TEMP-UUID-p8",
    tint: "from-teal-100 to-cyan-100",
  },
];


export const catalogStores: CatalogStore[] = [
  {
    id: "dz",
    cover: "/tiendas/dz/hero-banner.webp",
    slug: "dz",
    name: "CreacionesDZ",
    category: "General",
    description: "CreacionesDZ comparte sus productos y servicios con su comunidad.",
    hours: null,
    whatsapp: "593991234567",
    deliveryToday: false,
    isNew: false,
    verified: false,
    rating: 4.5,
    reviews: 0,
    reviewCount: 0,
    href: "/tiendas/dz",
  },
  {
    id: "dovi",
    logo: "/tiendas/dovi/logo.png",
    cover: "/tiendas/dovi/hero-banner.png",
    slug: "dovi",
    name: "DOVI INSUMOS",
    category: "Velas",
    description: "Detrás de Dovi hay un amor genuino por crear momentos especiales a través de las velas. Nos dedicamos a elegir cuidadosamente cada esencia e insumo con la convicción de ofrecerte materiales excepcionales, acompañándote con cariño en cada paso de tu proceso creativo.",
    hours: null,
    whatsapp: "593987654321",
    deliveryToday: false,
    isNew: false,
    verified: false,
    rating: 4.5,
    reviews: 0,
    reviewCount: 0,
    href: "/tiendas/dovi",
  },
];