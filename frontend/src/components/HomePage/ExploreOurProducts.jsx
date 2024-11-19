import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { ProductCard } from "../product/ProductCard";
import { useGetExploreProductsQuery } from "../../redux/api/productApiSlice";

export const ExploreOurProducts = () => {
  const { data: exploreProducts } = useGetExploreProductsQuery();
  return (
    exploreProducts && (
      <div className="w-full mt-20">
        <div className="flex items-end justify-between">
          <div>
            {" "}
            <div className="flex items-center gap-2">
              <div className="bg-primary-color w-6 h-10 rounded-lg"></div>
              <h3 className="text-sm  font-bold text-primary-color">
                Our Products
              </h3>
            </div>
            <h1 className="text-4xl mt-4">Explore Our Products</h1>
          </div>
          <div className="flex items-end gap-2 text-black">
            <button className="text-xl bg-gray-200 hover:bg-gray-300 transition duration-200 p-2 rounded-full">
              <FaArrowLeftLong />
            </button>
            <button className="text-xl bg-gray-200 hover:bg-gray-300 transition duration-200 p-2 rounded-full">
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="mt-5 flex justify-between items-center flex-wrap gap-8">
          {exploreProducts.map((product) => (
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
