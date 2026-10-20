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
import type { Product } from "../types";

export const navLinks = [
  { label: "Inicio", href: "/", active: true },
  { label: "Tiendas", href: "/tiendas" },
  { label: "Categorías", href: "/explorar", dropdown: true },
  { label: "Novedades", href: "/explorar" },
  { label: "Rutas", href: "/rutas" },
];

export const heroFeatures = [
  { icon: BadgeCheck, title: "Calidad local", detail: "Negocios verificados" },
  { icon: Store, title: "Hecho en Guayaquil", detail: "Apoya lo nuestro" },
  { icon: ShieldCheck, title: "Pago seguro", detail: "100% protegido" },
  { icon: Headphones, title: "Soporte cercano", detail: "Aquí para ayudarte" },
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

export const bestSellers: Product[] = [
  { id: 1, name: "Bolso urbano", store: "Casa Nómada", category: "Moda", description: "Bolso espacioso y resistente, ideal para el día a día en la ciudad.", price: 28, rating: 4.5, reviews: 1245, tint: "from-rose-100 to-orange-100" },
  { id: 2, name: "Café de especialidad", store: "Origen Café", category: "Gastronomía", description: "Granos tostados en lotes pequeños, con notas de chocolate y frutos secos.", price: 8.5, rating: 5, reviews: 956, tint: "from-amber-100 to-orange-200" },
  { id: 3, name: "Auriculares Studio", store: "Audio Lab", category: "Tecnología", description: "Sonido claro con cancelación de ruido y hasta 30 horas de batería.", price: 39.99, rating: 4.5, reviews: 1102, tint: "from-violet-100 to-indigo-200" },
  { id: 4, name: "Lámpara minimalista", store: "Casa Nómada", category: "Hogar", description: "Luz cálida y diseño sencillo que se adapta a cualquier espacio.", price: 32, rating: 4, reviews: 875, tint: "from-yellow-100 to-amber-200" },
  { id: 5, name: "Set de cuidado facial", store: "Lúmina", category: "Belleza", description: "Rutina completa de limpieza e hidratación para todo tipo de piel.", price: 24.5, rating: 4.5, reviews: 1310, tint: "from-pink-100 to-fuchsia-200" },
  { id: 6, name: "Vela aromática", store: "Detalles Mía", category: "Hogar", description: "Vela de cera natural con aroma suave que dura más de 40 horas.", price: 16.9, rating: 4.5, reviews: 832, tint: "from-stone-100 to-amber-100" },
];

export const newArrivals: Product[] = [
  { id: 11, name: "Zapatillas urbanas", store: "Distrito 90", category: "Moda", description: "Comodidad todo el día con suela flexible y diseño versátil.", price: 49.99, rating: 4.5, reviews: 48, tint: "from-sky-100 to-blue-200" },
  { id: 12, name: "Teclado mecánico", store: "Audio Lab", category: "Tecnología", description: "Teclas con respuesta precisa, retroiluminado y conexión inalámbrica.", price: 64.99, rating: 4.5, reviews: 31, tint: "from-slate-200 to-indigo-200" },
  { id: 13, name: "Caja de regalo", store: "Detalles Mía", category: "Regalos", description: "Selección de detalles artesanales lista para sorprender a alguien.", price: 19.5, rating: 5, reviews: 27, tint: "from-rose-100 to-red-200" },
  { id: 14, name: "Postre artesanal", store: "Origen Café", category: "Gastronomía", description: "Hecho a mano cada día con ingredientes locales y poca azúcar.", price: 6.25, rating: 5, reviews: 62, tint: "from-orange-100 to-pink-200" },
  { id: 15, name: "Planta decorativa", store: "Verde Vivo", category: "Plantas", description: "Planta de interior fácil de cuidar, con maceta incluida.", price: 14, rating: 4.5, reviews: 19, tint: "from-green-100 to-emerald-200" },
  { id: 16, name: "Perfume floral", store: "Lúmina", category: "Belleza", description: "Fragancia fresca con notas florales y una duración de todo el día.", price: 35, rating: 4.5, reviews: 24, tint: "from-fuchsia-100 to-pink-200" },
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