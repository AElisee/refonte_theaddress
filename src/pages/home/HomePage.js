import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="man-woman container">
        <h3 className="text-center font-didot">faîtes votre choix</h3>
        <div className="choise-ctn">
          <div className="man-ctn w-100 relative">
            <div className="img-container">
              <img src="" alt="" />
              <Link
                to={"/homme"}
                className="link bg-black-light absolute absolute-center"
              >
                Homme
              </Link>
            </div>
          </div>
          <div className="woman-ctn w-100 relative">
            <div className="img-container">
              <img src="" alt="" />
              <Link
                to={"/femme"}
                className="link bg-black-light absolute absolute-center"
              >
                Femme
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <span>section2</span>
      </section>
    </div>
  );
};

export default HomePage;
