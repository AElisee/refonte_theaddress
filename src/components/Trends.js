import React from "react";
import { Link } from "react-router-dom";

//import default data
import { data } from "../defaultData/data";
import ProductCard from "./ProductCard";

const Trends = () => {
  return (
    <div className="discovery">
      <div className="container">
        <div className="top">
          <div className="left">
            <h4>découvrez les</h4>
            <h3>Tendances</h3>
          </div>
          <div className="right">
            <Link to="/tendances" id="all">
              <span>Voir tout</span>
              <img
                src="/icons/arrow-narrow-right.svg"
                alt="arrow-narrow-right"
              />
            </Link>
          </div>
        </div>
        <ul className="card-container">
          {data.map((el) => (
            <ProductCard el={el} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trends;
