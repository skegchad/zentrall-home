export type Product = {
  id: number;
  name: string;
  store: string;
  price: number;
  rating: number;
  reviews: number;
  tint: string;
  category?: string;
  description?: string;
  image?: string;
};