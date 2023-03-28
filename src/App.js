import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogComponent from "./components/Blog/BlogComponent";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ManProduct from "./pages/ManProduct";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Products from "./pages/Products";
import WomanProduct from "./pages/WomanProduct";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/produits/:title/:id" element={<Product />} />
        <Route path="/produits/homme" element={<ManProduct />} />
        <Route path="/produits/femme" element={<WomanProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* indique Navbar ne s'aafiche pas sur la page Login
      {window.location.pathname !== "/login" && <NavBar />} */}
      <BlogComponent />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
