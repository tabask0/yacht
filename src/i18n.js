import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ro from "./translations/ro.json";
import en from "./translations/en.json";

const resources = {
  en: {
    translation: en,
  },
  ro: {
    translation: ro,
  },
};

const lang = localStorage.getItem("language");
console.log(lang);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: lang,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
