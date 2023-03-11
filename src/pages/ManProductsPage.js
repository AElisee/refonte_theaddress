import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
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
      {/* titre dans l'onglet */}
      <Helmet>
        <title> THE ADDRESS - Hommes</title>
        <meta name="description" content="Description de ma page" />
      </Helmet>
      <NavBar />
      <ProductsContainer />
      <Blog />
      <Footer />
    </div>
  );
};

export default ManProductsPage;
