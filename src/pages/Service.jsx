import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import BannerBackgroundLeft from "../components/BannerBackGroundLeft";
import serviceThumb01 from "../assets/service-img-thumb-01.jpg";
import serviceThumb02 from "../assets/service-img-thumb-02.jpg";
import serviceThumb03 from "../assets/service-img-thumb-03.jpg";
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
    "Akrylové nehty",
    "Gelové nehty",
    "Francouzská manikúra",
    "Shellac",
    "Japonská manikúra P Shine",
    "Umělé prodlužování a zpevňování vlastních nehtů",
    "Lakování nehtů",
    "Nail art – malování a zdobení nehtů",
    "Opravy, regenerační procedury",
  ];
  var listTextForThumb02 = [
    "Zdravotní pedikúra Footlogix",
    "Akrylové nehty",
    "Gelové nehty",
    "Lakování a zdobení nehtů",
    "Ošetření nohou v bublinkové lázni",
    "Odstranění otlaků, mozolů a zrohovatělé kůže",
    "Relaxační masáž",
  ];
  var listTextForThumb03 = [
    "Prodlužování řas – první aplikace",
    "Doplňování a barvení řas",
    "Francouzská manikúra",
    "Barvení obočí",
    "Odstraňování řas na přání",
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
            header={t("service.Cosmetic")}
            description=""
            lists={listTextForThumb03}
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
