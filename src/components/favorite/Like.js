import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Like = ({ handleLike }) => {
  return (
    <span id="like" className="flex flex-center" onClick={handleLike}>
      <FavoriteBorderIcon />
    </span>
  );
};

export default Like;
