import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-ctn">
        <h3 className="text-center">
          Bienvenue ! <br /> Ouvrez un compte
        </h3>
        <form className="">
          <div className="fields grid gap-20">
            <div className="sex-ctn">
              <label>Sexe :</label>
              <input type="radio" id="homme" name="sexe" value="homme" />
              <label for="homme">Homme</label>
              <input type="radio" id="femme" name="sexe" value="femme" />
              <label for="femme">Femme</label>
            </div>
            <input type="text" placeholder="Nom *" />
            <input type="text" placeholder="Prénoms *" />
            <input type="email" placeholder="Email *" />
            <input type="text" placeholder="Téléphone *" />
            <input type="password" placeholder="Mot de passe *" />
            <input type="password" placeholder="Confirmer Mot de passe *" />
            <div className="accept-cdt">
              <input type="checkbox" name="condition" id="condition" />
              <label htmlFor="">
                J'acception les conditions de confidentialité et la politique de
                confidentialité de The Address
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="OUVRIR LE COMPTE"
            className="w-100 bg-black"
          />
        </form>
        <div className="connect-with">
          <div className="flex align-center justify-between">
            <p className="have-account">Vous avez déjà un compte ?</p>
            <p className="connect-here">Connectez-vous ici</p>
          </div>
          <div className="medias flex justify-between">
            <div className="with-fcb flex align-center justify-center gap-10">
              facebbok
            </div>
            <div className="with-email flex align-center justify-center gap-10">
              email
            </div>
          </div>
        </div>
        <div className="go-back flex align-center">
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

export default Signup;
