import React from "react";
// import "./navbar.scss";
import Logo from "../logo/Logo";
import { Link, NavLink } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const Navbar = () => {
  return (
    <div className="navbar shadow-light">
      <div className="container">
        <Logo />
        <div className="navbar-links flex justify-between">
          <div className="left">
            <ul>
              <li>
                <NavLink
                  to="a-propos"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  A propos
                </NavLink>
                <NavLink
                  to="boutique/homme"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  Homme
                </NavLink>
                <NavLink
                  to="boutique/femme"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  Femme
                </NavLink>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="categories-links">catégories links</div>
          <div className="right flex align-center">
            <select name="lang" id="lang">
              <option value="français">Fr</option>
              <option value="anglais">En</option>
            </select>
            <Link to={"/login"}>Se connecter</Link>
            <SearchOutlinedIcon className="icon" />
            <select name="lang" id="currency">
              <option value="euro">Euro</option>
              <option value="fcfa">XOF</option>
            </select>
            <div className="cart-icon">
              <LocalMallOutlinedIcon className="icon" /> <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
