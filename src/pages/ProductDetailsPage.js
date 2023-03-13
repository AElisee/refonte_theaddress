import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Blog from "../components/Blog";
import Details from "../components/Details";
import Footer from "../components/Footer";
import NavBar from "../components/Navigation/NavBar";
import SimilarProducts from "../components/SimilarProducts";

// données manuelles par defaut
import { data } from "../defaultData/data";

const ProductDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let { productId } = useParams();

  return (
    <div className="product-details">
      <NavBar />
      <Details />
      <SimilarProducts />
      <Blog />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
