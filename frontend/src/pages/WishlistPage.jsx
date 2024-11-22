import { ProductCard } from "../components/product/ProductCard";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { useGetRelatedProductsQuery } from "../redux/api/productApiSlice";

export const WishlistPage = ({ wishlist }) => {
  const uniqueCategories = [...new Set(wishlist.map((item) => item.category))]; // yeni bir category arrayi oluturma wishlistten aldigimiz

  const { data: relatedProducts, isLoading } = useGetRelatedProductsQuery(
    uniqueCategories,
    { skip: uniqueCategories.length === 0 }
  ); // Eğer kategori yoksa API çağrısını atla

  return (
    <div className="h-screen w-full">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs />
        <div className="flex items-center justify-between mt-20">
          <h2 className="text-2xl font-light">Wishlist ({wishlist.length})</h2>
          <button className="text-lg border border-black/80 font-light px-10 py-3">
            Move All To Bag
          </button>
        </div>
        {wishlist.length <= 0 ? (
          <h1 className="mt-10 text-2xl">Wishlist is empty right now..!</h1>
        ) : (
          <div className="grid grid-cols-4 mt-10 gap-y-10 mx-auto">
            {wishlist.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

        {!isLoading && (
          <div className="w-full mt-20">
            <div className="flex items-end justify-between">
              <div>
                {" "}
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-primary-color w-6 h-10 rounded-lg"></div>
                  <h3 className="text-xl  text-primary-color">Related Item</h3>
                </div>
                <div className="grid grid-cols-4 gap-6 mb-20">
                  {uniqueCategories.length > 0 &&
                    relatedProducts.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
