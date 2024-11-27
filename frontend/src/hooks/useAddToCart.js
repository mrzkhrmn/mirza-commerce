import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice.js";

export function useAddToCart() {
  const dispatch = useDispatch();
  const addToCartHandler = (item, quantity = 1, size = "unique") => {
    const { attributes, ratings, ...rest } = item;
    dispatch(addToCart({ ...rest, quantity, size }));
  };
  return addToCartHandler;
}
