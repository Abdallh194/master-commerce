import { createSlice } from "@reduxjs/toolkit";

export interface IProductsState {
  CartItem: {
    id: string;
    images: string;
    title: string;
    price: number;
    cat_prefix: string;
    Quantity: number;
    discount: string;
    category: string;
    max: number;
  }[];
  FavItem: {
    id: string;
    images: string;
    title: string;
    price: number;
    cat_prefix: string;
    Quantity: number;
    discount: string;
    max: number;
    category: string;
  }[];
  loading: "pending" | "succeeded" | "failed";
  error: string | null;

  confirmOrder: boolean;
}
const initialState: IProductsState = {
  CartItem: [],
  FavItem: [],
  loading: "pending",
  error: null,
  confirmOrder: false,
};
const productsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddItemToCard: (state, action) => {
      let isexist = false;
      state.CartItem.forEach((p) => {
        if (p.id == action.payload.id) {
          if (p.Quantity) {
            p.Quantity += 1;
          }
          isexist = true;
        }
      });
      if (!isexist) {
        state.CartItem.push(action.payload);
      }
    },
    IncreaseQty: (state, action) => {
      state.CartItem.forEach((p) => {
        if (p.id == action.payload) {
          p.Quantity += 1;
        }
      });
    },
    DecreaseQty: (state, action) => {
      state.CartItem.forEach((p) => {
        if (p.id == action.payload) {
          p.Quantity -= 1;
        }
      });
    },
    DeleteItemFromCard: (state, action) => {
      state.CartItem = state.CartItem.filter((e) => e.id !== action.payload);
    },
    DeleteItemFromWishlist: (state, action) => {
      state.FavItem = state.FavItem.filter((e) => e.id !== action.payload);
    },
    AddItemToFavList: (state, action) => {
      let isexist = false;
      state.FavItem.forEach((p) => {
        if (p.id == action.payload.id) {
          isexist = true;
        }
      });
      if (!isexist) {
        state.FavItem.push(action.payload);
      }
    },
    ConfirmOrderClearCartItem: (state) => {
      state.CartItem = [];
      state.confirmOrder = true;
    },
    ResetConfirmOrderFunctionality: (state) => {
      state.confirmOrder = false;
    },
  },
});

export const {
  AddItemToCard,
  DeleteItemFromCard,
  AddItemToFavList,
  ConfirmOrderClearCartItem,
  ResetConfirmOrderFunctionality,
  IncreaseQty,
  DecreaseQty,
  DeleteItemFromWishlist,
} = productsSlice.actions;
export default productsSlice.reducer;
