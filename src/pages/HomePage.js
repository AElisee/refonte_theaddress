import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import LearnMoreAboutUs from "../components/LearnMoreAboutUs";
import Discovery from "../components/Discovery";
import Collections from "../components/Collections";
import EditorialContent from "../components/EditorialContent";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title> THE ADDRESS - Bienvenue</title>
        <meta name="description" content="Description de ma page" />
      </Helmet>
      <Header />
      <LearnMoreAboutUs />
      <Discovery title="Nouveautés" id="newness" />
      <Discovery title="Tendances" id="trend" />
      <Collections />
      <EditorialContent />
      <NewsLetter />
      <Discovery title="LES DERNIERS BLOGS" />
      <Footer />
    </div>
  );
};

export default HomePage;
