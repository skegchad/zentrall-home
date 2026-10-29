import { notFound } from "next/navigation";
import { AFFILIATED_STORES } from "../../../../modules/marketplace/data/stores-data";
import { StoreProfile } from "../../../../modules/marketplace/components/store-page/store-profile";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return AFFILIATED_STORES.map((s) => ({ id: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const store = AFFILIATED_STORES.find((s) => s.slug === id);
  return { title: store ? `${store.name} | Zentrall` : "Tienda no encontrada" };
}

export default async function TiendaPage({ params }: Props) {
  const { id } = await params;
  const store = AFFILIATED_STORES.find((s) => s.slug === id);

  if (!store) notFound();

  return <StoreProfile store={store} />;
}