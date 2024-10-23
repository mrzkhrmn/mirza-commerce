import React from "react";

export const SpecialProduct = () => {
  return (
    <div className="w-full h-[500px] bg-black mx-auto flex justify-between items-center">
      <div className="w-[50%] flex flex-col items-center">
        <div className="flex flex-col gap-8 pl-16">
          <span className="text-sm uppercase font-semibold text-green-400">
            Categories
          </span>
          <p className="text-white text-5xl w-[65%] leading-1">
            Enhance Your Music Experience
          </p>
          <div className="flex items-center gap-6">
            <div className="bg-white rounded-full flex flex-col justify-center items-center py-3 px-5">
              <span className="font-bold">23</span>
              <span>Hours</span>
            </div>
            <div className="bg-white rounded-full flex flex-col justify-center items-center py-3 px-6">
              <span className="font-bold">05</span>
              <span>Days</span>
            </div>
            <div className="bg-white rounded-full flex flex-col justify-center items-center py-3 px-6">
              <span className="font-bold">59</span>
              <span>Minutes</span>
            </div>
            <div className="bg-white rounded-full flex flex-col justify-center items-center py-3 px-6">
              <span className="font-bold">32</span>
              <span>Seconds</span>
            </div>
          </div>
          <div>
            <button className="bg-green-500 rounded-md text-white py-3 px-6">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <img
        className="h-full w-[50%] object-contain"
        src="https://www.pngplay.com/wp-content/uploads/6/JBL-Audio-Speakers-Transparent-PNG.png"
        alt=""
      />
    </div>
  );
};
