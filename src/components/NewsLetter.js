import React from "react";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <div className="news-letter-container">
        <form>
          <p>
            Inscrivez vous à notre newsletter pour être toujours informés des
            nouveautés.
          </p>
          <input type="email" placeholder="Entrez votre email" />
          <div id="checkbox">
            <input type="checkbox" className="condition" />
            <label htmlFor="condition">
              J'ai lu et j'accepte les CGV et CGU{" "}
              <Link to="" id="to-condition">
                (Cliquer ici pour lire)
              </Link>
              <input type="submit" value="S'INSCRIRE" />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
