import React from "react";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="container">
        <div className="top"></div>
        <form>
          <input type="email" placeholder="E-mail" />
          <div id="pwd">
            <input type="password" placeholder="Mot de passe" />d
            <span>eye</span>
          </div>
          <div>
            <div className="stay-connected">
              <input type="checkbox" id="stay" />
              <label htmlFor="stay">Rester connecté</label>
            </div>
            <span>Mot de pass oublié</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
