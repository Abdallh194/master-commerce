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
declare interface NewUser {
  NewUser: {
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    Password: string;
    Address: string;
  };
  setOpen_Update_Form?: (value: boolean) => void;
  Confirm_Update_Form?: boolean;
}
declare interface ProductQty {
  Product: Product;
  setLoading: (...args: boolean[]) => void;
}
declare interface ProductId {
  id: string;
  setLoading: (...args: boolean[]) => void;
}

declare interface SetOpen {
  setOpen_Update_Form: (value: boolean) => void;
  setConfirm_Update_Form: (value: boolean) => void;
}
