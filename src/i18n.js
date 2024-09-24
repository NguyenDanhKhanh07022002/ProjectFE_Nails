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
      "OpeningHours" :  "Opening hours",
      "TelOrder" : "Order by phone",
      "Offer" : "We offer",
      "BargainPrice": "Bargain prices",
      "ShowPrice": "Show all price",
      "Gallery" : "Gallery",
      "GalleryTitle": "How it looks in Nails HT 86",
      "FindUs" : "Where to find us",
      "Social" : "Social network",
      "Findout" : {
        "ViewPrice" : "View prices",
        "GetUnique" : "Get the unique nails you dream of",
        "Gotoprice" : "Go to the price list"
      },
      "Days" : {
        "Monday": "Mon",
        "Friday" : "Fri",
        "Saturday" : "Sat"
      },
      "Introduction_Page" : {
        "welcome" : "Welcome",
        "introduce" : "We are a Brno nail studio with friendly prices.",
        "banner_des_1" : "We focus on manicure, pedicure and cosmetics.",
        "banner_des_2" : "We are located at Provazníkova 890/40, approx. 50 m from the public transport stop of lines 25 and 26.",
        "voucher_text" : "Make happy",
        "voucher_title" : "Gift vouchers",
        "voucher_des_1" : "You can buy them personally in our studio.",
        "voucher_des_2" : "Vouchers are worth CZK 450 - 600.",
        "voucher_des_3" : "Valid for 5 months from issue.",
      },
      "About_Page" : {
        "intro" : "Who we are",
        "des_1" : "We are a Brno nail studio with friendly prices. We have been doing manicures and pedicures for over 8 years. We are located at Provazníkova 890/40, approx. 50 m from the public transport stop of lines 25 and 26.",
        "des_2" : "The studio is modernly equipped. Our specialization is manicure, pedicure and cosmetics."
      },
      "heroBanner": {
        "header_1": "Perfect",
        "title_1": "manicure",
        "header_2": "Pedicure",
        "title_2": "Footlogix",
        "header_3": "Extension eyelashes,",
        "title_3": "eyebrow shaping",
      },
      "FootBanner" : {
        "title" : "The most convenient way of ordering to the studio:",
        "des_1" : "Make a reservation",
        "des_2" : "term",
        "BookingVisit" : "Book a visit",
      },
      "service": {
        "Manicure": "Manicure",
        "Pedicure": "Pedicure",
        "Facial": "Facial",
        "Massage": "Massage",
        "Cosmetic" : "Cosmetic"
      },
      "Reference": "Reference",
      "CustomerFeedback" : "What customers say about us",
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
      "OpeningHours" :  "Otevírací doba",
      "TelOrder" : "na tel. objednávku",
      "Offer" : "Nabízíme",
      "BargainPrice": "Výhodné ceny",
      "ShowPrice": "Zobrazit všechny ceny",
      "Gallery" : "Galerie",
      "GalleryTitle": "Jak to v Nails HT 86 vypadá",
      "FindUs" : "Kde nás najdete",
      "Social" : "Sociální sítě",
      "Findout" : {
        "ViewPrice" : "Prohlédněte si ceny",
        "GetUnique" : "Získejte jedinečné nehty, o kterých sníte",
        "Gotoprice" : "Přejít na ceník"
      },
      "Days" : {
        "Monday": "Po",
        "Friday" : "Pá",
        "Saturday" : "So"
      },
      "Introduction_Page" : {
        "welcome" : "vítejte",
        "introduce" : "Jsme brněnské nehtové studio s přívětivými cenami.",
        "banner_des_1" : "Zaměřujeme se na manikúru, pedikúru a kosmetiku.",
        "banner_des_2" : "Sídlíme na adrese Provazníkova 890/40, cca 50 m od zastávky MHD linek 25 a 26.",
        "voucher_text" : "Udělejte radost",
        "voucher_title" : "Dárkové poukazy",
        "voucher_des_1" : "Koupíte je osobně v našem studiu.",
        "voucher_des_2" : "Poukazy jsou v hodnotách 450 - 600 Kč.",
        "voucher_des_3" : "Platí 5 měsíců od vystavení.",
      },
      "About_Page" : {
        "intro" : "Kdo jsme",
        "des_1" : "Jsme brněnské nehtové studio s přívětivými cenami. Manikúře a pedikúře se věnujeme přes 8 let. Sídlíme na adrese Provazníkova 890/40, cca 50 m od zastávky MHD linek 25 a 26.",
        "des_2" : "Studio je moderně vybavené. Naše specializace je manikúra, pedikúra a kosmetika."
      },
      "heroBanner": {
        "header_1": "Dokonalá",
        "title_1": "manikúra",
        "header_2": "Pedikúra",
        "title_2": "Footlogix",
        "header_3": "Prodlužování",
        "title_3": "řas,úprava obočí",
      },
      "FootBanner" : {
        "title" : "Nejpohodlnější způsob objednání do studia:",
        "des_1" : "Zarezervujte si",
        "des_2" : "termín",
        "BookingVisit" : "Rezervovat návštěvu",
      },
      "service": {
        "Manicure": "Manikúra",
        "Pedicure": "Pedikúra",
        "Facial": "Facial",
        "Massage": "Masáž",
        "Cosmetic" : "Kosmetika"
      },
      "Reference": "Reference",
      "CustomerFeedback" : "Co o nás říkají zákazníci",
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