import React from "react";
import Item from "./Item";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import Slider from "react-slick";

const WomanpageSlider = () => {
  // ces image sont pour le test
  const img_slide_1 = "/images/slide1.png";
  const img_slide_2 = "/images/slide2.png";
  const img_slide_3 = "/images/slide3.png";

  const settings = {
    dots: false,
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
    <section className="slide-carousel relative">
      <Slider {...settings}>
        <Item img={img_slide_1} />
        <Item img={img_slide_2} />
        <Item img={img_slide_3} />
      </Slider>
    </section>
  );
};

export default WomanpageSlider;