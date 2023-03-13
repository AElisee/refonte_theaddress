import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ el }) => {
  return (
    <li className="product-card">
      <Link to={`/${el.id}`}>
        <div className="img-container">
          <img src={el.picture} alt="" />
        </div>
        <div className="infos">
          <p>ACLER</p>
          <p>TOP DONNELLEY</p>
          <p>320.000 FCFA</p>
          <p>4-6-8/AU/US</p>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
