import { benefits } from "../../data/home-data";
import { wrap } from "../../lib/constants";
import { FiIcon } from "../fi-icon";

export function BenefitsStrip() {
  return (
    <section className={`${wrap} pt-12`}>
      <div className="grid grid-cols-2 gap-5 rounded-2xl bg-[var(--color-activo-fondo)] px-6 py-6 md:grid-cols-4">
        {benefits.map(({ icon: icon, title, detail }) => (
          <div key={title} className="flex items-center gap-3">
            <FiIcon name={icon} size={26} className="shrink-0 text-[var(--color-texto)]" />
            <div>
              <p className="text-xs font-bold text-[var(--color-texto)]">
                {title}
              </p>
              <p className="text-[10px] text-[var(--color-texto-suave)]">
                {detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}