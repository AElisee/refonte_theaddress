import React from "react";
import { Link } from "react-router-dom";

//import default data
import { data } from "../defaultData/data";
import ProductCard from "./ProductCard";
import SeeAllLink from "./SeeAllLink";

const Newness = () => {
  return (
    <div className="discovery">
      <div className="container">
        <div className="top">
          <div className="left">
            <h4>découvrez les</h4>
            <h3>nouveautés</h3>
          </div>
          <div className="right">
            <SeeAllLink />
          </div>
        </div>
        <ul className="card-container">
          {data.slice(0, 4).map((el) => (
            <ProductCard el={el} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Newness;
