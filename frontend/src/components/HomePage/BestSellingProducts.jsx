import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { ProductCard } from "../product/ProductCard";

export const BestSellingProducts = () => {
  return (
    <div className="w-full mt-20">
      <div className="flex items-end justify-between">
        <div>
          {" "}
          <div className="flex items-center gap-2">
            <div className="bg-primary-color w-6 h-10 rounded-lg"></div>
            <h3 className="text-sm  font-bold text-primary-color">
              This Month
            </h3>
          </div>
          <h1 className="text-4xl mt-4">Best Selling Products</h1>
        </div>
        <div className="flex items-end gap-2 text-black">
          <button className="px-6 py-3 bg-primary-color hover:bg-secondary-color rounded-md text-white">
            View All
          </button>
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <ProductCard discount={false} />
        <ProductCard discount={false} />
        <ProductCard discount={false} />
        <ProductCard discount={false} />
      </div>
      <div className="flex items-center justify-center my-10">
        <button className="bg-primary-color hover:bg-secondary-color transition duration-200 text-white py-3 px-8 rounded-md hover">
          View All Products
        </button>
      </div>
    </div>
  );
};
