import "./BannerBackgroundRight.scss";
import PriceCard from "./PriceCard";
import AOS from "aos";
import { useEffect } from "react";
function BannerBackgroundRightPrice(props) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
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
