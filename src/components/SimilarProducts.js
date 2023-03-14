import React, { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import SeeAllLink from "./SeeAllLink";

//données par defaut
import { data } from "../defaultData/data";

const SimilarProducts = () => {
  const ulSlide = useRef(null);

  useEffect(() => {
    console.log(ulSlide.current);
  }, []);

  // lorque lorsqu'on clic sur les bouttons
  const scrollLeft = () => {
    const slide = document.querySelector(".card-container");
    slide.scrollLeft -= 300;
  };

  const scrollRight = () => {
    const slide = document.querySelector(".card-container");
    slide.scrollLeft += 300;
  };
  return (
    <div className="similar-product">
      <div className="similar-product-container">
        <div className="header">
          <div className="left">
            <h3>Sélectionnés juste pour vous</h3>
          </div>
          <div className="right">
            <SeeAllLink />
          </div>
        </div>
        <div className="cards-btn">
          <ul className="card-container">
            {data.map((el) => (
              <ProductCard el={el} />
            ))}
          </ul>
          <div className="scroll-btn">
            <span id="left-btn" onClick={scrollLeft}>
              <img src="/icons/arrow-left-solid.svg" alt="arrow-narrow-left" />
            </span>
            <span id="right-btn" onClick={scrollRight}>
              <img
                src="/icons/arrow-right-solid.svg"
                alt="arrow-narrow-right"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
