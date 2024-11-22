import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.cartItems = [...state.cartItems, item];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
