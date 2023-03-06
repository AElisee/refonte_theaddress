import React from "react";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prev-arrow" onClick={onClick}>
      <img src="./icons/chevron-left.svg" alt="chevron-left" />
    </div>
  );
};

export default PrevArrow;
