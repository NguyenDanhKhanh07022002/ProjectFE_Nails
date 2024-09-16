import "./BannerBackgroundRight.scss";
import PriceCard from "./PriceCard";
function BannerBackgroundRightPrice(props) {
  return (
    <>
      <div id="widget-container">
        <section
          className={
            "container-right " +
            (props.isShowBackground ? "container-right-pink" : "")
          }
        >
          <div className="banner-wrapper" data-aos="fade-up">
            <div className="banner-wrapper--image">
              <img src={props.image} alt="img" />
            </div>
            <div className="banner-wrapper--text">
              <PriceCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BannerBackgroundRightPrice;
