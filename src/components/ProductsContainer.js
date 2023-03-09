import React from "react";
import SideFilter from "./SideFilter";
import TopFilter from "./TopFilter";

const ProductsContainer = () => {
  return (
    <div className="products-container">
      <div className="breadcrumbs">fil d'ariane</div>
      <div className="filter-product-container">
        <div className="filter-part">
          <SideFilter />
        </div>
        <div className="products-part">
          <div className="product-part-head">
            <TopFilter />
          </div>
          <div className="product-dispalying">
            <ul className="card-container">
              <li>card</li>
              <li>card</li>
              <li>card</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
