import { Arvo, Coustard, Sanchez } from "next/font/google";
export const HERO_IMAGE = "/assets/img/hero.png";
export const PROMO_CODE = "ZENTRALL15";
export const logo = "/brand/zentrall-isotipo.svg";
export const hero_object = "/assets/img/hero-object.png";



/** Clases Tailwind compartidas */
export const wrap = "mx-auto w-full max-w-7xl px-5 md:px-8";

/** Tarjetas semitransparentes: dejan ver el color del contenedor */
export const cardSurface =
  "border border-[color-mix(in_srgb,var(--color-texto)_10%,transparent)] bg-[color-mix(in_srgb,var(--color-fondo)_60%,transparent)] backdrop-blur-[2px]";

/** Contenedor de categorías y productos: verde claro en claro, turquesa en oscuro */
export const greenPanel =
  "rounded-xl border border-[color:var(--color-panel-borde,rgba(63,157,107,0.3))] bg-[var(--color-panel,#dcf0e4)]";

export const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],   // Arvo solo tiene estos dos pesos
  style: ["normal", "italic"],
  variable: "--font-arvo",
  display: "swap",
});

export const serif = "font-[family-name:var(--font-arvo)]";

export const coustard = Coustard({
  subsets: ["latin"],
  weight: ["400", "900"], // Coustard solo tiene estos dos pesos
  variable: "--font-coustard",
  display: "swap",
});

export const sanchez = Sanchez({
  subsets: ["latin"],
  weight: "400", // Sanchez solo tiene Regular
  style: ["normal", "italic"],
  variable: "--font-sanchez",
  display: "swap",
});

export const subtitulo = "font-[family-name:var(--font-coustard)]";
export const cuerpo = "font-[family-name:var(--font-sanchez)]";