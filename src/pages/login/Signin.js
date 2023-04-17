import React, { useState } from "react";
import { Link } from "react-router-dom";
import Medias from "./Medias";
import axios from "axios";
import { SIGNIN_URL } from "../../utils/ApiUrl";

const Signin = ({ setSignup, setSignin }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    setSignin((prev) => !prev);
    setSignup((prev) => !prev);
  };
  // soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    await axios
      .post(`${SIGNIN_URL}`, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        return JSON.parse(JSON.stringify(res.data));
      })
      .then((res) => {
        console.log("mon log:", res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="signin w-100">
      <div className="signin-ctn w-100">
        <div className="logo-ctn w-100 flex align-center justify-center">
          <img src="/images/logo-letter.png" alt="" />
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="grid gap-20">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="pwd-ctn">
            <input
              type="password"
              placeholder="Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <div className="stay-connected flex gap-10 align-center">
              <input type="checkbox" name="connected" id="connected" />
              <label htmlFor="connected" className="fw-6">
                Rester connecté
              </label>
            </div>
            <div className="forgot-pwd">
              <Link>Mot de passe oublié ?</Link>
            </div>
          </div>
          <Medias />
          <input type="submit" value="CONNEXION" className="bg-black" />
          <div>
            <span className="error"></span>
            <span className="success"></span>
          </div>
        </form>
        <div className="link-to-signup grid justify-center">
          <span className="text-center">Pas encore inscrit ?</span>
          <span className="signup-link text-center" onClick={handleClick}>
            Inscrivez-vous ici
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
