import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Introduction": "Introduction",
      "Service": "Service",
      "Price": "Price list",
      "About": "About us",
      "Contact": "Contact",
      "Reservation": "Reservation",
      "BookingVisit": "Book a visit",
      "heroBanner": {
        "header_1": "Perfect",
        "title_1": "manicure",
        "header_2": "Pedicure",
        "title_2": "Footlogix",
        "header_3": "Extension eyelashes,",
        "title_3": "eyebrow shaping",
      }
    }
  },
  cz: {
    translation: {
      "Introduction": "Úvod",
      "Service": "Služby",
      "Price": "Ceník",
      "About": "O nás",
      "Contact": "Kontakt",
      "Reservation": "Rezervace",
      "BookingVisit": "Rezervovat návštěvu",
      "heroBanner": {
        "header_1": "Dokonalá",
        "title_1": "manikúra",
        "header_2": "Pedikúra",
        "title_2": "Footlogix",
        "header_3": "Prodlužování",
        "title_3": "řas,úprava obočí",
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;