"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { navLinks } from "../../data/home-data";
import { serif } from "../../lib/constants";
import { logo } from "../../lib/constants";
import { ThemeToggle } from "./theme-toggle";

const pillBase =
    "flex items-center rounded-full border border-white/15 text-white shadow-lg backdrop-blur-xl transition-colors duration-300";

const iconBtn =
    "flex h-9 w-9 items-center justify-center rounded-full text-white/85 transition hover:bg-white/15 hover:text-white";

/**
 * Dos píldoras flotantes que acompañan al scroll (position: fixed):
 *  - izquierda: logo + navegación
 *  - derecha: buscar, guardados, carrito, tema y "Entrar"
 *
 * Mientras la barra de anuncios (#announcement-bar) sigue visible, el header
 * se queda justo debajo de ella; cuando ésta sale de pantalla, se pega arriba.
 * Se usa <div role="banner"> (no <header>) para que ningún estilo global
 * del tag <header> le ponga fondo o posición.
 */
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

    // Más opaco al bajar, para que se lea sobre fondos claros
    const bg = scrolled ? "bg-black/70" : "bg-black/35";

    return (
        <div
            role="banner"
            style={{ top: offset }}
            className="fixed inset-x-0 z-50 bg-transparent px-4 pt-3 md:px-6"
        >
            <div className="flex items-start justify-between gap-3">
                {/* Izquierda */}
                <div className={`${pillBase} ${bg} gap-3 py-2 pl-5 pr-2`}>
                    <Link
                        href="/"
                        className="flex shrink-0 items-center gap-2 pr-2 leading-none"
                    >
                        <img
                            src={logo}
                            alt="Logo de Zentrall"
                            className="h-8 w-auto object-contain"
                        />

                        <span
                            className="text-2xl font-medium tracking-tight text-white"
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: "1.15rem",
                                fontWeight: 700,
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
                                className={`flex items-center gap-1 rounded-full px-3.5 py-2 transition ${link.active
                                        ? "bg-white/15 text-white"
                                        : "text-white/70 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {link.label}
                                {link.dropdown && <ChevronDown size={13} />}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Derecha */}
                <div className={`${pillBase} ${bg} gap-1 p-2`}>
                    <Link href="/explorar" aria-label="Buscar" className={iconBtn}>
                        <Search size={18} />
                    </Link>
                    <Link
                        href="/guardados"
                        aria-label="Guardados"
                        className={`${iconBtn} hidden sm:flex`}
                    >
                        <Heart size={18} />
                    </Link>
                    <Link
                        href="/carrito"
                        aria-label="Carrito"
                        className={`${iconBtn} relative`}
                    >
                        <ShoppingBag size={18} />
                        <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-descuento)] px-1 text-[9px] font-bold text-white">
                            {cartCount}
                        </span>
                    </Link>

                    <ThemeToggle />

                    <Link
                        href="/login"
                        className="ml-1 rounded-full bg-[var(--color-descuento)] px-5 py-2.5 text-xs font-bold text-white transition hover:opacity-90"
                    >
                        Entrar
                    </Link>

                    <button
                        type="button"
                        aria-label={open ? "Cerrar menú" : "Abrir menú"}
                        onClick={() => setOpen((value) => !value)}
                        className={`${iconBtn} xl:hidden`}
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="mt-2 flex flex-col gap-1 rounded-3xl border border-white/15 bg-black/60 p-3 text-white shadow-lg backdrop-blur-xl xl:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="rounded-2xl px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}