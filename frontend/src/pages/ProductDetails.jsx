import { CiHeart } from "react-icons/ci";
import { Stars } from "../components/Stars";
import { TbTruckDelivery } from "react-icons/tb";
import { GiRecycle } from "react-icons/gi";

export const ProductDetails = () => {
  return (
    <div className="w-full h-screen">
      <div className="max-w-7xl mx-auto py-10">
        <div className="flex justify-center gap-6 mt-20 h-[648px]">
          <div className="flex flex-col gap-2 items-center justify-between h-full">
            <img
              className="object-contain w-44 h-32 bg-gray-100"
              src="https://images.teemill.com/2qczyrcpoxoa68qdd0nkyaedcaunbavwo0klypsssippxue2.png.png?w=1080&h=auto"
              alt=""
            />
            <img
              className="object-contain w-44 h-32 bg-gray-100"
              src="https://images.teemill.com/2qczyrcpoxoa68qdd0nkyaedcaunbavwo0klypsssippxue2.png.png?w=1080&h=auto"
              alt=""
            />
            <img
              className="object-contain w-44 h-32 bg-gray-100"
              src="https://images.teemill.com/2qczyrcpoxoa68qdd0nkyaedcaunbavwo0klypsssippxue2.png.png?w=1080&h=auto"
              alt=""
            />
            <img
              className="object-contain w-44 h-32 bg-gray-100"
              src="https://images.teemill.com/2qczyrcpoxoa68qdd0nkyaedcaunbavwo0klypsssippxue2.png.png?w=1080&h=auto"
              alt=""
            />
          </div>
          <div className="w-[500px] h-full  bg-gray-100">
            <img
              className=" object-contain"
              src="https://images.teemill.com/2qczyrcpoxoa68qdd0nkyaedcaunbavwo0klypsssippxue2.png.png?w=1080&h=auto"
              alt=""
            />
          </div>
          <div className="max-w-[400px]">
            <h1 className="font-bold text-2xl">Havic HV G-92 Gamepad</h1>
            <div className="flex items-center gap-2 mt-2">
              <Stars />
              <p>
                | <span className="text-green-500">In Stock</span>
              </p>
            </div>
            <p className="text-2xl font-light mt-2 mb-4">$192.00</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              voluptatem obcaecati alias dolorem! Alias itaque asperiores quidem
              dicta soluta repellat. Nostrum, aspernatur. Laborum aspernatur
              aperiam, commodi beatae obcaecati facere culpa.
            </p>
            <div className="w-full bg-black/50 h-[2px] my-4"></div>
            <div className="flex items-center gap-8">
              <p className="text-xl font-light">Colours:</p>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-red-500 border border-black"></div>
                <div className="w-5 h-5 rounded-full bg-gray-200 border border-black"></div>
              </div>
            </div>
            <div className="flex items-center gap-8 my-5">
              <p className="text-xl font-light">Size:</p>
              <div className="flex items-center gap-4">
                <button className="py-1 px-2 border border-black hover:bg-primary-color hover:text-white transition duration-200">
                  M
                </button>
                <button className="py-1 px-2 border border-black hover:bg-primary-color hover:text-white transition duration-200">
                  M
                </button>
                <button className="py-1 px-2 border border-black hover:bg-primary-color hover:text-white transition duration-200">
                  M
                </button>
                <button className="py-1 px-2 border border-black hover:bg-primary-color hover:text-white transition duration-200">
                  M
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-xl">
                <button className="border border-black px-4 py-1 hover:bg-primary-color hover:text-white transition duration-200">
                  -
                </button>
                <span className="border-t border-b border-black px-8 py-1">
                  2
                </span>
                <button className="border border-black px-4 py-1 hover:bg-primary-color hover:text-white transition duration-200">
                  +
                </button>
              </div>
              <button className="rounded-lg border border-black hover:border-primary-color px-8 py-1 text-lg font-light bg-primary-color hover:bg-secondary-color text-white transition duration-200">
                Buy Now
              </button>
              <button className="rounded-lg hover:border-primary-color border border-black px-2 py-2 hover:bg-primary-color hover:text-white transition duration-200">
                <CiHeart size={24} />
              </button>
            </div>
            <div className="mt-10 border border-black">
              <div className="flex items-center ">
                <div className="py-6 px-4">
                  <TbTruckDelivery size={45} />
                </div>
                <div>
                  <p className="text-lg">Free Delivery</p>
                  <p className="text-sm underline cursor-pointer">
                    Enter your postal code for delivery availability
                  </p>
                </div>
              </div>
              <div className="flex items-center border-t border-black">
                <div className="py-6 px-4">
                  <GiRecycle size={45} />
                </div>
                <div>
                  <p className="text-lg">Return Delivery</p>
                  <p className="text-sm ">
                    Free 30 days delivery returns.{" "}
                    <span className="underline cursor-pointer">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
