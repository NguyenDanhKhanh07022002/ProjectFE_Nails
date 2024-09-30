import "./PriceList.scss";
import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";

import priceHeroBanner from "../assets/priceHero.jpg";
import pricePageImg1 from "../assets/pricePage/cenik-manikura2.jpg";
import pricePageImg2 from "../assets/pricePage/cenik-pedikura1.jpg";
import pricePageImg3 from "../assets/pricePage/price-page-img01.jpg";
import pricePageImg4 from "../assets/pricePage/Zdobení-Nehtú.jpg";
import pricePageImg5 from "../assets/pricePage/Úpravy-Nehtú.png";
import pricePageImg6 from "../assets/pricePage/cenik-kosmetika.jpg";
import pricePageImg7 from "../assets/pricePage/massage.jpg";
import bigBannerImage from "../assets/bigBanner/banner-1.jpg";

import BannerBackgroundRightPrice from "../components/BannerBackgroundRightPrice";
import CommentSlide from "../components/CommentSlide";
import FooterBanner from "../components/FooterBanner";
import FindoutBanner from "../components/FindoutBanner";
import PageHeroBanner from "../components/PageHeroBanner";

function PriceList() {
  const { t } = useTranslation();
  const priceListOption1 = {
    section: t("service.Manicure"),
    title: t("service.Manicure"),
    priceOption: [
      {
        priceName: t("priceMenu.option_1.text_1"),
        priceNumber: "150 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_1.text_2"),
        priceNumber: "250 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_1.text_3"),
        priceNumber: "500 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_1.text_4"),
        priceNumber: "550 Kč",
        priceTxt: "",
      },
    ],
  };
  const priceListOption2 = {
    section: t("service.Pedicure"),
    title: t("service.Pedicure"),
    priceOption: [
      {
        priceName: t("priceMenu.option_2.text_1"),
        priceNumber: "450 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_2.text_2"),
        priceNumber: "450 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_2.text_3"),
        priceNumber: "500 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_2.text_4"),
        priceNumber: "590 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_2.text_5"),
        priceNumber: "650 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_2.text_6"),
        priceNumber: "350 Kč",
        priceTxt: "",
      },
    ],
  };
  const priceListOption3 = {
    section: "",
    title: t("priceMenu.title_3"),
    priceOption: [
      {
        priceName: t("priceMenu.option_3.text_1"),
        priceNumber: "300 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_3.text_2"),
        priceNumber: "450 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_3.text_3"),
        priceNumber: "50 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_3.text_4"),
        priceNumber: "od 50 Kč",
        priceTxt: "",
      },
    ],
  };
  const priceListOption4 = {
    section: "",
    title: t("priceMenu.title_4"),
    priceOption: [
      {
        priceName: t("priceMenu.option_4.text_1"),
        priceNumber: "od 15Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_4.text_2"),
        priceNumber: "100 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_4.text_3"),
        priceNumber: "5 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_4.text_4"),
        priceNumber: "30 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_4.text_5"),
        priceNumber: "100 Kč",
        priceTxt: "",
      },
    ],
  };
  const priceListOption5 = {
    section: "",
    title: t("priceMenu.title_5"),
    priceOption: [
      {
        priceName: t("priceMenu.option_5.text_1"),
        priceNumber: "50 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_5.text_2"),
        priceNumber: "150 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_5.text_3"),
        priceNumber: "150 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_5.text_4"),
        priceNumber: "150 Kč",
        priceTxt: "",
      },
    ],
  };
  const priceListOption6 = {
    section: "",
    title: t("priceMenu.title_6"),
    priceOption: [
      {
        priceName: t("priceMenu.option_6.text_1"),
        priceNumber: "700 Kč " + t("priceMenu.new"),
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_6.text_2"),
        priceNumber: "550 Kč " + t("priceMenu.addition"),
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_6.text_3"),
        priceNumber: "850 Kč " + t("priceMenu.new"),
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_6.text_4"),
        priceNumber: "700 Kč " + t("priceMenu.addition"),
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_6.text_5"),
        priceNumber: "80 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_6.text_6"),
        priceNumber: "80 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_6.text_7"),
        priceNumber: "100 Kč",
        priceTxt: "",
      },
    ],
  };
  const priceListOption7 = {
    section: "",
    title: t("priceMenu.title_7"),
    priceOption: [
      {
        priceName: t("priceMenu.option_7.text_1"),
        priceNumber: "450 Kč (30 min)",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_7.text_2"),
        priceNumber: "850 Kč (60 min)",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_7.text_3"),
        priceNumber: "430 Kč (60 min)",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_7.text_4"),
        priceNumber: "830 Kč (60 min)",
        priceTxt: "",
      },
    ],
  };
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
        <div id="price-page">
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
          <FindoutBanner />
          <CommentSlide />
          <FooterBanner image={bigBannerImage} />
        </div>
      )}
    </>
  );
}

export default PriceList;
