import { GiReceiveMoney } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { BarChart, LineChart } from "@mui/x-charts";

export const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <h1 className="text-3xl border-b border-black text-primary-color">
          Dashboard
        </h1>
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
      <div className="flex flex-col mt-10">
        <BarChart
          series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          xAxis={[
            {
              data: [
                "Product Saled",
                "Users",
                "Categpry Added",
                "Product Added",
              ],
              scaleType: "band",
            },
          ]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
        <LineChart
          title="Product Saled"
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};
