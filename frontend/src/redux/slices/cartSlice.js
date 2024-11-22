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

      const itemExists = state.cartItems.find((i) => item._id === i._id);

      if (itemExists) {
        state.cartItems = state.cartItems.filter(
          (i) => itemExists._id !== i._id
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
