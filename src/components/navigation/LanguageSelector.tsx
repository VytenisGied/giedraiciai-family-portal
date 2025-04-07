
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SupportedLanguage } from "@/utils/languageUtils";
import { LanguageDropdown } from "@/components/ui/custom-dropdown";
import { Flag } from "lucide-react";

interface LanguageSelectorProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (language: SupportedLanguage) => void;
  isMobile?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  currentLanguage, 
  onLanguageChange,
  isMobile = false
}) => {
  const { t } = useTranslation();
  
  const getFlagForLanguage = (language: SupportedLanguage) => {
    switch (language) {
      case "EN":
        return <Flag className="h-3.5 w-3.5" />;
      case "LT":
        return <Flag className="h-3.5 w-3.5 text-yellow-500" />;
      case "PL":
        return <Flag className="h-3.5 w-3.5 text-red-500" />;
      default:
        return <Flag className="h-3.5 w-3.5" />;
    }
  };
  
  if (isMobile) {
    return (
      <div className="mt-4 pt-4 border-t border-gold/20">
        <p className="text-base font-medium px-2 mb-2 text-deep-red">{t('footer.language')}</p>
        <div className="flex gap-2 px-2">
          <Button 
            variant={currentLanguage === "EN" ? "default" : "outline"}
            size="sm"
            onClick={() => onLanguageChange("EN")}
            className={cn(
              "flex items-center gap-1.5",
              currentLanguage === "EN" 
                ? "bg-gold hover:bg-gold/90 transition-colors duration-300" 
                : "border-gold text-gold hover:bg-gold/10 transition-all duration-300"
            )}
          >
            <Flag className="h-3.5 w-3.5" />
            EN
          </Button>
          <Button 
            variant={currentLanguage === "LT" ? "default" : "outline"}
            size="sm"
            onClick={() => onLanguageChange("LT")}
            className={cn(
              "flex items-center gap-1.5",
              currentLanguage === "LT" 
                ? "bg-gold hover:bg-gold/90 transition-colors duration-300" 
                : "border-gold text-gold hover:bg-gold/10 transition-all duration-300"
            )}
          >
            <Flag className="h-3.5 w-3.5 text-yellow-500" />
            LT
          </Button>
          <Button 
            variant={currentLanguage === "PL" ? "default" : "outline"}
            size="sm"
            onClick={() => onLanguageChange("PL")}
            className={cn(
              "flex items-center gap-1.5",
              currentLanguage === "PL" 
                ? "bg-gold hover:bg-gold/90 transition-colors duration-300" 
                : "border-gold text-gold hover:bg-gold/10 transition-all duration-300"
            )}
          >
            <Flag className="h-3.5 w-3.5 text-red-500" />
            PL
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <LanguageDropdown
      currentLanguage={currentLanguage}
      onLanguageChange={onLanguageChange}
      align="right"
    />
  );
};
