import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import PictureReducer from "./../feature/PicturesSlice";
import CartReducer from "./../feature/CartSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["pictures", "products"], // ajoutez le nom de votre partie de store ici
};

const rootReducer = combineReducers({
  pictures: PictureReducer,
  products: CartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
