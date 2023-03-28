import React from "react";
import { Link } from "react-router-dom";
import { PriceInFca } from "../../utils/functions";

const FeaturedCard = ({ prod }) => {
  const encodeTitle = encodeURIComponent(prod.title.replace(/ /g, "-"));
  return (
    <div className="card">
      <Link to={`/produits/${encodeTitle}/${prod.id}`}>
        <div className="img-container">
          <img src={prod.images[0]} alt="" />
        </div>
        <div className="infos">
          <p>ACLER</p>
          <p>TOP DONNELLEY</p>
          <p>{PriceInFca(prod.price).toLocaleString()} Fcfa</p>
          <p>4-6-8/AU/US</p>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedCard;
