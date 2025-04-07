
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { CustomDropdown } from "./custom-dropdown";
import { DropdownOption } from "./dropdown-interfaces";

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
