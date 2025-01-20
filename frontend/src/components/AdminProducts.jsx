import { useGetAllProductsQuery } from "../redux/api/productApiSlice";

export const AdminProducts = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();
  return (
    <div>
      <h1 className="text-3xl font-semibold border-b border-black text-primary-color">
        Products
      </h1>
      <div>
        <h2 className="text-2xl mt-4 text-primary-color">Create Product</h2>
        <form action="" className="mt-4">
          <div className="flex items-center flex-wrap gap-10">
            <input
              className="w-[300px] bg-gray-100 border border-gray-400 py-2 px-3 rounded-lg"
              type="text"
              name="title"
              id="title"
              placeholder="Title..."
            />
            <input
              className="w-[300px] bg-gray-100 border border-gray-400 py-2 px-3 rounded-lg"
              type="number"
              name="price"
              id="price"
              placeholder="Price..."
            />
            <select
              name="category"
              id="category"
              className="w-[300px] bg-gray-100 border border-gray-400 py-2 px-3 rounded-lg"
            >
              <option value="category">Category</option>
              <option value="category">Category</option>
              <option value="category">Category</option>
              <option value="category">Category</option>
              <option value="category">Category</option>
            </select>
            <input
              className="w-[300px] bg-gray-100 border border-gray-400 py-2 px-3 rounded-lg"
              type="number"
              name="stock"
              id="stock"
              placeholder="Stock..."
            />

            <input
              type="file"
              className="w-[300px] bg-gray-100 border border-gray-400 py-2 px-3 rounded-lg"
            />
            <select
              name="size"
              id="size"
              className="w-[300px] bg-gray-100 border border-gray-400 py-2 px-3 rounded-lg"
            >
              <option value="category">one size</option>
              <option value="category">S</option>
              <option value="category">M</option>
              <option value="category">L</option>
              <option value="category">XL</option>
            </select>
            <select
              name="color"
              id="color"
              className="w-[300px] bg-gray-100 border border-gray-400 py-2 px-3 rounded-lg"
            >
              <option value="category">Select Color</option>
              <option value="category">White</option>
              <option value="category">Yellow</option>
              <option value="category">Red</option>
              <option value="category">Black</option>
            </select>
            <textarea
              className="w-[500px] h-[100px] bg-gray-100 border border-gray-400 py-2 px-3 rounded-lg resize-none"
              name="description"
              id="description"
              placeholder="Enter description..."
            />
          </div>
        </form>
        <div className="w-full border-t border-black mt-4">
          <h2 className="text-3xl font-semibold  text-primary-color mt-4">
            All Products
          </h2>
          <table className="w-[1175px] mt-4 flex flex-col">
            <thead className="flex items-center justify-between  w-full text-xl border border-black py-2 px-32">
              <tr>Product</tr>
              <tr>Price</tr>
              <tr>Actions</tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr className="flex items-center justify-between w-full border border-black/50 py-2 px-4">
                  <td
                    key={product._id}
                    className="flex items-center gap-2 w-1/4"
                  >
                    <span>{product.title}</span>
                    <img className="w-12" src={product.images[0]} alt="" />
                  </td>
                  <td
                    key={product._id}
                    className="flex items-center justify-center mr-24"
                  >
                    {product.price}$
                  </td>
                  <button className="mr-32 text-red-500 hover:underline">
                    Delete
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
