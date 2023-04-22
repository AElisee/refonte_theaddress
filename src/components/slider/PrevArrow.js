import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prev-arrow">
      <ArrowBackIosIcon onClick={onClick} className="arrow" />
    </div>
  );
};

export default PrevArrow;
