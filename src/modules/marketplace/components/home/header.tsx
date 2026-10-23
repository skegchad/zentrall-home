"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiIcon } from "../fi-icon";
import { navLinks } from "../../data/home-data";
import { logo } from "../../lib/constants";
import { ThemeToggle } from "./theme-toggle";

const pillBase =
    "flex items-center rounded-full border border-white/15 text-white shadow-lg backdrop-blur-xl transition-colors duration-300";

const iconBtn =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/85 transition hover:bg-white/15 hover:text-white";

export function Header({ cartCount }: { cartCount: number }) {
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

    // Cierra el menú si el usuario vuelve a una pantalla de escritorio.
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
                {/* Izquierda: logo y navegación */}
                <div
                    className={`${pillBase} ${bg} min-w-0 gap-1 py-1.5 pl-2 pr-1.5 sm:gap-3 sm:py-2 sm:pl-4 sm:pr-2 md:pl-5`}
                >
                    <Link
                        href="/"
                        aria-label="Zentrall, inicio"
                        className="flex min-w-0 shrink items-center gap-1.5 pr-1 leading-none sm:gap-2 sm:pr-2"
                    >
                        <img
                            src={logo}
                            alt="Logo de Zentrall"
                            className="h-7 w-auto shrink-0 object-contain sm:h-8"
                        />

                        <span
                            className="truncate text-base font-bold tracking-tight text-white sm:text-lg"
                            style={{
                                fontFamily: "sans-serif",
                                letterSpacing: "0.02em",
                            }}
                        >
                            Zentrall
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-1 text-xs font-medium xl:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 transition ${link.active
                                        ? "bg-white/15 text-white"
                                        : "text-white/70 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {link.label}
                                {link.dropdown && <FiIcon name="angle-small-down" size={13} />}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Derecha: controles adaptables */}
                <div className={`${pillBase} ${bg} shrink-0 gap-0.5 p-1 sm:gap-1 sm:p-2`}>
                    <Link
                        href="/explorar"
                        aria-label="Buscar"
                        className={iconBtn}
                    >
                        <FiIcon name="search" size={16} />
                    </Link>

                    <Link
                        href="/guardados"
                        aria-label="Guardados"
                        className={`${iconBtn} hidden md:flex`}
                    >
                        <FiIcon name="heart" />
                    </Link>

                    <Link
                        href="/carrito"
                        aria-label="Carrito"
                        className={`${iconBtn} relative`}
                    >
                        <FiIcon name="shopping-bag" />
                        <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-descuento)] px-1 text-[9px] font-bold text-white">
                            {cartCount}
                        </span>
                    </Link>

                    <div className="hidden sm:flex">
                        <ThemeToggle />
                    </div>

                    <Link
                        href="/login"
                        className="ml-0.5 hidden rounded-full bg-[var(--color-descuento)] px-4 py-2.5 text-xs font-bold text-white transition hover:opacity-90 sm:ml-1 sm:inline-flex sm:px-5"
                    >
                        Entrar
                    </Link>

                    <button
                        type="button"
                        aria-label={open ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={open}
                        onClick={() => setOpen((value) => !value)}
                        className={`${iconBtn} xl:hidden`}
                    >
                        {<FiIcon name={open ? "cross" : "menu-burger"} />}
                    </button>
                </div>
            </div>

            {/* Menú móvil */}
            {open && (
                <div className="ml-auto mt-2 max-h-[calc(100dvh-5rem)] w-full max-w-xs overflow-y-auto rounded-3xl border border-white/15 bg-black/85 p-3 text-white shadow-xl backdrop-blur-xl sm:max-w-sm xl:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`flex items-center justify-between gap-2 rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-white/10 ${link.active ? "bg-white/10 text-white" : "text-white/80"
                                }`}
                        >
                            {link.label}
                            {link.dropdown && <i className="fi fi-rr-home"></i>}
                        </Link>
                    ))}

                    <div className="my-2 border-t border-white/15" />

                    <Link
                        href="/guardados"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/85 transition hover:bg-white/10 md:hidden"
                    >
                        <i className="fi-sr-shopping-bag"></i>
                        Guardados
                    </Link>

                    <Link
                        href="/login"
                        onClick={() => setOpen(false)}
                        className="mt-1 flex items-center justify-center rounded-2xl bg-[var(--color-descuento)] px-4 py-3 text-sm font-bold text-white transition hover:opacity-90 sm:hidden"
                    >
                        Entrar
                    </Link>

                    <div className="flex items-center justify-between px-4 py-3 sm:hidden">
                        <span className="text-sm text-white/80">Apariencia</span>
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </div>
    );
}