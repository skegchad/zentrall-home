"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { UserCircle, Search, Store, Compass } from "lucide-react";

import { cn } from "@/lib/utils";
import { useMarketplaceTheme } from "../providers/theme-provider";
import MarketplaceOnboardingFlow from "./first-access-onboarding";
import { ThemeToggle } from "./theme-toggle";

type SessionUser = { name: string; role: string } | null;

type MarketplaceShellProps = {
  children: React.ReactNode;
  sessionUser?: SessionUser;
};

export function MarketplaceShell({ children, sessionUser = null }: MarketplaceShellProps) {
  const { mode } = useMarketplaceTheme();
  const pathname = usePathname();

  return (
    <div data-marketplace-theme={mode} className="marketplace-shell">
      <div className="shell">
        {/* Mobile top brand strip */}
        <header className="mobile-brand-strip" aria-label="Encabezado de Zentrall">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/brand/zentrall-isotipo.svg" alt="" aria-hidden="true" width={32} height={32} />
            <span className="font-bold text-sm">Zentrall</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle size="sm" />
            {sessionUser ? (
              <Link
                href={sessionUser.role !== "BUYER" ? "/overview" : "/guardados"}
                className="mobile-account-button"
                aria-label="Perfil"
              >
                <UserCircle className="h-4 w-4" />
              </Link>
            ) : (
              <Link
                href="/login"
                className="mobile-account-button"
                aria-label="Iniciar sesión"
              >
                <UserCircle className="h-4 w-4" />
              </Link>
            )}
          </div>
        </header>

        {/* Desktop navbar */}
        <aside className="sidebar">
          <Link href="/" className="brand-simple">
            <Image src="/brand/zentrall-isotipo.svg" alt="" aria-hidden="true" width={32} height={32} />
            <span className="brand-text">Zentrall</span>
          </Link>

          <nav className="nav" aria-label="Navegación principal">
            <Link
              href="/"
              className={cn("nav-link", pathname === "/" && "active")}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              <Search className="h-4 w-4" />
              <span>Buscar</span>
            </Link>
            <Link
              href="/tiendas"
              className={cn("nav-link", pathname.startsWith("/tiendas") && "active")}
              aria-current={pathname.startsWith("/tiendas") ? "page" : undefined}
            >
              <Store className="h-4 w-4" />
              <span>Tiendas</span>
            </Link>
            <Link
              href="/explorar"
              className={cn("nav-link", pathname.startsWith("/explorar") && "active")}
              aria-current={pathname.startsWith("/explorar") ? "page" : undefined}
            >
              <Compass className="h-4 w-4" />
              <span>Explorar</span>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle size="md" />
            {sessionUser ? (
              <Link
                href={sessionUser.role !== "BUYER" ? "/overview" : "/guardados"}
                className="header-btn"
                title={sessionUser.name}
              >
                <UserCircle className="h-5 w-5" />
              </Link>
            ) : (
              <Link href="/login" className="header-btn-primary">
                Entrar
              </Link>
            )}
          </div>
        </aside>

        <main className="marketplace-main">{children}</main>
        <MarketplaceOnboardingFlow isLoggedIn={!!sessionUser} />
        <MarketplaceFooter />
      </div>
    </div>
  );
}

function MarketplaceFooter() {
  return (
    <footer className="marketplace-footer">
      <div className="marketplace-container grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-lg font-bold text-primary-foreground">
              Z
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">ZENTRAL</span>
          </div>
          <p className="text-sm text-muted-foreground">
            La variedad de la ciudad, con la experiencia de un mall. Todo Guayaquil en un solo lugar.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-bold">Descubrir</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Plazas digitales</li>
            <li>Directorio de tiendas</li>
            <li>Ruta Zentrall</li>
            <li>Promociones</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-bold">Para negocios</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Abre tu local</li>
            <li>Planes y precios</li>
            <li>Centro de ayuda</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-bold">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Terminos y condiciones</li>
            <li>Privacidad</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>

      <div className="marketplace-container mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Zentrall Mall Digital. Todos los derechos reservados.
      </div>
    </footer>
  );
}
