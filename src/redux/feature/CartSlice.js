import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
    updateQuantity: (state, action) => {
      const productIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[productIndex].quantity = action.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
