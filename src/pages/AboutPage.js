import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/Navigation/NavBar";

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title> THE ADDRESS - A propos</title>
        <meta name="description" content="Description de ma page" />
      </Helmet>
      <NavBar />
      <h1>AboutPage</h1>
    </div>
  );
};

export default AboutPage;
