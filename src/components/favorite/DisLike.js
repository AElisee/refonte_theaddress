import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const DisLike = ({ handleLike }) => {
  return (
    <span id="dislike" className="flex flex-center" onClick={handleLike}>
      <FavoriteBorderIcon className="dislike-heart" />
    </span>
  );
};

export default DisLike;
