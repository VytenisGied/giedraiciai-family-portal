
import * as React from "react";
import { DropdownButton } from "./dropdown-button";
import { DropdownOption } from "./dropdown-interfaces";
import { Flag } from "lucide-react";

interface LanguageDropdownProps {
  currentLanguage: "EN" | "LT" | "PL";
  onLanguageChange: (language: "EN" | "LT" | "PL") => void;
  align?: "left" | "right";
}

export const LanguageDropdown = ({ 
  currentLanguage, 
  onLanguageChange,
  align = "right" 
}: LanguageDropdownProps) => {
  const renderFlag = (language: string) => {
    return (
      <span className="inline-flex items-center gap-1.5">
        {getFlagForLanguage(language)}
        <span>{language}</span>
      </span>
    );
  };

  const getFlagForLanguage = (language: string) => {
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
  
  const languageOptions: DropdownOption[] = [
    { 
      label: (
        <span className="flex items-center gap-2">
          <Flag className="h-4 w-4" />
          <span>English</span>
        </span>
      ), 
      value: "EN", 
      onClick: () => onLanguageChange("EN") 
    },
    { 
      label: (
        <span className="flex items-center gap-2">
          <Flag className="h-4 w-4 text-yellow-500" />
          <span>Lithuanian</span>
        </span>
      ), 
      value: "LT", 
      onClick: () => onLanguageChange("LT") 
    },
    { 
      label: (
        <span className="flex items-center gap-2">
          <Flag className="h-4 w-4 text-red-500" />
          <span>Polish</span>
        </span>
      ), 
      value: "PL", 
      onClick: () => onLanguageChange("PL") 
    },
  ];
  
  return (
    <DropdownButton
      align={align}
      buttonClassName="border border-gold text-gold hover:bg-gold/10 transition-all duration-300 rounded-full px-3"
      menuClassName="animate-in fade-in-50 slide-in-from-top-5"
      options={languageOptions}
    >
      {renderFlag(currentLanguage)}
    </DropdownButton>
  );
};
