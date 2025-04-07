
import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BaseDropdownProps, DropdownOption } from "./dropdown-interfaces";

export const CustomDropdown = ({
  trigger,
  options,
  align = "left",
  className,
  menuClassName,
}: BaseDropdownProps) => {
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
                  <span className="relative z-10">{option.label}</span>
                  <span className="absolute bottom-0 left-0 right-0 mx-auto h-[1px] w-0 bg-gold transition-all duration-300 ease-in-out group-hover:w-full origin-center"></span>
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={() => handleItemClick(option)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-deep-red transition-all duration-200 relative group overflow-hidden"
                  role="menuitem"
                >
                  <span className="relative z-10">{option.label}</span>
                  <span className="absolute bottom-0 left-0 right-0 mx-auto h-[1px] w-0 bg-gold transition-all duration-300 ease-in-out group-hover:w-full origin-center"></span>
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
