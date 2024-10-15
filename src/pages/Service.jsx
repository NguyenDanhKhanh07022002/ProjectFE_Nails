import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import BannerBackgroundLeft from "../components/BannerBackgroundLeft";
import serviceThumb01 from "../assets/service-img-thumb-01.jpg";
import serviceThumb02 from "../assets/service-img-thumb-02.jpg";
import serviceThumb03 from "../assets/service-img-thumb-03.jpg";
import serviceThumb04 from "../assets/massage.jpeg";
import serviceHeroBanner from "../assets/serviceHero.jpg";
import bigBannerImage from "../assets/bigBanner/banner-rezervace2.jpg";

import CommentSlide from "../components/CommentSlide";
import PageHeroBanner from "../components/PageHeroBanner";
import FooterBanner from "../components/FooterBanner";
import FindoutBanner from "../components/FindoutBanner";
function Service() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  var listTextForThumb01 = [
    t("service.option_1.text_1"),
    t("service.option_1.text_2"),
    t("service.option_1.text_3"),
    t("service.option_1.text_4"),
    t("service.option_1.text_5"),
    t("service.option_1.text_6"),
    t("service.option_1.text_7"),
    t("service.option_1.text_8"),
    t("service.option_1.text_9"),
  ];
  var listTextForThumb02 = [
    t("service.option_2.text_1"),
    t("service.option_2.text_2"),
    t("service.option_2.text_3"),
    t("service.option_2.text_4"),
    t("service.option_2.text_5"),
    t("service.option_2.text_6"),
    t("service.option_2.text_7"),
  ];
  var listTextForThumb03 = [
    t("service.option_3.text_1"),
    t("service.option_3.text_2"),
    t("service.option_3.text_3"),
    t("service.option_3.text_4"),
    t("service.option_3.text_5"),
  ];
  var listTextForThumb04 = [
    t("service.option_4.text_1"),
    t("service.option_4.text_2"),
  ];
  return (
    <>
      {loading ? (
        <div>
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
        </div>
      ) : (
        <div>
          <PageHeroBanner image={serviceHeroBanner} title={t("Service")} />
          <BannerBackgroundLeft
            image={serviceThumb01}
            title="naše služby"
            header={t("service.Manicure")}
            description=""
            lists={listTextForThumb01}
            isShowBackground={true}
          />
          <BannerBackgroundLeft
            image={serviceThumb02}
            title="naše služby"
            header={t("service.Pedicure")}
            description=""
            lists={listTextForThumb02}
            isShowBackground={true}
          />
          <BannerBackgroundLeft
            image={serviceThumb03}
            title="naše služby"
            header={t("service.Facial")}
            description=""
            lists={listTextForThumb03}
            isShowBackground={true}
          />
          <BannerBackgroundLeft
            image={serviceThumb04}
            title="naše služby"
            header={t("service.Massage")}
            description=""
            lists={listTextForThumb04}
            isShowBackground={true}
          />
          <FindoutBanner />
          <CommentSlide />
          <FooterBanner image={bigBannerImage} />
        </div>
      )}
    </>
  );
}

export default Service;
