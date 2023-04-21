import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import Medias from "./Medias";
import axios from "axios";
import { REGISTER_URL } from "../../utils/ApiUrl";

// url json pour les tests
import { JSON_REGISTER } from "../../utils/ApiUrl";

const Signup = ({ setSignup, setSignin }) => {
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [acceptCondition, setAcceptCondition] = useState(false);
  const form = useRef();
  const [submited, setSubmited] = useState(false);

  const handleClick = () => {
    setSignin((prev) => !prev);
    setSignup((prev) => !prev);
  };

  // soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmited(true);
    const formMes = document.querySelector(".formMessage");
    formMes.innerHTML = "";

    if (password !== confirmPwd) {
      setSubmited(false);
      formMes.innerHTML = `<div class="error">
          <p>Les mots de passe ne correspondent pas.</p>
        </div>`;

      return;
    }
    if (!acceptCondition) {
      setSubmited(false);
      formMes.innerHTML = `<div class="error">
          <p>Veuillez accepter les conditions générales.</p>
        </div>`;
      return;
    }

    if (gender && name && firstName && email && phone & password) {
      const newUser = {
        civilite: gender,
        name: name,
        prenoms: firstName,
        email: email,
        contacts: phone,
        password: password,
      };
      await axios
        .post(`${REGISTER_URL}`, newUser, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then(() => {
          setGender("");
          setName("");
          setFirstName("");
          setEmail("");
          setPhone("");
          setPassword("");
          setConfirmPwd("");
          setAcceptCondition("");
          setSubmited(false);

          formMes.innerHTML = `<div class="success">
          <p>Votre inscription a été enregistrée avec succès !</p>
         <p>Un email de confirmation vous a été envoyé à l'adresse que vous avez fournie.</p>
        </div>`;
          setTimeout(() => {
            formMes.innerHTML = "";
          }, 3000);
        })
        .catch((err) => {
          setSubmited(false);
          formMes.innerHTML = `<div class="error">
          <p>Une erreur s'est produite lors de l'inscription.</p>
        </div>`;

          console.log(err);
        });
    } else {
      setSubmited(false);
      formMes.innerHTML = `<div class="error">
          <p>Veuillez remplir tous les champs.</p>
        </div>`;
    }
  };

  return (
    <div className="signup">
      <div className="signup-ctn">
        <h3 className="text-center welcome-txt">
          Bienvenue ! <br /> Ouvrez un compte
        </h3>
        <form onSubmit={(e) => handleSubmit(e)} ref={form} className="relative">
          <div className="fields grid gap-20">
            <div className="sex-ctn flex gap-20">
              <label>Genre :</label>
              <div className="flex gap-7 align-center">
                <input
                  type="radio"
                  id="homme"
                  name="sexe"
                  value="homme"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="homme">Homme</label>
              </div>
              <div className="flex gap-7 align-center">
                <input
                  type="radio"
                  id="femme"
                  name="sexe"
                  value="femme"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="femme">Femme</label>
              </div>
            </div>
            <input
              type="text"
              placeholder="Nom *"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Prénoms *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Téléphone *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mot de passe *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirmer Mot de passe *"
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
            />
            <div className="accept-cdt flex align-center gap-20">
              <input
                type="checkbox"
                name="condition"
                id="condition"
                checked={acceptCondition}
                onChange={(e) => setAcceptCondition(e.target.checked)}
              />
              <label htmlFor="condition">
                J'acception les conditions d'utilisation et la politique de
                confidentialité de The Address
              </label>
            </div>
          </div>
          <div className="submit flex align-center justify-center">
            {!submited ? (
              <input
                type="submit"
                value="OUVRIR LE COMPTE"
                className="w-100 bg-black"
              />
            ) : (
              <img src="/icons/loader.svg" alt="" />
            )}
          </div>
        </form>
        <div className="formMessage flex align-center justify-center"></div>
        <div className="connect-with">
          <div className="flex align-center justify-between">
            <span className="have-account">Vous avez déjà un compte ?</span>
            <span className="connect-here" onClick={handleClick}>
              Connectez-vous ici
            </span>
          </div>
          <Medias />
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
