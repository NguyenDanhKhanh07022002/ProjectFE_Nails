import "./PageHeroBanner.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function PageHeroBanner(props) {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="page-hero-banner"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="page-hero-banner--text">
          <h2>{props.title}</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/introduction">{t("Introduction")}</Link>
            </li>
            <li>{props.title}</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default PageHeroBanner;
