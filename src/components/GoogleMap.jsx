import "./GoogleMap.scss";

function GoogleMap() {
  return (
    <>
      <div id="widget-container">
        <div className="contact-map">
          <div className="col-md-6">
            <div className="contact-map-item">
              <h5 className="h5-lg">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Nails HT 86</font>
                </font>
              </h5>
              <p className="p-lg">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Provazníkova 890/40, 613 00 Brno
                  </font>
                </font>
              </p>
              <p className="p-lg">
                <i>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      50 m from public transport stop 25, 26
                    </font>
                  </font>
                </i>
              </p>
              <p className="p-lg">
                <a href="tel:00420776156 865">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      +420 776 156 865{" "}
                    </font>
                  </font>
                </a>
              </p>
              <p className="p-lg">
                <a href="mailto:info@nailsht86.cz">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      info@nailsht86.cz{" "}
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
                      8:30 - 19:30
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
                      9:30 - 18:00
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
                  <font style={{ verticalAlign: "inherit" }}>Chu Han Do</font>
                </font>
              </p>
              <p className="p-lg">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>ID: 28041399</font>
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
                    Jugoslávská 595/26, 613 00 Brno
                  </font>
                </font>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <a
              href="https://www.google.com/maps/place/Provazn%C3%ADkova+890%2F40,+613+00+Brno-sever-%C4%8Cern%C3%A1+Pole,+%C4%8Cesko/@49.214178,16.623229,16z/data=!4m6!3m5!1s0x47129463308ffc77:0x3495eadd2b3ee7a8!8m2!3d49.2141775!4d16.623229!16s%2Fg%2F11c2ds1dj0?hl=cs-CZ&amp;entry=ttu"
              target="_blank"
            >
              <img
                fetchpriority="high"
                decoding="async"
                width="663"
                height="600"
                src="https://nailsht86.cz/wp-content/uploads/2024/04/mapa-nailsht86-mala.png"
                className="attachment-large size-large wp-image-2156"
                alt=""
                srcSet="https://nailsht86.cz/wp-content/uploads/2024/04/mapa-nailsht86-mala.png 663w, https://nailsht86.cz/wp-content/uploads/2024/04/mapa-nailsht86-mala-300x271.png 300w, https://nailsht86.cz/wp-content/uploads/2024/04/mapa-nailsht86-mala-24x22.png 24w, https://nailsht86.cz/wp-content/uploads/2024/04/mapa-nailsht86-mala-36x33.png 36w, https://nailsht86.cz/wp-content/uploads/2024/04/mapa-nailsht86-mala-48x43.png 48w"
                sizes="(max-width: 663px) 100vw, 663px"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoogleMap;
