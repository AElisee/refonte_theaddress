import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CreatorPage from "./pages/CreatorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NewProductsPage from "./pages/NewProductsPage";
import { Helmet } from "react-helmet";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Helmet defaultTitle="THE ADDRESS - ">
        <meta name="description" content="Description de ma page" />
      </Helmet>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/authentification" element={<LoginPage />} />
        <Route path="/nouvautes" element={<NewProductsPage />} />
        <Route path="/createurs" element={<CreatorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
