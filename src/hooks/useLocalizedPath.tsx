
import { useLanguage } from "@/contexts/LanguageContext";
import { PageKey, getLocalizedPath } from "@/utils/urlUtils";

export const useLocalizedPath = () => {
  const { language } = useLanguage();
  
  // Return a function that creates a localized path for a given page key
  return (pageKey: PageKey) => getLocalizedPath(pageKey, language);
};
