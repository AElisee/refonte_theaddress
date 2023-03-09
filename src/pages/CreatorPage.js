import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/Navigation/NavBar";

const CreatorPage = () => {
  return (
    <div>
      <Helmet>
        <title> THE ADDRESS - Créateurs</title>
        <meta name="description" content="Description de ma page" />
      </Helmet>
      <NavBar />
      <h1>CreatorPage</h1>
    </div>
  );
};

export default CreatorPage;
