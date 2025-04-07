
import React from "react";
import { useLocation } from "react-router-dom";
import { NavDropdown, DropdownOption } from "@/components/ui/dropdown";
import { NavLink } from "./NavLink";
import { NavItem } from "@/data/navigation";

interface NavDesktopProps {
  navItems: (NavItem & { label: string, children?: (NavItem & { label: string })[] })[];
  officialOptions: DropdownOption[];
  associationOptions: DropdownOption[];
  isPathActive: (paths: string[]) => boolean;
}

export const NavDesktop: React.FC<NavDesktopProps> = ({ 
  navItems,
  officialOptions, 
  associationOptions,
  isPathActive
}) => {
  const location = useLocation();
  
  const isActive = (path?: string) => path ? location.pathname === path : false;

  return (
    <nav className="flex items-center gap-2">
      {navItems.map(item => {
        // Skip items with children as they'll be rendered as dropdowns
        if (item.children && item.children.length > 0) {
          if (item.key === "official") {
            return (
              <NavDropdown
                key={item.key}
                label={item.label}
                options={officialOptions}
                isActive={isPathActive(["/official", "/oficialus", "/oficjalne"])}
                className="nav-dropdown-enhanced"
              />
            );
          }
          if (item.key === "association") {
            return (
              <NavDropdown
                key={item.key}
                label={item.label}
                options={associationOptions}
                isActive={isPathActive(["/association", "/asociacija", "/stowarzyszenie"])}
                className="nav-dropdown-enhanced"
              />
            );
          }
          return null;
        }
        
        // Render regular nav links
        return (
          <NavLink 
            key={item.key}
            to={item.path || "/"}
            isActive={isActive(item.path)}
          >
            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );
};
