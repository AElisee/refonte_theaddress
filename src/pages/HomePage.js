import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import LearnMoreAboutUs from "../components/LearnMoreAboutUs";
import Trends from "../components/Trends";
import Collections from "../components/Collections";
import EditorialContent from "../components/EditorialContent";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import NavBar from "../components/Navigation/NavBar";

// css files for slick-carroussel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

//import default data
import PrevArrow from "../components/PrevArrow";
import NextArrow from "../components/NextArrow";
import Blog from "../components/Blog";
import Newness from "../components/Newness";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPictures } from "../feacture/PicturesSlice";

const HomePage = () => {
  const settings = {
    className: "slider",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const dispatch = useDispatch();
  const APIData = useSelector((state) => state.pictures);
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => dispatch(getPictures(res.data)));
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(APIData);
  return (
    <div className="home-page">
      <Helmet>
        <title> THE ADDRESS - Bienvenue</title>
        <meta name="description" content="Description de ma page" />
      </Helmet>
      <div className="header">
        <NavBar />
        <div className="slide-container">
          <Slider {...settings}>
            {APIData &&
              APIData.slice(0, 4).map((pic) => {
                return (
                  <div key={pic.id} className="img-container">
                    <img src={pic.url} alt="" />
                    <h2>{pic.title}</h2>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
      <LearnMoreAboutUs />
      <Newness />
      <Trends />
      <Collections />
      <EditorialContent />
      <NewsLetter />
      <Blog />
      <Footer />
    </div>
  );
};

export default HomePage;
