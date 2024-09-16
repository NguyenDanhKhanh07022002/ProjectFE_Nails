import { useState } from "react";
import PageHeroBanner from "../components/PageHeroBanner";
import aboutHeroBanner from "../assets/aboutHero.jpg";

import { useTranslation } from "react-i18next";
function AboutUs() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeroBanner image={aboutHeroBanner} title={t("About")} />
    </>
  );
}

export default AboutUs;
