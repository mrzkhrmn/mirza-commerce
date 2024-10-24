import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useLoginMutation } from "../redux/api/authApiSlice.js";
import { useDispatch } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../redux/slices/authSlice.js";

export const LoginPage = () => {
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await login(formData).unwrap();
      dispatch(loginSuccess(res));
      dispatch(navigate("/"));
    } catch (error) {
      console.log(error.message);
      dispatch(loginFailure());
    }
  }
  return (
    <div className="bg-[#532B2B] min-h-screen  w-screen flex min-w-[30rem] px-0 xl:px-32">
      <div className="flex flex-1 rounded-[2rem] overflow-hidden relative">
        <div className="bg-white flex-[2_2_0] flex items-center justify-center ">
          <div className="flex flex-col shadow-2xl w-full  max-w-xl p-12 rounded-xl">
            <h2 className="text-3xl font-semibold text-[#F47458] mb-10">
              M-Commerce
            </h2>
            <p className="text-gray-400 mb-8">Let&apos;s find your need!</p>
            <h2 className="text-5xl font-semibold mb-10">Log in</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={formData.email}
                  className="bg-[#FFF6F4] p-2 outline-none focus:ring-1 focus:ring-black/20"
                  type="email"
                  placeholder="Your email here..."
                  id="email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={formData.password}
                  autoComplete="off"
                  className="bg-[#FFF6F4] p-2  outline-none focus:ring-1 focus:ring-black/20 "
                  type="password"
                  placeholder="Password..."
                  id="password"
                  required
                />
              </div>
              <button
                disabled={isLoginLoading}
                className="bg-[#F47458] hover:bg-[#d9684f] transition duration-200 text-white py-2 disabled:opacity-70"
              >
                {isLoginLoading ? "Logging in..." : "Login"}
              </button>
            </form>
            <p className="text-center mt-6">
              Don&apos;t you have an account?{" "}
              <Link to={"/signup"} className="hover:underline text-blue-500">
                Sign up!
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-[#ffdac2] xl:block hidden flex-[1_1_0]"></div>
        <div className="xl:block hidden absolute w-[650px] left-[55%] top-[15%]">
          <img src="./login.png" alt="singup image" />
        </div>
      </div>
    </div>
  );
};
