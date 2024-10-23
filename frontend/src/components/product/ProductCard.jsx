import { useState } from "react";
import { Stars } from "../Stars";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

export const ProductCard = ({ discount }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="">
      <div className="w-[270px] h-[240px] bg-gray-100 relative  overflow-hidden group">
        <div
          className="h-full w-full absolute inset-0 "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></div>
        <img
          className=" object-contain"
          src="https://www.sunshineit.com.bd/wp-content/uploads/2020/11/Logitech-F710-Wireless-Gamepad.png"
          alt=""
        />
        <button
          className={`absolute bottom-0 left-0 w-full bg-black text-white text-center 
          transition-all duration-300 ease-in-out 
          ${isHovered ? "h-10 p-2 opacity-100" : "h-0 opacity-0"}
        `}
          style={{ pointerEvents: isHovered ? "auto" : "none" }}
        >
          Add To Cart
        </button>
        {discount && (
          <span className="absolute top-2 left-2 bg-primary-color px-2  py-1 text-sm text-white">
            -40%
          </span>
        )}
        <button className="absolute top-2 rounded-full right-2 bg-white text-xl px-2  py-1 text-black">
          <CiHeart />
        </button>
        <button className="absolute top-12 rounded-full right-2 bg-white text-xl px-2  py-1 text-black">
          <IoEyeOutline />
        </button>
      </div>
      <p className="mt-3">Havit HV-G92 Gamepad</p>
      <div className="flex  gap-3 my-2">
        <p className="text-primary-color">$120</p>
        <p className=" line-through opacity-50">$160</p>
      </div>
      <Stars rating={3.5} />
    </div>
  );
};
