
import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavDropdown, DropdownOption } from "@/components/ui/custom-dropdown";
import { NavLink } from "./NavLink";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

interface NavDesktopProps {
  officialOptions: DropdownOption[];
  associationOptions: DropdownOption[];
  isPathActive: (paths: string[]) => boolean;
}

export const NavDesktop: React.FC<NavDesktopProps> = ({ 
  officialOptions, 
  associationOptions,
  isPathActive
}) => {
  const location = useLocation();
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="flex items-center gap-2">
      <NavLink 
        to={localizedPath("home")} 
        isActive={isActive(localizedPath("home"))}
      >
        {t('nav.home')}
      </NavLink>
      
      <NavLink 
        to={localizedPath("history")} 
        isActive={isActive(localizedPath("history"))}
      >
        {t('nav.history')}
      </NavLink>
      
      <NavDropdown
        label={t('nav.official.title')}
        options={officialOptions}
        isActive={isPathActive(["/official", "/oficialus", "/oficjalne"])}
        className="nav-dropdown-enhanced"
      />
      
      <NavDropdown
        label={t('nav.association.title')}
        options={associationOptions}
        isActive={isPathActive(["/association", "/asociacija", "/stowarzyszenie"])}
        className="nav-dropdown-enhanced"
      />
      
      <NavLink 
        to={localizedPath("blog")} 
        isActive={isActive(localizedPath("blog"))}
      >
        {t('nav.blog')}
      </NavLink>
    </nav>
  );
};
