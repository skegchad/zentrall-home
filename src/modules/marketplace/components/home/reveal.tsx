"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type State = "below" | "in" | "above";

export function Reveal({
    children,
    delay = 0,
    className = "",
}: {
    children: ReactNode;
    delay?: number; // ms, útil para escalonar tarjetas
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<State>("below");

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setState("in");
            return;
        }

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setState("in");
                else setState(entry.boundingClientRect.top < 0 ? "above" : "below");
            },
            { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            data-state={state}
            className={`zentrall-reveal ${className}`}
            style={{ ["--reveal-delay" as string]: `${delay}ms` }}
        >
            {children}
        </div>
    );
}