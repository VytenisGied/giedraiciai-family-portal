
import React, { createContext, useState, useContext, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import i18n from "../i18n/i18n";
import { 
  SupportedLanguage, 
  getStoredLanguage, 
  saveLanguage, 
  getLowercaseCode 
} from "../utils/languageUtils";
import { getLocalizedUrl, getPageKeyFromUrl } from "../utils/urlUtils";

type LanguageContextType = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize language from our utility function
  const [language, setLanguage] = useState<SupportedLanguage>(getStoredLanguage());
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Update i18n language when language state changes and save to localStorage
  const handleLanguageChange = useMemo(() => (newLanguage: SupportedLanguage) => {
    // Get the current page key from URL
    const pageKey = getPageKeyFromUrl(location.pathname);
    
    // If we found a matching page key, get the localized URL for the new language
    if (pageKey) {
      const currentUrl = location.pathname;
      const newUrl = getLocalizedUrl(currentUrl, language, newLanguage);
      
      setLanguage(newLanguage);
      
      // Navigate to the localized URL
      if (newUrl !== currentUrl) {
        navigate(newUrl);
      }
    } else {
      // If we couldn't determine a page key, just set the language but don't navigate
      setLanguage(newLanguage);
    }
  }, [language, location, navigate]);
  
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

  // Effect for redirecting to localized URL when URL changes or on initial load
  useEffect(() => {
    // Skip this effect during the initial render since other effects are still setting up
    const shouldRedirect = document.readyState === 'complete';
    
    if (shouldRedirect) {
      const currentUrl = location.pathname;
      const localizedUrl = getLocalizedUrl(currentUrl, language, language);
      
      // Only navigate if we're not already on the localized URL
      if (localizedUrl !== currentUrl) {
        console.log(`Redirecting from ${currentUrl} to localized URL: ${localizedUrl}`);
        navigate(localizedUrl, { replace: true });
      }
    }
  }, [location.pathname, language, navigate]);

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
