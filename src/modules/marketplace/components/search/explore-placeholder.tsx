/** Degradado de respaldo sin imagen (usa --ph-l1 / --ph-l2 de tu tema). */
export function ExplorePlaceholder() {
  return (
    <div
      aria-hidden
      className="h-full w-full"
      style={{
        background:
          "linear-gradient(135deg, hsl(255 40% var(--ph-l1)), hsl(190 40% var(--ph-l2)))",
      }}
    />
  );
}