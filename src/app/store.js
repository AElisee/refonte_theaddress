import { configureStore } from "@reduxjs/toolkit";
import PictureReducer from "./../feacture/PicturesSlice";

export default configureStore({
  reducer: PictureReducer,
});
