import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { ProductCard } from "../product/ProductCard";
import { useEffect, useRef, useState } from "react";
import CountdownTimer from "../CountdownTimer";
import { useGetFlashSalesProductsQuery } from "../../redux/api/productApiSlice";

export const FlashSales = () => {
  const { data: flashSaleProducts } = useGetFlashSalesProductsQuery();

  const ref = useRef();

  function handleScroll(offset, direction) {
    if (ref.current && direction === "right") {
      ref.current.scrollLeft += offset;
    } else if (ref.current && direction === "left") {
      ref.current.scrollLeft -= offset;
    }
  }

  return (
    flashSaleProducts && (
      <div className="w-full mt-20">
        <div className="flex items-end justify-between">
          <div>
            {" "}
            <div className="flex items-center gap-2">
              <div className="bg-primary-color w-6 h-10 rounded-lg"></div>
              <h3 className="text-sm  font-bold text-primary-color">
                Today&apos;s
              </h3>
            </div>
            <div className="flex items-end gap-8">
              <h1 className="text-4xl">Flash Sales</h1>
              <CountdownTimer targetDate={"2025-01-30T12:00:00"} />
            </div>
          </div>
          <div className="flex items-end gap-2 text-black">
            <button
              className="text-xl bg-gray-200 hover:bg-gray-300 transition duration-200 p-2 rounded-full"
              onClick={() => handleScroll(80, "left")}
            >
              <FaArrowLeftLong />
            </button>
            <button
              className="text-xl bg-gray-200 hover:bg-gray-300 transition duration-200 p-2 rounded-full"
              onClick={() => handleScroll(80, "right")}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="mt-5 flex gap-6 overflow-x-auto" ref={ref}>
          {flashSaleProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="flex items-center justify-center my-10">
          <button className="bg-primary-color hover:bg-secondary-color transition duration-200 text-white py-3 px-8 rounded-md hover">
            View All Products
          </button>
        </div>
      </div>
    )
  );
};
