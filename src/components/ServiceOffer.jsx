import "./ServiceOffer.scss";
import ServiceCard from "./ServiceCard";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
function ServiceOffer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div id="widget-container" data-aos="fade-up">
        <div className="service-offer-title">
          <span className="service-offer-title-section">Služby</span>
          <h2>Nabízíme</h2>
        </div>
        <section id="service-offer-container">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </section>
      </div>
    </>
  );
}

export default ServiceOffer;
