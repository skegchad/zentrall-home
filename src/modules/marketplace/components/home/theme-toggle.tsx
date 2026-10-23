"use client";

import { useTheme } from "../../hooks/use-theme";
import { FiIcon } from "../fi-icon";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      className="flex h-9 w-9 items-center justify-center rounded-full text-white/85 transition hover:bg-white/15 hover:text-white"
    >
      {isDark ? <FiIcon name="moon" /> : <FiIcon name="sun" />}
    </button>
  );
}