import { useState, useEffect } from "react";
import PageHeroBanner from "../components/PageHeroBanner";
import BannerBackgroundLeft from "../components/BannerBackgroundLeft";
import OpenningHour from "../components/OpenningHour";
import ImageListMansory from "../components/ImageListMansory";
import Button from "../components/Button";
import CommentSlide from "../components/CommentSlide";
import FooterBanner from "../components/FooterBanner";

import aboutHeroBanner from "../assets/Slide-1.jpg";
import storeImg from "../assets/store-outside.jpg";
import bigBannerImage from "../assets/bigBanner/banner-rezervace2.jpg";

import { useTranslation } from "react-i18next";
function AboutUs() {
  const { t } = useTranslation();
  const listTextForAboutUs = [t("About_Page.des_1"), t("About_Page.des_2")];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
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
          <PageHeroBanner image={aboutHeroBanner} title={t("About")} />
          <BannerBackgroundLeft
            image={storeImg}
            title={t("About_Page.intro")}
            header="NSC 89 Nails"
            description=""
            lists={listTextForAboutUs}
            isShowBackground={false}
          />
          <OpenningHour />
          <ImageListMansory />
          <div className="link-to-page">
            <Button hoverColor="blue" title="Reservation" />
          </div>
          <CommentSlide />
          <FooterBanner image={bigBannerImage} />
        </div>
      )}
    </>
  );
}

export default AboutUs;
