import type { AffiliatedStore } from "../../data/stores-data";
import { placeholderGradient } from "../../lib/stores-utils";
import { StoreLogoTile } from "../stores/store-logo-tile";
import { DISPLAY } from "./store-profile-constants";

type Props = { store: AffiliatedStore; title: string; titleId?: string };

export function StoreSubBanner({ store, title, titleId }: Props) {
  return (
    <div className="relative">
      <div className="relative h-[280px] w-full overflow-hidden sm:h-[340px] md:h-[400px]">
        {store.background ? (
          // eslint-disable-next-line @next/next/no-img-element
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

        <div className="absolute inset-0 flex items-center justify-center px-4 pt-16">
          <h1
            id={titleId}
            className="text-center text-4xl font-bold text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] sm:text-5xl"
            style={{ fontFamily: DISPLAY }}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}