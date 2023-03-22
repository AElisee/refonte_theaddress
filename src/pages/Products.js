import React from "react";
import ProductContainer from "../components/ProductContainer";

const Products = () => {
  return (
    <div className="produits">
      <div className="container-lg">
        <ProductContainer page="Boutique" />
      </div>
    </div>
  );
};

export default Products;
