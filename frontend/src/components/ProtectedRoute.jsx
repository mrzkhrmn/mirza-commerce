import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { authUser } = useSelector((state) => state.auth);
  return authUser ? <Outlet /> : <Navigate to={"/login"} />;
};
