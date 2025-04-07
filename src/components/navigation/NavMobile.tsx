
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { SupportedLanguage } from "@/utils/languageUtils";
import { LanguageSelector } from "./LanguageSelector";
import { MobileNavLink } from "./NavLink";
import { NavItem, NavItemDropdown } from "@/data/navigation";

interface NavMobileProps {
  navItems: (NavItem & { 
    label: string, 
    dropdown?: (NavItemDropdown & { label: string })[] 
  })[];
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
}

export const NavMobile: React.FC<NavMobileProps> = ({ 
  navItems,
  language, 
  setLanguage 
}) => {
  const location = useLocation();
  
  const isActive = (path?: string) => path ? location.pathname === path : false;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-gold/10 transition-colors duration-300">
          <Menu className="h-5 w-5 text-gold" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] border-l border-gold/20">
        <nav className="flex flex-col gap-5 mt-8">
          {navItems.map(item => {
            // If item has dropdown items, render them as a group
            if (item.dropdown && item.dropdown.length > 0) {
              return (
                <div key={item.name} className="space-y-3">
                  <p className="font-medium text-base px-2 text-deep-red">{item.label}</p>
                  <div className="ml-3 flex flex-col gap-2">
                    {item.dropdown.map(dropdownItem => (
                      <Link 
                        key={dropdownItem.name}
                        to={dropdownItem.path || "/"}
                        className={cn(
                          "px-2 py-1 text-sm rounded-md relative group overflow-hidden transition-colors duration-300",
                          isActive(dropdownItem.path) ? "text-deep-red" : "text-dark-text hover:text-deep-red"
                        )}
                      >
                        {dropdownItem.label}
                        <span className={cn(
                          "absolute bottom-0 left-0 right-0 mx-auto h-[1px] bg-gold transition-all duration-300",
                          isActive(dropdownItem.path) ? "w-full" : "w-0 group-hover:w-full origin-center"
                        )} />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            
            // Render regular nav links
            return (
              <MobileNavLink
                key={item.name}
                to={item.path || "/"}
                isActive={isActive(item.path)}
              >
                {item.label}
              </MobileNavLink>
            );
          })}
          
          {/* Mobile Language Selector */}
          <LanguageSelector 
            currentLanguage={language}
            onLanguageChange={setLanguage}
            isMobile={true}
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
};
