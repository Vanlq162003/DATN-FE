import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../features/user/product/product.slice";
import { productApi } from "../features/user/product/product.service";
import { categoryApi } from "../features/user/category/category.service";
import { categoryReducer } from "../features/user/category/category.slice";
import { cartApi } from "../features/user/cart/cart.service";
export const store = configureStore({
  reducer: {
    product: productReducer,
    [productApi.reducerPath]: productApi.reducer,
    category: categoryReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    cart: productReducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(categoryApi.middleware)
      .concat(cartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
