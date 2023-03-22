import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const MoreAboutUs = () => {
  return (
    <div className="more-about-us flex flex-column gap-30">
      <div className="container text-center">
        <p className="fw-5">
          Une gamme de marques et de créateurs avant-gardistes soigneusement
          sélectionnés, <br /> qui mettent en avant l'esthétique et l'ouverture
          sur le monde.
        </p>
        <Link to="/a-propos" id="to-about" className="flex flex-center">
          <span>En savoir plus sur nous</span>
          <ArrowRightAltIcon />
        </Link>
      </div>
    </div>
  );
};

export default MoreAboutUs;
