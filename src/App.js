import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/navbar/Navbar";

import About from "./pages/About/About";
import Footer from "./components/footer/Footer";
import Manpage from "./pages/genderPage/Manpage";
import WomanPage from "./pages/genderPage/WomanPage";

import NewsLetter from "./components/newsletter/Newsletter";
import Login from "./pages/login/Login";
import SingleProduct from "./components/singleProduct/SingleProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route
          path={["/", "/a-propos", "/homme", "/femme"]}
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="boutique/homme" element={<Manpage />} />
        <Route path="boutique/femme" element={<WomanPage />} />
        <Route path="boutique/homme/:nom/:id" element={<SingleProduct />} />
        <Route path="boutique/femme/:nom/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
