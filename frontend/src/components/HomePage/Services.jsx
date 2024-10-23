import { RiCustomerService2Line } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import { FiTruck } from "react-icons/fi";

export const Services = () => {
  return (
    <div className="flex items-center justify-center gap-24 my-20">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gray-300 p-[11px] rounded-full">
          <div className="text-white bg-gray-900 p-3 rounded-full">
            <FiTruck size={40} />
          </div>
        </div>
        <p className="font-bold uppercase">Free and Fasr Delivery</p>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gray-300 p-[11px] rounded-full">
          <div className="text-white bg-gray-900 p-3 rounded-full">
            <RiCustomerService2Line size={40} />
          </div>
        </div>
        <p className="font-bold uppercase">24/7 Customer Service</p>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gray-300 p-[11px] rounded-full">
          <div className="text-white bg-gray-900 p-3 rounded-full">
            <GoShieldCheck size={40} />
          </div>
        </div>
        <p className="font-bold uppercase">MONEY BACK GUARANTEE</p>
        <p>We reurn money within 30 days</p>
      </div>
    </div>
  );
};
