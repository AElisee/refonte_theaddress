import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

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
              <img src="" alt="" />
              <Link
                to={"/homme"}
                className="link bg-black-light absolute absolute-center"
              >
                Homme
              </Link>
            </div>
          </div>
          <div className="woman-ctn w-100 relative">
            <div className="img-container">
              <img src="" alt="" />
              <Link
                to={"/femme"}
                className="link bg-black-light absolute absolute-center"
              >
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
                <div className="avatar rounded">
                  <img src="" alt="" />
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
