import type { AffiliatedStore } from "../../data/stores-data";
import { StoreWhatsAppButton } from "./store-whatsapp-button";

type Props = { store: AffiliatedStore };

export function StoreInfo({ store }: Props) {
  const hasWhatsApp = Boolean((store.whatsapp ?? "").replace(/\D/g, ""));

  return (
    // mt-20 deja libre la mitad del logo que sobresale de la imagen
    <div className="mt-20 flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-8">
      <p className="min-w-0 flex-1 leading-7 text-[var(--color-texto-suave)]">
        {store.description}
      </p>

      {hasWhatsApp && (
        <>
          <div aria-hidden className="hidden w-px self-stretch bg-[var(--color-borde)] sm:block" />
          <div className="flex shrink-0 sm:items-center">
            <StoreWhatsAppButton storeName={store.name} whatsapp={store.whatsapp} />
          </div>
        </>
      )}
    </div>
  );
}