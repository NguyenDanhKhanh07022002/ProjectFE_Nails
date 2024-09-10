import "./ServiceCard.scss";
import cardImg from "../assets/service-card-1.jpg";
function ServiceCard() {
  return (
    <>
      <div id="service-card">
        <div className="image-wrapper">
          <img src={cardImg} alt="" />
          <div className="overlay"></div>
        </div>
        <h5>
          <a href="/service">
            <font>
              <font>Manikúra</font>
            </font>
          </a>
        </h5>
      </div>
    </>
  );
}

export default ServiceCard;
