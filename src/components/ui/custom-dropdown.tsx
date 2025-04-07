
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface DropdownOption {
  label: string;
  value: string;
  href?: string;
  onClick?: () => void;
}

interface CustomDropdownProps {
  trigger: React.ReactNode;
  options: DropdownOption[];
  align?: "left" | "right";
  className?: string;
  menuClassName?: string;
}

export const CustomDropdown = ({
  trigger,
  options,
  align = "left",
  className,
  menuClassName,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (option: DropdownOption) => {
    if (option.onClick) {
      option.onClick();
    }
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center"
      >
        {trigger}
      </div>
      
      {isOpen && (
        <div 
          className={cn(
            "absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black/5 py-1 transition-all duration-300 animate-in fade-in-50 slide-in-from-top-5",
            align === "right" ? "right-0" : "left-0",
            menuClassName
          )}
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              option.href ? (
                <Link
                  key={index}
                  to={option.href}
                  onClick={() => handleItemClick(option)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-deep-red transition-all duration-200 relative group overflow-hidden"
                  role="menuitem"
                >
                  {option.label}
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={() => handleItemClick(option)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-deep-red transition-all duration-200 relative group overflow-hidden"
                  role="menuitem"
                >
                  {option.label}
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface DropdownButtonProps {
  children: React.ReactNode;
  options: DropdownOption[];
  align?: "left" | "right";
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
}

export const DropdownButton = ({
  children,
  options,
  align = "left",
  className,
  buttonClassName,
  menuClassName,
}: DropdownButtonProps) => {
  return (
    <CustomDropdown
      className={className}
      align={align}
      menuClassName={menuClassName}
      options={options}
      trigger={
        <button
          className={cn(
            "inline-flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-300",
            buttonClassName
          )}
        >
          {children}
          <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
        </button>
      }
    />
  );
};

interface NavDropdownProps {
  label: string;
  options: DropdownOption[];
  isActive?: boolean;
  className?: string;
}

export const NavDropdown = ({ label, options, isActive, className }: NavDropdownProps) => {
  return (
    <DropdownButton
      className={cn("nav-dropdown", className)}
      buttonClassName={cn(
        "transition-all duration-300 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 relative overflow-hidden group",
        isActive 
          ? "text-deep-red font-medium"
          : "hover:text-deep-red"
      )}
      options={options}
    >
      <span className="relative z-10">{label}</span>
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold" />
      )}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-300 ease-in-out group-hover:w-full" />
    </DropdownButton>
  );
};

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
