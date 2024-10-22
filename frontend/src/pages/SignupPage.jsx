import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Header } from "../components/Header";

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const isSignupLoading = false;

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="bg-[#532B2B] min-h-screen  w-screen flex min-w-[30rem] px-0 xl:px-32">
        <div className="flex flex-1 rounded-[2rem] overflow-hidden relative">
          <div className="bg-white flex-[2_2_0] flex items-center justify-center ">
            <div className="flex flex-col shadow-2xl w-full  max-w-xl p-12 rounded-xl">
              <h2 className="text-3xl font-semibold text-[#F47458] mb-10">
                M-Commerce
              </h2>
              <p className="text-gray-400 mb-8">Let&apos;s sign you up!</p>
              <h2 className="text-5xl font-semibold mb-10">Sign up</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="username">Username</label>
                  <input
                    value={formData.username}
                    onChange={(e) => handleChange(e)}
                    className="bg-[#FFF6F4] p-2  outline-none focus:ring-1 focus:ring-black/20"
                    type="text"
                    placeholder="Your username here..."
                    id="username"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={(e) => handleChange(e)}
                    value={formData.email}
                    className="bg-[#FFF6F4] p-2  outline-none focus:ring-1 focus:ring-black/20"
                    type="email"
                    placeholder="Your email here..."
                    id="email"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password">Password</label>
                  <input
                    autoComplete="off"
                    onChange={(e) => handleChange(e)}
                    value={formData.password}
                    className="bg-[#FFF6F4] p-2  outline-none focus:ring-1 focus:ring-black/20"
                    type="password"
                    placeholder="Password..."
                    id="password"
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    onChange={(e) => handleChange(e)}
                  />
                  <label>I agree to privacy, policy & terms.</label>
                </div>
                <button
                  disabled={isSignupLoading}
                  className="bg-[#F47458] hover:bg-[#d9684f] transition duration-200 text-white py-2 disabled:opacity-70"
                >
                  {isSignupLoading ? "Signing Up..." : "Sign up"}
                </button>
              </form>
              <p className="text-center mt-6">
                Already have an account?{" "}
                <Link to={"/login"} className="hover:underline text-blue-500">
                  Log in!
                </Link>
              </p>
              <p className="w-full text-center flex items-center before:bg-black before:flex-1 after:bg-black  after:h-[2px] before:h-[2px] after:flex-1 my-4">
                <span className="px-1"> or </span>
              </p>
              <div className="flex items-center justify-center gap-4 border border-black">
                <button
                  disabled={isSignupLoading}
                  className="flex gap-2 items-center justify-center  py-2 disabled:opacity-70 hover:bg-black/5 w-full transition duration-200"
                >
                  <FcGoogle color="white" size={25} />
                  <p>Sign up with Google</p>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#ffdac2] xl:block hidden flex-[1_1_0]"></div>
          <div className="xl:block hidden absolute w-[750px] left-[55%] top-[10%]">
            <img src="./signup3.png" alt="singup image" />
          </div>
        </div>
      </div>
    </>
  );
};
