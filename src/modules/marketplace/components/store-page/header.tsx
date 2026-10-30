"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FiIcon } from "../fi-icon";
import { ThemeToggle } from "../home/theme-toggle";
import type { AffiliatedStore } from "../../data/stores-data";
import type { StoreNavLink } from "../../lib/stores-links";

const pillBase =
    "flex items-center rounded-full border border-white/15 text-white shadow-lg backdrop-blur-xl transition-colors duration-300";

const iconBtn =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/85 transition hover:bg-white/15 hover:text-white";

type HeaderProps = {
    store: Pick<AffiliatedStore, "name" | "slug" | "logo">;
    links: StoreNavLink[];
    activeLabel?: string;
    cartCount?: number;
    backHref?: string;
    backLabel?: string;
};

export function Header({
    store,
    links,
    activeLabel = "Inicio",
    cartCount = 0,
    backHref = "/tiendas",
    backLabel = "Volver",
}: HeaderProps) {
    const storeName = store.name;
    const storeLogo = store.logo ?? undefined;

    const [open, setOpen] = useState(false);
    const [offset, setOffset] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const update = () => {
            const bar = document.getElementById("announcement-bar");
            const barHeight = bar?.offsetHeight ?? 0;

            setOffset(Math.max(0, barHeight - window.scrollY));
            setScrolled(window.scrollY > 40);
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);

        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    useEffect(() => {
        const media = window.matchMedia("(min-width: 1280px)");
        const updateMenu = () => {
            if (media.matches) setOpen(false);
        };

        updateMenu();
        media.addEventListener("change", updateMenu);

        return () => media.removeEventListener("change", updateMenu);
    }, []);

    const bg = scrolled ? "bg-black/75" : "bg-black/40";

    return (
        <div
            role="banner"
            style={{ top: offset }}
            className="fixed inset-x-0 z-50 bg-transparent px-2 pt-2 sm:px-4 sm:pt-3 md:px-6"
        >
            <div className="flex min-w-0 items-start justify-between gap-2 sm:gap-3">
                {/* Izquierda: volver, tienda, navegación y tema */}
                <div
                    className={`${pillBase} ${bg} min-w-0 gap-1 py-1.5 pl-1.5 pr-1.5 sm:gap-3 sm:py-2 sm:pl-2 sm:pr-2`}
                >
                    <Link
                        href={backHref}
                        aria-label={backLabel}
                        className="flex h-9 shrink-0 items-center gap-1.5 rounded-full px-2.5 text-xs font-medium text-white/85 transition hover:bg-white/15 hover:text-white"
                    >
                        <ArrowLeft size={16} aria-hidden />
                        <span className="hidden sm:inline">{backLabel}</span>
                    </Link>

                    <span aria-hidden className="h-5 w-px shrink-0 bg-white/15" />

                    <Link
                        href={`/tiendas/${store.slug}`}
                        aria-label={`${storeName}, inicio`}
                        className="flex min-w-0 shrink items-center gap-1.5 pr-1 leading-none sm:gap-2 sm:pr-2"
                    >
                        {storeLogo && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={storeLogo}
                                alt={`Logo de ${storeName}`}
                                className="h-8 w-8 shrink-0 rounded-full object-cover sm:h-9 sm:w-9"
                            />
                        )}

                        <span
                            className="truncate text-base font-bold tracking-tight text-white sm:text-lg"
                            style={{ fontFamily: "sans-serif", letterSpacing: "0.02em" }}
                        >
                            {storeName}
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-1 text-xs font-medium xl:flex">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                aria-current={link.label === activeLabel ? "page" : undefined}
                                className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 transition ${link.label === activeLabel
                                        ? "bg-white/15 text-white"
                                        : "text-white/70 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="ml-1 flex items-center border-l border-white/15 pl-1 sm:pl-2">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Derecha: carrito y menú móvil */}
                <div className={`${pillBase} ${bg} shrink-0 gap-0.5 p-1 sm:gap-1 sm:p-2`}>
                    <Link href="/carrito" aria-label="Carrito" className={`${iconBtn} relative`}>
                        <FiIcon name="shopping-bag" />
                        {cartCount > 0 && (
                            <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-descuento)] px-1 text-[9px] font-bold text-white">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <button
                        type="button"
                        aria-label={open ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={open}
                        onClick={() => setOpen((value) => !value)}
                        className={`${iconBtn} xl:hidden`}
                    >
                        <FiIcon name={open ? "cross" : "menu-burger"} />
                    </button>
                </div>
            </div>

            {/* Menú móvil */}
            {open && (
                <div className="ml-auto mt-2 max-h-[calc(100dvh-5rem)] w-full max-w-xs overflow-y-auto rounded-3xl border border-white/15 bg-black/85 p-3 text-white shadow-xl backdrop-blur-xl sm:max-w-sm xl:hidden">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`flex items-center justify-between gap-2 rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-white/10 ${link.label === activeLabel ? "bg-white/10 text-white" : "text-white/80"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}