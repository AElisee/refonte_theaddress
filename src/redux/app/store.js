import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../feature/productSlice";
import cartSlice from "./../feature/CartSlice";

export default configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});
