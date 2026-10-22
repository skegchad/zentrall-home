import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ExploreProduct } from "../../data/explore-data";
import { ExploreProductCard } from "./explore-product-card";

const DISPLAY = "var(--font-display, 'Fraunces', Georgia, serif)";
const MONO = "var(--font-mono, ui-monospace, monospace)";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  products: ExploreProduct[];
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
};

const actionCls =
  "inline-flex items-center gap-1.5 rounded-[10px] bg-[var(--color-primario)] px-4 py-2.5 text-xs font-bold text-[var(--color-sobre-primario)] transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primario)]";

export function ExploreProductSection({
  eyebrow,
  title,
  description,
  products,
  actionLabel,
  actionHref,
  onAction,
}: Props) {
  if (products.length === 0) return null;
  return (
    <section className="mt-12">
      <div className="mb-5 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p
            className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-precio)]"
            style={{ fontFamily: MONO }}
          >
            {eyebrow}
          </p>
          <h2
            className="mb-1 text-[clamp(1.5rem,2.8vw,2rem)] font-bold leading-tight tracking-tight text-[var(--color-texto)]"
            style={{ fontFamily: DISPLAY }}
          >
            {title}
          </h2>
          <p className="max-w-[60ch] text-sm text-[var(--color-texto-suave)]">{description}</p>
        </div>
        {actionLabel &&
          (actionHref ? (
            <Link href={actionHref} className={actionCls}>
              {actionLabel} <ArrowRight size={14} aria-hidden />
            </Link>
          ) : (
            <button type="button" onClick={onAction} className={actionCls}>
              {actionLabel} <ArrowRight size={14} aria-hidden />
            </button>
          ))}
      </div>

      <div className="-mx-4 flex snap-x snap-proximity gap-4 overflow-x-auto px-4 pb-5 pt-1 [scrollbar-width:thin] sm:-mx-6 sm:px-6">
        {products.map((p) => (
          <ExploreProductCard key={p.id} product={p} className="w-[220px] shrink-0 snap-start" />
        ))}
      </div>
    </section>
  );
}