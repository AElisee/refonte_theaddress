import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ColorComponent from "../components/ColorComponent";
import Loader from "../components/Loader";
import QuantitySelector from "../components/QuantitySelector";
import SimilarProduct from "../components/SimilarProduct";
import SizeComponent from "../components/SizeComponent";
import {
  fetchAsyncProductSingle,
  getProductSingle,
  getSingleProductStatus,
} from "../redux/feature/productSlice";

import { oldPrcie, PriceInFca } from "../utils/functions";
import { STATUS } from "../utils/status";

const Product = () => {
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getSingleProductStatus);

  const { id } = useParams();
  const dispatch = useDispatch();

  // getting single product
  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));
  }, [id]);

  // const decodedTitle = decodeURIComponent(title.replace(/-/g, " "));
  // let thisProd = products.find((prod) => prod.id === parseInt(id));

  const [thumbnail, setThumbnail] = useState(product?.images?.[0]);
  const [mainImage, setMainImage] = useState("");

  return (
    <div className="product">
      <div className="single-product container-lg">
        {productSingleStatus === STATUS.LOADING ? (
          <Loader />
        ) : (
          <div className="product-container">
            <div className="img-container">
              <ul className="thumbnail-images">
                {product.images?.map((image, index) => (
                  <li
                    key={index}
                    className="thumbnail"
                    onClick={() => {
                      setMainImage(image);
                    }}
                  >
                    <img src={image} alt={index + 1} />
                  </li>
                ))}
              </ul>
              <div className="main-image">
                <img
                  src={mainImage ? mainImage : product?.images?.[0]}
                  alt="main-image"
                />
              </div>
            </div>
            <div className="text-container">
              <div>
                <div className="name-container">
                  <h3 id="product-name">{product?.title}</h3>
                  <h4 id="product-subname">
                    {product.description?.substring(0, 30)}...
                  </h4>
                </div>
                <div className="product-id">
                  <h3>id produit</h3>
                  <p>{product?.id}</p>
                </div>
              </div>
              <div>
                <div className="price-container">
                  <p>
                    {PriceInFca(parseInt(product?.price)).toLocaleString()}
                    <span> FCFA</span>
                  </p>
                  <p>
                    {oldPrcie(product?.price).toLocaleString()}
                    <span>FCFA</span>
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
        )}
      </div>
      {/* <SimilarProduct thisProd={thisProd} /> */}
    </div>
  );
};

export default Product;
