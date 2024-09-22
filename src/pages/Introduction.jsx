import { useEffect } from "react";
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
import { useTranslation } from "react-i18next";

function Introduction() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { t } = useTranslation();
  var listTextForBanner = [
    "Zaměřujeme se na manikúru, pedikúru a kosmetiku.",
    "Sídlíme na adrese Provazníkova 890/40, cca 50 m od zastávky MHD linek 25 a 26.",
  ];
  var listTextForVoucher = [
    "Koupíte je osobně v našem studiu.",
    "Poukazy jsou v hodnotách 450 - 600 Kč.",
    "Platí 5 měsíců od vystavení.",
  ];
  return (
    <>
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
          title="vítejte"
          header="NAILS HT 86"
          description="Jsme brněnské nehtové studio s&nbsp;přívětivými cenami."
          lists={listTextForBanner}
          isShowBackground={true}
        />
        <OpenningHour />
        <ServiceOffer />
        <BannerBackgroundRight
          image={voucherImg}
          title="Udělejte radost"
          header="Dárkové poukazy"
          description=""
          lists={listTextForVoucher}
          isShowBackground={true}
        />
        <BannerBackgroundLeft
          image={nailPolishes}
          title="Výhodné ceny"
          header="Ceník"
          description=""
          lists={[]}
          isShowBackground={false}
        />
        <div className="price-card-wrapper">
          <PriceCard />
          <PriceCard />
        </div>
        <div className="link-to-page">
          <a href="/price">Zobrazit všechny ceny</a>
        </div>
        <ImageListMansory />
        <div className="link-to-page">
          <Button hoverColor="blue" title="Reservation" />
        </div>
        <CommentSlide />
        <FooterBanner image={bigBannerImage} />
      </div>
    </>
  );
}

export default Introduction;
