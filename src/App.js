import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import "./App.css";
import Footer from "./Components/Footer";
import Privacy from "./Components/Privacy";
import ScrollToTop from "./Components/ScrollToTop";
import SubProductPage from "./Components/Product/SubProduct.js";
import ProductPage from "./Components/Product/Product.js";
import WhatsappIcon from "./Components/ScrollToTop/WhatsappIcon.jsx";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/about" Component={About} /> */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/product/:productName" element={<ProductPage />} />
        <Route path="/product/:productName/:subProductName" element={<SubProductPage />} />
        <Route path="/legal&privacy" element={<Privacy />} />
      </Routes>
   <WhatsappIcon/>
      <Footer />
    </>
  );
};

export default App;
