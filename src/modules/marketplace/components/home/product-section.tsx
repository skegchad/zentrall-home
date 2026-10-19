import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { wrap } from "../../lib/constants";
import type { Product } from "../../types";
import { ProductCard } from "./product-card";

type ProductSectionProps = {
  title: string;
  products: Product[];
  isNew?: boolean;
  onAdd: () => void;
};

export function ProductSection({
  title,
  products,
  isNew,
  onAdd,
}: ProductSectionProps) {
  return (
    <section className={`${wrap} pt-12`}>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-texto)]">
          {title}
        </h2>
        <Link
          href="/explorar"
          className="flex items-center gap-1 text-[11px] font-semibold text-[var(--color-texto)] transition hover:text-[var(--color-primario)]"
        >
          Ver todos <ChevronRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isNew={isNew}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  );
}