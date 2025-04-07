
import * as React from "react";
import { ChevronDown } from "lucide-react";
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
            "absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1",
            align === "right" ? "right-0" : "left-0",
            menuClassName
          )}
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <a
                key={index}
                href={option.href || "#"}
                onClick={(e) => {
                  if (option.onClick) {
                    e.preventDefault();
                    option.onClick();
                    setIsOpen(false);
                  } else if (!option.href) {
                    e.preventDefault();
                  }
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option.label}
              </a>
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
            "inline-flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium rounded-md",
            buttonClassName
          )}
        >
          {children}
          <ChevronDown className="h-4 w-4" />
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
      className={className}
      buttonClassName={cn(
        "transition-colors inline-flex h-9 items-center justify-center rounded-md px-4 py-2",
        isActive 
          ? "bg-accent text-accent-foreground"
          : "hover:bg-accent hover:text-accent-foreground"
      )}
      options={options}
    >
      {label}
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
      buttonClassName="border border-gold text-gold hover:bg-gold/10"
      options={languageOptions}
    >
      {currentLanguage}
    </DropdownButton>
  );
};
