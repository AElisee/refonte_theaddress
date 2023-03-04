import React from "react";
import HeaderSlide from "./HeaderSlide";
import NavBar from "./Navigation/NavBar";

const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <HeaderSlide />
    </div>
  );
};

export default Header;
