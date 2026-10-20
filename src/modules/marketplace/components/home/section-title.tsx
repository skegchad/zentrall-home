import type { ReactNode } from "react";
import { serif } from "../../lib/constants";

type SectionTitleProps = {
  children: ReactNode;
  eyebrow?: string;
};

export function SectionTitle({ children, eyebrow }: SectionTitleProps) {
  return (
    <div className="mb-6 flex flex-col items-start text-left">
      {eyebrow && (
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-primario)]">
          {eyebrow}
        </span>
      )}
      <h1
        className={`${serif} m-0 mt-4 max-w-xl text-5xl font-[620] leading-[1.02] tracking-[-0.02em] text-[var(--color-texto)] sm:text-6xl`}
      >
        {children}
      </h1>
    </div>
  );
}