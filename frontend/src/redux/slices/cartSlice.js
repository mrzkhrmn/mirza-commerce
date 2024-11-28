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

      // Ürün ID'si ve boyutuna göre kontrol
      const itemExists = state.cartItems.find(
        (i) => i._id === item._id && i.size === item.size
      );

      if (itemExists) {
        state.cartItems = state.cartItems.filter(
          (i) => !(i._id === item._id && i.size === item.size)
        );
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
