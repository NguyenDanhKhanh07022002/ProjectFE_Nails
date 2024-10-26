import { useState, useEffect } from "react";
import PageHeroBanner from "../components/PageHeroBanner";
import contactHeroBanner from "../assets/Slide-1.jpg";
import GoogleMap from "../components/GoogleMap";
import ContactForm from "../components/ContactForm";

import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
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
        <div>
          <PageHeroBanner image={contactHeroBanner} title={t("Contact")} />
          <GoogleMap />
          <ContactForm />
        </div>
      )}
    </>
  );
}

export default Contact;
