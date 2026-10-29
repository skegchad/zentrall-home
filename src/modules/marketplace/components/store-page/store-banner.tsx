import type { AffiliatedStore } from "../../data/stores-data";
import { placeholderGradient } from "../../lib/stores-utils";
import { StoreLogoTile } from "../stores/store-logo-tile";
import { DISPLAY } from "./store-profile-constants";

type Props = { store: AffiliatedStore };

export function StoreBanner({ store }: Props) {
  return (
    <section className="relative">
      {/* Imagen a todo el ancho (queda por detrás del header) */}
      <div className="relative h-[280px] w-full overflow-hidden sm:h-[340px] md:h-[400px]">
        {store.background ? (
          <img
            src={store.background}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ backgroundImage: placeholderGradient(store.name) }}
          />
        )}

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/65"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex w-full max-w-[1180px] items-end gap-4 px-4 sm:gap-6 sm:px-6">
          <div className="aspect-square w-24 shrink-0 translate-y-1/2 overflow-hidden rounded-full border-2 border-[var(--tienda-acento)] bg-[var(--color-tarjeta)] shadow-lg sm:w-28">
            <StoreLogoTile store={store} className="h-full w-full !rounded-none !border-0" />
          </div>

          <h1
            className="min-w-0 pb-4 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] sm:pb-5"
            style={{ fontFamily: DISPLAY }}
          >
            {store.name}
          </h1>
        </div>
      </div>
    </section>
  );
}