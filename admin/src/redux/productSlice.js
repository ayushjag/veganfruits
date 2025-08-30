import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    addProductStart: (state) => {
      state.isLoading = true;
    },
    addProductSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    addProductFailure: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { addProductStart, addProductSuccess, addProductFailure } =
  productSlice.actions;

export default productSlice.reducer;
