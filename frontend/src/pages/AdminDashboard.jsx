import { useState } from "react";
import { Link } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { AdminProducts } from "../components/AdminProducts";
import { AdminCategories } from "../components/AdminCategories";
import { AdminUsers } from "../components/AdminUsers";

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="flex">
      <div className="w-[250px] bg-gray-100 flex flex-col items-center h-screen">
        <h1 className="text-2xl text-center pt-10 border-b border-black">
          Admin Dashboard
        </h1>
        <div className="flex flex-col mt-4 text-xl gap-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className="hover:border-black border-transparent border-b"
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className="hover:border-black border-transparent border-b"
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("categorys")}
            className="hover:border-black border-transparent border-b"
          >
            Categories
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className="hover:border-black border-transparent border-b"
          >
            Users
          </button>
        </div>
      </div>
      <div className="p-10 w-full">
        {activeTab === "dashboard" ? (
          <Dashboard />
        ) : activeTab === "products" ? (
          <AdminProducts />
        ) : activeTab === "categorys" ? (
          <AdminCategories />
        ) : (
          <AdminUsers />
        )}
      </div>
    </div>
  );
};
