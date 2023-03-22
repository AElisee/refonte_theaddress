import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import { Link } from "react-router-dom";
import DiscoverButton from "./DiscoverButton";

const settings = {
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

const SliderComponent = () => {
  return (
    <div className="slide-carousel">
      <Slider {...settings}>
        <div>
          <img src="/images/slide1.png" alt="slide 1" />
          <h2>Lorem ipsum dolor sit.</h2>
          <DiscoverButton />
        </div>
        <div>
          <img src="/images/slide2.png" alt="slide 2" />
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
          <DiscoverButton />
        </div>
        <div>
          <img src="/images/slide3.png" alt="slide 3" />
          <h2>Lorem ipsum dolor sit amet.</h2>
          <DiscoverButton />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
