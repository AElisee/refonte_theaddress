import React from "react";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const ProductDetailsPage = () => {
  return (
    <div className="produc-details">
      <div>
        <h2>Selectionné pour vous</h2>
      </div>
      <Blog />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
