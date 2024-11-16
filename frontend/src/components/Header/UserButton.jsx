import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const UserButton = ({ handleLogout }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (link) => {
    setIsUserMenuOpen(false);
    navigate(link);
  };

  return (
    <button
      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
      className="bg-primary-color text-white rounded-full p-2 relative"
    >
      <FiUser size={20} />
      <div
        className={`absolute bg-[#da4443] top-8 left-8 flex flex-col rounded-md ${
          isUserMenuOpen ? "w-[100px] " : "w-0 px-0"
        }
                ${isUserMenuOpen ? "h-[160px] " : "h-0 py-0"}
                  transition-all duration-200 overflow-hidden`}
      >
        {isUserMenuOpen && (
          <>
            <button
              onClick={() => handleClick("/account")}
              className="hover:bg-secondary-color flex justify-center items-center w-full h-full py-2"
            >
              Profile
            </button>
            <button
              onClick={() => handleClick("/favorites")}
              className="hover:bg-secondary-color flex justify-center items-center w-full h-full py-2"
            >
              Favorites
            </button>
            <button
              onClick={() => handleClick("/cart")}
              className="hover:bg-secondary-color flex justify-center items-center w-full h-full py-2"
            >
              Cart
            </button>
            <button
              onClick={handleLogout}
              className="hover:bg-secondary-color flex justify-center items-center w-full h-full  pt-2 pb-4"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </button>
  );
};