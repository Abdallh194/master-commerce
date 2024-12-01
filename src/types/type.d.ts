declare interface Product {
  id: string;
  images: string;
  title: string;
  price: number;
  cat_prefix: string;
  Quantity: number;
  max: number;
  discount: string;
}
declare interface ProductListProps {
  products: Product[];
}
