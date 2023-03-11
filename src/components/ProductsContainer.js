import React from "react";
import SideFilter from "./SideFilter";
import TopFilter from "./TopFilter";

//default data
import { data } from "../defaultData/data";
import ProductCard from "./ProductCard";

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
              {data.map((el) => (
                <ProductCard el={el} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
