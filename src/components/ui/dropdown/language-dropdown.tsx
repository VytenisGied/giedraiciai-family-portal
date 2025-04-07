
import * as React from "react";
import { DropdownButton } from "./dropdown-button";
import { DropdownOption } from "./dropdown-interfaces";

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
  const languageOptions: DropdownOption[] = [
    { 
      label: "English", 
      value: "EN", 
      onClick: () => onLanguageChange("EN") 
    },
    { 
      label: "Lithuanian", 
      value: "LT", 
      onClick: () => onLanguageChange("LT") 
    },
    { 
      label: "Polish", 
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
      {currentLanguage}
    </DropdownButton>
  );
};
