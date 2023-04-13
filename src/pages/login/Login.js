import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Login = () => {
  const [signup, setSignup] = useState(true);
  const [signin, setSignin] = useState(false);

  return (
    <div className="login">
      <div className="login-ctn relative shadow-light">
        <Link
          to="/"
          className="close-modal absolute flex align-center justify-center"
        >
          <CloseIcon id="close-icon" />
        </Link>
        {signin && <Signin />}
        {signup && <Signup />}
      </div>
    </div>
  );
};

export default Login;
