import { useGetAllCategoriesQuery } from "../redux/api/categoryApiSlice";

export const AdminCategories = () => {
  const { data: categories, isLoading } = useGetAllCategoriesQuery();
  return (
    <div>
      <h1 className="text-3xl font-semibold border-b border-black text-primary-color">
        Products
      </h1>
      <div>
        <h2 className="text-2xl mt-4 text-primary-color">Create Category</h2>
        <form action="" className="mt-4">
          <div className="flex items-center flex-wrap gap-10">
            <input
              className="w-[300px] bg-gray-100 border border-gray-400 py-2 px-3 rounded-lg"
              type="text"
              name="title"
              id="title"
              placeholder="Title..."
            />
          </div>
          <div className="w-full flex justify-end">
            <button className="bg-primary-color text-white py-2 px-6 text-lg font-semibold rounded-lg ">
              Create
            </button>
          </div>
        </form>
        <div className="w-full border-t border-black mt-4">
          <h2 className="text-3xl font-semibold  text-primary-color mt-4">
            All Categories
          </h2>
          <div className="mt-4 flex items-center gap-4 flex-wrap">
            {/* {categories.map((category) => (
              <button
                key={category._id}
                className="bg-primary-color text-white text-lg font-semibold px-6 py-2 rounded-lg"
              >
                {category.name}
              </button>
            ))} */}
            <button className="bg-primary-color text-white text-lg font-semibold px-6 py-2 rounded-lg">
              Teknoloji
            </button>
            <button className="bg-primary-color text-white text-lg font-semibold px-6 py-2 rounded-lg">
              Giyim
            </button>
            <button className="bg-primary-color text-white text-lg font-semibold px-6 py-2 rounded-lg">
              Ayakakbı
            </button>
            <button className="bg-primary-color text-white text-lg font-semibold px-6 py-2 rounded-lg">
              Takı
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
