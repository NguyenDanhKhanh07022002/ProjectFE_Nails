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
      "Time" : "Time",
      "Your data" : "Your detail",
      "Done" : "Done",
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
      "GalleryTitle": "How it looks in NSC 89 Nails",
      "FindUs" : "Where to find us",
      "Social" : "Social network",
      "reservePage" : {
        "Submit" : "Submit",
        "Sending" : "Sending...",
        "Description" : "Description",
        "name" : "Name",
        "phone" : "Phone",
        "email" : "Email",
        "enterInfor" : "Please enter your additional requirements here",
        "defaultService" : "Select a service",
        "Back" : "Back",
        "Next" : "Next",
        "Select-service" : "Select service and date of reservation:",
        "Date" : "Date",
        "Warning" : "To complete the reservation, all that remains is to enter your contact details, which will not be processed further without your consent, according to the rules of the new European Union regulation on the protection of personal data."
      },
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
        "banner_des_2" : "We are located at Lidická 1877/44, 60200 Brno - střed, approx. 50 m from the public transport stop of lines 25 and 26.",
        "voucher_text" : "Make happy",
        "voucher_title" : "Gift vouchers",
        "voucher_des_1" : "You can buy them personally in our studio.",
        "voucher_des_2" : "Vouchers are worth CZK 450 - 600.",
        "voucher_des_3" : "Valid for 5 months from issue.",
      },
      "About_Page" : {
        "intro" : "Who we are",
        "des_1" : "We are a Brno nail studio with friendly prices. We have been doing manicures and pedicures for over 8 years. We are located at Lidická 1877/44, 60200 Brno - střed, approx. 50 m from the public transport stop of lines 25 and 26.",
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
      "FollowBanner" : {
        "connected" : "BE CONNECTED",
        "reach" : "How do you reach us ?",
        "follow" : "Follow us",
        "title" : "@nailsht86",
        "title_2" : "Where are we based",
        "btn_1" : "Go to our Instagram",
        "btn_2" : "Show contacts",
      },
      "priceMenu": {
        "new" : "(new application)",
        "addition" : "(addition)",
        "title_3": "Artificial Nail Modeling",
        "title_4": "Nail Decoration",
        "title_5": "Nail Adjustments",
        "title_6": "Eyelash Extensions",
        "title_7": "Massages",
        "option_1": {
          "text_1": "Classic manicure",
          "text_2": "Manicure with regular O.P.I polish",
          "text_3": "Manicure with CND Shellac (Color)",
          "text_4": "Manicure with CND Shellac (French)"
        },
        "option_2": {
          "text_1": "Classic pedicure",
          "text_2": "Footlogix classic pedicure",
          "text_3": "Footlogix pedicure with regular O.P.I polish",
          "text_4": "Footlogix pedicure with gel polish",
          "text_5": "Footlogix pedicure with CND Shellac",
          "text_6": "Nail gel polish",
          "text_7": "Shellac nail polish without pedicure"
        },
        "option_3": {
          "text_1": "Classic gel/acrylic nails",
          "text_2": "Gel/acrylic nails with polish",
          "text_3": "Gel / Acrylic nails with CND Shellac polish",
          "text_4": "New application plus (+)",
          "text_5": "Long nails plus (+)"
        },
        "option_4": {
          "text_1": "Nail art",
          "text_2": "Complete nail art",
          "text_3": "Rhinestones by size",
          "text_4": "Bow per piece",
          "text_5": "Complete magnetic effect",
          "text_6" : "Complete nail pigment",
          "text_7" : "Airbrush/Francie"
        },
        "option_5": {
          "text_1": "1 nail",
          "text_2": "Removal before new application",
          "text_3": "Removal of gel/acrylic nails",
          "text_4": "Removal of CND Shellac nails",
          "text_5": "Color change"
        },
        "option_6": {
          "text_1": "Eyelash extensions",
          "text_2": "Eyelash extensions",
          "text_3": "Eyelash extensions 'volume'",
          "text_4": "Eyelash extensions 'volume'",
          "text_5": "Eyebrow shaping",
          "text_6": "Eyebrow tinting",
          "text_7": "Eyelash tinting"
        },
        "option_7": {
          "text_1": "Foot massage",
          "text_2": "Foot massage",
          "text_3": "THE SPA massage (Traditional Vietnamese + oil)",
          "text_4": "THE SPA massage (Traditional Vietnamese + oil)"
        }
      },
      "service": {
        "Manicure": "Manicure",
        "Pedicure": "Pedicure",
        "Facial": "Facial",
        "Massage": "Massage",
        "Cosmetic" : "Cosmetic",
        "option_1": {
          "text_1": "Acrylic Nails",
          "text_2": "Gel Nails",
          "text_3": "French Manicure",
          "text_4": "Shellac",
          "text_5": "Japanese Manicure P Shine",
          "text_6": "Artificial Extension and Strengthening of Natural Nails",
          "text_7": "Nail Polishing",
          "text_8": "Nail Art – Painting and Decorating Nails",
          "text_9": "Repairs, Regenerative Procedures"
        },
        "option_2": {
          "text_1": "Medical Pedicure Footlogix",
          "text_2": "Acrylic Nails",
          "text_3": "Gel Nails",
          "text_4": "Nail Polishing and Decorating",
          "text_5": "Foot Treatment in a Bubble Bath",
          "text_6": "Removal of Calluses, Corns, and Hardened Skin",
          "text_7": "Relaxation Massage"
        },
        "option_3": {
          "text_1": "Eyelash Extensions – First Application",
          "text_2": "Eyelash Refilling and Tinting",
          "text_3": "French Manicure",
          "text_4": "Eyebrow Tinting",
          "text_5": "Eyelash Removal on Request"
        },
        "option_4": {
          "text_1": "Eyelash Extensions – First Application",
          "text_2": "THE SPA Massage (Traditional Vietnamese + Oil Massage)"
        }
      },
      "Reference": "Reference",
      "CustomerFeedback" : "What customers say about us",
    }
  },
  cz: {
    translation: {
      "Introduction": "Úvod",
      "Service": "Služby",
      "Time" : "Čas",
      "Your data" : "Váš detail",
      "Done" : "Hotovo",
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
      "GalleryTitle": "Jak to v NSC 89 Nails vypadá",
      "FindUs" : "Kde nás najdete",
      "Social" : "Sociální sítě",
      "reservePage" : {
        "Submit" : "Předložit",
        "Sending" : "Odesílání...",
        "Description" : "Popis",
        "name" : "Jméno",
        "phone" : "Telefon",
        "email" : "Email",
        "enterInfor" : "Tu zadajte svoje dodatočné požiadavky",
        "defaultService" : "Vyberte službu",
        "Back" : "Späť",
        "Next" : "Ďalej",
        "Select-service" : "Vyberte službu a dátum rezervácie:",
        "Date" : "Dátum",
        "Warning" : "Pre dokončenie rezervácie ostáva už len zadať Vaše kontaktné údaje, ktoré nebudú bez Vášho súhlasu ďalej spracovávané podľa pravidiel nového nariadenia Európskej únie o ochrane osobných údajov."
      },
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
      "FollowBanner" : {
        "connected" : "Buďte ve spojení",
        "reach" : "Jak se k nám dostanete?",
        "follow" : "Sledujte nás",
        "title" : "@nailsht86",
        "title_2" : "Kde sídlíme?",
        "btn_1" : "Přejít na náš Instagram",
        "btn_2" : "Ukázat kontakt",
      },
      "priceMenu" : {
        "new" : "(nová aplikace)",
        "addition" : "(doplnění)",
        "title_3" : "Modelace Umelých Nehtú",
        "title_4" : "Zdobení Nehtú",
        "title_5" : "Úpravy Nehtú",
        "title_6" : "Prodluzování Ras",
        "title_7" : "Masáze",
        "option_1" : {
          "text_1" : "Manikúra klasik",
          "text_2" : "Manikúra a obyčejné lakování O.P.I.",
          "text_3" : "Manikúra a lakování CND Shellac (Barva)",
          "text_4" : "Manikúra a lakování CND Shellac (Francie)",
        },
         "option_2" : {
          "text_1" : "Pedikúra klas",
          "text_2" : "Footlogix pedikúra klasik",
          "text_3" : "Footlogix pedikúra s obyčajným lakovaním O.P.I",
          "text_4" : "Footlogix pedikúra s gel-lakem",
          "text_5" : "Footlogix pedikúra s CND Shellac",
          "text_6" : "Lakovanie gel-lakem",
          "text_7" : "Lakovanie shellac bez pedikúry",
        },
         "option_3" : {
          "text_1" : "Gelové / Akrylové nehty klasik",
          "text_2" : "Gelové / Akrylové nehty s lakovaním",
          "text_3" : "Gelové / Akrylové nehty s lakovaním CND Shellac",
          "text_4" : "Nová aplikácia plus (+)",
          "text_5" : "Dlouhé nehty plus (+)",
        },
         "option_4" : {
          "text_1" : "Malování",
          "text_2" : "Kompletní malování",
          "text_3" : "Kamínky dle velikosti",
          "text_4" : "Mašlička/ks",
          "text_5" : "Komplet magnetický efekt",
          "text_6" : "Komplet pigment",
          "text_7" : "Airbrush/Francie",
        },
         "option_5" : {
          "text_1" : "1 nehet",
          "text_2" : "Odstranění v případě nové aplikace",
          "text_3" : "Odstraněni gelových / akrylových nehtů",
          "text_4" : "Odstraněni CND Shellac nehtů",
          "text_5" : "Změna barvy",
        },
         "option_6" : {
          "text_1" : "Prodlužování řas",
          "text_2" : "Prodlužování řas",
          "text_3" : "Prodlužování řas 'volume'",
          "text_4" : "Prodlužování řas 'volume'",
          "text_5" : "Úprava obočí",
          "text_6" : "Barvení obočí",
          "text_7" : "Barvení řas",
        },
         "option_7" : {
          "text_1" : "Masáž nohou",
          "text_2" : "Masáž nohou",
          "text_3" : "THE SPA masáž (Tradiční VietNamská + olejová)",
          "text_4" : "THE SPA masáž (Tradiční VietNamská + olejová)",
        },
      },
      "service": {
        "Manicure": "Manikúra",
        "Pedicure": "Pedikúra",
        "Facial": "Facial",
        "Massage": "Masáž",
        "Cosmetic" : "Kosmetika",
        "option_1" : {
          "text_1": "Akrylové nehty",
          "text_2": "Gelové nehty",
          "text_3": "Francouzská manikúra",
          "text_4": "Shellac",
          "text_5": "Japonská manikúra P Shine",
          "text_6": "Umělé prodlužování a zpevňování vlastních nehtů",
          "text_7": "Lakování nehtů",
          "text_8": "Nail art – malování a zdobení nehtů",
          "text_9": "Opravy, regenerační procedury"
        },
        "option_2": {
          "text_1": "Zdravotní pedikúra Footlogix",
          "text_2": "Akrylové nehty",
          "text_3": "Gelové nehty",
          "text_4": "Lakování a zdobení nehtů",
          "text_5": "Ošetření nohou v bublinkové lázni",
          "text_6": "Odstranění otlaků, mozolů a zrohovatělé kůže",
          "text_7": "Relaxační masáž"
        },
        "option_3" : {
          "text_1": "Prodlužování řas – první aplikace",
          "text_2": "Doplňování a barvení řas",
          "text_3": "Francouzská manikúra",
          "text_4": "Barvení obočí",
          "text_5": "Odstraňování řas na přání"
        },
        "option_4" : {
          "text_1": "Prodlužování řas – první aplikace",
          "text_2": "THE SPA masáž (Tradiční VietNamská + olejová)",
        }
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
    lng: "cz", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;