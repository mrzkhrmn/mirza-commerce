import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice.js";

export function useAddToCart() {
  const dispatch = useDispatch();
  const addToCartHandler = (item, quantity = 1) => {
    dispatch(addToCart({ ...item, quantity }));
  };
  return addToCartHandler;
}
