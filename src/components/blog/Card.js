import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, img }) => {
  return (
    <li className="card">
      <Link to="">
        <div className="img-container h-100 w-100">
          <img
            className="h-100 w-100"
            // ceci est juste pour l'integration remplacer aveec les vraies datas
            src={
              img
                ? img
                : "https://images.pexels.com/photos/7307577/pexels-photo-7307577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
          />
        </div>
      </Link>
      <Link className="description">
        <h3 className="title">{title ? title : "Lorem ipsum dolor sit"}</h3>
        <p className="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          rem quidem perferendis porro deserunt fugit provident, eum
          exercitationem nihil numquam.
        </p>
      </Link>
    </li>
  );
};

export default Card;
