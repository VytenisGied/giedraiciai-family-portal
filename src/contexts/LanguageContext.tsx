
import React, { createContext, useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

type LanguageContextType = {
  language: "EN" | "LT" | "PL";
  setLanguage: (language: "EN" | "LT" | "PL") => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<"EN" | "LT" | "PL">("EN");
  
  // Update i18n language when language state changes
  useEffect(() => {
    const languageCode = language.toLowerCase();
    console.log(`Changing language to: ${languageCode}`);
    i18n.changeLanguage(languageCode).then(() => {
      console.log(`Language changed successfully to: ${i18n.language}`);
    }).catch(error => {
      console.error("Error changing language:", error);
    });
  }, [language]);

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
