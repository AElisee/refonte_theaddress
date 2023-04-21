import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import NearMeIcon from "@mui/icons-material/NearMe";

const CartPage = () => {
  // ceci est un exemple pour test
  const [cartItem, setcartItem] = useState([]);
  console.log(cartItem.length);

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-ctn">
        {cartItem.length === 0 ? (
          <div className="empty-cart flex align-center justify-center w-100">
            <div className="container ">
              <span className="empty-msg text-center">
                Votre panier est vide
              </span>
              <p className="text-center">
                N'hésitez pas à parcourir nos différentes catégories de produits
                pour découvrir des articles qui correspondent à vos goûts.
              </p>
              <div className="fashion flex justify-center gap-20">
                <Link to="/boutique/homme">Mode Homme</Link>
                <Link to="/boutique/femme">Mode Femme</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="status-ctn">
              <div className="flex align-center justify-between">
                <span>Votre panier</span>
                <div className="status">a b c</div>
              </div>
            </div>

            <div className="cart-head">
              <div className="cart-ctr">
                <div className="cart-cth">
                  <span className="cart-ctxt">Articles</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Couleur</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Taille</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Qauntité</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Prix</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt"></span>
                </div>
              </div>
            </div>

            <div className="cart-body">
              <div className="cart-ctr">
                <div className="cart-ctd">
                  <div className="product flex gap-30">
                    <span className="thumbnail rounded">
                      <img src="" alt="" />
                    </span>
                    <div className="product-desc grid">
                      <p className="desc">Lorem ipsum dolor sit amet.</p>
                      <p className="ref">SDID884</p>
                    </div>
                  </div>
                </div>
                <div className="cart-ctd ">
                  <span className="cart-ctxt">blue</span>
                </div>
                <div className="cart-ctd">
                  <span className="cart-ctxt">M</span>
                </div>
                <div className="cart-ctd">
                  <span className="cart-ctxt">Qauntité</span>
                </div>
                <div className="cart-ctd">
                  <span className="cart-ctxt">47 450 Fcfa</span>
                </div>
                <div className="cart-ctd">
                  <span className="cart-ctxt flex align-center justify-end">
                    <ClearIcon
                      className="clear-icon"
                      onClick={() =>
                        console.log("supprimer le produit du panier")
                      }
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="cart-footer w-100">
              <div className="cart-footer-ctn grid ">
                <div className="promo-code relative flex align-center">
                  <input type="text" placeholder="CODE PROMO" />
                  <NearMeIcon className="absolute nearme-icon" />
                </div>
                <div className="total-price">1245874 Fcfa</div>
                <div className="btn-ctn flex  justify-end gap-10">
                  <button className="continue-btn">continuer mes achats</button>
                  <button className="next-btn">suivant</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
