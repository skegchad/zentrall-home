import type { AffiliatedStore } from "../../data/stores-data";

type Props = {
  store: AffiliatedStore;
  /** Clases de tamaño y forma, ej: "h-12 w-12 rounded-full" */
  className?: string;
};

/** Logo del negocio o, si aún no tiene, su inicial. */
export function StoreLogoTile({ store, className = "h-12 w-12 rounded-2xl" }: Props) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden bg-[var(--color-circulo)] text-lg font-bold text-[var(--color-circulo-icono)] ${className}`}
    >
      {store.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={store.logo} alt={`Logo de ${store.name}`} className="h-full w-full object-cover" />
      ) : (
        <span aria-hidden>{store.name.charAt(0).toUpperCase()}</span>
      )}
    </div>
  );
}