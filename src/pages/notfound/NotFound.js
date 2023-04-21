import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found flex align-center justify-center">
      <div className="container text-center">
        <p>Cette page est introuvable !</p>
        <Link to={"/"} className="fw-7">
          Retour à l'Accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
