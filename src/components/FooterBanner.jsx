import "./FooterBanner.scss";
import Button from "./Button";
import { useTranslation } from "react-i18next";
function FooterBanner(props) {
  const { t } = useTranslation();
  return (
    <>
      <div id="widget-container">
        <section
          id="banner-1"
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        >
          <div>
            <div>
              <div>
                <div className="banner-1-txt text-center white--color">
                  <h5 className="h5-xl">{t("FootBanner.title")}</h5>
                  <h3>{t("FootBanner.des_1")} </h3>
                  <h2>{t("FootBanner.des_2")}</h2>
                  <a href="/rezervace/">
                    <Button
                      hoverColor="white"
                      title={t("FootBanner.BookingVisit")}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FooterBanner;
