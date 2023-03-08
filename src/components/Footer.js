import React from "react";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="top-section">
          <div className="top-section-container">
            <div className="top-section-item">
              <div className="icon">
                <img src="./icons/produits-auth.svg" alt="" />
              </div>
              <p>PRODUITS AUTHENTIQUES</p>
            </div>
            <div className="top-section-item">
              <div className="icon">
                <img src="./icons/paiement-secur.svg" alt="" />
              </div>
              <p>PAIEMENT SÉCURISÉ</p>
            </div>
            <div className="top-section-item">
              <div className="icon">
                <img src="./icons/envoi-livraison.svg" alt="" />
              </div>
              <p>ENVOIE ET LIVRAISON À L'INTERNATIONAL</p>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <ul>
            <h3>THE ADDRESS</h3>
            <li>
              <Link to="/a-propos">À PROPOS</Link>
            </li>
            <li>
              <Link to="">VISITEZ LA BOUTIQUE</Link>
            </li>
            <li>
              <Link to="">MAGAZINE</Link>
            </li>
            <li>
              <Link to="">CONDITION D'UTILISATION</Link>
            </li>
            <li>
              <Link to="">CONDITION GÉNÉRALE DE VENTE</Link>
            </li>
            <li>
              <Link to="">POLITIQUE DE CONFIDENTIALITÉ</Link>
            </li>
          </ul>
          <ul>
            <h3>SERVICE CLIENT</h3>
            <li>
              <Link to="">CONTACTS</Link>
            </li>
            <li>
              <Link to="">GUIDE DES TAILLES</Link>
            </li>
            <li>
              <Link to="">GUIDE DES TAILLES</Link>
            </li>
            <li>
              <Link to="">PAIEMENT & SÉCURITÉ</Link>
            </li>
            <li>
              <Link to="">INFORMATION SUR LES PRODUITS</Link>
            </li>
            <div className="payment-card-container">
              <h4>paiement sécurisé</h4>
              <ul className="payment-card">
                <li>carte 1</li>
                <li>carte 2</li>
                <li>carte 3</li>
              </ul>
            </div>
          </ul>
          <ul>
            <h3>NEWSLETTER</h3>
            <NewsLetter />
            <SocialMedia />
          </ul>
        </div>
        <div className="Copy-right">
          <p>
            © 2023, THE ADDRESS, tous droits réservés. Conception{" "}
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Orionis Digital Agency
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
