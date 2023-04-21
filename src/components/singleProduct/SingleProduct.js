import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncProductSingle,
  getProductSingle,
  getSingleProductStatus,
} from "../../redux/feature/productSlice";
import Loader from "../loader/Loader";
import { STATUS } from "../../utils/status";
import Navbar from "../navbar/Navbar";
import { PriceInFca, oldPrcie } from "../../utils/feature";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const SingleProduct = () => {
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getSingleProductStatus);

  const { id } = useParams();
  const dispatch = useDispatch();

  // getting single product
  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));
  }, [id]);

  // reduire la quantité
  const increaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // augmenter la quantité
  const decreaseQty = () => {
    setQuantity(quantity + 1);
  };

  //ajouter un produit au panier
  const addToCart = () => {
    const item = {
      quantity: quantity,
    };
    console.log(item);
  };

  return (
    <div className="single-product">
      <Navbar />
      <div className="single-product-ctn container">
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
                  alt=""
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
                <div className="product-ref">
                  <p>Ref: CDER01203023</p>
                </div>
              </div>
              <div>
                <div className="price-container">
                  <p>
                    {PriceInFca(parseInt(product?.price).toLocaleString())}
                    <span> FCFA</span>
                  </p>
                  {/* <p>
                    {oldPrcie(product?.price)}
                    <span>FCFA</span>
                  </p> */}
                </div>
                <div className="colors">
                  <p>Color :</p>
                  {/* <ColorComponent /> */}
                </div>
                <div className="sizes">
                  <div>
                    <p>Taille :</p>
                    <span>voir les tailles</span>
                  </div>
                  {/* <SizeComponent /> */}
                </div>
                <div className="qty-btn-like-container">
                  <p>Quantité :</p>
                  <div className="qty-btn-like flex gap-20">
                    <div className="quantity-selector">
                      <span>
                        <RemoveIcon
                          onClick={increaseQty}
                          style={{ fontSize: 18 }}
                        />
                      </span>
                      <input value={quantity} readOnly />
                      <span>
                        <AddIcon
                          onClick={decreaseQty}
                          style={{ fontSize: 18 }}
                        />
                      </span>
                    </div>
                    <button onClick={addToCart}>Ajouter au panier</button>
                    {/* <div id="like">{quantity > 1 ? <Like /> : <DisLike />}</div> */}
                  </div>
                </div>
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
      {/* <SimilarProduct product={product} /> */}
    </div>
  );
};

export default SingleProduct;
