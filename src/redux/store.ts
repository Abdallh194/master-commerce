import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./user/LoginSlice";
import productsSlice from "./Cart/CartSlice";
// ...

export const store = configureStore({
  reducer: {
    user: loginSlice,
    cart: productsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
