"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  Compass,
  Gift,
  Home as HomeIcon,
  Laptop,
  Moon,
  PartyPopper,
  Shirt,
  ShoppingBag,
  Sparkles,
  Tag,
  Utensils,
  Wrench,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { featuredProducts, routes, stores } from "../data";
import type { MarketplaceFeaturedProduct, MarketplaceStore } from "../data";
import { ProductCard, StoreCard } from "../components/cards";
import { ZentralChatbot } from "../components/zentral-chatbot";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

type HomePageProps = {
  initialStores?: MarketplaceStore[];
  initialProducts?: MarketplaceFeaturedProduct[];
  businessCount?: number;
};


// ── Componente ────────────────────────────────────────────────────────────────

export function MarketplaceHomePage({ initialStores = [], initialProducts = [], businessCount = 0 }: HomePageProps) {
  const [activeOccasion, setActiveOccasion] = useState("");

  const categoryChips = [
    { id: "Gastronomia", icon: Utensils, label: "Gastronomia" },
    { id: "Moda", icon: Shirt, label: "Moda" },
    { id: "Tecnologia", icon: Laptop, label: "Tech" },
    { id: "Belleza", icon: Sparkles, label: "Belleza" },
    { id: "Servicios", icon: Wrench, label: "Servicios" },
    { id: "Regalos", icon: Gift, label: "Regalos" },
    { id: "Hogar", icon: HomeIcon, label: "Hogar" },
    { id: "Promos", icon: Tag, label: "Ofertas" },
  ];

  const exploreCategories = [
    { name: "Gastronomia", icon: Utensils, count: 45 },
    { name: "Moda", icon: Shirt, count: 32 },
    { name: "Tech", icon: Laptop, count: 18 },
    { name: "Servicios", icon: Wrench, count: 24 },
    { name: "Regalos", icon: Gift, count: 20 },
    { name: "Hogar", icon: HomeIcon, count: 15 },
    { name: "Belleza", icon: Sparkles, count: 28 },
    { name: "Ofertas", icon: Tag, count: 50 },
  ];

  const occasions = [
    { id: "desayuno", icon: Coffee, label: "Desayuno", cat: "Gastronomia" },
    { id: "almuerzo", icon: Utensils, label: "Almuerzo", cat: "Gastronomia" },
    { id: "regalo", icon: Gift, label: "Regalo", cat: "Regalos" },
    { id: "look", icon: Shirt, label: "Mi look", cat: "Moda" },
    { id: "belleza", icon: Sparkles, label: "Belleza", cat: "Belleza" },
    { id: "hogar", icon: HomeIcon, label: "Mi hogar", cat: "Hogar" },
    { id: "tech", icon: Laptop, label: "Tech", cat: "Tecnologia" },
    { id: "noche", icon: Moon, label: "Noche", cat: "Gastronomia" },
    { id: "evento", icon: PartyPopper, label: "Evento", cat: "Servicios" },
    { id: "compras", icon: ShoppingBag, label: "Compras", cat: "Moda" },
  ];

  // ── Datos reales o fallback a mock ──────────────────────────────────────────
  const hasRealData = initialStores.length > 0;

  const featuredGrid = hasRealData
    ? initialProducts.slice(0, 8)
    : featuredProducts.filter((p) => p.isFeatured).slice(0, 8);

  const offerCarousel = hasRealData
    ? initialProducts.slice(0, 6)
    : featuredProducts.filter((p) => p.isOffer).slice(0, 6);

  const nearbyProducts = hasRealData
    ? initialProducts.slice(0, 6)
    : featuredProducts.filter((p) => !p.isFeatured).slice(0, 6);

  const verifiedStores = hasRealData
    ? initialStores.slice(0, 4)
    : stores.filter((s) => s.tags.includes("Verificado")).slice(0, 4);

  const moreProducts = hasRealData
    ? initialProducts.slice(8, 16)
    : featuredProducts.slice(8, 16);

  const activeOccasionData = occasions.find((o) => o.id === activeOccasion);
  const occasionProducts = activeOccasionData
    ? featuredProducts.filter((p) => p.category === activeOccasionData.cat).slice(0, 4)
    : featuredProducts.slice(0, 4);

  const displayCount = businessCount > 0 ? businessCount : 500;

  return (

      <div className="marketplace-page">

        <div className="marketplace-home-intro flex min-h-[calc(100svh-var(--market-header-height))] flex-col border-b border-border/40 bg-background pb-[calc(var(--market-bottom-nav-height)+1rem)] md:pb-0">
          {/* ── Hero + Chatbot ── */}
          <section className="relative flex flex-1 items-center overflow-hidden py-10 md:py-12">
            <div className="pointer-events-none absolute right-0 top-0 h-120 w-120 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

            <div className="marketplace-container marketplace-container--narrow relative">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-8 text-center"
              >
                <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                  La variedad de la ciudad,{" "}
                  <span className="italic text-primary" style={{ fontFamily: "Georgia, serif" }}>organizada</span>{" "}
                  en un solo lugar
                </h1>
                <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Encuentra productos, tiendas y servicios locales de Guayaquil. Verificados, ordenados y listos para
                  atenderte.
                </p>
              </motion.div>

              {/* ── Chatbot Concierge ── */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mb-8"
              >
                <ZentralChatbot />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.28 }}
                className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
              >
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                  +{displayCount} tiendas locales
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary/70" />
                  Tiendas verificadas
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary/50" />
                  Entrega hoy disponible
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary/40" />
                  Concierge Zentrall activo
                </span>
              </motion.div>
            </div>
          </section>

          {/* ── Category chips ── */}
          <section className="shrink-0 border-t border-border/40 bg-background py-5">
            <div className="marketplace-container">
              <div className="flex flex-wrap justify-center gap-3 pb-2">
                {categoryChips.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Link key={category.id} href="/explorar" className="flex w-17 flex-col items-center gap-2">
                      <div className="flex h-13 w-13 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-center text-[11px] font-medium leading-tight">{category.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* ── Vitrina de hoy ── */}
        {featuredGrid.length > 0 && (
          <MarketplaceSection title="Vitrina de hoy" description="Lo mas buscado en Zentrall ahora" href="/explorar">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
            >
              {featuredGrid.map((product) => (
                <motion.div key={product.id} variants={fadeUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </MarketplaceSection>
        )}

        {/* ── Ofertas activas ── */}
        {offerCarousel.length > 0 && (
          <section className="marketplace-section marketplace-section--subtle">
            <div className="marketplace-container">
              <div className="marketplace-section-header">
                <div>
                  <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight">
                    <Tag className="h-5 w-5 text-primary" />
                    {hasRealData ? "Productos disponibles" : "Ofertas activas"}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {hasRealData ? "Directo de negocios locales" : "Descuentos imperdibles, solo por hoy"}
                  </p>
                </div>
                <Link href="/explorar" className="text-sm font-semibold text-primary hover:underline">
                  Ver todas
                </Link>
              </div>
              <div className="scrollbar-hide -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:px-0">
                {offerCarousel.map((product) => (
                  <div key={product.id} className="w-44 shrink-0 snap-start md:w-52">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Explorar por categoría ── */}
        <section className="marketplace-section">
          <div className="marketplace-container">
            <div className="marketplace-section-header">
              <h2 className="text-xl font-bold tracking-tight">Explorar por categoria</h2>
              <p className="text-sm text-muted-foreground">Encuentra exactamente lo que necesitas</p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {exploreCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Link key={category.name} href="/explorar">
                    <div className="marketplace-panel flex min-h-18 cursor-pointer items-center gap-3 p-4 transition hover:border-primary/20 hover:bg-primary/5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold leading-tight">{category.name}</div>
                        <div className="text-xs text-muted-foreground">{category.count} tiendas</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Tiendas verificadas ── */}
        {verifiedStores.length > 0 && (
          <section className="marketplace-section marketplace-section--subtle">
            <div className="marketplace-container">
              <div className="marketplace-section-header">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground">
                    {hasRealData ? "Negocios en Zentrall" : "Tiendas verificadas"}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {hasRealData ? "Negocios locales activos" : "Calidad garantizada en Guayaquil"}
                  </p>
                </div>
                <Link href="/tiendas" className="shrink-0 text-sm font-semibold text-primary hover:underline">
                  Ver todos
                </Link>
              </div>
              <div className="scrollbar-hide -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:px-0">
                {verifiedStores.map((store) => (
                  <div key={store.id} className="w-70 shrink-0 snap-start md:w-75">
                    <StoreCard store={store} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Descubrimientos locales ── */}
        {nearbyProducts.length > 0 && (
          <section className="marketplace-section">
            <div className="marketplace-container">
              <div className="marketplace-section-header">
                <div>
                  <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight">
                    <Compass className="h-5 w-5 text-primary" />
                    Descubrimientos locales
                  </h2>
                  <p className="text-sm text-muted-foreground">Productos de negocios en tu zona de Guayaquil</p>
                </div>
                <Link href="/explorar" className="shrink-0 text-sm font-semibold text-primary hover:underline">
                  Explorar
                </Link>
              </div>
              <div className="scrollbar-hide -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:px-0">
                {nearbyProducts.map((product) => (
                  <div key={product.id} className="w-44 shrink-0 snap-start md:w-52">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Para tu plan de hoy (siempre mock — no hay datos reales de ocasiones aún) ── */}
        <section className="marketplace-section marketplace-section--subtle">
          <div className="marketplace-container">
            <div className="marketplace-section-header">
              <h2 className="text-xl font-bold tracking-tight text-foreground">Para tu plan de hoy</h2>
              <p className="text-sm text-muted-foreground">Cuentanos para que y encontramos lo ideal</p>
            </div>

            <div className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 pb-4 md:mx-0 md:px-0">
              {occasions.map((occasion) => {
                const Icon = occasion.icon;
                const isActive = activeOccasion === occasion.id;
                return (
                  <button
                    key={occasion.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveOccasion(isActive ? "" : occasion.id)}
                    className={cn(
                      "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:border-primary/30 hover:bg-primary/10",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {occasion.label}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeOccasion}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="scrollbar-hide -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0"
            >
              {occasionProducts.map((product) => (
                <div key={product.id} className="w-44 shrink-0 snap-start md:w-52">
                  <ProductCard product={product} />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Rutas (siempre mock — no hay datos reales aún) ── */}
        <section className="marketplace-section">
          <div className="marketplace-container">
            <div className="marketplace-section-header">
              <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight">
                <Compass className="h-5 w-5 text-primary" />
                Rutas para tu plan
              </h2>
              <p className="text-sm text-muted-foreground">Itinerarios curados para cada momento del dia</p>
            </div>
            <div className="scrollbar-hide -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:px-0">
              {routes.map((route) => (
                <div key={route.id} className="w-72.5 shrink-0 snap-start md:w-85">
                  <div className="flex h-full flex-col rounded-2xl bg-foreground p-5 text-background shadow-sm">
                    <span className="mb-3 w-fit rounded-full bg-background/20 px-2.5 py-1 text-xs font-semibold text-background">
                      {route.steps.length} paradas
                    </span>
                    <h3 className="mb-2 text-lg font-bold">{route.title}</h3>
                    <p className="mb-5 flex-1 text-sm text-background/80">{route.description}</p>
                    <Link
                      href="/rutas"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-background/30 bg-background/10 px-4 text-sm font-semibold text-background transition hover:bg-background hover:text-foreground"
                    >
                      Ver recorrido
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA campaña ── */}
        <section className="marketplace-section pt-0!">
          <div className="marketplace-container">
            <div className="relative overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-md md:p-8">
              <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/2 rounded-full bg-white opacity-10 blur-3xl" />
              <div className="relative z-10">
                <span className="mb-3 inline-flex rounded-full bg-primary-foreground/20 px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                  Campana activa
                </span>
                <h3 className="mb-2 text-2xl font-bold md:text-3xl">Festival de la Costa</h3>
                <p className="mb-5 max-w-md text-sm text-primary-foreground/80">
                  Los mejores negocios de Guayaquil con precios especiales esta semana. Descubre productos, compara y
                  contacta directo.
                </p>
                <Link
                  href="/explorar"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-background px-5 text-sm font-bold text-primary transition hover:bg-background/90"
                >
                  Ver productos de la campana
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mas populares ── */}
        {moreProducts.length > 0 && (
          <section className="marketplace-section">
            <div className="marketplace-container">
              <div className="marketplace-section-header">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground">
                    {hasRealData ? "Más productos en Zentrall" : "Mas populares en Zentrall"}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {hasRealData ? "Del catálogo de negocios locales" : "Los preferidos de la comunidad guayaquilena"}
                  </p>
                </div>
                <Link
                  href="/explorar"
                  className="hidden h-9 items-center justify-center rounded-full border border-border bg-background px-4 text-sm font-semibold text-foreground transition hover:border-primary hover:bg-primary/10 sm:inline-flex"
                >
                  Ver todos
                </Link>
              </div>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
              >
                {moreProducts.map((product) => (
                  <motion.div key={product.id} variants={fadeUp}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
              <div className="mt-6 text-center sm:hidden">
                <Link
                  href="/explorar"
                  className="inline-flex h-11 w-full items-center justify-center rounded-full border border-border bg-background px-4 text-sm font-semibold text-foreground transition hover:border-primary hover:bg-primary/10"
                >
                  Ver todos los productos
                </Link>
              </div>
            </div>
          </section>
        )}

      </div>

  );
}

type MarketplaceSectionProps = {
  title: string;
  description: string;
  href: string;
  children: React.ReactNode;
};

function MarketplaceSection({ title, description, href, children }: MarketplaceSectionProps) {
  return (
    <section className="marketplace-section">
      <div className="marketplace-container">
        <div className="marketplace-section-header">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <Link href={href} className="shrink-0 text-sm font-semibold text-primary hover:underline">
            Ver todos
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
}
