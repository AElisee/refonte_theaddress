import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AddIcon from "@mui/icons-material/Add";
import Logo from "./Logo";
import Cart from "./cart/Cart";

const NavBar = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
    console.log(showCart);
  };

  return (
    <div className="navbar bg-fff">
      <Link to="/">
        <Logo />
      </Link>
      <div className="menu m-0-auto flex flex-around gap-20">
        <div className="left">
          <ul className="links flex gap-30">
            <li className="link dropdown flex">
              homme <ArrowDropDownOutlinedIcon />
              <div className="categories-container">
                <div className="container-lg">
                  <div className="category">
                    <h4>homme</h4>
                  </div>
                  <ul className="sub-categories">
                    <li className="category-links">
                      <h4>vêtements</h4>
                      <Link to="/produits/homme">Chemises</Link>
                      <Link to="/produits/homme">Costumes & Vestes</Link>
                      <Link to="/produits/homme">Jeans</Link>
                      <Link to="/produits/homme">Pantalons & Shorts</Link>
                      <Link to="/produits/homme">T-shirts</Link>
                      <Link to="/produits/homme">Sous-vêtements</Link>
                      <Link to="/produits/homme">Blousons & Manteaux</Link>
                      <Link to="/produits" className="flex flex-start">
                        <AddIcon />
                        de vêtements
                        <ArrowRightAltIcon />
                      </Link>
                    </li>
                    <li className="category-links">
                      <h4>chaussures</h4>
                      <Link to="/produits/homme">baskets & Boots</Link>
                      <Link to="/produits/homme">Souliers habillés</Link>
                      <Link to="/produits/homme">Sandales</Link>
                      <Link to="/produits/homme">Espadrilles</Link>
                      <Link to="/produits/homme">Mocasins</Link>
                      <Link to="/produits" className="flex flex-start">
                        <AddIcon />
                        de Chaussures
                        <ArrowRightAltIcon />
                      </Link>
                    </li>
                    <li className="category-links">
                      <h4>sacs</h4>
                      <Link to="/produits/homme">Sacs à mains</Link>
                      <Link to="/produits/homme"> Sacs à dos/Bandoulère</Link>
                      <Link to="/produits/homme">
                        Pochettes & Porte-documents
                      </Link>
                      <Link to="/produits/homme">Sacs de voyage</Link>
                      <Link to="/produits/homme">Petite manoquinerie</Link>
                      <Link to="/produits" className="flex flex-start">
                        <AddIcon />
                        de Chaussures
                        <ArrowRightAltIcon />
                      </Link>
                    </li>
                    <li className="category-links">
                      <h4>accessoires</h4>
                      <Link to="/produits/homme">Bijoux</Link>
                      <Link to="/produits/homme">Ceintures & Ornements</Link>
                      <Link to="/produits/homme">Chapeaux</Link>
                      <Link to="/produits/homme">Autres</Link>
                      <Link to="/produits/homme">Lunettes</Link>
                      <Link to="/produits" className="flex flex-start">
                        <AddIcon />
                        d' Accessoires
                        <ArrowRightAltIcon />
                      </Link>
                    </li>
                    <li className="category-links">
                      <h4>autres</h4>
                      <Link to="/produits/homme">Casquettes</Link>

                      <Link to="/produits/homme">Cravetes</Link>
                      <Link to="/produits/homme">
                        Idées cadeaux St Valentin
                      </Link>
                      <Link to="/produits/homme">Créteurs</Link>
                      <Link to="/produits" className="flex flex-start">
                        voir tout
                        <ArrowRightAltIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="link dropdown flex">
              femmes <ArrowDropDownOutlinedIcon />
              <ul className="dropdown-menu" style={{ display: "none" }}>
                <span>femmes</span>
                <li>
                  <Link to="/">Chemises</Link>
                </li>
                <li>
                  <Link to="/">costumes & vestes</Link>
                </li>
                <li>
                  <Link to="/"> jeans</Link>
                </li>
                <li>
                  <Link to="/">pantalons & shorts</Link>
                </li>
                <li>
                  <Link to="/">pulls & mailles</Link>
                </li>
                <li>
                  <Link to="/">t-shirt</Link>
                </li>
                <li>
                  <Link to="/">sous vêtements</Link>
                </li>
                <li>
                  <Link to="/">bloussons & manteaux</Link>
                </li>
                <li>
                  <Link to="/">
                    <AddOutlinedIcon /> de vêtements <ArrowRightAltIcon />
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/a-propos">A propos</Link>
            </li>
            <li className="link dropdown flex">
              créateurs <ArrowDropDownOutlinedIcon />
            </li>
            <li>
              <Link to="/">tendances</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul className="items flex gap-10">
            <li>
              <Link to="/login">se connecter</Link>
            </li>
            <li>
              <SearchIcon />
            </li>
            <li>XOF</li>
            <li className="cart-icon">
              <LocalMallOutlinedIcon onClick={handleShowCart} />
              <span id="cart-counter">1</span>
            </li>
          </ul>
        </div>
      </div>
      {showCart && <Cart handleShowCart={handleShowCart} />}
    </div>
  );
};

export default NavBar;
