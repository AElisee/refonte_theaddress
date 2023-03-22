import React, { useState } from "react";
import { Link } from "react-router-dom";
import DisLike from "./favorite/DisLike";
import Like from "./favorite/Like";

const ProductCard = ({ pic }) => {
  const [isLiked, setIsLiked] = useState(false);
  // console.log(isLiked);

  const encodeTitle = encodeURIComponent(pic.title.replace(/ /g, "-"));

  const handleLike = () => {
    setIsLiked(!isLiked);
    // console.log(isLiked);
  };

  return (
    <li className="card">
      <Link to={`/produits/${encodeTitle}/${pic.id}`}>
        <div className="img-container">
          <img src={pic.image} alt="" />
        </div>
        <div className="details">
          <div className="product-name flex">
            <h5 className="text-uppercase">Lorem</h5>
            <p id="sepator">-</p>
            <p>Lorem ipsum</p>
          </div>

          <div className="price flex flex-between">
            <span id="new-price">450.000 FCFA</span>
            <span id="old-price">510.000 FCFA</span>
          </div>
        </div>
      </Link>
      {isLiked ? (
        <DisLike handleLike={handleLike} />
      ) : (
        <Like handleLike={handleLike} />
      )}
    </li>
  );
};

export default ProductCard;
