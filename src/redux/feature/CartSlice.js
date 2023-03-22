import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    updateQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[productIndex].quantity = action.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
