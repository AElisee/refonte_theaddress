import React from "react";
import { useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsStatus,
} from "../../redux/feature/PicturesSlice";
import { STATUS } from "../../utils/status";
import Loader from "../Loader";
import FeaturedCard from "./FeaturedCard";

const FeaturedProduct = ({ section }) => {
  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);

  console.log(products);
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
          {productStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            products &&
            products
              .slice(0, 4)
              .map((pic) => <FeaturedCard key={pic.id} pic={pic} />)
          )}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedProduct;
