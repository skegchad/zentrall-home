export type StoreNavLink = { label: string; href: string };

export function getStoreLinks(slug: string): StoreNavLink[] {
  const base = `/tiendas/${slug}`;

  return [
    { label: "Inicio", href: base },
    { label: "Tienda", href: `${base}/tienda` },
    { label: "Conócenos", href: `${base}/conocenos` },
  ];
}