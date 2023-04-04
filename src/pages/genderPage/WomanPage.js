import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../../utils/SlideSettings";
import { Link } from "react-router-dom";

const WomanPage = () => {
  return (
    <div className="woman-page gender">
      <section className="slide-carousel">
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </section>
      <section className="pub">
        <div className="pub-ctn container ">
          <div className="left flex flex-column justify-center align-center">
            <h3 className="text-uppercase">Des tenues pour chaque saison</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              explicabo inventore nostrum laborum unde, officia repudiandae a
              doloremque ipsam praesentium ea, cumque quibusdam? Vero, sed nam
              quos reprehenderit eos obcaecati deserunt debitis esse! Illum
              praesentium consequatur aut.
            </p>
          </div>
          <div className="right">
            <div className="img-container">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="newness">
        <div className="newness-ctn container">
          <div className="top flex justify-between align-center">
            <div className="tp-left">
              <h3 className="text-uppercase">nouveautés : </h3>
              <span className="fw-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                qui.
              </span>
            </div>
            <div className="tp-right">
              <Link to={"/"}>Voir la selection</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="last-blog">last blog</section>
    </div>
  );
};

export default WomanPage;
