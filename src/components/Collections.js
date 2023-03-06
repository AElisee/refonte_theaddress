import React from "react";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <div className="collections">
      <ul className="container">
        <li className="item">
          <div className="item-container">
            <h4>découvrez les</h4>
            <h3>collections</h3>
            <Link to="/" id="to-collections">
              <span>tous les produits</span>
              <img
                src="/icons/arrow-narrow-right.svg"
                alt="arrow-narrow-right"
              />
            </Link>
          </div>
        </li>
        <li className="item">
          <div className="img-container">
            <img src="./images/against-light-gf4133d6eb_640.jpg" alt="" />
          </div>
          <div className="btn-container">
            <Link to="" id="link">
              Homme
            </Link>
          </div>
        </li>
        <li className="item">
          <div className="img-container">
            <img src="./images/coffee-gdc43834e2_640.jpg" alt="" />
          </div>
          <div className="btn-container">
            <Link to="" id="link">
              femme
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Collections;
