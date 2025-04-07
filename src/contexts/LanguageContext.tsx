
import React, { createContext, useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

type LanguageContextType = {
  language: "EN" | "LT" | "PL";
  setLanguage: (language: "EN" | "LT" | "PL") => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize language from localStorage or default to "EN"
  const [language, setLanguage] = useState<"EN" | "LT" | "PL">(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    return (savedLanguage as "EN" | "LT" | "PL") || "EN";
  });

  const { t } = useTranslation();
  
  // Update i18n language when language state changes and save to localStorage
  useEffect(() => {
    // Map uppercase language codes to lowercase
    const languageCodeMap: Record<string, string> = {
      "EN": "en",
      "LT": "lt",
      "PL": "pl"
    };
    
    const languageCode = languageCodeMap[language];
    console.log(`Changing language to: ${languageCode}`);
    
    // Save language preference to localStorage
    localStorage.setItem("preferredLanguage", language);
    
    try {
      i18n.changeLanguage(languageCode);
      console.log(`Language changed to: ${i18n.language}`);
      console.log(`Translation test - hero.title: ${t('hero.title')}`);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  }, [language, t]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
