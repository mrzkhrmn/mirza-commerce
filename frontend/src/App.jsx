import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Header } from "./components/Header";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ProductDetails } from "./pages/ProductDetails";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <main className="flex-1">
        {" "}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route element={<ProtectedRoute />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
