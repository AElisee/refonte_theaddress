import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../feature/productSlice";

export default configureStore({
  reducer: {
    products: productSlice,
  },
});
