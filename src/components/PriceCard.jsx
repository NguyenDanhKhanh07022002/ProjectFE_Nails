import "./PriceCard.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
function PriceCard(props) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <div id="pricing-card" data-aos="fade-right">
        <span className="pricing-section">{props.priceList.section}</span>
        <h5 className="pricing-title">{props.priceList.title}</h5>
        <ul className="pricing-list">
          {props.priceList.priceOption.map((e) => (
            <>
              <li className="pricing-6-item">
                <div className="detail-price">
                  <div className="price-name">
                    <h5>{e.priceName}</h5>
                  </div>
                  <div className="price-dots"></div>
                  <div className="price-number">
                    <h5>{e.priceNumber}</h5>
                  </div>
                </div>
                <div className="price-text">
                  <p className="p-md">
                    <em>{e.priceTxt}</em>
                  </p>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PriceCard;
