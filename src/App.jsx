import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Introduction from "./pages/Introduction";
import Service from "./pages/Service";
import PriceList from "./pages/PriceList";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reserve from "./pages/Reserve";
import "react-datepicker/dist/react-datepicker.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [isScrollTop, setIsScrollTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setIsScrollTop(true);
        } else {
          setIsScrollTop(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });
  }, []);
  return (
    <>
      <Navbar isScrollTop={isScrollTop} />

      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/service" element={<Service />} />
        <Route path="/price" element={<PriceList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
