import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export const Header = () => {
  const user = true;
  const activeNavClass = "left-0 w-full";
  const navClass = "left-1/2 w-0 group-hover:left-0 group-hover:w-full";

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Link to={"/"}>
          <h1 className=" md:text-2xl text-xl">M-Commerce.</h1>
        </Link>
        <div className="flex items-center gap-6 md:text-xl text-lg">
          <NavLink to={"/"} className={"relative"}>
            {({ isActive }) => (
              <>
                <span>Home</span>
                <span
                  className={`absolute -bottom-1 h-0.5 bg-black transition-all duration-300 ${
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
                  className={`absolute -bottom-1 h-0.5 bg-black transition-all duration-300 ${
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
                  className={`absolute -bottom-1 h-0.5 bg-black transition-all duration-300 ${
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
                    className={`absolute -bottom-1 h-0.5 bg-black transition-all duration-300 ${
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

        <div className="relative hidden md:block">
          <input
            type="text"
            id="searchTerm"
            className="bg-gray-200 py-1 px-2 focus:outline-none text-lg rounded-md"
          />
          <button className="absolute right-2 top-2">
            <FiSearch />
          </button>
        </div>
      </div>
    </header>
  );
};
