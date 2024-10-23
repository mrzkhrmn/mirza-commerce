import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BestSellingProducts } from "../components/HomePage/BestSellingProducts";
import { BrowseByCategory } from "../components/HomePage/BrowseByCategory";
import { ExploreOurProducts } from "../components/HomePage/ExploreOurProducts";
import { FeaturedProducts } from "../components/HomePage/FeaturedProducts";
import { FlashSales } from "../components/HomePage/FlashSales";
import { Services } from "../components/HomePage/Services";
import { Sidebar } from "../components/HomePage/Sidebar";
import { SpecialProduct } from "../components/HomePage/SpecialProduct";

export const HomePage = () => {
  return (
    <div className="w-full h-screen">
      <div className="max-w-7xl mx-auto py-10">
        <div className="flex h-[400px] gap-10 items-center">
          <Sidebar />
          <div className="flex w-full h-[380px] cursor-pointer">
            <img
              src="/iphone-commercial.jpg"
              alt=""
              className=" w-full overflow-hidden object-cover"
            />
          </div>
        </div>
        <FlashSales />
        <BrowseByCategory />
        <BestSellingProducts />
        <SpecialProduct />
        <ExploreOurProducts />
        <FeaturedProducts />
        <Services />
      </div>
      <Footer />
    </div>
  );
};
