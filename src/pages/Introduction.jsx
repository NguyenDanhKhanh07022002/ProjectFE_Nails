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
  title: "MANIKÚRA",
  priceOption: [
    { priceName: "Manikúra klasik", priceNumber: "200 Kč", priceTxt: "" },
    {
      priceName: "Manikúra a obyčejné lakování O.P.I.",
      priceNumber: "250 Kč",
      priceTxt: "",
    },
    {
      priceName: "Manikúra a lakování CND Shellac (Barva)",
      priceNumber: "480 Kč",
      priceTxt: "",
    },
    {
      priceName: "Manikúra a lakování CND Shellac (Francie)",
      priceNumber: "550 Kč",
      priceTxt: "",
    },
  ],
};
const priceListOption2 = {
  section: "",
  title: "PEDIKÚRA",
  priceOption: [
    {
      priceName: "Footlogix pedikúra klasik",
      priceNumber: "450 Kč",
      priceTxt: "",
    },
    {
      priceName: "Footlogix pedikúra s gel-lakem",
      priceNumber: "590 Kč",
      priceTxt: "",
    },
    {
      priceName: "Footlogix pedikúra s CND Shellac",
      priceNumber: "690 Kč",
      priceTxt: "",
    },
    {
      priceName: "Lakovanie gel-lakem",
      priceNumber: "350 Kč",
      priceTxt: "",
    },
    {
      priceName: "Lakovanie shellac bez pedikúry",
      priceNumber: "450 Kč",
      priceTxt: "",
    },
  ],
};
const priceListOption3 = {
  section: "",
  title: "MODELACE UMĚLÝCH NEHTŮ",
  priceOption: [
    {
      priceName: "Gelové / Akrylové nehty klasik",
      priceNumber: "350 Kč",
      priceTxt: "",
    },
    {
      priceName: "Gelové / Akrylové nehty s lakovaním",
      priceNumber: "450 Kč",
      priceTxt: "",
    },
    {
      priceName: "Gelové / Akrylové nehty s lakovaním CND Shellac",
      priceNumber: "550 Kč",
      priceTxt: "",
    },
    {
      priceName: "Nová aplikácia plus (+)",
      priceNumber: "50 Kč",
      priceTxt: "",
    },
    {
      priceName: "Dlouhé nehty plus (+)",
      priceNumber: "od 50 Kč",
      priceTxt: "",
    },
  ],
};
const priceListOption4 = {
  section: "",
  title: "ZDOBENÍ NEHTŮ",
  priceOption: [
    {
      priceName: "Malování",
      priceNumber: "od 15 Kč",
      priceTxt: "",
    },
    {
      priceName: "Kompletní malování",
      priceNumber: "od 140 Kč",
      priceTxt: "",
    },
    {
      priceName: "Kamínky dle velikosti",
      priceNumber: "5 Kč",
      priceTxt: "",
    },
    {
      priceName: "Mašlička/ks",
      priceNumber: "30 Kč",
      priceTxt: "",
    },
    {
      priceName: "Komplet magnetický efekt",
      priceNumber: "100 Kč",
      priceTxt: "",
    },
    {
      priceName: "Komplet pigment",
      priceNumber: "100 Kč",
      priceTxt: "",
    },
    {
      priceName: "Airbrush/Francie",
      priceNumber: "80 Kč",
      priceTxt: "",
    },
  ],
};
const priceListOption5 = {
  section: "",
  title: "ÚPRAVY NEHTŮ",
  priceOption: [
    {
      priceName: "1 nehet",
      priceNumber: "50 Kč",
      priceTxt: "",
    },
    {
      priceName: "Odstranění v případě nové aplikace",
      priceNumber: "50 Kč",
      priceTxt: "",
    },
    {
      priceName: "Odstraněni gelových / akrylových nehtů",
      priceNumber: "50 Kč",
      priceTxt: "",
    },
    {
      priceName: "Odstraněni CND Shellac nehtů",
      priceNumber: "150 Kč",
      priceTxt: "",
    },
    {
      priceName: "Změna barvy",
      priceNumber: "150 Kč",
      priceTxt: "",
    },
  ],
};
const priceListOption6 = {
  section: "",
  title: "PRODLUŽOVÁNÍ ŘAS",
  priceOption: [
    {
      priceName: "Prodlužování řas",
      priceNumber: "700 Kč (NOVÁ APLIKACE)",
      priceTxt: "",
    },
    {
      priceName: "Prodlužování řas",
      priceNumber: "550 Kč (DOPLNĚNÍ)",
      priceTxt: "",
    },
    {
      priceName: "Prodlužování řas 'volume'",
      priceNumber: "850 Kč (NOVÁ APLIKACE)",
      priceTxt: "",
    },
    {
      priceName: "Prodlužování řas 'volume'",
      priceNumber: "700 Kč (NOVÁ APLIKACE)",
      priceTxt: "",
    },
    {
      priceName: "Úprava obočí",
      priceNumber: "80 Kč",
      priceTxt: "",
    },
    {
      priceName: "Barvení obočí",
      priceNumber: "80 Kč",
      priceTxt: "",
    },
    {
      priceName: "Barvení řas",
      priceNumber: "100 Kč",
      priceTxt: "",
    },
  ],
};
const priceListOption7 = {
  section: "",
  title: "MASÁŽE",
  priceOption: [
    {
      priceName: "Masáž nohou ",
      priceNumber: "390 Kč (30 MIN)",
      priceTxt: "",
    },
    {
      priceName: "Masáž nohou ",
      priceNumber: "790 Kč (60 MIN)",
      priceTxt: "",
    },
    {
      priceName: "THE SPA masáž (Tradiční VietNamská + olejová)",
      priceNumber: "430 Kč (30 MIN)",
      priceTxt: "",
    },
    {
      priceName: "THE SPA masáž (Tradiční VietNamská + olejová)",
      priceNumber: "830 Kč (60 MIN)",
      priceTxt: "",
    },
  ],
};
function Introduction() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const priceOption1 = useMemo(() => priceListOption1, []);
  const priceOption2 = useMemo(() => priceListOption2, []);
  const priceOption3 = useMemo(() => priceListOption3, []);
  const priceOption4 = useMemo(() => priceListOption4, []);
  const priceOption5 = useMemo(() => priceListOption5, []);
  const priceOption6 = useMemo(() => priceListOption6, []);
  const priceOption7 = useMemo(() => priceListOption7, []);
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
