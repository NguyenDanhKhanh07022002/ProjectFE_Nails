// FollowUsComponent.jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./FollowUsComponent.scss";
import { useTranslation } from "react-i18next";

const FollowUsComponent = () => {
  const { t } = useTranslation();
  return (
    <div id="widget-container" className="follow-us-wrapper">
      <div className="follow-us-container follow-us-container-left d-flex justify-content-center align-items-center">
        <div className="content text-center">
          <h6 className="small-text">{t("FollowBanner.connected")}</h6>
          <h4 className="main-text">{t("FollowBanner.follow")}</h4>
          <h1 className="big-text">{t("FollowBanner.title")}</h1>
          <Link to="https://www.instagram.com/nsc89_nails/profilecard/?igsh=MXBtMGh5YmMzd3B0Nw%3D%3D">
            <Button hoverColor="blue" title={t("FollowBanner.btn_1")} />
          </Link>
        </div>
      </div>
      <div className="follow-us-container follow-us-container-right d-flex justify-content-center align-items-center">
        <div className="content text-center">
          <h6 className="small-text">{t("FollowBanner.reach")}</h6>
          <h1 className="big-text">{t("FollowBanner.title_2")}</h1>
          <Link to="/contact">
            <Button
              hoverColor="full"
              backgroundColor="white"
              title={t("FollowBanner.btn_2")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowUsComponent;
