import type { Metadata } from "next";
import "@fontsource/arvo/400.css";
import "@fontsource/arvo/700.css";
import "@fontsource/arvo/400-italic.css";
import "@fontsource/arvo/700-italic.css";
import "../modules/marketplace/styles/globals.css";
import "../modules/marketplace/styles/zentrall-theme.css";
import { coustard, sanchez } from "../modules/marketplace/lib/constants";
import "@flaticon/flaticon-uicons/css/regular/rounded.css";

export const metadata: Metadata = {
  title: "Zentrall | Marketplace",
  description: "Descubre productos y tiendas en Zentrall.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${coustard.variable} ${sanchez.variable}`}>
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}