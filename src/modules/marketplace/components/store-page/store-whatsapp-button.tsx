import { FaWhatsapp } from "react-icons/fa";

type Props = { storeName: string; whatsapp?: string | null };

export function StoreWhatsAppButton({ storeName, whatsapp }: Props) {
  const phone = (whatsapp ?? "").replace(/\D/g, "");
  if (!phone) return null;

  const message = encodeURIComponent(
    `Hola ${storeName}, vi su tienda en Zentrall y quisiera más información.`,
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[var(--radio)] px-6 text-sm font-bold transition hover:-translate-y-0.5"
      style={{
        background: "var(--tienda-whatsapp)",
        color: "var(--tienda-sobre-acento)",
      }}
    >
      <FaWhatsapp size={17} aria-hidden />
      Escribir por WhatsApp
    </a>
  );
}
