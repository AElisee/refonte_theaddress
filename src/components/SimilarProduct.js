import React from "react";
import ProductCard from "./ProductCard";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

//données par defaut
import { useSelector } from "react-redux";

const SimilarProducts = ({ thisPic }) => {
  const pictures = useSelector((state) => state.pictures);

  // lorque lorsqu'on clic sur les bouttons
  const scrollLeft = () => {
    const slide = document.querySelector(".card-container");
    slide.scrollLeft -= 300;
  };

  const scrollRight = () => {
    const slide = document.querySelector(".card-container");
    slide.scrollLeft += 300;
  };
  return (
    <div className="similar">
      <div className="container-lg">
        <div className="header">
          <h3>Sélectionnés juste pour vous</h3>
        </div>
        <div className="cards-btn">
          <ul className="card-container featured">
            {/* cette partie nécéssite d'autres fonctions pour optimiser lorsque le filtre ne retourne rien */}
            {pictures
              .filter((pic) => pic.category == thisPic.category)
              .map((pic) => (
                <ProductCard pic={pic} keyp={pic.id} />
              ))}
          </ul>
          <div className="scroll-btn">
            <span id="left-btn" onClick={scrollLeft}>
              <ArrowRightAltIcon
                style={{ transform: "rotate(180deg)", fontSize: 36 }}
              />
            </span>
            <span id="right-btn" onClick={scrollRight}>
              <ArrowRightAltIcon style={{ fontSize: 36 }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
