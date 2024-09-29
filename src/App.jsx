import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Introduction from "./pages/Introduction";
import Service from "./pages/Service";
import PriceList from "./pages/PriceList";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reserve from "./pages/Reserve";
import LoginForm from "./components/LoginForm";
import Admin from "./pages/Admin";
import "react-datepicker/dist/react-datepicker.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import "react-phone-input-2/lib/style.css";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  let location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  const [isScrollTop, setIsScrollTop] = useState(true);
  const handleScroll = () => {
    if (window.outerWidth > 1080) {
      if (window.scrollY === 0) {
        setIsScrollTop(true);
      } else {
        setIsScrollTop(false);
      }
    } else {
      setIsScrollTop(false);
    }
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });
  }, []);
  useEffect(() => {
    handleScrollToTop();
  }, [location]);
  return (
    <>
      {!isAdminPage && <Navbar isScrollTop={isScrollTop} />}

      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/service" element={<Service />} />
        <Route path="/price" element={<PriceList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<LoginForm />} />
      </Routes>
      {!isScrollTop ? <ScrollToTopButton /> : ""}
      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;
