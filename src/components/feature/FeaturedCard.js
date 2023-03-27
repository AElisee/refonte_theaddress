import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard = ({ pic }) => {
  const encodeTitle = encodeURIComponent(pic.title.replace(/ /g, "-"));
  return (
    <div className="card">
      <Link to={`/produits/${encodeTitle}/${pic.id}`}>
        <div className="img-container">
          <img src={pic.images[0]} alt="" />
        </div>
        <div className="infos">
          <p>ACLER</p>
          <p>TOP DONNELLEY</p>
          <p>{pic.price} €</p>
          <p>4-6-8/AU/US</p>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedCard;
