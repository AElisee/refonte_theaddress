import React, { useState } from "react";
import SignIn from "../components/login/SignIn";
import SignUp from "../components/login/SignUp";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="login">
      {signIn && <SignIn />}
      {signUp && <SignUp />}
    </div>
  );
};

export default Login;
