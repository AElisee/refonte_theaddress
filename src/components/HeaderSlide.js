import React from "react";
import Slider from "react-slick";

// css files for slick-carroussel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { data } from "../defaultData/data";
import SlideCard from "./SlideCard";

const HeaderSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="header-slide">
      <Slider {...settings}>
        {data.map((pic, index) => (
          <SlideCard key={index} pic={pic} />
        ))}
      </Slider>
    </div>
  );
};

export default HeaderSlide;
