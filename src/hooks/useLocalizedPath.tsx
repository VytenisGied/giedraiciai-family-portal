
import { useLanguage } from "@/contexts/LanguageContext";
import { PageKey, getLocalizedPath } from "@/utils/urlUtils";

export const useLocalizedPath = () => {
  const { language } = useLanguage();
  
  return (pageKey: PageKey) => getLocalizedPath(pageKey, language);
};
