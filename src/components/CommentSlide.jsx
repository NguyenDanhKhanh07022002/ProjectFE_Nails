import "./CommentSlide.scss";

import React from "react";
import Slider from "react-slick";
import CommentCard from "./CommentCard";
import { useTranslation } from "react-i18next";

import "aos/dist/aos.css";
function CommentSlide(props) {
  const { t } = useTranslation();
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="service-offer-title" data-aos="fade-left">
        <span className="service-offer-title-section">{t("Reference")}</span>
        <h2>{t("CustomerFeedback")}</h2>
      </div>
      <div className="slider-container" data-aos="fade-left">
        <Slider {...settings}>
          <div>
            <CommentCard />
          </div>
          <div>
            <CommentCard />
          </div>
          <div>
            <CommentCard />
          </div>
          <div>
            <CommentCard />
          </div>
          <div>
            <CommentCard />
          </div>
          <div>
            <CommentCard />
          </div>
          <div>
            <CommentCard />
          </div>
          <div>
            <CommentCard />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default CommentSlide;
