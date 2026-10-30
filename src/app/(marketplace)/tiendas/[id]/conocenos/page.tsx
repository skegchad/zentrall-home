import { notFound } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { AFFILIATED_STORES } from "../../../../../modules/marketplace/data/stores-data";
import { catalogStores } from "../../../../../modules/marketplace/data/catalog-data";
import { placeholderGradient } from "../../../../../modules/marketplace/lib/stores-utils";
import { getStoreLinks } from "../../../../../modules/marketplace/lib/stores-links";
import { Reveal, SmoothScroll } from "../../../../../modules/marketplace/components/home";
import { Header } from "../../../../../modules/marketplace/components/store-page/header";
import { StoreLogoTile } from "../../../../../modules/marketplace/components/stores/store-logo-tile";

const MONO = "var(--font-mono, ui-monospace, monospace)";
const DISPLAY = "var(--font-display, 'Arvo', Georgia, serif)";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return AFFILIATED_STORES.map((s) => ({ id: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const store = AFFILIATED_STORES.find((s) => s.slug === id);
  return {
    title: store ? `Conócenos | ${store.name} | Zentrall` : "Tienda no encontrada",
  };
}

export default async function ConocenosPage({ params }: Props) {
  const { id } = await params;
  const store = AFFILIATED_STORES.find((s) => s.slug === id);

  if (!store) notFound();

  const catalog = catalogStores.find((s) => s.slug === store.slug);
  const waNumber = (catalog?.whatsapp ?? "").replace(/\D/g, "");
  const activity =
    catalog?.category ?? (store as { category?: string }).category ?? "";

  const waText = `Hola ${store.name}, quisiera más información.`;

  return (
    <div className="zentrall-home min-h-screen bg-[var(--color-fondo)] text-[var(--color-texto)]">
      <SmoothScroll />
      <Header
        store={store}
        links={getStoreLinks(store.slug)}
        activeLabel="Conócenos"
        backHref={`/tiendas/${store.slug}`}
        backLabel="Volver"
      />

      <main className="pb-24">
        <Reveal>
          <section aria-labelledby="aboutus-title">
            {/* Banner: mismo estilo que el de inicio */}
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
                    id="aboutus-title"
                    className="text-center text-4xl font-bold text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] sm:text-5xl"
                    style={{ fontFamily: DISPLAY }}
                  >
                    Conócenos
                  </h1>
                </div>
              </div>

              {/* Logo tipo sticker, centrado y saliéndose del banner */}
              <div className="absolute inset-x-0 bottom-0 flex justify-center">
                <div className="aspect-square w-28 translate-y-1/2 overflow-hidden rounded-full border-2 border-[var(--tienda-acento,var(--color-primario))] bg-[var(--color-tarjeta)] shadow-lg sm:w-32">
                  <StoreLogoTile
                    store={store}
                    className="h-full w-full !rounded-none !border-0"
                  />
                </div>
              </div>
            </div>

            {/* Contenido centrado */}
            <div className="mx-auto flex w-full max-w-[760px] flex-col items-center px-4 pt-20 text-center sm:px-6 sm:pt-24">
              {activity && (
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-precio)]"
                  style={{ fontFamily: MONO }}
                >
                  Acerca de
                </p>
              )}

              <h2
                className={`${activity ? "mt-1" : ""} text-2xl font-bold tracking-tight text-[var(--color-texto)] sm:text-3xl`}
                style={{ fontFamily: DISPLAY }}
              >
                {store.name}
              </h2>

              <div
                aria-hidden
                className="mt-4 h-[6px] w-full max-w-[220px]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, var(--color-descuento) 0 4px, var(--color-borde) 4px 8px)",
                }}
              />

              {store.description && (
                <p className="mt-6 max-w-[62ch] text-base leading-8 text-[var(--color-texto-suave)] sm:text-lg">
                  {store.description}
                </p>
              )}

              {activity && (
                <div className="mt-6 flex flex-col items-center gap-1">
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-precio)]"
                    style={{ fontFamily: MONO }}
                  >
                    Actividad:
                  </p>
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-precio)]"
                    style={{ fontFamily: MONO }}
                  >
                    {activity}
                  </p>
                </div>
              )}

              {waNumber && (
                <a
                  href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-[var(--tienda-whatsapp)] py-2.5 pl-2.5 pr-6 text-sm font-semibold text-[var(--tienda-sobre-whatsapp)] shadow-[var(--sombra-suave)] transition hover:-translate-y-0.5 hover:shadow-[var(--sombra-media)] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primario)]"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[var(--tienda-whatsapp)]">
                    <FaWhatsapp className="h-5 w-5" aria-hidden />
                  </span>
                  Conversar por WhatsApp
                  <span aria-hidden>→</span>
                </a>
              )}
            </div>
          </section>
        </Reveal>
      </main>
    </div>
  );
} 