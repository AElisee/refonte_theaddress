import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NextArrow = ({ onClick }) => {
  return (
    <div className="next-arrow">
      <ArrowForwardIosIcon onClick={onClick} />
    </div>
  );
};

export default NextArrow;
