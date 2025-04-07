
import React, { createContext, useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

type LanguageContextType = {
  language: "EN" | "LT" | "PL";
  setLanguage: (language: "EN" | "LT" | "PL") => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<"EN" | "LT" | "PL">("EN");
  const { i18n } = useTranslation();

  // Update i18n language when language state changes
  useEffect(() => {
    i18n.changeLanguage(language.toLowerCase());
  }, [language, i18n]);

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
