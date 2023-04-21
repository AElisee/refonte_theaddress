import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

const Login = () => {
  const [signup, setSignup] = useState(false);
  const [signin, setSignin] = useState(true);
  const [forgotPwd, setForgotPwd] = useState(false);

  return (
    <div className="login">
      <div className="login-ctn relative shadow-light">
        <Link
          to="/"
          className="close-modal absolute flex align-center justify-center"
        >
          <CloseIcon id="close-icon" />
        </Link>
        {signin && (
          <Signin
            setSignin={setSignin}
            setSignup={setSignup}
            setForgotPwd={setForgotPwd}
          />
        )}
        {signup && <Signup setSignin={setSignin} setSignup={setSignup} />}
        {forgotPwd && <ForgotPassword setForgotPwd={setForgotPwd} />}
      </div>
    </div>
  );
};

export default Login;
