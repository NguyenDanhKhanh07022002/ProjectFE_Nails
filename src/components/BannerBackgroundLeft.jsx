import "./BannerBackgroundLeft.scss";
function BannerBackgroundLeft(props) {
  const listItems = props.lists.map((list, index) => (
    <li key={index}>
      <p>{list}</p>
    </li>
  ));
  return (
    <>
      <div id="widget-container">
        <section
          className={
            "container-left " +
            (props.isShowBackground ? "container-left-pink" : "")
          }
        >
          <div className="banner-wrapper">
            <div className="banner-wrapper--text">
              <span className="banner-wrapper--text__title">{props.title}</span>
              <h3 className="banner-wrapper--text__header">{props.header}</h3>
              <h5 className="banner-wrapper--text__description">
                {props.description}
              </h5>
              <ul className="banner-wrapper--text__list">{listItems}</ul>
            </div>
            <div className="banner-wrapper--image">
              <img src={props.image} alt="img" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BannerBackgroundLeft;
