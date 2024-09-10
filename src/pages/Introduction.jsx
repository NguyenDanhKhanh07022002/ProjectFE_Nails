import { useState } from "react";
import "./Introduction.scss";
import { Carousel } from "react-bootstrap";
import Banner1 from "../assets/Slide-1.jpg";
import Banner2 from "../assets/Slide-2.jpg";
import Banner3 from "../assets/Slide-3.jpg";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
function Introduction() {
  const { t } = useTranslation();
  return (
    <>
      <Carousel fade prevIcon={false} nextIcon={false}>
        <Carousel.Item>
          <img src={Banner1} alt="" />
          <Carousel.Caption>
            <h2>
              {t("heroBanner.header_1")}
              <span>{t("heroBanner.title_1")}</span>
            </h2>
            <Button hoverColor="white" title="BookingVisit" />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Banner3} alt="" />
          <Carousel.Caption>
            <h2>
              {t("heroBanner.header_2")}
              <span>{t("heroBanner.title_2")}</span>
            </h2>
            <Button hoverColor="white" title="BookingVisit" />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Banner2} alt="" />
          <Carousel.Caption>
            <h2>
              {t("heroBanner.header_3")}
              <span>{t("heroBanner.title_3")}</span>
            </h2>
            <Button hoverColor="white" title="BookingVisit" />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Introduction;
