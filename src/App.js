import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import About from "./pages/About/About";
import Manpage from "./pages/genderPage/Manpage";
import WomanPage from "./pages/genderPage/WomanPage";
import Login from "./pages/login/Login";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Confirmation from "./pages/login/Confirmation";
import CartPage from "./pages/cart/CartPage";
import NotFound from "./pages/notfound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/boutique/homme" element={<Manpage />} />
        <Route path="/boutique/femme" element={<WomanPage />} />
        <Route path="boutique/homme/:nom/:id" element={<SingleProduct />} />
        <Route path="boutique/femme/:nom/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panier" element={<CartPage />} />
        <Route path="/login/confirmation/:token" element={<Confirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
