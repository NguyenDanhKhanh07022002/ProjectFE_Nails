import { useState } from "react";
import PageHeroBanner from "../components/PageHeroBanner";
import BannerBackgroundLeft from "../components/BannerBackGroundLeft";
import OpenningHour from "../components/OpenningHour";
import ImageListMansory from "../components/ImageListMansory";
import Button from "../components/Button";
import CommentSlide from "../components/CommentSlide";
import FooterBanner from "../components/FooterBanner";

import aboutHeroBanner from "../assets/aboutHero.jpg";
import storeImg from "../assets/store-outside.jpg";
import bigBannerImage from "../assets/bigBanner/banner-rezervace2.jpg";

import { useTranslation } from "react-i18next";
function AboutUs() {
  const { t } = useTranslation();
  const listTextForAboutUs = [
    "Jsme brněnské nehtové studio s přívětivými cenami. Manikúře a pedikúře se věnujeme přes 8 let. Sídlíme na adrese Provazníkova 890/40, cca 50 m od zastávky MHD linek 25 a 26.",
    "Studio je moderně vybavené. Naše specializace je manikúra, pedikúra a kosmetika.",
  ];
  return (
    <>
      <PageHeroBanner image={aboutHeroBanner} title={t("About")} />
      <BannerBackgroundLeft
        image={storeImg}
        title="Kdo jsme"
        header="Nails HT 86"
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
    </>
  );
}

export default AboutUs;
