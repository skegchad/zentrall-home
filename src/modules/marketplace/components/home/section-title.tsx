import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-3">
      <Sparkles size={12} className="text-[var(--color-primario)]" />
      <h2 className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-texto)]">
        {children}
      </h2>
      <Sparkles size={12} className="text-[var(--color-primario)]" />
    </div>
  );
}