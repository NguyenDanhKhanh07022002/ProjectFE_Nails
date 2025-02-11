import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/ht86-yellow.png";
import Button from "./Button";
function Navbar(props) {
  const { t } = useTranslation();
  const [isOpenBarMenu, setIsOpenBarMenu] = useState(false);
  function handleOpenBarMenu() {
    setIsOpenBarMenu(!isOpenBarMenu);
  }
  function handleCloseBarMenu() {
    setIsOpenBarMenu(false);
  }
  return (
    <>
      <div id="navbar" className={props.isScrollTop ? "nav--show" : ""}>
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
              <Button
                hoverColor={props.isScrollTop ? "white" : "blue"}
                title={t("Reservation")}
              />
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
              <Link to="/" onClick={handleCloseBarMenu}>
                {t("Introduction")}
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={handleCloseBarMenu}>
                {t("Service")}
              </Link>
            </li>
            <li>
              <Link to="/price" onClick={handleCloseBarMenu}>
                {t("Price")}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleCloseBarMenu}>
                {t("About")}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleCloseBarMenu}>
                {t("Contact")}
              </Link>
            </li>
            <li>
              <Link to="/reserve" onClick={handleCloseBarMenu}>
                <Button hoverColor="blue" title={t("Reservation")} />
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
