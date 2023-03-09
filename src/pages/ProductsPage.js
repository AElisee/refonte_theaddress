import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import NavBar from "../components/Navigation/NavBar";
import ProductsContainer from "../components/ProductsContainer";

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>THE ADDRESS - nouvautés</title>
        <meta name="description" content="Description de ma page" />
      </Helmet>
      <NavBar />
      <ProductsContainer />
      <Blog />
      <Footer />
    </div>
  );
};

export default ProductsPage;
