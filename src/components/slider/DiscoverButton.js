import React from "react";
import { Link } from "react-router-dom";

const DiscoverButton = ({ link }) => {
  return (
    <Link to={`/${link}`} className="btn btn-black">
      découvrir
    </Link>
  );
};

export default DiscoverButton;
