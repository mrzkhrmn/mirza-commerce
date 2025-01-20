import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "./utils/cartUtils";
const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      // Ürün ID'si ve boyutuna göre kontrol
      const itemExists = state.cartItems.find(
        (i) => i._id === item._id && i.size === item.size
      );

      if (itemExists) {
        state.cartItems = state.cartItems.filter(
          (i) => !(i._id === item._id && i.size === item.size)
        );
      } else {
        state.cartItems.push({ ...item });
      }
      return updateCart(state);
    },

    reset: () => initialState,
  },
});

export const { addToCart, reset } = cartSlice.actions;

export default cartSlice.reducer;
