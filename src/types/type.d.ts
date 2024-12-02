declare interface Product {
  id: string;
  images: string;
  title: string;
  price: number;
  cat_prefix: string;
  Quantity: number;
  max: number;
  discount: string;
  category: string;
}
declare interface ProductListProps {
  products: Product[];
  isfav: boolean;
}

declare interface ProductQty {
  Product: Product;
  setLoading: (...args: boolean[]) => void;
}
declare interface ProductId {
  id: string;
  setLoading: (...args: boolean[]) => void;
}
