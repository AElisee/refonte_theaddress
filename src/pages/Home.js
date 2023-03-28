import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionComponent from "../components/CollectionComponent";
import Edito from "../components/Edito";
import FeaturedProduct from "../components/feature/FeaturedProduct";
import MoreAboutUs from "../components/MoreAboutUs";
import NewsLetter from "../components/NewsLetter";
import SliderComponent from "../components/slider/SliderComponent";
import {
  fetchAsyncProducts,
  getAllProducts,
  getAllProductsStatus,
} from "../redux/feature/productSlice";
import { STATUS } from "../utils/status";
import Loader from "../components/Loader";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts(15));
  }, []);

  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);

  const newness = products.slice(0, 4);
  const trends = products.slice(10, 14);

  return (
    <div className="home-page">
      <SliderComponent />
      <MoreAboutUs />
      {productStatus === STATUS.LOADING ? (
        <Loader />
      ) : (
        <FeaturedProduct section="nouvautés" products={newness} />
      )}

      <FeaturedProduct section="tendances" products={trends} />
      <CollectionComponent />
      <Edito />
      <NewsLetter />
    </div>
  );
};

export default Home;
