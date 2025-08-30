import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (productIndex >= 0) {
        state.products[productIndex].quantity += 1;
        state.total += action.payload.price * action.payload.quantity;
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload._id
      );
      product.quantity++;
      state.total += action.payload.price;
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (product.quantity === 1) {
        product.quantity = 1;
      } else {
        product.quantity--;
        state.total -= action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      state.quantity -= 1;
      const removeItem = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.products = removeItem;
      state.total -= action.payload.price * action.payload.quantity;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
