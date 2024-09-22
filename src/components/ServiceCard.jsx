import "./ServiceCard.scss";
import cardImg1 from "../assets/service-card-1.jpg";
import cardImg2 from "../assets/service-card-2.jpg";
import cardImg3 from "../assets/service-card-3.jpg";

function ServiceCard() {
  const services = [
    {
      img: cardImg1,
      title: "Manikúra",
      link: "/service/manikura",
    },
    {
      img: cardImg2,
      title: "Pedikúra",
      link: "/service/pedikura",
    },
    {
      img: cardImg3,
      title: "Facial",
      link: "/service/facial",
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
