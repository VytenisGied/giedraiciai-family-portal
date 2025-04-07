
// Language type and mapping utilities
export type SupportedLanguage = "EN" | "LT" | "PL";
export type LowercaseLanguage = "en" | "lt" | "pl";

// Map between uppercase and lowercase language codes
export const languageCodeMap: Record<SupportedLanguage, LowercaseLanguage> = {
  "EN": "en",
  "LT": "lt",
  "PL": "pl"
};

export const reverseLangCodeMap: Record<LowercaseLanguage, SupportedLanguage> = {
  "en": "EN",
  "lt": "LT",
  "pl": "PL"
};

// Function to get the preferred language from localStorage or default
export const getStoredLanguage = (): SupportedLanguage => {
  const savedLanguage = localStorage.getItem("preferredLanguage");
  
  // If saved language exists and is valid, return it
  if (savedLanguage && Object.keys(languageCodeMap).includes(savedLanguage as SupportedLanguage)) {
    return savedLanguage as SupportedLanguage;
  }
  
  // If i18next has already set a language in localStorage, try to use that
  const i18NextLang = localStorage.getItem("i18nextLng");
  if (i18NextLang) {
    const langCode = i18NextLang.substring(0, 2).toLowerCase() as LowercaseLanguage;
    if (Object.keys(reverseLangCodeMap).includes(langCode)) {
      return reverseLangCodeMap[langCode];
    }
  }
  
  return "EN"; // Default language
};

// Save language preference to localStorage
export const saveLanguage = (language: SupportedLanguage): void => {
  localStorage.setItem("preferredLanguage", language);
};

// Get lowercase language code
export const getLowercaseCode = (language: SupportedLanguage): LowercaseLanguage => {
  return languageCodeMap[language];
};
