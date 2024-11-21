import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/slices/userSlice";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

export const WishlistButton = ({ productToWish, style, size }) => {
  const { wishlist } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const inWishlist = wishlist.find((item) => item._id === productToWish._id);

  return (
    <button
      onClick={() => dispatch(addToWishlist(productToWish))}
      className={style}
    >
      {inWishlist ? (
        <IoMdHeart size={size} color="red" />
      ) : (
        <CiHeart size={size} />
      )}
    </button>
  );
};
