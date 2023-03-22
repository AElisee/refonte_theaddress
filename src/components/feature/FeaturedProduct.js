import React from "react";
import { useSelector } from "react-redux";
import FeaturedCard from "./FeaturedCard";

const FeaturedProduct = ({ section }) => {
  const pictures = useSelector((state) => state.pictures);
  // console.log(pictures);
  return (
    <section className="featured-product">
      <div className="container-lg">
        <div className="top">
          <div className="title">
            <h4 className="text-uppercase">découvrez les</h4>
            <h3 className="text-uppercase ls-2">{section}</h3>
          </div>
        </div>
        <ul className="card-container featured">
          {pictures &&
            pictures
              .slice(0, 4)
              .map((pic) => <FeaturedCard key={pic.id} pic={pic} />)}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedProduct;
