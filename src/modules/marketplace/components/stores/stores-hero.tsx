import Image from "next/image";

export function StoresHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-36 md:px-10 md:pt-40 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-between">
          <h1
            className="max-w-[16ch] text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em]"
            style={{
              color: "var(--color-texto)",
              fontFamily: "var(--font-display, 'Arvo', Georgia, serif)",
            }}
          >
            Las tiendas de la ciudad, en movimiento
          </h1>

          <div className="flex w-full flex-col gap-6 lg:max-w-[400px]">
            {/* Imagen: en escritorio ocupa el alto sobrante sobre el párrafo */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] border border-[var(--color-borde)] bg-[var(--color-tarjeta)] lg:aspect-auto lg:min-h-0 lg:flex-1">
              <Image
                src="/images/tiendas-hero.jpg"
                alt="Negocios afiliados a Zentrall"
                fill
                priority
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover"
              />
            </div>

            <p
              className="pb-2 text-base leading-relaxed"
              style={{
                color: "var(--color-texto-suave)",
                fontFamily: "var(--font-body, 'Space Grotesk', system-ui, sans-serif)",
              }}
            >
              Conoce a los negocios afiliados a Zentrall. Mira sus productos,
              entra a su tienda o escríbeles directo por WhatsApp.
            </p>
          </div>
        </div>

        {/* Línea decorativa rayada */}
        <div
          aria-hidden
          className="mt-10 h-[6px] w-full max-w-[580px]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, var(--color-descuento) 0 4px, var(--color-borde) 4px 8px)",
          }}
        />
      </div>
    </section>
  );
}