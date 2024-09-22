// Footer.js
import React from "react";
import "./Footer.scss";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import AOS from "aos";

const Footer = () => {

  const { t, i18n } = useTranslation();
  return (
    <footer id="footer-container" data-aos="fade-right">
      <div className="footer">
        <div className="footer__container">
          <div className="footer__section">
            <h2 className="footer__title">Kde nás najdete</h2>
            <p className="footer__text">Provazníkova 890/40</p>
            <p className="footer__text">613 00 Brno</p>
          </div>
          <div className="footer__section">
            <h2 className="footer__title">Contact</h2>
            <ul className="footer__list">
              <li className="footer__list-item">Email: contact@company.com</li>
              <li className="footer__list-item">Phone: (123) 456-7890</li>
              <li className="footer__list-item">
                Address: 123 Business Rd, City, Country
              </li>
            </ul>
          </div>
          <div className="footer__section">
            <h2 className="footer__title">Follow Us</h2>
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
                href="https://instagram.com"
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
          <div>
            <button
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              EN
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage("cz");
              }}
            >
              CZ
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
