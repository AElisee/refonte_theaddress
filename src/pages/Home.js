import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CollectionComponent from "../components/CollectionComponent";
import Edito from "../components/Edito";
import FeaturedProduct from "../components/feature/FeaturedProduct";
import MoreAboutUs from "../components/MoreAboutUs";
import NewsLetter from "../components/NewsLetter";
import BlogComponent from "./../components/Blog/BlogComponent";
import SliderComponent from "../components/slider/SliderComponent";
import { getPictures } from "../redux/feature/PicturesSlice";

const Home = () => {
  const dispatch = useDispatch();
  // const pictures = useSelector((state) => state.pictures);

  const getData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(getPictures(res.data)));
  };

  useEffect(() => {
    console.log("log");
    getData();
  }, [dispatch]);

  return (
    <div className="home-page">
      <SliderComponent />
      <MoreAboutUs />
      <FeaturedProduct section="nouvautés" />
      <FeaturedProduct section="tendances" />
      <CollectionComponent />
      <Edito />
      <NewsLetter />
      <BlogComponent />
    </div>
  );
};

export default Home;
