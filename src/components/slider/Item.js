import React from "react";
import { Link } from "react-router-dom";

const Item = ({ img }) => {
  return (
    <div className="slide-item relative">
      <img src={img} alt="" />
      <Link to="" className="btn absolute">
        découvrir
      </Link>
    </div>
  );
};

export default Item;
