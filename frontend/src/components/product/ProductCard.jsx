import { useCallback, useState } from "react";
import { Stars } from "../Stars";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

export const ProductCard = ({ product }) => {
  const { title, price, images, discountPercentage, ratings } = product;
  const discountedPrice = Number(
    price - (price * discountPercentage) / 100
  ).toFixed(2);
  const [isHovered, setIsHovered] = useState(false);
  const rating = ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length;

  console.log("Discounted price: " + discountedPrice);
  console.log("Price: " + price);

  return (
    <div className="">
      <div className="w-[270px] h-[240px] bg-gray-100 relative  overflow-hidden group">
        <div className="relative group w-full h-full">
          <img
            class="object-contain w-full h-full -z-10"
            src={"https://www.renderhub.com/dennycg/gamepad1/gamepad1-03.jpg"}
            alt="Product Image"
          />
          <button
            className="absolute bottom-0 left-0 w-full bg-black text-white text-center 
            transition-all duration-300 ease-in-out h-0 opacity-0 pointer-events-none 
            group-hover:h-10 group-hover:opacity-100 group-hover:pointer-events-auto z-50"
          >
            Add To Cart
          </button>
        </div>
        {discountPercentage > 0 && (
          <span className="absolute top-2 left-2 bg-primary-color px-2  py-1 text-sm text-white">
            -{discountPercentage}%
          </span>
        )}
        <button className="absolute top-2 rounded-full right-2 bg-white text-xl px-2  py-1 text-black">
          <CiHeart />
        </button>
        <button className="absolute top-12 rounded-full right-2 bg-white text-xl px-2  py-1 text-black">
          <IoEyeOutline />
        </button>
      </div>
      <p className="mt-3">{title}</p>
      <div className="flex  gap-3 my-2">
        {discountPercentage <= 0 && <p className="">${price}</p>}
        {discountPercentage > 0 && (
          <>
            <p className="text-primary-color">${discountedPrice}</p>
            <p className=" line-through opacity-50">${price}</p>
          </>
        )}
      </div>
      <Stars rating={rating} />
    </div>
  );
};
