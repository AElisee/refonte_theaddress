import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const CollectionComponent = () => {
  return (
    <div className="collections flex ">
      <ul className="container-lg flex flex-center gap-30">
        <li className="item flex flex-center text-uppercase item-1">
          <div className="item-container">
            <h4>découvrez les</h4>
            <h3>collections</h3>
            <Link to="/produits" id="to-collections">
              <span>tous les produits</span>
              <ArrowRightAltIcon />
            </Link>
          </div>
        </li>
        <li className="item item-2 flex flex-center text-uppercase">
          <div className="img-container">
            <img src="./images/man.png" alt="" />
          </div>
          <div className="btn-container">
            <Link to="/produits/homme" id="link" className="w-100 h-100">
              Homme
            </Link>
          </div>
        </li>
        <li className="item item-3 flex flex-center text-uppercase">
          <div className="img-container">
            <img src="./images/women.png" alt="" />
          </div>
          <div className="btn-container">
            <Link to="/produits/femme" id="link" className="w-100 h-100">
              femme
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CollectionComponent;
