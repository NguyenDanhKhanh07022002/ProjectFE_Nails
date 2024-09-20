import "./CommentSlide.scss";
import React from "react";
import Slider from "react-slick";
import CommentCard from "./CommentCard";
function CommentSlide(props) {
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
      <div className="service-offer-title">
        <span className="service-offer-title-section">Reference</span>
        <h2>Co o nás říkají zákazníci</h2>
      </div>
      <div className="slider-container">
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
