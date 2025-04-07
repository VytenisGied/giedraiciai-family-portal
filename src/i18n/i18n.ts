
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./translations";

// Get the saved language from localStorage or use default
const savedLanguage = localStorage.getItem("preferredLanguage");
const initialLanguage = savedLanguage ? savedLanguage.toLowerCase() : "en";

// Initialize i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: initialLanguage, // use stored language or default to "en"
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    debug: process.env.NODE_ENV === 'development',
    react: {
      useSuspense: false // Set to false to avoid issues with Suspense
    },
    // Add this to ensure keys are found
    keySeparator: ".",
    nsSeparator: ":",
  });

export default i18n;
