import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";

const ForgotPassword = () => {
  return (
    <div className="forgot-pwd w-100">
      <div className="forgot-pwd-ctn text-center">
        <span>Mot de passe oublié ?</span>
        <span>
          Entrez l'adresse e-mail vérifiée de votre compte utilisateur et nous
          vous enverrons un lien de réinitialisation de mot de passe.
        </span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="submit" value={"ENVOYER"} className="bg-black" />
        </form>
        <div className="go-back flex align-center justify-center">
          <ArrowRightAltSharpIcon
            style={{ transform: "rotate(180deg)", width: 35, height: 35 }}
          />
          <Link to={"/"} className="fw-6">
            Revenir sur le site{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
