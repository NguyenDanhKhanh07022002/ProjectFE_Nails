import { useEffect, useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Introduction.scss";
import { Carousel } from "react-bootstrap";
import Banner1 from "../assets/Slide-1.jpg";
import Banner2 from "../assets/Slide-2.jpg";
import Banner3 from "../assets/Slide-3.jpg";
import storeImg from "../assets/store-img-1.jpg";
import voucherImg from "../assets/voucher.png";
import nailPolishes from "../assets/nail-polish.png";
import bigBannerImage from "../assets/bigBanner/banner-rezervace2.jpg";

import Button from "../components/Button";
import BannerBackgroundRight from "../components/BannerBackgroundRight";
import BannerBackgroundLeft from "../components/BannerBackgroundLeft";
import OpenningHour from "../components/OpenningHour";
import ServiceOffer from "../components/ServiceOffer";
import PriceCard from "../components/PriceCard";
import ImageListMansory from "../components/ImageListMansory";
import CommentSlide from "../components/CommentSlide";
import FooterBanner from "../components/FooterBanner";
import FollowUsComponent from "../components/FollowUsComponent";
import { useTranslation } from "react-i18next";

function Introduction() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const priceOption1 = {
    section: t("service.Manicure"),
    title: t("service.Manicure"),
    priceOption: [
      {
        priceName: t("priceMenu.option_1.text_1"),
        priceNumber: "200 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_1.text_2"),
        priceNumber: "250 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_1.text_3"),
        priceNumber: "480 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_1.text_4"),
        priceNumber: "550 Kč",
        priceTxt: "",
      },
    ],
  };
  const priceOption2 = {
    section: t("service.Pedicure"),
    title: t("service.Pedicure"),
    priceOption: [
      {
        priceName: t("priceMenu.option_2.text_2"),
        priceNumber: "450 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_2.text_4"),
        priceNumber: "590 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_2.text_5"),
        priceNumber: "690 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_2.text_6"),
        priceNumber: "350 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_2.text_7"),
        priceNumber: "450 Kč",
        priceTxt: "",
      },
    ],
  };
  const priceOption3 = {
    section: "",
    title: t("priceMenu.title_3"),
    priceOption: [
      {
        priceName: t("priceMenu.option_3.text_1"),
        priceNumber: "350 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_3.text_2"),
        priceNumber: "450 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_3.text_3"),
        priceNumber: "550 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_3.text_4"),
        priceNumber: "50 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_3.text_5"),
        priceNumber: "od 50 Kč",
        priceTxt: "",
      },
    ],
  };
  const priceOption4 = {
    section: "",
    title: t("priceMenu.title_4"),
    priceOption: [
      {
        priceName: t("priceMenu.option_4.text_1"),
        priceNumber: "od 15 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_4.text_2"),
        priceNumber: "od 140 Kč",
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
      {
        priceName: t("priceMenu.option_4.text_6"),
        priceNumber: "100 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_4.text_7"),
        priceNumber: "80 Kč",
        priceTxt: "",
      },
    ],
  };
  const priceOption5 = {
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
        priceNumber: "50 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_5.text_3"),
        priceNumber: "50 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_5.text_4"),
        priceNumber: "150 Kč",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_5.text_5"),
        priceNumber: "150 Kč",
        priceTxt: "",
      },
    ],
  };
  const priceOption6 = {
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
  const priceOption7 = {
    section: "",
    title: t("priceMenu.title_7"),
    priceOption: [
      {
        priceName: t("priceMenu.option_7.text_1"),
        priceNumber: "390 Kč (30 min)",
        priceTxt: "",
      },
      {
        priceName: t("priceMenu.option_7.text_2"),
        priceNumber: "790 Kč (60 min)",
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
  var listTextForBanner = [
    t("Introduction_Page.banner_des_1"),
    t("Introduction_Page.banner_des_2"),
  ];
  var listTextForVoucher = [
    t("Introduction_Page.voucher_des_1"),
    t("Introduction_Page.voucher_des_2"),
    t("Introduction_Page.voucher_des_3"),
  ];
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
        <div id="introduction-page">
          <Carousel fade prevIcon={false} nextIcon={false}>
            <Carousel.Item>
              <img src={Banner1} alt="" />
              <Carousel.Caption>
                <h2>
                  {t("heroBanner.header_1")}
                  <span>{t("heroBanner.title_1")}</span>
                </h2>
                <Link to="/reserve">
                  <Button hoverColor="white" title="BookingVisit" />
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Banner3} alt="" />
              <Carousel.Caption>
                <h2>
                  {t("heroBanner.header_2")}
                  <span>{t("heroBanner.title_2")}</span>
                </h2>
                <Link to="/reserve">
                  <Button hoverColor="white" title="BookingVisit" />
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Banner2} alt="" />
              <Carousel.Caption>
                <h2>
                  {t("heroBanner.header_3")}
                  <span>{t("heroBanner.title_3")}</span>
                </h2>
                <Link to="/reserve">
                  <Button hoverColor="white" title="BookingVisit" />
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <BannerBackgroundLeft
            image={storeImg}
            title={t("Introduction_Page.welcome")}
            header="NSC 89 Nails"
            description={t("Introduction_Page.introduce")}
            lists={listTextForBanner}
            isShowBackground={true}
          />
          <OpenningHour />
          <ServiceOffer />
          <BannerBackgroundRight
            image={voucherImg}
            title={t("Introduction_Page.voucher_text")}
            header={t("Introduction_Page.voucher_title")}
            description=""
            lists={listTextForVoucher}
            isShowBackground={true}
          />
          <BannerBackgroundLeft
            image={nailPolishes}
            title={t("BargainPrice")}
            header={t("Price")}
            description=""
            lists={[]}
            isShowBackground={false}
          />
          <div className="price-card-wrapper">
            <PriceCard priceList={priceOption1} />
            <PriceCard priceList={priceOption2} />
            <PriceCard priceList={priceOption4} />
            <PriceCard priceList={priceOption3} />
            <PriceCard priceList={priceOption5} />
            <PriceCard priceList={priceOption6} />
            <PriceCard priceList={priceOption7} />
          </div>
          <div className="link-to-page">
            <a href="/price">{t("ShowPrice")}</a>
          </div>
          <ImageListMansory />
          <div className="link-to-page">
            <Button hoverColor="blue" title="Reservation" />
          </div>
          <FollowUsComponent />
          <CommentSlide />
          <FooterBanner image={bigBannerImage} />
        </div>
      )}
    </>
  );
}

export default Introduction;
