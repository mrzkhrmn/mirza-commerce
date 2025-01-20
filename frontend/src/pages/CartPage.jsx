import { useDispatch, useSelector } from "react-redux";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ProductCard } from "../components/product/ProductCard";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { reset } from "../redux/slices/cartSlice";

export const CartPage = ({ cartItems }) => {
  const { totalPrice } = useSelector((state) => state.cart);
  const notify = () => toast("Sale was completed successfully!");

  const dispatch = useDispatch();

  const handleBuy = () => {
    try {
      notify();
      dispatch(reset());
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="h-screen w-full">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        theme="light"
        transition={Bounce}
      />
      ;
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs />
        <table className="w-[1175px] mt-16 flex flex-col">
          <thead className="flex items-center justify-between  w-full text-xl border border-black py-2 px-32">
            <tr>Product</tr>
            <tr>Price</tr>
            <tr>Quantity</tr>
            <tr>Subtotal</tr>
          </thead>
          <tbody>
            {cartItems.length > 0 &&
              cartItems.map((product) => (
                <tr className="flex items-center border border-black/50 py-2 px-4 text-start">
                  <td
                    key={product._id}
                    className="flex items-center gap-2 w-1/4"
                  >
                    <span>{product.title}</span>
                    <img className="w-12" src={product.images[0]} alt="" />
                  </td>
                  <td
                    key={product._id}
                    className="flex items-center justify-center  w-1/4"
                  >
                    {product.price}$
                  </td>
                  <td
                    key={product._id}
                    className="flex items-center justify-center   w-1/4"
                  >
                    {product.quantity}
                  </td>
                  <td
                    key={product._id}
                    className="flex items-center justify-center   w-1/4"
                  >
                    {product.price * product.quantity}$
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="justify-end items-center flex mt-10">
          <div className=" border border-black px-4 py-4 flex flex-col gap-8">
            <p className="font-semibold text-xl">Cart Total:</p>
            <div className="flex items-center justify-between gap-64 border-black border-b">
              <p>Subtotal:</p>
              <p>{totalPrice}$</p>
            </div>
            <div className="flex items-center justify-between gap-64 border-black border-b">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex items-center justify-between gap-64">
              <p>Total</p>
              <p>{totalPrice}$</p>
            </div>

            <button
              onClick={handleBuy}
              className="bg-primary-color text-white py-2 rounded-lg"
            >
              Process to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
