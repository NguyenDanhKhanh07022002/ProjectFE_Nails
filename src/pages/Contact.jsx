import PageHeroBanner from "../components/PageHeroBanner";
import contactHeroBanner from "../assets/contactHero.jpg";

import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeroBanner image={contactHeroBanner} title={t("Contact")} />
    </>
  );
}

export default Contact;
