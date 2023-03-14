import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//import default data
import { data } from "../defaultData/data";
import ProductCard from "./ProductCard";
import SeeAllLink from "./SeeAllLink";

const Newness = () => {
  const APIData = useSelector((state) => state.pictures);
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
          {APIData &&
            APIData.slice(0, 4).map((pic) => <ProductCard pic={pic} />)}
        </ul>
      </div>
    </div>
  );
};

export default Newness;
