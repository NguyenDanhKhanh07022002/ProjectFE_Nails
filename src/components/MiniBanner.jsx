import "./MiniBanner.scss";
import { Link } from "react-router-dom";
function MiniBanner(props) {
  return (
    <>
      <div className="mini-banner">
        <img src={props.image} alt="" />
        <div className="mini-banner-description">
          <div className="mini-banner-description-caption">
            <p className="txt-upcase">{props.title}</p>
            <h5 className="h5-lg pbox-link">
              <Link to={props.linkTo}>{props.linkTitle}</Link>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiniBanner;
