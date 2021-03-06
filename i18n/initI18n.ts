import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

import dict from "./dictionary";

const detectionOptions = {
  // order and from where user language should be detected
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "navigator",
    "path",
    "subdomain"
  ],
  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)
  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",
  // only detect languages that are in the whitelist
  checkWhitelist: true
};

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    detection: detectionOptions,
    resources: dict,
    fallbackLng: "en",
    whitelist: ["en", "de"],
    debug: false,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
