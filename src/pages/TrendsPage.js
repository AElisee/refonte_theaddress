import React, { useEffect } from "react";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import NavBar from "../components/Navigation/NavBar";
import ProductsContainer from "../components/ProductsContainer";

const TrendsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="trends-page">
      <ProductsContainer />
      <NavBar />
      <h1>tendances</h1>
      <Blog />
      <Footer />
    </div>
  );
};

export default TrendsPage;
