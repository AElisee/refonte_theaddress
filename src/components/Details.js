import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";

const Details = () => {
  const [mainImage, setMainImage] = useState("");
  const [thumbnailImages, setThumbnailImages] = useState([
    "https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_960_720.jpg",
  ]);

  // par defaut
  const colors = ["gray", "beige", "cyan", "white", "indigo", "pink", "yellow"];
  const sizes = ["xs", "s", "m", "l", "xxl", "xxxl"];

  return (
    <div className="details">
      <div className="details-container">
        <div className="img-container">
          <ul className="thumbnail-images">
            {thumbnailImages.map((image, index) => (
              <li
                key={index}
                className="thumbnail"
                onClick={() => setMainImage(image)}
              >
                <img src={image} alt={index + 1} />
              </li>
            ))}
          </ul>
          <div className="main-image">
            <img
              src={
                mainImage
                  ? mainImage
                  : "https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_960_720.jpg"
              }
              alt="main image"
            />
          </div>
        </div>
        <div className="text-container">
          <div>
            <div className="name-container">
              <h3 id="product-name">BALMAIN</h3>
              <h4 id="product-subname">T-Shirt Summer Vibes</h4>
            </div>
            <div className="product-id">
              <h3>id produit</h3>
              <p>261311</p>
            </div>
          </div>
          <div>
            <div className="price-container">
              <p>
                450 000 <span>FCFA</span>
              </p>
              <p>
                510 000 <span>FCFA</span>
              </p>
            </div>
            <div className="color-container">
              <p>color :</p>
              <ul className="color-list">
                {colors.map((color, index) => (
                  <li key={index} className="color">
                    <input type="radio" name="color" id={color} />
                    <label htmlFor={color}>
                      <span style={{ backgroundColor: `${color}` }}></span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="size-container">
              <div>
                <p>taille :</p>
                <span>voir les tailles</span>
              </div>
              <ul className="size-list">
                {sizes.map((size, index) => (
                  <li key={index} className="size">
                    <input type="radio" name="size" id={size} />
                    <label htmlFor={size}>{size.toLocaleUpperCase()}</label>
                  </li>
                ))}
              </ul>
            </div>
            <QuantitySelector />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores necessitatibus officia totam vero porro architecto
              blanditiis aperiam ullam odit expedita.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
