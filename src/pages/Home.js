import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionComponent from "../components/CollectionComponent";
import Edito from "../components/Edito";
import FeaturedProduct from "../components/feature/FeaturedProduct";
import MoreAboutUs from "../components/MoreAboutUs";
import NewsLetter from "../components/NewsLetter";
import BlogComponent from "./../components/Blog/BlogComponent";
import SliderComponent from "../components/slider/SliderComponent";
import {
  fetchAsyncProducts,
  getAllProducts,
  getAllProductsStatus,
  getPictures,
} from "../redux/feature/PicturesSlice";
import { STATUS } from "../utils/status";
import Loader from "../components/Loader";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, []);

  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);

  return (
    <div className="home-page">
      <SliderComponent />
      <MoreAboutUs />
      {productStatus === STATUS.LOADING ? (
        <Loader />
      ) : (
        <FeaturedProduct section="nouvautés" />
      )}
      {/* 
      <FeaturedProduct section="tendances" /> */}
      <CollectionComponent />
      <Edito />
      <NewsLetter />
      <BlogComponent />
    </div>
  );
};

export default Home;
