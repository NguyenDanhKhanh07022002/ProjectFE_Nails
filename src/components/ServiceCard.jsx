import "./ServiceCard.scss";
import cardImg1 from "../assets/nails.jpg";
import cardImg2 from "../assets/eyelashes1.jpg";
import cardImg3 from "../assets/pedicure.jpg";
import cardImg4 from "../assets/massage1.jpg";
import { useTranslation } from "react-i18next";

function ServiceCard() {
  const { t } = useTranslation();
  const services = [
    {
      img: cardImg1,
      title: t("service.Manicure"),
      link: "/service",
    },
    {
      img: cardImg2,
      title: t("service.Facial"),
      link: "/service",
    },
    {
      img: cardImg3,
      title: t("service.Pedicure"),
      link: "/service",
    },
    {
      img: cardImg4,
      title: t("service.Massage"),
      link: "/service",
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        <div id="service-card" key={index}>
          <div className="image-wrapper">
            <img src={service.img} alt={service.title} />
            <div className="overlay"></div>
          </div>
          <h5>
            <a href={service.link}>
              <font>{service.title}</font>
            </a>
          </h5>
        </div>
      ))}
    </>
  );
}

export default ServiceCard;
