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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <PageHeroBanner image={priceHeroBanner} title={t("Price")} />
      <BannerBackgroundRightPrice
        image={pricePageImg1}
        isShowBackground={true}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg2}
        isShowBackground={true}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg3}
        isShowBackground={true}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg4}
        isShowBackground={true}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg5}
        isShowBackground={true}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg6}
        isShowBackground={true}
      />
      <BannerBackgroundRightPrice
        image={pricePageImg7}
        isShowBackground={true}
      />
      <FindoutBanner />
      <CommentSlide />
      <FooterBanner image={bigBannerImage} />
    </>
  );
}

export default PriceList;
