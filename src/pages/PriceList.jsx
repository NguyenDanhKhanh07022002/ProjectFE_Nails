import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";

import priceHeroBanner from "../assets/priceHero.jpg";
import pricePageImg1 from "../assets/pricePage/price-page-img01.jpg";
import pricePageImg2 from "../assets/pricePage/cenik-kosmetika.jpg";
import pricePageImg3 from "../assets/pricePage/cenik-manikura2.jpg";
import pricePageImg4 from "../assets/pricePage/cenik-manikura3-opravy.jpg";
import pricePageImg5 from "../assets/pricePage/cenik-pedikura1.jpg";
import pricePageImg6 from "../assets/pricePage/cenik-pedikura2.jpg";
import pricePageImg7 from "../assets/pricePage/cenik-kosmetika.jpg";
import bigBannerImage from "../assets/bigBanner/banner-1.jpg";

import BannerBackgroundRightPrice from "../components/BannerBackgroundRightPrice";
import CommentSlide from "../components/CommentSlide";
import FooterBanner from "../components/FooterBanner";
import FindoutBanner from "../components/FindoutBanner";
import PageHeroBanner from "../components/PageHeroBanner";
function PriceList() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const priceListOption1 = {
    section: "Manikúra",
    title: "Manikúra",
    priceOption: [
      { priceName: "Manikúra klasik", priceNumber: "250", priceTxt: "" },
      {
        priceName: "Manikúra a obycehné lakovàní O.P.I",
        priceNumber: "350",
        priceTxt: "",
      },
    ],
  };
  const priceListOption2 = {
    section: "",
    title: "Pedikúra",
    priceOption: [
      { priceName: "Pedikúra klasik", priceNumber: "250", priceTxt: "" },
      {
        priceName: "Pedikúra a obycehné lakovàní O.P.I",
        priceNumber: "350",
        priceTxt: "",
      },
    ],
  };
  const priceListOption3 = {
    section: "",
    title: "Modelace Umelých Nehtú",
    priceOption: [
      { priceName: "Pedikúra klasik", priceNumber: "250", priceTxt: "" },
      {
        priceName: "Pedikúra a obycehné lakovàní O.P.I",
        priceNumber: "350",
        priceTxt: "",
      },
    ],
  };
  const priceListOption4 = {
    section: "",
    title: "Zdobení Nehtú",
    priceOption: [
      { priceName: "Pedikúra klasik", priceNumber: "250", priceTxt: "" },
      {
        priceName: "Pedikúra a obycehné lakovàní O.P.I",
        priceNumber: "350",
        priceTxt: "",
      },
    ],
  };
  const priceListOption5 = {
    section: "",
    title: "Úpravy Nehtú",
    priceOption: [
      { priceName: "Pedikúra klasik", priceNumber: "250", priceTxt: "" },
      {
        priceName: "Pedikúra a obycehné lakovàní O.P.I",
        priceNumber: "350",
        priceTxt: "",
      },
    ],
  };
  const priceListOption6 = {
    section: "",
    title: "Prodluzování Ras",
    priceOption: [
      { priceName: "Pedikúra klasik", priceNumber: "250", priceTxt: "" },
      {
        priceName: "Pedikúra a obycehné lakovàní O.P.I",
        priceNumber: "350",
        priceTxt: "",
      },
    ],
  };
  const priceListOption7 = {
    section: "",
    title: "Oboci a rty",
    priceOption: [
      { priceName: "Pedikúra klasik", priceNumber: "250", priceTxt: "" },
      {
        priceName: "Pedikúra a obycehné lakovàní O.P.I",
        priceNumber: "350",
        priceTxt: "",
      },
    ],
  };
  const priceListOption8 = {
    section: "",
    title: "Masáze",
    priceOption: [
      { priceName: "Pedikúra klasik", priceNumber: "250", priceTxt: "" },
      {
        priceName: "Pedikúra a obycehné lakovàní O.P.I",
        priceNumber: "350",
        priceTxt: "",
      },
    ],
  };
  const priceListOption9 = {
    section: "",
    title: "Kosmetika",
    priceOption: [
      { priceName: "Pedikúra klasik", priceNumber: "250", priceTxt: "" },
      {
        priceName: "Pedikúra a obycehné lakovàní O.P.I",
        priceNumber: "350",
        priceTxt: "",
      },
    ],
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <PageHeroBanner image={priceHeroBanner} title={t("Price")} />
      <BannerBackgroundRightPrice
        image={pricePageImg1}
        isShowBackground={true}
        priceList={priceListOption1}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg2}
        isShowBackground={true}
        priceList={priceListOption2}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg3}
        isShowBackground={true}
        priceList={priceListOption3}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg4}
        isShowBackground={true}
        priceList={priceListOption4}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg5}
        isShowBackground={true}
        priceList={priceListOption5}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg6}
        isShowBackground={true}
        priceList={priceListOption6}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg7}
        isShowBackground={true}
        priceList={priceListOption7}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg1}
        isShowBackground={true}
        priceList={priceListOption8}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg2}
        isShowBackground={true}
        priceList={priceListOption9}
      />
      <FindoutBanner />
      <CommentSlide />
      <FooterBanner image={bigBannerImage} />
    </>
  );
}

export default PriceList;
