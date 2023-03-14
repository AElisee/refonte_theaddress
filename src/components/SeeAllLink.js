import React from "react";
import { Link } from "react-router-dom";

const SeeAllLink = () => {
  return (
    <Link to="/boutique" id="all">
      <span>Voir tout</span>
      <img src="/icons/arrow-narrow-right.svg" alt="arrow-narrow-right" />
    </Link>
  );
};

export default SeeAllLink;
