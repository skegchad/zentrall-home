
"use client";

import { useMemo, useState } from "react";
import { ChevronRight, Search, X } from "lucide-react";
import { StoreProductCard, type CatalogProduct } from "./store-product-card";

const MONO = "var(--font-mono, ui-monospace, monospace)";
const FOCUS =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primario)]";

type Sort = "destacados" | "precio-asc" | "precio-desc" | "nombre";

type Props = {
    products: CatalogProduct[];
    onAdd?: (product: CatalogProduct) => void;
};

export function StoreCatalog({ products, onAdd }: Props) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("Todas");
    const [sort, setSort] = useState<Sort>("destacados");

    const categories = useMemo(() => {
        const counts = new Map<string, number>();

        for (const p of products) {
            counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
        }

        return [
            { name: "Todas", count: products.length },
            ...Array.from(counts, ([name, count]) => ({ name, count })),
        ];
    }, [products]);

    const visible = useMemo(() => {
        const q = query.trim().toLowerCase();

        const list = products.filter(
            (p) =>
                (category === "Todas" || p.category === category) &&
                (q === "" || p.name.toLowerCase().includes(q)),
        );

        if (sort === "precio-asc") list.sort((a, b) => a.price - b.price);
        if (sort === "precio-desc") list.sort((a, b) => b.price - a.price);
        if (sort === "nombre") {
            list.sort((a, b) => a.name.localeCompare(b.name, "es"));
        }

        return list;
    }, [products, query, category, sort]);

    return (
        <div className="w-full pt-20 sm:pt-24">
            {/* LAYOUT DEL CATÁLOGO */}
            <div className="flex w-full items-stretch gap-0">
                {/* SIDEBAR */}
                <div className="sticky top-28 z-20 flex h-[calc(100svh-7rem)] shrink-0 self-start">
                    {/* PESTAÑA LATERAL */}
                    <button
                        type="button"
                        aria-label={open ? "Ocultar filtros" : "Mostrar filtros"}
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                        className={`relative z-10 grid h-full w-11 shrink-0 place-items-center rounded-r-xl border border-l-0 border-[var(--color-borde)] bg-[var(--color-tarjeta)] text-[var(--color-texto)] shadow-[var(--sombra-suave)] transition-colors hover:border-[var(--color-primario)] hover:text-[var(--color-primario)] ${FOCUS}`}
                    >
                        <ChevronRight
                            size={22}
                            aria-hidden
                            className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {/* PANEL DE FILTROS */}
                    <div
                        className={`h-full shrink-0 overflow-hidden transition-[width] duration-300 ease-in-out ${open ? "w-72" : "w-0"
                            }`}
                    >
                        <aside
                            inert={!open}
                            aria-label="Filtros del catálogo"
                            className="h-full w-72 overflow-y-auto overflow-x-hidden rounded-r-2xl border-y border-r border-[var(--color-borde)] bg-[var(--color-tarjeta)]"
                        >
                            <div className="w-72 p-5">

                                {/* CABECERA */}
                                <div className="mb-7 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-lg font-semibold text-[var(--color-texto)]">
                                            Filtros
                                        </h2>
                                        <p className="mt-1 text-xs text-[var(--color-texto-suave)]">
                                            Encuentra lo que buscas
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        aria-label="Cerrar filtros"
                                        onClick={() => setOpen(false)}
                                        className={`grid h-8 w-8 place-items-center rounded-full text-[var(--color-texto-suave)] transition hover:bg-[var(--color-superficie)] hover:text-[var(--color-texto)] ${FOCUS}`}
                                    >
                                        <X size={17} aria-hidden />
                                    </button>
                                </div>

                                {/* CATEGORÍAS */}
                                <section className="mb-8">
                                    <h3
                                        className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-texto)]"
                                        style={{ fontFamily: MONO }}
                                    >
                                        Categorías
                                    </h3>

                                    <ul className="space-y-1">
                                        {categories.map((c) => {
                                            const active = c.name === category;

                                            return (
                                                <li key={c.name}>
                                                    <button
                                                        type="button"
                                                        onClick={() => setCategory(c.name)}
                                                        aria-pressed={active}
                                                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${FOCUS} ${active
                                                                ? "bg-[color-mix(in_srgb,var(--color-primario)_14%,transparent)] font-bold text-[var(--color-primario)]"
                                                                : "text-[var(--color-texto)] hover:bg-[var(--color-superficie)]"
                                                            }`}
                                                    >
                                                        <span className="truncate">{c.name}</span>

                                                        <span
                                                            className="text-xs text-[var(--color-texto-suave)]"
                                                            style={{ fontFamily: MONO }}
                                                        >
                                                            {c.count}
                                                        </span>
                                                    </button>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </section>

                                {/* PRECIO */}
                                <section className="mb-8">
                                    <h3
                                        className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-texto)]"
                                        style={{ fontFamily: MONO }}
                                    >
                                        Precio
                                    </h3>

                                    <p className="text-xs text-[var(--color-texto-suave)]">
                                        Próximamente: rango de precios.
                                    </p>
                                </section>

                                {/* ORDENAMIENTO */}
                                <section className="mb-8">
                                    <h3
                                        className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-texto)]"
                                        style={{ fontFamily: MONO }}
                                    >
                                        Ordenar por
                                    </h3>

                                    <select
                                        value={sort}
                                        onChange={(e) => setSort(e.target.value as Sort)}
                                        className="h-11 w-full rounded-xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] px-3 text-sm text-[var(--color-texto)] outline-none focus:border-[var(--color-primario)]"
                                    >
                                        <option value="destacados">Destacados</option>
                                        <option value="precio-asc">Precio: menor a mayor</option>
                                        <option value="precio-desc">Precio: mayor a menor</option>
                                        <option value="nombre">Nombre A–Z</option>
                                    </select>
                                </section>

                                {/* LIMPIAR FILTROS */}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setCategory("Todas");
                                        setSort("destacados");
                                        setQuery("");
                                    }}
                                    className="w-full rounded-xl border border-[var(--color-borde)] px-4 py-3 text-sm font-medium text-[var(--color-texto)] transition hover:border-[var(--color-primario)] hover:text-[var(--color-primario)]"
                                >
                                    Limpiar filtros
                                </button>

                            </div>
                        </aside>
                    </div>
                </div>

                {/* CONTENIDO DEL CATÁLOGO */}
                <main className="mx-auto min-w-0 w-full max-w-[1280px] flex-1 pr-4 sm:pr-6">
                    {/* TOOLBAR */}
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-borde)] pb-4">
                        <p
                            className="text-sm text-[var(--color-texto)]"
                            style={{ fontFamily: MONO }}
                        >
                            {visible.length}{" "}
                            {visible.length === 1 ? "resultado" : "resultados"}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            {/* BUSCADOR */}
                            <label className="relative block">
                                <span className="sr-only">Buscar productos</span>

                                <Search
                                    size={16}
                                    aria-hidden
                                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-texto-suave)]"
                                />

                                <input
                                    type="search"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Buscar"
                                    className="h-10 w-48 rounded-full border border-[var(--color-borde)] bg-[var(--color-tarjeta)] pl-9 pr-4 text-sm text-[var(--color-texto)] outline-none transition placeholder:text-[var(--color-texto-suave)] focus:border-[var(--color-primario)] focus:ring-2 focus:ring-[var(--color-primario)]/25 sm:w-60"
                                />
                            </label>

                            {/* ORDENAMIENTO */}
                            <label className="flex items-center gap-2 text-xs text-[var(--color-texto-suave)]">
                                <span style={{ fontFamily: MONO }}>Ordenar</span>

                                <select
                                    value={sort}
                                    onChange={(e) => setSort(e.target.value as Sort)}
                                    className="h-10 rounded-full border border-[var(--color-borde)] bg-[var(--color-tarjeta)] px-3 text-sm text-[var(--color-texto)] outline-none focus:border-[var(--color-primario)]"
                                >
                                    <option value="destacados">Destacados</option>
                                    <option value="precio-asc">Precio: menor a mayor</option>
                                    <option value="precio-desc">Precio: mayor a menor</option>
                                    <option value="nombre">Nombre A–Z</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    {/* PRODUCTOS */}
                    {visible.length > 0 ? (
                        <div
                            className={`grid grid-cols-2 gap-4 md:grid-cols-3 ${open ? "xl:grid-cols-3" : "xl:grid-cols-4"
                                }`}
                        >
                            {visible.map((p) => (
                                <StoreProductCard
                                    key={p.id}
                                    product={p}
                                    onAdd={onAdd}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="py-16 text-center text-sm text-[var(--color-texto-suave)]">
                            No encontramos productos con esos filtros.
                        </p>
                    )}
                </main>
            </div>
        </div>
    );
}
