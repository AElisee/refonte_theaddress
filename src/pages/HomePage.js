import React from "react";
import { Helmet } from "react-helmet";
import LearnMoreAboutUs from "../components/LearnMoreAboutUs";
import Discovery from "../components/Discovery";
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
import { data } from "../defaultData/data";
import PrevArrow from "../components/PrevArrow";
import NextArrow from "../components/NextArrow";
import Blog from "../components/Blog";

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
            {data.map((el) => {
              return (
                <div>
                  <div className="img-container">
                    <img src={el.picture} alt="" />
                    <h2>
                      Faites vous plaisir en <br /> décontracté
                    </h2>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <LearnMoreAboutUs />
      <Discovery title="Nouveautés" id="newness" />
      <Discovery title="Tendances" id="trend" />
      <Collections />
      <EditorialContent />
      <NewsLetter />
      <Blog />
      <Footer />
    </div>
  );
};

export default HomePage;
