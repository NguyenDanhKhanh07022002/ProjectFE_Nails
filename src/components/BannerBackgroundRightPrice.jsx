import "./BannerBackgroundRight.scss";
import PriceCard from "./PriceCard";
import AOS from "aos";
import { useEffect, useState } from "react";

function BannerBackgroundRightPrice(props) {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollDirection === "down") {
      AOS.init({
        duration: 1500,
        once: true,
      });
    }
  }, [scrollDirection]);

  return (
    <>
      <div id="widget-container">
        <section
          className={
            "container-right " +
            (props.isShowBackground ? "container-right-pink" : "")
          }
        >
          <div className="banner-wrapper">
            <div className="banner-wrapper--image" data-aos="fade-left">
              <img src={props.image} alt="img" />
            </div>
            <div className="banner-wrapper--text" data-aos="fade-right">
              <PriceCard priceList={props.priceList} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BannerBackgroundRightPrice;
