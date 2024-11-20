import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
  },
});

export const { addToWishlist } = userSlice.actions;

export default userSlice.reducer;
