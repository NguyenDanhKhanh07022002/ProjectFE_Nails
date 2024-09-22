import "./BannerBackgroundRight.scss";
import AOS from "aos";
import { useEffect } from "react";
function BannerBackgroundRight(props) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  const listItems = props.lists.map((list, index) => (
    <li key={index}>
      <p>{list}</p>
    </li>
  ));
  return (
    <>
      <div id="widget-container" data-aos="fade-up">
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
              <span className="banner-wrapper--text__title">{props.title}</span>
              <h3 className="banner-wrapper--text__header">{props.header}</h3>
              <h5 className="banner-wrapper--text__description">
                {props.description}
              </h5>
              <ul className="banner-wrapper--text__list">{listItems}</ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BannerBackgroundRight;
