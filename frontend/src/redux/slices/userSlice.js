import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const inCart = state.wishlist.find(
        (item) => item._id === action.payload._id
      );

      if (inCart) {
        state.wishlist = state.wishlist.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        state.wishlist = [...state.wishlist, action.payload];
      }
    },
  },
});

export const { addToWishlist } = userSlice.actions;

export default userSlice.reducer;
