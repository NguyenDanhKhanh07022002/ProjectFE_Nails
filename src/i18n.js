import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Introduction: "Introduction",
      Service: "Service",
      Time: "Time",
      "Your data": "Your detail",
      Done: "Done",
      Price: "Price list",
      About: "About us",
      Contact: "Contact",
      Reservation: "Reservation",
      BookingVisit: "Book a visit",
      OpeningHours: "Opening hours",
      TelOrder: "Order by phone",
      Offer: "We offer",
      BargainPrice: "Bargain prices",
      ShowPrice: "Show all price",
      Gallery: "Gallery",
      GalleryTitle: "How it looks in NSC 89 Nails",
      FindUs: "Where to find us",
      Social: "Social network",
      reservePage: {
        Submit: "Submit",
        Sending: "Sending...",
        Description: "Description",
        name: "Name",
        phone: "Phone",
        email: "Email",
        enterInfor: "Please enter your additional requirements here",
        defaultService: "Select a service",
        Back: "Back",
        Next: "Next",
        "Select-service": "Select service and date of reservation:",
        Date: "Date",
        Warning:
          "To complete the reservation, all that remains is to enter your contact details, which will not be processed further without your consent, according to the rules of the new European Union regulation on the protection of personal data.",
      },
      Findout: {
        ViewPrice: "View prices",
        GetUnique: "Get the unique nails you dream of",
        Gotoprice: "Go to the price list",
      },
      Days: {
        Monday: "Mon",
        Friday: "Fri",
        Saturday: "Sat",
      },
      Introduction_Page: {
        welcome: "Welcome",
        introduce: "We are a Brno nail studio with friendly prices.",
        banner_des_1: "We focus on manicure, pedicure and cosmetics.",
        banner_des_2:
          "We are located at Lidická 1877/44, 60200 Brno - střed, approximately 50 m from the Antonínská tram stop. With over 8 years of experience, NSC 89 Nails offers quality nail care services at affordable prices.",
        voucher_text: "Make happy",
        voucher_title: "Gift vouchers",
        voucher_des_1: "You can buy them personally in our studio.",
        voucher_des_2: "Vouchers are worth CZK 450 - 600.",
        voucher_des_3: "Valid for 5 months from issue.",
      },
      About_Page: {
        intro: "Who we are",
        des_1:
          "NSC 89 Nails is our nail salon located near the Antonínská tram stop, making it convenient for travel. With over 8 years of experience, we offer quality nail care services at affordable prices. Our team of experienced professionals uses safe products and modern techniques to care for your nails. Visit NSC 89 Nails to enjoy professional services and relaxation.",
        des_2:
          "The studio is modernly equipped. Our specialization is manicure, pedicure, cosmetics and massage.",
      },
      heroBanner: {
        header_1: "Perfect",
        title_1: "manicure",
        header_2: "Pedicure",
        title_2: "Footlogix",
        header_3: "Extension eyelashes,",
        title_3: "eyebrow shaping",
      },
      FootBanner: {
        title: "The most convenient way of ordering to the studio:",
        des_1: "Make a reservation",
        des_2: "term",
        BookingVisit: "Book a visit",
      },
      FollowBanner: {
        connected: "BE CONNECTED",
        reach: "How do you reach us ?",
        follow: "Follow us",
        title: "nsc89nails.cz",
        title_2: "Where are we based",
        btn_1: "Go to our Instagram",
        btn_2: "Show contacts",
      },
      priceMenu: {
        new: "(new application)",
        addition: "(addition)",
        title_3: "Manicure + Pedicure",
        title_4: "Artificial Nail Modeling",
        title_5: "Nail Decoration",
        title_6: "Nail Adjustments",
        title_7: "Eyelash Extensions",
        title_8: "Massages",
        title_9: "Other services",
        option_1: {
          text_1: "Classic manicure",
          text_2: "Manicure with regular O.P.I polish",
          text_3: "Manicure with CND Shellac (Color)",
          text_4: "Manicure with CND Shellac (French)",
        },
        option_2: {
          text_1: "Classic pedicure",
          text_2: "Footlogix classic pedicure",
          text_3: "Footlogix pedicure with regular O.P.I polish",
          text_4: "Footlogix pedicure with gel polish",
          text_5: "Footlogix pedicure with CND Shellac",
          text_6: "Nail gel polish",
          text_7: "Shellac nail polish without pedicure",
        },
        option_3: {
          text_1: "Classic gel/acrylic nails",
          text_2: "Gel/acrylic nails with polish",
          text_3: "Gel / Acrylic nails with CND Shellac polish",
          text_4: "New application plus (+)",
          text_5: "Long nails plus (+)",
        },
        option_4: {
          text_1: "Nail art",
          text_2: "Complete nail art",
          text_3: "Rhinestones by size",
          text_4: "Bow per piece",
          text_5: "Complete magnetic effect",
          text_6: "Complete nail pigment",
          text_7: "Airbrush/Francie",
        },
        option_5: {
          text_1: "1 nail",
          text_2: "Removal before new application",
          text_3: "Removal of gel/acrylic nails",
          text_4: "Removal of CND Shellac nails",
          text_5: "Color change",
        },
        option_6: {
          text_1: "Eyelash extensions",
          text_2: "Eyelash extensions",
          text_3: "Eyelash extensions 'volume'",
          text_4: "Eyelash extensions 'volume'",
          text_5: "Eyebrow shaping",
          text_6: "Eyebrow tinting",
          text_7: "Eyelash tinting",
        },
        option_7: {
          text_1: "Foot massage",
          text_2: "Foot massage",
          text_3: "THE SPA massage (Traditional Vietnamese + oil)",
          text_4: "THE SPA massage (Traditional Vietnamese + oil)",
        },
      },
      service: {
        Manicure: "Manicure",
        Pedicure: "Pedicure",
        Facial: "Facial",
        Massage: "Massage",
        Cosmetic: "Cosmetic",
        option_1: {
          text_1: "Acrylic Nails",
          text_2: "Gel Nails",
          text_3: "French Manicure",
          text_4: "Shellac",
          text_5: "Japanese Manicure P Shine",
          text_6: "Artificial Extension and Strengthening of Natural Nails",
          text_7: "Nail Polishing",
          text_8: "Nail Art – Painting and Decorating Nails",
          text_9: "Repairs, Regenerative Procedures",
        },
        option_2: {
          text_1: "Medical Pedicure Footlogix",
          text_2: "Acrylic Nails",
          text_3: "Gel Nails",
          text_4: "Nail Polishing and Decorating",
          text_5: "Foot Treatment in a Bubble Bath",
          text_6: "Removal of Calluses, Corns, and Hardened Skin",
          text_7: "Relaxation Massage",
        },
        option_3: {
          text_1: "Eyelash Extensions – First Application",
          text_2: "Eyelash Refilling and Tinting",
          text_3: "French Manicure",
          text_4: "Eyebrow Tinting",
          text_5: "Eyelash Removal on Request",
        },
        option_4: {
          text_1: "Eyelash Extensions – First Application",
          text_2: "THE SPA Massage (Traditional Vietnamese + Oil Massage)",
        },
      },
      Reference: "Reference",
      CustomerFeedback: "What customers say about us",
    },
  },
  cz: {
    translation: {
      Introduction: "Úvod",
      Service: "Služby",
      Time: "Čas",
      "Your data": "Váš detail",
      Done: "Hotovo",
      Price: "Ceník",
      About: "O nás",
      Contact: "Kontakt",
      Reservation: "Rezervace",
      BookingVisit: "Rezervovat návštěvu",
      OpeningHours: "Otevírací doba",
      TelOrder: "na tel. objednávku",
      Offer: "Nabízíme",
      BargainPrice: "Výhodné ceny",
      ShowPrice: "Zobrazit všechny ceny",
      Gallery: "Galerie",
      GalleryTitle: "Jak to v NSC 89 Nails vypadá",
      FindUs: "Kde nás najdete",
      Social: "Sociální sítě",
      reservePage: {
        Submit: "Předložit",
        Sending: "Odesílání...",
        Description: "Popis",
        name: "Jméno",
        phone: "Telefon",
        email: "Email",
        enterInfor: "Tu zadajte svoje dodatočné požiadavky",
        defaultService: "Vyberte službu",
        Back: "Späť",
        Next: "Ďalej",
        "Select-service": "Vyberte službu a dátum rezervácie:",
        Date: "Dátum",
        Warning:
          "Pre dokončenie rezervácie ostáva už len zadať Vaše kontaktné údaje, ktoré nebudú bez Vášho súhlasu ďalej spracovávané podľa pravidiel nového nariadenia Európskej únie o ochrane osobných údajov.",
      },
      Findout: {
        ViewPrice: "Prohlédněte si ceny",
        GetUnique: "Získejte jedinečné nehty, o kterých sníte",
        Gotoprice: "Přejít na ceník",
      },
      Days: {
        Monday: "Po",
        Friday: "Pá",
        Saturday: "So",
      },
      Introduction_Page: {
        welcome: "vítejte",
        introduce: "Jsme brněnské nehtové studio s přívětivými cenami.",
        banner_des_1: "Zaměřujeme se na manikúru, pedikúru a kosmetiku.",
        banner_des_2:
          "Nacházíme se na adrese Lidická 1877/44, 60200 Brno - střed, přibližně 50 m od tramvajové zastávky Antonínská. S více než 8 lety zkušeností nabízí NSC 89 Nails kvalitní služby v oblasti nehtové péče za rozumné ceny.",
        voucher_text: "Udělejte radost",
        voucher_title: "Dárkové poukazy",
        voucher_des_1: "Koupíte je osobně v našem studiu.",
        voucher_des_2: "Poukazy jsou v hodnotách 450 - 600 Kč.",
        voucher_des_3: "Platí 5 měsíců od vystavení.",
      },
      About_Page: {
        intro: "Kdo jsme",
        des_1:
          "NSC 89 Nails je naše nehtové studio, které se nachází blízko tramvajové zastávky Antonínská, což je pohodlné pro dopravu. S více než 8 lety zkušeností nabízíme kvalitní služby v oblasti nehtové péče za rozumné ceny. Náš tým zkušených odborníků používá bezpečné produkty a moderní techniky k péči o vaše nehty. Navštivte NSC 89 Nails a užijte si profesionální služby a relaxaci.",
        des_2:
          "Studio je moderně vybavené. Naše specializace je manikúra, pedikúra, kosmetika a masáž.",
      },
      heroBanner: {
        header_1: "Dokonalá",
        title_1: "manikúra",
        header_2: "Pedikúra",
        title_2: "Footlogix",
        header_3: "Prodlužování",
        title_3: "řas,úprava obočí",
      },
      FootBanner: {
        title: "Nejpohodlnější způsob objednání do studia:",
        des_1: "Zarezervujte si",
        des_2: "termín",
        BookingVisit: "Rezervovat návštěvu",
      },
      FollowBanner: {
        connected: "Buďte ve spojení",
        reach: "Jak se k nám dostanete?",
        follow: "Sledujte nás",
        title: "nsc89nails.cz",
        title_2: "Kde sídlíme?",
        btn_1: "Přejít na náš Instagram",
        btn_2: "Ukázat kontakt",
      },
      priceMenu: {
        new: "(nová aplikace)",
        addition: "(doplnění)",
        title_3: "Manikúra + Pedikúra",
        title_4: "Modelace Umelých Nehtú",
        title_5: "Zdobení Nehtú",
        title_6: "Úpravy Nehtú",
        title_7: "Prodluzování Ras",
        title_8: "Masáze",
        title_9: "Další služby",
        option_1: {
          text_1: "Manikúra klasik",
          text_2: "Manikúra a obyčejné lakování O.P.I.",
          text_3: "Manikúra a lakování CND Shellac (Barva)",
          text_4: "Manikúra a lakování CND Shellac (Francie)",
        },
        option_2: {
          text_1: "Pedikúra klas",
          text_2: "Footlogix pedikúra klasik",
          text_3: "Footlogix pedikúra s obyčajným lakovaním O.P.I",
          text_4: "Footlogix pedikúra s gel-lakem",
          text_5: "Footlogix pedikúra s CND Shellac",
          text_6: "Lakovanie gel-lakem",
          text_7: "Lakovanie shellac bez pedikúry",
        },
        option_3: {
          text_1: "Gelové / Akrylové nehty klasik",
          text_2: "Gelové / Akrylové nehty s lakovaním",
          text_3: "Gelové / Akrylové nehty s lakovaním CND Shellac",
          text_4: "Nová aplikácia plus (+)",
          text_5: "Dlouhé nehty plus (+)",
        },
        option_4: {
          text_1: "Malování",
          text_2: "Kompletní malování",
          text_3: "Kamínky dle velikosti",
          text_4: "Mašlička/ks",
          text_5: "Komplet magnetický efekt",
          text_6: "Komplet pigment",
          text_7: "Airbrush/Francie",
        },
        option_5: {
          text_1: "1 nehet",
          text_2: "Odstranění v případě nové aplikace",
          text_3: "Odstraněni gelových / akrylových nehtů",
          text_4: "Odstraněni CND Shellac nehtů",
          text_5: "Změna barvy",
        },
        option_6: {
          text_1: "Prodlužování řas",
          text_2: "Prodlužování řas",
          text_3: "Prodlužování řas 'volume'",
          text_4: "Prodlužování řas 'volume'",
          text_5: "Úprava obočí",
          text_6: "Barvení obočí",
          text_7: "Barvení řas",
        },
        option_7: {
          text_1: "Masáž nohou",
          text_2: "Masáž nohou",
          text_3: "THE SPA masáž (Tradiční VietNamská + olejová)",
          text_4: "THE SPA masáž (Tradiční VietNamská + olejová)",
        },
      },
      service: {
        Manicure: "Manikúra",
        Pedicure: "Pedikúra",
        Facial: "Facial",
        Massage: "Masáž",
        Cosmetic: "Kosmetika",
        option_1: {
          text_1: "Akrylové nehty",
          text_2: "Gelové nehty",
          text_3: "Francouzská manikúra",
          text_4: "Shellac",
          text_5: "Japonská manikúra P Shine",
          text_6: "Umělé prodlužování a zpevňování vlastních nehtů",
          text_7: "Lakování nehtů",
          text_8: "Nail art – malování a zdobení nehtů",
          text_9: "Opravy, regenerační procedury",
        },
        option_2: {
          text_1: "Zdravotní pedikúra Footlogix",
          text_2: "Akrylové nehty",
          text_3: "Gelové nehty",
          text_4: "Lakování a zdobení nehtů",
          text_5: "Ošetření nohou v bublinkové lázni",
          text_6: "Odstranění otlaků, mozolů a zrohovatělé kůže",
          text_7: "Relaxační masáž",
        },
        option_3: {
          text_1: "Prodlužování řas – první aplikace",
          text_2: "Doplňování a barvení řas",
          text_3: "Francouzská manikúra",
          text_4: "Barvení obočí",
          text_5: "Odstraňování řas na přání",
        },
        option_4: {
          text_1: "Prodlužování řas – první aplikace",
          text_2: "THE SPA masáž (Tradiční VietNamská + olejová)",
        },
      },
      Reference: "Reference",
      CustomerFeedback: "Co o nás říkají zákazníci",
    },
  },
  ua: {
    translation: {
      Introduction: "Вступ",
      Service: "Послуга",
      Time: "Час",
      "Your data": "Ваші дані",
      Done: "Готово",
      Price: "Прайс-лист",
      About: "Про нас",
      Contact: "Контакт",
      Reservation: "Резервація",
      BookingVisit: "Забронювати візит",
      OpeningHours: "Години роботи",
      TelOrder: "Замовити по телефону",
      Offer: "Ми пропонуємо",
      BargainPrice: "Вигідні ціни",
      ShowPrice: "Показати всі ціни",
      Gallery: "Галерея",
      GalleryTitle: "Як це виглядає в NSC 89 Nails",
      FindUs: "Де нас знайти",
      Social: "Соціальні мережі",
      reservePage: {
        Submit: "Відправити",
        Sending: "Надсилається...",
        Description: "Опис",
        name: "Ім'я",
        phone: "Телефон",
        email: "Електронна пошта",
        enterInfor: "Будь ласка, введіть свої додаткові вимоги тут",
        defaultService: "Виберіть послугу",
        Back: "Назад",
        Next: "Далі",
        "Select-service": "Виберіть послугу та дату резервації:",
        Date: "Дата",
        Warning:
          "Щоб завершити резервацію, залишається лише ввести ваші контактні дані, які не будуть оброблятися далі без вашої згоди відповідно до правил нового регламенту Європейського Союзу щодо захисту персональних даних.",
      },
      Findout: {
        ViewPrice: "Переглянути ціни",
        GetUnique: "Отримайте унікальний манікюр, про який ви мріяли",
        Gotoprice: "Перейти до прайс-листа",
      },
      Days: {
        Monday: "Пн",
        Friday: "Пт",
        Saturday: "Сб",
      },
      Introduction_Page: {
        welcome: "Ласкаво просимо",
        introduce: "Ми - манікюрна студія в Брно з приємними цінами.",
        banner_des_1: "Ми спеціалізуємося на манікюрі, педикюрі та косметиці.",
        banner_des_2:
          "Ми знаходимося на Lidická 1877/44, 60200 Brno - střed, приблизно за 50 м від трамвайної зупинки Antonínská. NSC 89 Nails пропонує якісні послуги догляду за нігтями за доступними цінами з більш ніж 8-річним досвідом.",
        voucher_text: "Зробіть щасливими",
        voucher_title: "Подарункові сертифікати",
        voucher_des_1: "Ви можете придбати їх особисто в нашій студії.",
        voucher_des_2: "Сертифікати вартістю від 450 до 600 CZK.",
        voucher_des_3: "Дійсні протягом 5 місяців з моменту видачі.",
      },
      About_Page: {
        intro: "Хто ми",
        des_1:
          "NSC 89 Nails – це наш манікюрний салон, розташований поблизу трамвайної зупинки Antonínská, що робить його зручним для пересування. З більш ніж 8-річним досвідом ми пропонуємо якісні послуги догляду за нігтями за доступними цінами. Наша команда досвідчених професіоналів використовує безпечні продукти та сучасні техніки догляду за нігтями. Завітайте до NSC 89 Nails, щоб насолодитися професійними послугами та відпочинком.",
        des_2:
          "Студія сучасно обладнана. Наша спеціалізація – манікюр, педикюр, косметика та масаж.",
      },
      heroBanner: {
        header_1: "Ідеальний",
        title_1: "манікюр",
        header_2: "Педикюр",
        title_2: "Footlogix",
        header_3: "Нарощування вій,",
        title_3: "корекція брів",
      },
      FootBanner: {
        title: "Найзручніший спосіб запису до студії:",
        des_1: "Зробіть резервацію",
        des_2: "термін",
        BookingVisit: "Забронювати візит",
      },
      FollowBanner: {
        connected: "БУДЬТЕ НА ЗВ'ЯЗКУ",
        reach: "Як нас знайти?",
        follow: "Слідкуйте за нами",
        title: "nsc89nails.cz",
        title_2: "Де ми базуємося",
        btn_1: "Перейти до нашого Instagram",
        btn_2: "Показати контакти",
      },
      priceMenu: {
        new: "(нове застосування)",
        addition: "(додаток)",
        title_3: "Манікюр + Педикюр",
        title_4: "Моделювання штучних нігтів",
        title_5: "Декорація нігтів",
        title_6: "Корекція нігтів",
        title_7: "Нарощування вій",
        title_8: "Масажі",
        title_9: "Інші послуги",
        option_1: {
          text_1: "Класичний манікюр",
          text_2: "Манікюр з звичайним O.P.I лаком",
          text_3: "Манікюр з CND Shellac (колір)",
          text_4: "Манікюр з CND Shellac (френч)",
        },
        option_2: {
          text_1: "Класичний педикюр",
          text_2: "Класичний педикюр Footlogix",
          text_3: "Педикюр Footlogix зі звичайним O.P.I лаком",
          text_4: "Педикюр Footlogix з гель-лаком",
          text_5: "Педикюр Footlogix з CND Shellac",
          text_6: "Гель-лак для нігтів",
          text_7: "Shellac без педикюру",
        },
        option_3: {
          text_1: "Класичні гель/акрилові нігті",
          text_2: "Гель/акрилові нігті з лаком",
          text_3: "Гель/акрилові нігті з CND Shellac",
          text_4: "Нове застосування плюс (+)",
          text_5: "Довгі нігті плюс (+)",
        },
        option_4: {
          text_1: "Декорування нігтів",
          text_2: "Повне декорування нігтів",
          text_3: "Стрази за розміром",
          text_4: "Бантик за штуку",
          text_5: "Повний магнітний ефект",
          text_6: "Повний пігмент для нігтів",
          text_7: "Аерографія/Френч",
        },
        option_5: {
          text_1: "1 ніготь",
          text_2: "Зняття перед новим нанесенням",
          text_3: "Зняття гель/акрилових нігтів",
          text_4: "Зняття нігтів CND Shellac",
          text_5: "Зміна кольору",
        },
        option_6: {
          text_1: "Нарощування вій",
          text_2: "Нарощування вій",
          text_3: "Нарощування вій 'об'єм'",
          text_4: "Нарощування вій 'об'єм'",
          text_5: "Корекція брів",
          text_6: "Фарбування брів",
          text_7: "Фарбування вій",
        },
        option_7: {
          text_1: "Масаж ніг",
          text_2: "Масаж ніг",
          text_3: "SPA масаж (традиційний в'єтнамський + масло)",
          text_4: "SPA масаж (традиційний в'єтнамський + масло)",
        },
      },
      service: {
        Manicure: "Манікюр",
        Pedicure: "Педикюр",
        Facial: "Обличчя",
        Massage: "Масаж",
        Cosmetic: "Косметика",
        option_1: {
          text_1: "Акрилові нігті",
          text_2: "Гелеві нігті",
          text_3: "Французький манікюр",
          text_4: "Shellac",
          text_5: "Японський манікюр P Shine",
          text_6: "Нарощування та зміцнення натуральних нігтів",
          text_7: "Полірування нігтів",
          text_8: "Нейл-арт – малювання та декорування нігтів",
          text_9: "Ремонт, регенеративні процедури",
        },
        option_2: {
          text_1: "Медичний педикюр Footlogix",
          text_2: "Акрилові нігті",
          text_3: "Гелеві нігті",
          text_4: "Полірування та декорування нігтів",
          text_5: "Догляд за стопами у ванночці",
          text_6: "Зняття мозолів, натоптишів та загрублої шкіри",
          text_7: "Релаксаційний масаж",
        },
        option_3: {
          text_1: "Нарощування вій – перше нанесення",
          text_2: "Корекція та фарбування вій",
          text_3: "Французький манікюр",
          text_4: "Фарбування брів",
          text_5: "Зняття вій за запитом",
        },
        option_4: {
          text_1: "Нарощування вій – перше нанесення",
          text_2: "SPA масаж (традиційний в'єтнамський + масаж з олією)",
        },
      },
      Reference: "Референція",
      CustomerFeedback: "Що кажуть про нас клієнти",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "cz", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
