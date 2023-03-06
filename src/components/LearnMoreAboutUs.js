import React from "react";
import { Link } from "react-router-dom";

const LearnMoreAboutUs = () => {
  return (
    <div className="learn-more-about-us">
      <div className="container">
        <p>
          Une gamme de marques et de créateurs avant-gardistes soigneusement
          sélectionnés, <br /> qui mettent en avant l'esthétique et l'ouverture
          sur le monde.
        </p>
        <Link to="/a-propos" id="to-about">
          <span>En savoir plus sur nous</span>
          <img src="/icons/arrow-narrow-right.svg" alt="arrow-narrow-right" />
        </Link>
      </div>
    </div>
  );
};

export default LearnMoreAboutUs;
