import "./FindoutBanner.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function FindoutBanner(props) {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <div id="widget-container" data-aos="fade-up">
        <div className="elementor-widget-container">
          <section id="banner-5" className="banner-section division">
            <div className="container">
              <div className="banner-5-wrapper bg-fixed">
                <div className="row">
                  <div className="col-sm-10 col-md-8 col-lg-7">
                    <div className="banner-5-txt">
                      <span className="section-id black--color">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            {t("Findout.ViewPrice")}
                          </font>
                        </font>
                      </span>
                      <h2 className="h2-xs">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            {t("Findout.GetUnique")}
                          </font>
                        </font>
                      </h2>
                      <Link to="/price">
                        <Button
                          hoverColor="blue"
                          title={t("Findout.Gotoprice")}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default FindoutBanner;
