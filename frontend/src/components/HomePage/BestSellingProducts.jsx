import { useGetBestSellingProductsQuery } from "../../redux/api/productApiSlice";
import { ProductCard } from "../product/ProductCard";

export const BestSellingProducts = () => {
  const { data: bestSellingProducts, isLoading } =
    useGetBestSellingProductsQuery();

  console.log(bestSellingProducts);

  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    bestSellingProducts && (
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
          {bestSellingProducts.map((product) => (
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
