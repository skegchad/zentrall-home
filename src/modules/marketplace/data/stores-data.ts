export type StoreHours = {
  /** Días en que abre. 0 = domingo, 1 = lunes ... 6 = sábado */
  days: number[];
  /** Formato 24h "HH:MM" */
  open: string;
  close: string;
};

export type AffiliatedStore = {
  id: string;
  slug: string;
  name: string;
  /** Etiqueta corta para el slideshow, ej: "Cook", "Warm" */
  tag: string;
  /** Categoría para filtros y tarjetas, ej: "Cocina" */
  category: string;
  description: string;
  /** URL del logo. Si es null se muestra un placeholder con la inicial. */
  logo: string | null;
  /** URL de la imagen de fondo que el negocio quiera poner. Si es null se muestra un espacio reservado. */
  background: string | null;
  /** Número con código de país y sin "+", ej: 593999999999 */
  whatsapp: string;
  /** Si es null se muestra "Horario por confirmar" */
  hours: StoreHours | null;
  deliveryToday: boolean;
  isNew: boolean;
  verified: boolean;
  /** Promedio 0-5, null si aún no tiene reseñas */
  rating: number | null;
  reviewCount: number;
  products: { name: string; price?: string }[];
};

const MON_SAT = [1, 2, 3, 4, 5, 6];
const EVERY_DAY = [0, 1, 2, 3, 4, 5, 6];

export const AFFILIATED_STORES: AffiliatedStore[] = [
  {
    id: "1",
    slug: "fogon-del-sur",
    name: "Fogón del Sur",
    tag: "Cook",
    category: "Cocina",
    description:
      "Hervidores, ollas y parrillas pensadas para que la cena al aire libre sea un ritual y no un problema.",
    logo: null,
    background: null,
    whatsapp: "593999999999",
    hours: { days: MON_SAT, open: "08:00", close: "18:00" },
    deliveryToday: true,
    isNew: false,
    verified: true,
    rating: 4.8,
    reviewCount: 23,
    products: [
      { name: "Hervidor de acero 1L", price: "$34" },
      { name: "Parrilla plegable", price: "$58" },
      { name: "Set de ollas de campaña", price: "$72" },
      { name: "Cuchillo de cocina de bolsillo", price: "$19" },
    ],
  },
  {
    id: "2",
    slug: "lana-y-lienzo",
    name: "Lana & Lienzo",
    tag: "Warm",
    category: "Abrigo",
    description:
      "Cobijas, lana, lona y polar para las horas después del atardecer, cuando el frío aprieta.",
    logo: null,
    background: null,
    whatsapp: "593999999999",
    hours: null,
    deliveryToday: false,
    isNew: true,
    verified: false,
    rating: null,
    reviewCount: 0,
    products: [
      { name: "Cobija de lana merino", price: "$89" },
      { name: "Poncho de lona encerada", price: "$64" },
      { name: "Chaleco de polar", price: "$47" },
    ],
  },
  {
    id: "3",
    slug: "luz-de-camino",
    name: "Luz de Camino",
    tag: "Light",
    category: "Iluminación",
    description:
      "Faroles y luz cálida sin deslumbrar, para cocinar, leer o simplemente quedarse afuera de la carpa.",
    logo: null,
    background: null,
    whatsapp: "593999999999",
    hours: { days: EVERY_DAY, open: "10:00", close: "22:00" },
    deliveryToday: true,
    isNew: false,
    verified: true,
    rating: 4.5,
    reviewCount: 9,
    products: [
      { name: "Farol recargable", price: "$42" },
      { name: "Linterna frontal cálida", price: "$26" },
      { name: "Tira LED para carpa", price: "$15" },
      { name: "Vela de citronela", price: "$9" },
    ],
  },
  {
    id: "4",
    slug: "brasa-y-humo",
    name: "Brasa & Humo",
    tag: "Cook",
    category: "Cocina",
    description:
      "Carbón, leña seleccionada y accesorios para asar con calma. Todo lo que hace falta antes de encender el fuego.",
    logo: null,
    background: null,
    whatsapp: "593999999999",
    hours: { days: MON_SAT, open: "09:00", close: "17:00" },
    deliveryToday: false,
    isNew: true,
    verified: false,
    rating: null,
    reviewCount: 0,
    products: [
      { name: "Carbón de mangle 5kg", price: "$12" },
      { name: "Encendedor de varilla", price: "$7" },
      { name: "Guantes de cuero", price: "$21" },
    ],
  },
  {
    id: "5",
    slug: "taller-andino",
    name: "Taller Andino",
    tag: "Warm",
    category: "Artesanía",
    description:
      "Tejidos hechos a mano por artesanos locales: bufandas, gorros y mantas con diseños tradicionales.",
    logo: null,
    background: null,
    whatsapp: "593999999999",
    hours: { days: [1, 2, 3, 4, 5], open: "09:00", close: "13:00" },
    deliveryToday: false,
    isNew: false,
    verified: true,
    rating: 5,
    reviewCount: 4,
    products: [
      { name: "Manta tejida a mano", price: "$75" },
      { name: "Gorro de alpaca", price: "$22" },
      { name: "Bufanda de lana", price: "$28" },
    ],
  },
];