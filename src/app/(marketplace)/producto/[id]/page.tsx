
import { notFound } from "next/navigation";
import { catalogProducts } from "../../../../modules/marketplace/data/catalog-data";
import { ProductDetail } from "../../../../modules/marketplace/components/product-detail";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = catalogProducts.find(
    (item) => item.uuid === id
  );

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
