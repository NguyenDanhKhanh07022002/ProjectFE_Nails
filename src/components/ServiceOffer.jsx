import "./ServiceOffer.scss";
import ServiceCard from "./ServiceCard";
function ServiceOffer() {
  return (
    <>
      <div id="widget-container">
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
