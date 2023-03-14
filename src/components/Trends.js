import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

//import default data
import SeeAllLink from "./SeeAllLink";

const Trends = () => {
  const APIData = useSelector((state) => state.pictures);
  return (
    <div className="discovery">
      <div className="container">
        <div className="top">
          <div className="left">
            <h4>découvrez les</h4>
            <h3>Tendances</h3>
          </div>
          <div className="right">
            <SeeAllLink />
          </div>
        </div>
        <ul className="card-container">
          {APIData &&
            APIData.slice(4, 8).map((pic) => <ProductCard pic={pic} />)}
        </ul>
      </div>
    </div>
  );
};

export default Trends;
