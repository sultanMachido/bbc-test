import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./Language/english.json";
import hindi from "./Language/hindi.json";

// the translations



const resources = {
  en: {
    translation: english
  },
  hi:{
    translation: hindi
  }
  
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "hi",

    keySeparator: false, 

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;