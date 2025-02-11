import "./GoogleMap.scss";
import priceHeroBanner from "../assets/map.png";

function GoogleMap() {
  return (
    <>
      <div id="widget-container">
        <div className="contact-map">
          <div className="contact-map-wrapper">
            <div className="contact-map-item">
              <h5 className="h5-lg">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>NSC 89 Nails</font>
                </font>
              </h5>
              <p className="p-lg">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Lidická 1877/44, 60200 Brno - střed
                  </font>
                </font>
              </p>
              <p className="p-lg">
                <i>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Vedle Antonínská zastávka tramvaje
                    </font>
                  </font>
                </i>
              </p>
              <p className="p-lg">
                <a href="tel:00420776156 865">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      +420 608 412 416{" "}
                    </font>
                  </font>
                </a>
              </p>
              <p className="p-lg">
                <a href="mailto:info@nailsht86.cz">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      {/* info@nailsht86.cz{" "} */}
                    </font>
                  </font>
                </a>
              </p>
            </div>
            <div className="contact-map-item">
              <h5 className="h5-lg">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Opening hours:
                  </font>
                </font>
              </h5>
              <p className="p-lg">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Mon - Fri: </font>
                </font>
                <span>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      8:30 - 20:00
                    </font>
                  </font>
                </span>
              </p>
              <p className="p-lg">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Sat: </font>
                </font>
                <span>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      10:00 - 19:00
                    </font>
                  </font>
                </span>
              </p>
              <p className="p-lg">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>No: </font>
                </font>
                <span>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      by phone order
                    </font>
                  </font>
                </span>
              </p>
            </div>
            <div className="contact-map-item">
              <h5 className="h5-lg">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Operator:</font>
                </font>
              </h5>
              <p className="p-lg">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Thai Sinh Ton</font>
                </font>
              </p>
              <p className="p-lg">
                <font style={{ verticalAlign: "inherit" }}>
                </font>
              </p>
            </div>
            <div className="contact-map-item">
              <h5 className="h5-lg">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Punch:</font>
                </font>
              </h5>
              <p className="p-lg">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Lidická 1877/44, 602 00 Brno
                  </font>
                </font>
              </p>
            </div>
          </div>
          <div className="contact-location-wrapper">
            <a
              href="https://maps.app.goo.gl/wfubZB4AL8BKta7s5"
              target="_blank"
            >
              <img src={priceHeroBanner} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoogleMap;
