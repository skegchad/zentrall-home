"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Scroll con inercia: acelera al empezar y frena suave al terminar. */
export function SmoothScroll() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const lenis = new Lenis({
            duration: 1.4, // más alto = más lento y "flotado"
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out exponencial
            smoothWheel: true,
        });

        let raf = 0;
        const loop = (time: number) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
        };
    }, []);

    return null;
}