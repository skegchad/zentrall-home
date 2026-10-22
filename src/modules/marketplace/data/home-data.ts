// src/modules/marketplace/data/home-data.ts

import {
  BadgeCheck,
  Dumbbell,
  Gift,
  Headphones,
  House,
  Laptop,
  RotateCcw,
  ShieldCheck,
  Shirt,
  Sparkles,
  Sprout,
  Store,
  Tag,
  Truck,
  Utensils,
  Wrench,
} from "lucide-react";

import { catalogProducts } from "./catalog-data";
import type { Product } from "../types";

export const navLinks = [
  { label: "Inicio", href: "/", active: true },
  { label: "Tiendas", href: "/tiendas" },
  { label: "Categorías", href: "/explorar", dropdown: true },
  { label: "Novedades", href: "/explorar" },
  { label: "Rutas", href: "/rutas" },
];

export const heroFeatures = [
  {
    icon: BadgeCheck,
    title: "Calidad local",
    detail: "Negocios verificados",
  },
  {
    icon: Store,
    title: "Hecho en Guayaquil",
    detail: "Apoya lo nuestro",
  },
  {
    icon: ShieldCheck,
    title: "Pago seguro",
    detail: "100% protegido",
  },
  {
    icon: Headphones,
    title: "Soporte cercano",
    detail: "Aquí para ayudarte",
  },
];

export const categories = [
  { name: "Gastronomía", icon: Utensils },
  { name: "Moda", icon: Shirt },
  { name: "Tecnología", icon: Laptop },
  { name: "Belleza", icon: Sparkles },
  { name: "Servicios", icon: Wrench },
  { name: "Regalos", icon: Gift },
  { name: "Hogar", icon: House },
  { name: "Plantas", icon: Sprout },
  { name: "Deportes", icon: Dumbbell },
  { name: "Ofertas", icon: Tag },
];


const toHomeProduct = (
  product: (typeof catalogProducts)[number],
): Product => ({
  id: Number(product.id.replace("p", "")),
  name: product.name,
  store: product.storeName,
  price: product.price,
  rating: product.rating,
  reviews: product.reviews,
  tint: product.tint,
  category: product.category,
  description: product.description,
  image: product.image,
});


// Selecciones provisionales para completar el diseño.
// No representan rankings ni fechas reales de lanzamiento.
export const bestSellers: Product[] =
  catalogProducts.slice(0, 4).map(toHomeProduct);

export const newArrivals: Product[] =
  catalogProducts.slice(4).map(toHomeProduct);

export const testimonials = [
  {
    name: "Daniela M.",
    text: "Encontré todo en un solo lugar y la entrega fue rapidísima. ¡Me encantó!",
  },
  {
    name: "Carlos R.",
    text: "Descubrí negocios de mi ciudad que no conocía. Muy recomendado.",
  },
  {
    name: "Sofía L.",
    text: "Atención increíble y productos únicos. Ya es mi tienda favorita.",
  },
  {
    name: "Andrés P.",
    text: "Comprar local nunca fue tan fácil. Todo llegó perfecto.",
  },
  {
    name: "Valeria T.",
    text: "Los regalos que compré fueron un éxito. Volveré pronto.",
  },
];

export const benefits = [
  {
    icon: Truck,
    title: "Envío a domicilio",
    detail: "En toda la ciudad",
  },
  {
    icon: RotateCcw,
    title: "Cambios fáciles",
    detail: "30 días sin complicaciones",
  },
  {
    icon: ShieldCheck,
    title: "Pagos seguros",
    detail: "Seguro y encriptado",
  },
  {
    icon: Headphones,
    title: "Soporte destacado",
    detail: "Estamos para ayudarte",
  },
];

export const footerColumns = [
  {
    title: "Tienda",
    links: [
      "Todos los productos",
      "Novedades",
      "Más vendidos",
      "Ofertas",
      "Tarjetas de regalo",
    ],
  },
  {
    title: "Ayuda",
    links: [
      "Información de envío",
      "Cambios y devoluciones",
      "Rastrea tu pedido",
      "Preguntas frecuentes",
      "Contáctanos",
    ],
  },
  {
    title: "Nosotros",
    links: [
      "Nuestra historia",
      "Sostenibilidad",
      "Trabaja con nosotros",
      "Prensa",
      "Afiliados",
    ],
  },
];