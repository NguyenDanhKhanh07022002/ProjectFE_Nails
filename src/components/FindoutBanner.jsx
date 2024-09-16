import "./FindoutBanner.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import AOS from "aos";
function FindoutBanner(props) {
  return (
    <>
      <div id="widget-container" data-aos="fade-up">
        <div class="elementor-widget-container">
          <section id="banner-5" class="banner-section division">
            <div class="container">
              <div class="banner-5-wrapper bg-fixed">
                <div class="row">
                  <div class="col-sm-10 col-md-8 col-lg-7">
                    <div class="banner-5-txt">
                      <span class="section-id black--color">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            View prices
                          </font>
                        </font>
                      </span>
                      <h2 class="h2-xs">
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
