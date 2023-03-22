import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ColorComponent from "../components/ColorComponent";
import QuantitySelector from "../components/QuantitySelector";
import SimilarProduct from "../components/SimilarProduct";
import SizeComponent from "../components/SizeComponent";

const Product = () => {
  const pictures = useSelector((state) => state.pictures);
  const { id } = useParams();

  // const decodedTitle = decodeURIComponent(title.replace(/-/g, " "));
  let thisPic = pictures.find((pic) => pic.id === parseInt(id));

  return (
    <div className="product">
      <div className="single-product container-lg">
        <div className="product-container">
          <div className="img-container">
            <ul className="thumbnail-images">
              {/* {thumbnailImages.map((image, index) => (
              <li
                key={index}
                className="thumbnail"
                // onClick={() => setMainImage(image)}
              >
                <img src={image} alt={index + 1} />
              </li>
            ))} */}
            </ul>
            <div className="main-image">
              <img src={thisPic && thisPic.image} alt="main image" />
            </div>
          </div>
          <div className="text-container">
            <div>
              <div className="name-container">
                <h3 id="product-name">{thisPic.title.slice(0, 6)}</h3>
                <h4 id="product-subname">T-Shirt Summer Vibes</h4>
              </div>
              <div className="product-id">
                <h3>id produit</h3>
                <p>{thisPic.id}</p>
              </div>
            </div>
            <div>
              <div className="price-container">
                <p>
                  450 000 <span>FCFA</span>
                </p>
                <p>
                  510 000 <span>FCFA</span>
                </p>
              </div>
              <div className="colors">
                <p>Color :</p>
                <ColorComponent />
              </div>
              <div className="sizes">
                <div>
                  <p>Taille :</p>
                  <span>voir les tailles</span>
                </div>
                <SizeComponent />
              </div>
              <QuantitySelector />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores necessitatibus officia totam vero porro architecto
                blanditiis aperiam ullam odit expedita.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SimilarProduct thisPic={thisPic} />
    </div>
  );
};

export default Product;
