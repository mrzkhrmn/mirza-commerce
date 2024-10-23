import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { ProductCard } from "../product/ProductCard";

export const FeaturedProducts = () => {
  return (
    <div className="w-full mt-20">
      <div className="flex items-end justify-between">
        <div>
          {" "}
          <div className="flex items-center gap-2">
            <div className="bg-primary-color w-6 h-10 rounded-lg"></div>
            <h3 className="text-sm  font-bold text-primary-color">Featured</h3>
          </div>
          <h1 className="text-4xl mt-4">New Arrivals</h1>
        </div>
      </div>
      <div className="flex gap-6 mt-6">
        <div className="w-[570px] h-[600px] bg-black relative">
          <div className="absolute left-6 bottom-6 w-[50%] text-white">
            <p className="font-semibold text-3xl">Playstation 5</p>
            <p className="mt-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="text-xl mt-2">Shop Now</button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-[570px] h-[285px] relative bg-black">
            <div className="absolute left-6 bottom-6 w-[50%] text-white">
              <p className="font-semibold text-3xl">Womens Collections</p>
              <p className="mt-2">
                Featured women collections that give you another vibe.
              </p>
              <button className="text-xl mt-2">Shop Now</button>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-6">
              <div className="w-[270px] h-[285px] relative bg-black">
                <div className="absolute left-6 bottom-6 w-[50%] text-white">
                  <p className="font-semibold text-3xl">Speakers</p>
                  <p className="mt-2">Amazon Wireless Speakers.</p>
                  <button className="text-xl mt-2">Shop Now</button>
                </div>
              </div>
              <div className="w-[270px] h-[285px] relative bg-black">
                <div className="absolute left-6 bottom-6 w-[50%] text-white">
                  <p className="font-semibold text-3xl">Perfume</p>
                  <p className="mt-2">GUCCI INTENSE.</p>
                  <button className="text-xl mt-2">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-10">
        <button className="bg-primary-color hover:bg-secondary-color transition duration-200 text-white py-3 px-8 rounded-md hover">
          View All Products
        </button>
      </div>
    </div>
  );
};
