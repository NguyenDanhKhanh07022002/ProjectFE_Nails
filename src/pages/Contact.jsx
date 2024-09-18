import PageHeroBanner from "../components/PageHeroBanner";
import contactHeroBanner from "../assets/contactHero.jpg";
import GoogleMap from "../components/GoogleMap";
import ContactForm from "../components/ContactForm";

import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeroBanner image={contactHeroBanner} title={t("Contact")} />
      <GoogleMap />
      <ContactForm />
    </>
  );
}

export default Contact;
