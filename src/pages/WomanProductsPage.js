import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import NavBar from "../components/Navigation/NavBar";
import ProductsContainer from "../components/ProductsContainer";

const WomanProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="woman-shop">
      {/* titre dans l'onglet */}
      <Helmet>
        <title> THE ADDRESS - Femmes</title>
        <meta name="description" content="Description de ma page" />
      </Helmet>
      <NavBar />
      <ProductsContainer />
      <h1>femme</h1>
      <Blog />
      <Footer />
    </div>
  );
};

export default WomanProductsPage;
