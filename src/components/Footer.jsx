// Footer.js
import React from "react";
import "./Footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer id="footer-container">
      <div className="footer">
        <div className="footer__container">
          <div className="footer__section">
            <h2 className="footer__title">{t("FindUs")}</h2>
            <p className="footer__text">Lidická 1877/44, 60200 Brno - střed</p>
            {/* <p className="footer__text">613 00 Brno</p> */}
          </div>
          <div className="footer__section">
            <h2 className="footer__title">{t("Contact")}</h2>
            <ul className="footer__list">
              <li className="footer__list-item">Email: nsc89nails@seznam.cz</li>
              <li className="footer__list-item">Phone: +420 608 412 416</li>
              <li className="footer__list-item">
                Address: Lidická 1877/44, 60200 Brno - střed
              </li>
            </ul>
          </div>
          <div className="footer__section">
            <h2 className="footer__title">{t("Social")}</h2>
            <div className="footer__socials">
              <a
                href="https://facebook.com"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="footer__social-link"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/nsc89_nails/profilecard/?igsh=MXBtMGh5YmMzd3B0Nw%3D%3D"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__bottom-text">
            © 2024 Nails store. All rights reserved.
          </p>
          <div className="language-btn">
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              defaultValue={i18n.language}
            >
              <option value="en">EN</option>
              <option value="cz">CZ</option>
              <option value="ua">UA</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
