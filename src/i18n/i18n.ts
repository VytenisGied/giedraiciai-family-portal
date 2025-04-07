
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./translations";
import { getStoredLanguage, getLowercaseCode } from "../utils/languageUtils";

// Get the saved language from storage utilities
const savedLanguage = getStoredLanguage();
const initialLanguage = getLowercaseCode(savedLanguage);

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already safes from xss
    },
    debug: process.env.NODE_ENV === 'development',
    react: {
      useSuspense: false // Set to false to avoid issues with Suspense
    },
    // Make sure keys use the correct separators
    keySeparator: ".",
    nsSeparator: ":",
  });

export default i18n;
