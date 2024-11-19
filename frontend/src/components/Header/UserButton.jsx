import { useState } from "react";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  logoutFailure,
  logoutStart,
  logoutSuccess,
} from "../../redux/slices/authSlice";
import { useLogoutMutation } from "../../redux/api/authApiSlice";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export const UserButton = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [logout, { isLoading }] = useLogoutMutation();

  const handleClick = (link) => {
    setIsUserMenuOpen(false);
    navigate(link);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logoutStart());
    try {
      await logout().unwrap();
      dispatch(logoutSuccess());
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      dispatch(logoutFailure());
    }
  };

  return (
    <button
      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
      className="bg-primary-color text-white rounded-full p-2 relative"
    >
      <FiUser size={20} />
      <div
        className={`absolute  top-8 right-8 flex flex-col rounded-md ${
          isUserMenuOpen ? "w-[175px] " : "w-0 px-0"
        }
                ${isUserMenuOpen ? "h-[200px] " : "h-0 py-0"}
                  transition-all duration-200 overflow-hidden`}
      >
        {isUserMenuOpen && (
          <div
            className="h-full w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40
            flex flex-col
          "
          >
            <button
              onClick={() => handleClick("/account")}
              className="hover:bg-gray-100/25  flex justify-center items-center w-full h-full py-3 gap-2"
            >
              <FiUser size={24} />
              <span>Profile</span>
            </button>
            <button
              onClick={() => handleClick("/favorites")}
              className="hover:bg-gray-100/25  flex justify-center items-center w-full h-full py-3 gap-2"
            >
              <MdOutlineFavoriteBorder size={24} />
              <span>Favorites</span>
            </button>
            <button
              onClick={() => handleClick("/cart")}
              className="hover:bg-gray-100/25 flex justify-center items-center w-full h-full py-3 gap-2"
            >
              <FiShoppingCart size={24} />
              <span>Cart</span>
            </button>
            <button
              onClick={handleLogout}
              className="hover:bg-gray-100/25  flex justify-center items-center w-full h-full  pt-3 pb-4 gap-2"
            >
              <CiLogout size={24} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </button>
  );
};
