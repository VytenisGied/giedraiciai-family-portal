
import * as React from "react";
import { cn } from "@/lib/utils";
import { DropdownButton } from "./dropdown-button";
import { DropdownOption } from "./dropdown-interfaces";

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
      <span className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-gold transition-all duration-300 ease-in-out group-hover:w-full origin-center" />
    </DropdownButton>
  );
};
