import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../feature/PicturesSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
  },
});
