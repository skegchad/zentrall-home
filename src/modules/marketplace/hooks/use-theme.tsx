"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "zentrall-theme";

/** Aplica el tema a los tres atributos que usa zentrall-theme.css */
function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-tema", theme);
  root.setAttribute("data-theme-mode", theme);
  root.style.colorScheme = theme;
  document
    .querySelectorAll<HTMLElement>(".marketplace-shell")
    .forEach((el) => el.setAttribute("data-marketplace-theme", theme));
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  // Al montar: lee lo guardado o la preferencia del sistema
  useEffect(() => {
    let initial: Theme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") initial = stored;
    } catch {
      /* localStorage puede no estar disponible */
    }
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignorar */
    }
  }, [theme]);

  return { theme, toggle };
}