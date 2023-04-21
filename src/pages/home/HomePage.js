import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import FaceIcon from "@mui/icons-material/Face";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const HomePage = () => {
  const [cookieValue, setCookieValue] = useState("");

  useEffect(() => {
    const cookie = cookies.get("TOKEN");
    setCookieValue(cookie || "");
    console.log("cookieValue", cookieValue);
  }, [cookieValue]);

  // tableau d'avis par defaut
  const satisfiedArray = ["", "", ""];
  return (
    <div className="home-page">
      <Navbar />
      <section className="man-woman container">
        <h3 className="text-center font-didot">faîtes votre choix</h3>
        <div className="choise-ctn">
          <div className="man-ctn w-100 relative">
            <div className="img-container">
              <img
                src="https://cdn.pixabay.com/photo/2014/08/05/10/31/waiting-410328_960_720.jpg"
                alt=""
                className="w-100 h-100"
              />
              <Link to={"/homme"} className="link   absolute absolute-center">
                Homme
              </Link>
            </div>
          </div>
          <div className="woman-ctn w-100 relative">
            <div className="img-container">
              <img
                src="https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_960_720.jpg"
                alt=""
                className="w-100 h-100"
              />
              <Link to={"/femme"} className="link   absolute absolute-center">
                Femme
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="satisfied-users container">
        <ul className="satisfied-users-ctn flex no-wrap align-center hide-scrollbar">
          {satisfiedArray.map((el, index) => (
            <li key={index} className="msg flex flex-column justify-center">
              <div className="user flex">
                <div className="avatar rounded flex align-center justify-center">
                  <FaceIcon className="face-icon" />
                </div>
                <div className="pseudo-grade">
                  <h4>Lorem, ipsum dolor.</h4>
                  <span className="grade">
                    <GradeIcon className="gradeIcon" />
                    <GradeIcon className="gradeIcon" />
                    <GradeIcon className="gradeIcon" />
                    <GradeIcon className="gradeIcon" />
                    <GradeIcon className="gradeIcon" />
                  </span>
                </div>
              </div>
              <div className="txt">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate nemo odio delectus eum esse temporibus, mollitia
                  omnis impedit provident quisquam.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default HomePage;
