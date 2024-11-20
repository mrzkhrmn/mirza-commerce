import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { UserButton } from "./Header/UserButton";

export const Header = () => {
  const user = true;
  const activeNavClass = "left-0 w-full ";
  const navClass = "left-0 w-0 group-hover:left-1/2 group-hover:w-full";

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <Link to={"/"}>
          <h1 className=" md:text-2xl text-xl">M-Commerce.</h1>
        </Link>
        <div className="flex items-center gap-6 md:text-xl text-lg">
          <NavLink to={"/"} className={"relative"}>
            {({ isActive }) => (
              <>
                <span>Home</span>
                <span
                  className={`absolute -bottom-1 h-0.5 bg-primary-color transition-all duration-300 ${
                    isActive ? activeNavClass : navClass
                  }`}
                ></span>
              </>
            )}
          </NavLink>
          <NavLink to={"/contact"} className={"relative"}>
            {({ isActive }) => (
              <>
                <span>Contact</span>
                <span
                  className={`absolute -bottom-1 h-0.5 bg-primary-color transition-all duration-300 ${
                    isActive ? activeNavClass : navClass
                  }`}
                ></span>
              </>
            )}
          </NavLink>
          <NavLink to={"/about"} className={"relative"}>
            {({ isActive }) => (
              <>
                <span>About</span>
                <span
                  className={`absolute -bottom-1 h-0.5 bg-primary-color transition-all duration-300 ${
                    isActive ? activeNavClass : navClass
                  }`}
                ></span>
              </>
            )}
          </NavLink>
          {!user && (
            <NavLink to={"/signup"} className={"relative"}>
              {({ isActive }) => (
                <>
                  <span>Sign up</span>
                  <span
                    className={`absolute -bottom-1 h-0.5 bg-primary-color transition-all duration-300 ${
                      isActive ? activeNavClass : navClass
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          )}
          <button className="md:hidden block">
            <FiSearch />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              id="searchTerm"
              placeholder="Search for your need"
              className="bg-gray-200 py-2 px-3 focus:outline-none rounded-md w-64"
            />
            <button className="absolute right-2 top-2">
              <FiSearch />
            </button>
          </div>
          {user && (
            <Link to={"/wishlist"} className="relative">
              <IoMdHeartEmpty size={30} />
              <span className="absolute -right-1.5 -top-1.5 text-white bg-primary-color text-[0.7rem] rounded-full py-0.5 px-1">
                4
              </span>
            </Link>
          )}
          <Link to={"/cart"} className="relative">
            <IoCartOutline size={30} />
            <span className="absolute -right-1.5 -top-1.5 text-white bg-primary-color text-[0.7rem] rounded-full py-0.5 px-1">
              4
            </span>
          </Link>
          {user && <UserButton />}
        </div>
      </div>
    </header>
  );
};
