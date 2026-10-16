import type { Metadata } from "next";
import "../modules/marketplace/styles/globals.css";
import "../modules/marketplace/styles/zentrall-theme.css";

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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}