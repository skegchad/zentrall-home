import { listMarketplaceBusinesses } from "@/core/marketplace/catalog.service";
import { mapToProduct, mapToStore } from "@/modules/marketplace/data/prisma-mappers";
import { MarketplaceHomePage } from "@/modules/marketplace/pages/home-page";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const storefrontBusinesses = await listMarketplaceBusinesses();
  const visibleBusinesses = storefrontBusinesses.slice(0, 20);
  const businessCount = storefrontBusinesses.length;

  const initialStores = visibleBusinesses.map((business) =>
    mapToStore({ ...business, products: business.products.slice(0, 6), reviews: business.storeReviews }),
  );
  const initialProducts = visibleBusinesses.flatMap((business) =>
    business.products
      .slice(0, 6)
      .map((product) =>
        mapToProduct(product, {
          name: business.name,
          slug: business.slug,
          category: business.category,
          zone: business.zone,
          marketplaceTags: business.marketplaceTags,
          reviews: business.storeReviews,
        }),
      ),
  );

  return (
    <MarketplaceHomePage
      initialStores={initialStores}
      initialProducts={initialProducts}
      businessCount={businessCount}
    />
  );
}
