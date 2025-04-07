
import React from "react";
import { useLocation } from "react-router-dom";
import { NavDropdown, DropdownOption } from "@/components/ui/dropdown";
import { NavLink } from "./NavLink";
import { NavItem } from "@/data/navigation";

interface NavDesktopProps {
  navItems: (NavItem & { 
    label: string, 
    dropdown?: (NavItem['dropdown'] & { label: string })[],
  })[];
  isPathActive: (paths: string[]) => boolean;
}

export const NavDesktop: React.FC<NavDesktopProps> = ({ 
  navItems,
  isPathActive
}) => {
  const location = useLocation();
  
  const isActive = (path?: string) => path ? location.pathname === path : false;

  return (
    <nav className="flex items-center gap-2">
      {navItems.map(item => {
        // Items with dropdown
        if (item.dropdown && item.dropdown.length > 0) {
          const dropdownOptions: DropdownOption[] = item.dropdown.map(dropItem => ({
            label: dropItem.label,
            value: dropItem.name,
            href: dropItem.path
          }));
          
          // Path base detection for active state
          const basePaths = item.dropdown.map(d => {
            const path = d.path || '';
            // Extract base path for each language
            return ['/', '/oficialus/', '/oficjalne/'].map(prefix => 
              prefix + path.split('/').filter(p => p).join('/')
            );
          }).flat();
          
          return (
            <NavDropdown
              key={item.name}
              label={item.label}
              options={dropdownOptions}
              isActive={isPathActive(basePaths)}
              className="nav-dropdown-enhanced"
            />
          );
        }
        
        // Regular nav links
        return (
          <NavLink 
            key={item.name}
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
