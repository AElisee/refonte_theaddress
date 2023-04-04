import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/navbar/Navbar";

import About from "./pages/About/About";
import Footer from "./components/footer/Footer";
import Manpage from "./pages/genderPage/Manpage";
import WomanPage from "./pages/genderPage/WomanPage";
import Blog from "./components/blog/Blog";
import NewsLetter from "./components/newsletter/Newsletter";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/homme" element={<Manpage />} />
        <Route path="/femme" element={<WomanPage />} />
      </Routes>
      <Blog />
      <NewsLetter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
