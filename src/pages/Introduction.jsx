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
import BannerBackgroundLeft from "../components/BannerBackGroundLeft";
import OpenningHour from "../components/OpenningHour";
import ServiceOffer from "../components/ServiceOffer";
import PriceCard from "../components/PriceCard";
import ImageListMansory from "../components/ImageListMansory";
import CommentSlide from "../components/CommentSlide";
import FooterBanner from "../components/FooterBanner";
import FollowUsComponent from "../components/FollowUsComponent";
import { useTranslation } from "react-i18next";
const priceListOption1 = {
  section: "Manikúra",
  title: "Manikúra",
  priceOption: [
    { priceName: "Manikúra klasik", priceNumber: "150", priceTxt: "" },
    {
      priceName: "Manikúra a obyčejné lakování O.P.I.",
      priceNumber: "250",
      priceTxt: "",
    },
    {
      priceName: "Manikúra a lakování CND Shellac (Barva)",
      priceNumber: "500",
      priceTxt: "",
    },
    {
      priceName: "Manikúra a lakování CND Shellac (Francie)",
      priceNumber: "550",
      priceTxt: "",
    },
  ],
};
const priceListOption2 = {
  section: "",
  title: "Pedikúra",
  priceOption: [
    { priceName: "Pedikúra klas", priceNumber: "450", priceTxt: "" },
    {
      priceName: "Footlogix pedikúra klasik",
      priceNumber: "450",
      priceTxt: "",
    },
    {
      priceName: "Footlogix pedikúra s obyčajným lakovaním O.P.I",
      priceNumber: "500",
      priceTxt: "",
    },
    {
      priceName: "Footlogix pedikúra s gel-lakem",
      priceNumber: "590",
      priceTxt: "",
    },
    {
      priceName: "Footlogix pedikúra s CND Shellac",
      priceNumber: "650",
      priceTxt: "",
    },
    {
      priceName: "Lakovanie gel-lakem, shellac bez pedikúry",
      priceNumber: "350",
      priceTxt: "",
    },
  ],
};
function Introduction() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const priceOption1 = useMemo(() => priceListOption1, []);
  const priceOption2 = useMemo(() => priceListOption2, []);
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
            header="NAILS HT 86"
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
