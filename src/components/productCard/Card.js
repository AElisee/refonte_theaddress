import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Card = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <li className="card relative">
      <Link>
        <div className="img-container">
          <img src={""} alt="" />
        </div>
        <div className="details">
          <div className="product-name flex align-center">
            <h5>title</h5>
            <p id="sepator">-</p>
            <p className="brand">Robe</p>
          </div>

          <div className="price flex">
            <span id="product-price">400 000 Fcfa</span>
            <span id="preview-price">510 000 Fcfa</span>
          </div>
        </div>
      </Link>
      <span
        className={`favorite-ctn absolute rounded flex align-center justify-center ${
          isFavorite ? "liked" : ""
        }`}
      >
        <FavoriteBorderIcon
          className={`fovatite-icon ${isFavorite ? "like" : "dislike"}`}
          onClick={handleFavorite}
        />
      </span>
    </li>
  );
};

export default Card;
