import "./ServiceOffer.scss";
import ServiceCard from "./ServiceCard";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import AOS from "aos";

function ServiceOffer() {
  const [isAosTriggered, setIsAosTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("widget-container");
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && !isAosTriggered) {
        AOS.init({
          duration: 1500,
          once: true,
        });
        setIsAosTriggered(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAosTriggered]);

  return (
    <>
      <div id="widget-container" data-aos="fade-up">
        <div className="service-offer-title">
          <span className="service-offer-title-section">Služby</span>
          <h2>Nabízíme</h2>
        </div>
        <section id="service-offer-container">
          <ServiceCard />
        </section>
      </div>
    </>
  );
}

export default ServiceOffer;
