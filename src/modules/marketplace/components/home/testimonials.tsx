"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/home-data";
import { wrap } from "../../lib/constants";
import { SectionTitle } from "./section-title";
import { Stars } from "./stars";

export function Testimonials() {
  const [start, setStart] = useState(0);
  const total = testimonials.length;
  const visible = [0, 1, 2].map(
    (offset) => testimonials[(start + offset) % total],
  );

  return (
    <section className={`${wrap} pt-12`}>
      <SectionTitle>Lo que dicen nuestros clientes</SectionTitle>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => setStart((value) => (value - 1 + total) % total)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-borde)] bg-[var(--color-tarjeta)] text-[var(--color-texto)] transition hover:bg-[var(--color-circulo)]"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="grid flex-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => (
            <figure
              key={`${item.name}-${index}`}
              className={`m-0 items-center gap-4 rounded-2xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] p-4 ${
                index === 0
                  ? "flex"
                  : index === 1
                    ? "hidden md:flex"
                    : "hidden lg:flex"
              }`}
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-circulo)] text-lg font-bold text-[var(--color-circulo-icono)]">
                {item.name.charAt(0)}
              </span>
              <div>
                <p className="text-xs font-bold text-[var(--color-texto)]">
                  {item.name}
                </p>
                <Stars rating={5} />
                <blockquote className="m-0 mt-1 text-[11px] leading-4 text-[var(--color-texto-suave)]">
                  “{item.text}”
                </blockquote>
              </div>
            </figure>
          ))}
        </div>

        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => setStart((value) => (value + 1) % total)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-borde)] bg-[var(--color-tarjeta)] text-[var(--color-texto)] transition hover:bg-[var(--color-circulo)]"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}