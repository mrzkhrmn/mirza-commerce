import { Stars } from "../components/Stars";
import { TbTruckDelivery } from "react-icons/tb";
import { GiRecycle } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../redux/api/productApiSlice";
import { useEffect, useState } from "react";
import { WishlistButton } from "../components/WishlistButton";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { useSelector } from "react-redux";
import { useAddToCart } from "../hooks/useAddToCart.js";

export const ProductDetails = () => {
  const { id } = useParams();
  const { data: product } = useGetProductQuery(id);
  const [selectedImage, setSelectedImage] = useState("");
  const [rating, setRating] = useState(0);

  const { cartItems } = useSelector((state) => state.cart);

  const addToCart = useAddToCart();

  useEffect(() => {
    if (product?.images.length > 0) {
      setSelectedImage(product?.images[0]);
      let sumRatings = product.ratings.reduce((acc, curr) => acc + curr, 0);
      setRating(sumRatings / product.ratings.length);
    }
  }, [product]);

  console.log(rating);

  const itemExists = cartItems.find((i) => i._id === product?._id);
  return (
    product && (
      <div className="w-full h-screen">
        <div className="max-w-7xl mx-auto py-10">
          <Breadcrumbs />
          <div className="flex justify-center gap-6 mt-20 h-[648px]">
            <div className="flex flex-col gap-2 items-center justify-between h-full">
              {product.images.map((image, index) => (
                <img
                  onClick={() => setSelectedImage(image)}
                  key={index}
                  className="object-contain w-44 h-32 bg-gray-200"
                  src={image}
                  alt=""
                />
              ))}
            </div>
            <div className="w-[500px] h-full flex items-center  bg-gray-200">
              <img className=" object-contain" src={selectedImage} alt="" />
            </div>
            <div className="max-w-[400px]">
              <h1 className="font-bold text-2xl">{product.title}</h1>
              <div className="flex items-center gap-2 mt-2">
                <Stars rating={rating} />
                <p className=" text-gray-500 text-sm">
                  ({product.ratings.length} reviews)
                </p>
                <p>
                  |{" "}
                  {product.stock > 0 || product.attributes.sizes.length > 0 ? (
                    <span className="text-green-500">In Stock</span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </p>
              </div>
              <p className="text-2xl font-light mt-2 mb-4">${product.price}</p>
              <p>{product.description}</p>
              <div className="w-full bg-black/50 h-[2px] my-4"></div>
              {product.attributes.colours.length > 0 && (
                <div className="flex items-center gap-8">
                  <p className="text-xl font-light">Colours:</p>
                  <div className="flex items-center gap-2">
                    {product.attributes.colours.map((color, index) => (
                      <div
                        key={index}
                        className={`w-5 h-5 rounded-full ${
                          color === "black" || color === "white"
                            ? `bg-${color}`
                            : color === "blue"
                            ? `bg-${color}-200`
                            : `bg-${color}-500`
                        } border border-black`}
                      ></div>
                    ))}
                  </div>
                </div>
              )}
              {product.attributes.sizes.length > 0 && (
                <div className="flex items-center gap-8 my-5">
                  <p className="text-xl font-light">Size:</p>
                  <div className="flex items-center gap-4">
                    {product.attributes.sizes.map(({ size, stock }, index) => (
                      <button
                        disabled={stock <= 0}
                        key={index}
                        className="py-1 px-2 border border-black hover:bg-primary-color hover:text-white transition duration-200 disabled:opacity-30 disabled:pointer-events-none"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xl">
                  <button className="border border-black px-4 py-1 hover:bg-primary-color hover:text-white transition duration-200">
                    -
                  </button>
                  <span className="border-t border-b border-black px-8 py-1">
                    2
                  </span>
                  <button className="border border-black px-4 py-1 hover:bg-primary-color hover:text-white transition duration-200">
                    +
                  </button>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  disabled={
                    product.attributes.sizes.length === 0 && product.stock === 0
                  }
                  className="rounded-lg border border-black hover:border-primary-color px-8 py-1 text-lg font-light bg-primary-color hover:bg-secondary-color text-white transition duration-200 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {itemExists ? "Remove from cart" : "Add to cart"}
                </button>
                <WishlistButton
                  size={24}
                  productToWish={product}
                  style={
                    "rounded-lg hover:border-primary-color border border-black px-2 py-2 hover:bg-primary-color hover:text-white transition duration-200"
                  }
                />
              </div>
              <div className="mt-10 border border-black">
                <div className="flex items-center ">
                  <div className="py-6 px-4">
                    <TbTruckDelivery size={45} />
                  </div>
                  <div>
                    <p className="text-lg">Free Delivery</p>
                    <p className="text-sm underline cursor-pointer">
                      Enter your postal code for delivery availability
                    </p>
                  </div>
                </div>
                <div className="flex items-center border-t border-black">
                  <div className="py-6 px-4">
                    <GiRecycle size={45} />
                  </div>
                  <div>
                    <p className="text-lg">Return Delivery</p>
                    <p className="text-sm ">
                      Free 30 days delivery returns.{" "}
                      <span className="underline cursor-pointer">Details</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
