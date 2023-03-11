import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CreatorPage from "./pages/CreatorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Helmet } from "react-helmet";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import TrendsPage from "./pages/TrendsPage";
import ManProductsPage from "./pages/ManProductsPage";
import WomanProductsPage from "./pages/WomanProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

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
        <Route path="/boutique" element={<ProductsPage />} />
        <Route path="/details-produit" element={<ProductDetailsPage />} />
        <Route path="/boutique/homme" element={<ManProductsPage />} />
        <Route path="/boutique/femme" element={<WomanProductsPage />} />
        <Route path="/tendances" element={<TrendsPage />} />
        <Route path="/createurs" element={<CreatorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
