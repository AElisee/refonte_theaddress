import React from "react";

const SlideCard = ({ pic }) => {
  return (
    <div className="slide-card">
      <img src={pic.picture} alt="" />
    </div>
  );
};

export default SlideCard;
