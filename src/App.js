import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CreatorPage from "./pages/CreatorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NewProductsPage from "./pages/NewProductsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/authentification" element={<LoginPage />} />
        <Route path="/nouvautes" element={<NewProductsPage />} />
        <Route path="/createurs" element={<CreatorPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
