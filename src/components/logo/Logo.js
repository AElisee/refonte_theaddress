import React from "react";
// import "./logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"} className="w-100 h-100">
        <img src="/images/logo-tagline_400.png" alt="" className="w-100" />
      </Link>
    </div>
  );
};

export default Logo;
