import React, { useEffect } from "react";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import NavBar from "../components/Navigation/NavBar";
import ProductsContainer from "../components/ProductsContainer";

const ManProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="man-shop">
      <NavBar />
      <ProductsContainer />
      <Blog />
      <Footer />
    </div>
  );
};

export default ManProductsPage;
