import React from "react";

const ProductCard = ({ el }) => {
  return (
    <li className="product-card">
      <div className="img-container">
        <img src={el.picture} alt="" />
      </div>
      <div className="infos">
        <p>ACLER</p>
        <p>TOP DONNELLEY</p>
        <p>320.000 FCFA</p>
        <p>4-6-8/AU/US</p>
      </div>
    </li>
  );
};

export default ProductCard;
