import "./PriceList.scss";
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
      { priceName: "Manikúra klasik", priceNumber: "150 Kč", priceTxt: "" },
      {
        priceName: "Manikúra a obyčejné lakování O.P.I.",
        priceNumber: "250 Kč",
        priceTxt: "",
      },
      {
        priceName: "Manikúra a lakování CND Shellac (Barva)",
        priceNumber: "500 Kč",
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
    title: "Pedikúra",
    priceOption: [
      { priceName: "Pedikúra klas", priceNumber: "450 Kč", priceTxt: "" },
      {
        priceName: "Footlogix pedikúra klasik",
        priceNumber: "450 Kč",
        priceTxt: "",
      },
      {
        priceName: "Footlogix pedikúra s obyčajným lakovaním O.P.I",
        priceNumber: "500 Kč",
        priceTxt: "",
      },
      {
        priceName: "Footlogix pedikúra s gel-lakem",
        priceNumber: "590 Kč",
        priceTxt: "",
      },
      {
        priceName: "Footlogix pedikúra s CND Shellac",
        priceNumber: "650 Kč",
        priceTxt: "",
      },
      {
        priceName: "Lakovanie gel-lakem, shellac bez pedikúry",
        priceNumber: "350 Kč",
        priceTxt: "",
      },
    ],
  };
  const priceListOption3 = {
    section: "",
    title: "Modelace Umelých Nehtú",
    priceOption: [
      {
        priceName: "Gelové / Akrylové nehty klasik",
        priceNumber: "300 Kč",
        priceTxt: "",
      },
      {
        priceName: "Gelové / Akrylové nehty s lakovaním",
        priceNumber: "450 Kč",
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
    title: "Zdobení Nehtú",
    priceOption: [
      { priceName: "Malování", priceNumber: "od 15Kč", priceTxt: "" },
      { priceName: "Kompletní malování", priceNumber: "100 Kč", priceTxt: "" },
      { priceName: "Kamínky dle velikosti", priceNumber: "5 Kč", priceTxt: "" },
      { priceName: "Mašlička/ks", priceNumber: "30 Kč", priceTxt: "" },
      {
        priceName: "Komplet magnetický efekt",
        priceNumber: "100 Kč",
        priceTxt: "",
      },
    ],
  };
  const priceListOption5 = {
    section: "",
    title: "Úpravy Nehtú",
    priceOption: [
      { priceName: "1 nehet", priceNumber: "50 Kč", priceTxt: "" },
      {
        priceName: "Odstraněni gelových / akrylových nehtů",
        priceNumber: "150 Kč",
        priceTxt: "",
      },
      {
        priceName: "Odstraněni CND Shellac nehtů",
        priceNumber: "150 Kč",
        priceTxt: "",
      },
      { priceName: "Změna barvy", priceNumber: "150 Kč", priceTxt: "" },
    ],
  };
  const priceListOption6 = {
    section: "",
    title: "Prodluzování Ras",
    priceOption: [
      {
        priceName: "Prodlužování řas",
        priceNumber: "700 Kč (nová aplikace)",
        priceTxt: "",
      },
      {
        priceName: "Prodlužování řas",
        priceNumber: "550 Kč (doplnění)",
        priceTxt: "",
      },
      {
        priceName: "Prodlužování řas 'volume'",
        priceNumber: "850 Kč (nová aplikace)",
        priceTxt: "",
      },
      {
        priceName: "Prodlužování řas 'volume'",
        priceNumber: "700 Kč (doplnění)",
        priceTxt: "",
      },
      { priceName: "Úprava obočí", priceNumber: "80 Kč", priceTxt: "" },
      { priceName: "Barvení obočí", priceNumber: "80 Kč", priceTxt: "" },
      { priceName: "Barvení řas", priceNumber: "100 ", priceTxt: "" },
    ],
  };
  const priceListOption7 = {
    section: "",
    title: "Masáze",
    priceOption: [
      {
        priceName: "Masáž nohou",
        priceNumber: "450 Kč (30 min)",
        priceTxt: "",
      },
      {
        priceName: "Masáž nohou",
        priceNumber: "850 Kč (60 min)",
        priceTxt: "",
      },
      {
        priceName: "THE SPA masáž (Tradiční VietNamská + olejová)",
        priceNumber: "430 Kč (60 min)",
        priceTxt: "",
      },
      {
        priceName: "THE SPA masáž (Tradiční VietNamská + olejová)",
        priceNumber: "830 Kč (60 min)",
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
      <FindoutBanner />
      <CommentSlide />
      <FooterBanner image={bigBannerImage} />
    </>
  );
}

export default PriceList;
