import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="w-[18%] border-r border-gray-500">
      <div className="flex flex-col text-lg font-light gap-4 pr-8">
        <Link className="border-b hover:border-primary-color border-transparent transition duration-200">
          <p>Women&apos;s Fashion</p>
        </Link>
        <Link className="border-b hover:border-primary-color border-transparent transition duration-200">
          <p>Men&apos;s Fashion</p>
        </Link>
        <Link className="border-b hover:border-primary-color border-transparent transition duration-200">
          <p>Electronics</p>
        </Link>
        <Link className="border-b hover:border-primary-color border-transparent transition duration-200">
          <p>Home & Lifestyle</p>
        </Link>
        <Link className="border-b hover:border-primary-color border-transparent transition duration-200">
          <p>Medicine</p>
        </Link>
        <Link className="border-b hover:border-primary-color border-transparent transition duration-200">
          <p>Sports & Outdoor</p>
        </Link>
        <Link className="border-b hover:border-primary-color border-transparent transition duration-200">
          <p>Groceries</p>
        </Link>
        <Link className="border-b hover:border-primary-color border-transparent transition duration-200">
          <p>Health & Beauty</p>
        </Link>
      </div>
    </div>
  );
};
