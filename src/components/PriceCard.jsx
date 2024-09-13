import "./PriceCard.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
function PriceCard(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // thời gian hiệu ứng chạy
      once: true, // hiệu ứng chạy một lần duy nhất
    });
  }, []);
  return (
    <>
      <div id="pricing-card" data-aos="fade-right">
        <span className="pricing-section">nové nehty</span>
        <h5 className="pricing-title">Manikúra</h5>
        <ul className="pricing-list">
          <li className="pricing-6-item">
            <div className="detail-price">
              <div className="price-name">
                <h5>Pedikúra + gel lak</h5>
              </div>
              <div className="price-dots"></div>
              <div className="price-number">
                <h5>550 Kč</h5>
              </div>
            </div>
            <div className="price-text">
              <p className="p-md">
                <em>CND Shellac</em>
              </p>
            </div>
          </li>
          <li className="pricing-6-item">
            <div className="detail-price">
              <div className="price-name">
                <h5>Pedikúra + gel lak</h5>
              </div>
              <div className="price-dots"></div>
              <div className="price-number">
                <h5>570 Kč</h5>
              </div>
            </div>
            <div className="price-text">
              <p className="p-md">
                <em></em>
              </p>
            </div>
          </li>
          <li className="pricing-6-item">
            <div className="detail-price">
              <div className="price-name">
                <h5>Pedikúra + Francie</h5>
              </div>
              <div className="price-dots"></div>
              <div className="price-number">
                <h5>570 Kč</h5>
              </div>
            </div>
            <div className="price-text">
              <p className="p-md">
                <em></em>
              </p>
            </div>
          </li>
          <li className="pricing-6-item">
            <div className="detail-price">
              <div className="price-name">
                <h5>Pedikúra + Ombre</h5>
              </div>
              <div className="price-dots"></div>
              <div className="price-number">
                <h5>570 Kč</h5>
              </div>
            </div>
            <div className="price-text">
              <p className="p-md">
                <em></em>
              </p>
            </div>
          </li>
          <li className="pricing-6-item">
            <div className="detail-price">
              <div className="price-name">
                <h5>Pedikúra bez lakování</h5>
              </div>
              <div className="price-dots"></div>
              <div className="price-number">
                <h5>450 Kč</h5>
              </div>
            </div>
            <div className="price-text">
              <p className="p-md">
                <em></em>
              </p>
            </div>
          </li>
          <li className="pricing-6-item">
            <div className="detail-price">
              <div className="price-name">
                <h5>Lakování gel lakem</h5>
              </div>
              <div className="price-dots"></div>
              <div className="price-number">
                <h5>300 Kč</h5>
              </div>
            </div>
            <div className="price-text">
              <p className="p-md">
                <em></em>
              </p>
            </div>
          </li>
          <li className="pricing-6-item">
            <div className="detail-price">
              <div className="price-name">
                <h5>Footlogix + lak CND</h5>
              </div>
              <div className="price-dots"></div>
              <div className="price-number">
                <h5>650 Kč</h5>
              </div>
            </div>
            <div className="price-text">
              <p className="p-md">
                <em></em>
              </p>
            </div>
          </li>
          <li className="pricing-6-item">
            <div className="detail-price">
              <div className="price-name">
                <h5>Normální lak CND</h5>
              </div>
              <div className="price-dots"></div>
              <div className="price-number">
                <h5>400 Kč</h5>
              </div>
            </div>
            <div className="price-text">
              <p className="p-md">
                <em></em>
              </p>
            </div>
          </li>
          <li className="pricing-6-item">
            <div className="detail-price">
              <div className="price-name">
                <h5>Sundání pedikúry</h5>
              </div>
              <div className="price-dots"></div>
              <div className="price-number">
                <h5>150 Kč</h5>
              </div>
            </div>
            <div className="price-text">
              <p className="p-md">
                <em></em>
              </p>
            </div>
          </li>
          <li className="pricing-6-item">
            <div className="detail-price">
              <div className="price-name">
                <h5>Gel / Akryl</h5>
              </div>
              <div className="price-dots"></div>
              <div className="price-number">
                <h5>100 Kč / 10 ks</h5>
              </div>
            </div>
            <div className="price-text">
              <p className="p-md">
                <em></em>
              </p>
            </div>
          </li>
          <li className="pricing-6-item">
            <div className="detail-price">
              <div className="price-name">
                <h5>Pedikúra + třpytky</h5>
              </div>
              <div className="price-dots"></div>
              <div className="price-number">
                <h5>50 Kč / 10 ks</h5>
              </div>
            </div>
            <div className="price-text">
              <p className="p-md">
                <em></em>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PriceCard;
