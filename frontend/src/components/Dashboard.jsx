import { GiReceiveMoney } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";

export const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <h1 className="text-3xl border-b border-black">Dashboard</h1>
      </div>
      <div className="flex items-center justify-center w-full mt-4 gap-10">
        <div className="bg-purple-600 w-[200px] h-[120px] px-2 justify-center flex flex-col gap-6 rounded-lg">
          <div className="flex items-center justify-between text-white">
            <h4 className="text-2xl">1987$</h4>
            <GiReceiveMoney size={30} />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white">Product Saled</p>
            <p className="text-green-400">%18.7</p>
          </div>
        </div>
        <div className="bg-blue-600 w-[200px] h-[120px] px-2  justify-center flex flex-col gap-6 rounded-lg">
          <div className="flex items-center justify-between text-white">
            <h4 className="text-2xl">19</h4>
            <FaUser size={26} />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white">New User joined</p>
            <p className="text-green-400">%6.7</p>
          </div>
        </div>
        <div className="bg-orange-600 w-[200px] h-[120px] px-2  justify-center flex flex-col gap-6 rounded-lg">
          <div className="flex items-center justify-between text-white">
            <h4 className="text-2xl">22</h4>
            <BiSolidCategory size={32} />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white">New Category Added</p>
            <p className="text-green-200">%2.7</p>
          </div>
        </div>
        <div className="bg-primary-color w-[200px] h-[120px] px-2  justify-center flex flex-col gap-6 rounded-lg">
          <div className="flex items-center justify-between text-white">
            <h4 className="text-2xl">12</h4>
            <BiSolidCategory size={32} />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white">
              New Product <br /> Added{" "}
            </p>
            <p className="text-green-200">%5.3</p>
          </div>
        </div>
      </div>
    </div>
  );
};
