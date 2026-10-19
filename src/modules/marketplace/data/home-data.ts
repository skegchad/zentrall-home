import {
  BadgeCheck,
  Headphones,
  RotateCcw,
  ShieldCheck,
  Store,
  Truck,
} from "lucide-react";
import type { Product } from "../types";

export const navLinks = [
  { label: "Inicio", href: "/", active: true },
  { label: "Tiendas", href: "/tiendas" },
  { label: "Categorías", href: "/explorar", dropdown: true },
  { label: "Colecciones", href: "/explorar" },
  { label: "Novedades", href: "/explorar" },
  { label: "Ofertas", href: "/explorar" },
  { label: "Rutas", href: "/rutas" },
];

export const heroFeatures = [
  { icon: BadgeCheck, title: "Calidad local", detail: "Negocios verificados" },
  { icon: Store, title: "Hecho en Guayaquil", detail: "Apoya lo nuestro" },
  { icon: ShieldCheck, title: "Pago seguro", detail: "100% protegido" },
  { icon: Headphones, title: "Soporte cercano", detail: "Aquí para ayudarte" },
];

export const categories = [
  { name: "Gastronomía", emoji: "🍽️" },
  { name: "Moda", emoji: "👗" },
  { name: "Tecnología", emoji: "🎧" },
  { name: "Belleza", emoji: "✨" },
  { name: "Servicios", emoji: "🛠️" },
  { name: "Regalos", emoji: "🎁" },
  { name: "Hogar", emoji: "🏡" },
  { name: "Plantas", emoji: "🪴" },
  { name: "Deportes", emoji: "🏃" },
  { name: "Ofertas", emoji: "🏷️" },
];

export const bestSellers: Product[] = [
  { id: 1, name: "Bolso urbano", store: "Casa Nómada", price: 28, emoji: "👜", rating: 4.5, reviews: 1245, tint: "from-rose-100 to-orange-100" },
  { id: 2, name: "Café de especialidad", store: "Origen Café", price: 8.5, emoji: "☕", rating: 5, reviews: 956, tint: "from-amber-100 to-orange-200" },
  { id: 3, name: "Auriculares Studio", store: "Audio Lab", price: 39.99, emoji: "🎧", rating: 4.5, reviews: 1102, tint: "from-violet-100 to-indigo-200" },
  { id: 4, name: "Lámpara minimalista", store: "Casa Nómada", price: 32, emoji: "💡", rating: 4, reviews: 875, tint: "from-yellow-100 to-amber-200" },
  { id: 5, name: "Set de cuidado facial", store: "Lúmina", price: 24.5, emoji: "🧴", rating: 4.5, reviews: 1310, tint: "from-pink-100 to-fuchsia-200" },
  { id: 6, name: "Vela aromática", store: "Detalles Mía", price: 16.9, emoji: "🕯️", rating: 4.5, reviews: 832, tint: "from-stone-100 to-amber-100" },
];

export const newArrivals: Product[] = [
  { id: 11, name: "Zapatillas urbanas", store: "Distrito 90", price: 49.99, emoji: "👟", rating: 4.5, reviews: 48, tint: "from-sky-100 to-blue-200" },
  { id: 12, name: "Teclado mecánico", store: "Audio Lab", price: 64.99, emoji: "⌨️", rating: 4.5, reviews: 31, tint: "from-slate-200 to-indigo-200" },
  { id: 13, name: "Caja de regalo", store: "Detalles Mía", price: 19.5, emoji: "🎁", rating: 5, reviews: 27, tint: "from-rose-100 to-red-200" },
  { id: 14, name: "Postre artesanal", store: "Origen Café", price: 6.25, emoji: "🍰", rating: 5, reviews: 62, tint: "from-orange-100 to-pink-200" },
  { id: 15, name: "Planta decorativa", store: "Verde Vivo", price: 14, emoji: "🪴", rating: 4.5, reviews: 19, tint: "from-green-100 to-emerald-200" },
  { id: 16, name: "Perfume floral", store: "Lúmina", price: 35, emoji: "🌸", rating: 4.5, reviews: 24, tint: "from-fuchsia-100 to-pink-200" },
];

export const testimonials = [
  { name: "Daniela M.", text: "Encontré todo en un solo lugar y la entrega fue rapidísima. ¡Me encantó!" },
  { name: "Carlos R.", text: "Descubrí negocios de mi ciudad que no conocía. Muy recomendado." },
  { name: "Sofía L.", text: "Atención increíble y productos únicos. Ya es mi tienda favorita." },
  { name: "Andrés P.", text: "Comprar local nunca fue tan fácil. Todo llegó perfecto." },
  { name: "Valeria T.", text: "Los regalos que compré fueron un éxito. Volveré pronto." },
];

export const benefits = [
  { icon: Truck, title: "Envío a domicilio", detail: "En toda la ciudad" },
  { icon: RotateCcw, title: "Cambios fáciles", detail: "30 días sin complicaciones" },
  { icon: ShieldCheck, title: "Pagos seguros", detail: "Seguro y encriptado" },
  { icon: Headphones, title: "Soporte destacado", detail: "Estamos para ayudarte" },
];

export const footerColumns = [
  { title: "Tienda", links: ["Todos los productos", "Novedades", "Más vendidos", "Ofertas", "Tarjetas de regalo"] },
  { title: "Ayuda", links: ["Información de envío", "Cambios y devoluciones", "Rastrea tu pedido", "Preguntas frecuentes", "Contáctanos"] },
  { title: "Nosotros", links: ["Nuestra historia", "Sostenibilidad", "Trabaja con nosotros", "Prensa", "Afiliados"] },
];