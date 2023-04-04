import React from "react";
// import "./newsletter.scss";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="newsletter flex align-center  ">
      <div className="container newsletter-ctn">
        <form className="w-100">
          <p className="fw-7">
            Inscrivez vous à notre newsletter <br /> pour être toujours informés
            des nouveautés.
          </p>
          <input type="email" placeholder="Entrez votre email" />
          <div id="checkbox">
            <input type="checkbox" id="condition" />
            <label htmlFor="condition">
              J'ai lu et j'accepte les CGV et CGU
              <Link to="" id="to-condition">
                (Cliquer ici pour lire)
              </Link>
            </label>
          </div>
          <input
            className="bg-black text-white"
            type="submit"
            value="S'INSCRIRE"
          />
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
