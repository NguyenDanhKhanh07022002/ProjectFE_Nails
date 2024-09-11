import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/ht86-yellow.png";
import Button from "./Button";
function Navbar() {
  const { t } = useTranslation();
  const [isOpenBarMenu, setIsOpenBarMenu] = useState(false);
  function handleOpenBarMenu() {
    setIsOpenBarMenu(!isOpenBarMenu);
  }
  return (
    <>
      <div id="navbar">
        <ul className="screen-nav wide-nav">
          <li>
            <Link to="/">
              <img src={logoImg} alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="/">{t("Introduction")}</Link>
          </li>
          <li>
            <Link to="/service">{t("Service")}</Link>
          </li>
          <li>
            <Link to="/price">{t("Price")}</Link>
          </li>
          <li>
            <Link to="/about">{t("About")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("Contact")}</Link>
          </li>
          <li>
            <Link to="/reserve">
              <Button hoverColor="blue" title="Reservation" />
            </Link>
          </li>
        </ul>
        <ul className="screen-nav mobile-nav">
          <li>
            <Link to="/contact">
              <i className="fa-solid fa-phone"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={logoImg} alt="logo" />
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-bars" onClick={handleOpenBarMenu}></i>
          </li>
        </ul>
        {isOpenBarMenu ? (
          <ul className="screen-nav bar-nav">
            <li>
              <Link to="/">{t("Introduction")}</Link>
            </li>
            <li>
              <Link to="/service">{t("Service")}</Link>
            </li>
            <li>
              <Link to="/price">{t("Price")}</Link>
            </li>
            <li>
              <Link to="/about">{t("About")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("Contact")}</Link>
            </li>
            <li>
              <Link to="/reserve">
                <Button hoverColor="blue" title="Reservation" />
              </Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Navbar;
