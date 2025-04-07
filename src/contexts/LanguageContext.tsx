
import React, { createContext, useState, useContext, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";
import { 
  SupportedLanguage, 
  getStoredLanguage, 
  saveLanguage, 
  getLowercaseCode 
} from "../utils/languageUtils";

type LanguageContextType = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize language from our utility function
  const [language, setLanguage] = useState<SupportedLanguage>(getStoredLanguage());
  const { t } = useTranslation();
  
  // Update i18n language when language state changes and save to localStorage
  const handleLanguageChange = useMemo(() => (newLanguage: SupportedLanguage) => {
    setLanguage(newLanguage);
  }, []);
  
  // Handle actual language change effects
  useEffect(() => {
    const languageCode = getLowercaseCode(language);
    console.log(`Changing language to: ${languageCode}`);
    
    // Save language preference
    saveLanguage(language);
    
    try {
      i18n.changeLanguage(languageCode);
      console.log(`Language changed to: ${i18n.language}`);
      document.documentElement.lang = languageCode; // Set HTML lang attribute
    } catch (error) {
      console.error("Error changing language:", error);
    }
  }, [language]);

  const contextValue = useMemo(() => ({
    language,
    setLanguage: handleLanguageChange
  }), [language, handleLanguageChange]);

  return (
    <LanguageContext.Provider value={contextValue}>
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
