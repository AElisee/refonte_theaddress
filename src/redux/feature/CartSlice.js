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

const initialState = {
  carts: fetchFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action) => {
    //   state.cart.push(action.payload);
    // },
    addToCart: (state, action) => {
      const isItemInCart = state.carts.find(
        (item) => item.id === action.payload.id
      );

      if (isItemInCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            // let tempTotalPrice = tempQty * item.price;

            return {
              ...item,
              quantity: tempQty,
              // totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });

        state.cart = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter(
        (product) => product.id !== action.payload.id
      );
    },
    updateQuantity: (state, action) => {
      const productIndex = state.carts.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[productIndex].quantity = action.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export const getAllCarts = (state) => state.cart.carts;
export default cartSlice.reducer;
