import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Introduction from "./pages/Introduction";
import Service from "./pages/Service";
import PriceList from "./pages/PriceList";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Reserve from "./pages/Reserve";
import { useTranslation } from "react-i18next";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/service" element={<Service />} />
        <Route path="/price" element={<PriceList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
      <div>
        <button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          EN
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage("cz");
          }}
        >
          CZ
        </button>
      </div>
    </>
  );
}

export default App;
