import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { ProductCard } from "../product/ProductCard";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiHeadphones, CiCamera } from "react-icons/ci";
import { FiWatch } from "react-icons/fi";
import { RiComputerLine } from "react-icons/ri";
import { CgGames } from "react-icons/cg";
import { CategoryCard } from "./CategoryCard";

export const BrowseByCategory = () => {
  return (
    <div className="w-full mt-20">
      <div className="flex items-end justify-between">
        <div>
          {" "}
          <div className="flex items-center gap-2">
            <div className="bg-primary-color w-6 h-10 rounded-lg"></div>
            <h3 className="text-sm  font-bold text-primary-color">
              Categories
            </h3>
          </div>
          <h1 className="text-4xl mt-4">Browse By Categories</h1>
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
      <div className="mt-5 flex items-center justify-between">
        <CategoryCard
          icon={<IoIosPhonePortrait size={40} />}
          title={"Phones"}
        />
        <CategoryCard icon={<RiComputerLine size={40} />} title={"Computers"} />
        <CategoryCard icon={<FiWatch size={40} />} title={"Smartwatch"} />
        <CategoryCard icon={<CiCamera size={40} />} title={"Camera"} />
        <CategoryCard icon={<CiHeadphones size={40} />} title={"HeadPhones"} />
        <CategoryCard icon={<CgGames size={40} />} title={"Gaming"} />
      </div>
    </div>
  );
};
