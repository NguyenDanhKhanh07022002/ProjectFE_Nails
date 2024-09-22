import "./FindoutBanner.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import AOS from "aos";
import { useEffect } from "react";
function FindoutBanner(props) {
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
                            View prices
                          </font>
                        </font>
                      </span>
                      <h2 className="h2-xs">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Get the unique nails you dream of
                          </font>
                        </font>
                      </h2>
                      <Link to="/price">
                        <Button
                          hoverColor="blue"
                          title="Go to the price list"
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
