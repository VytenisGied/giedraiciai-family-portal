
import { ReactNode } from "react";

export interface DropdownOption {
  label: string;
  value: string;
  href?: string;
  onClick?: () => void;
}

export interface BaseDropdownProps {
  trigger: ReactNode;
  options: DropdownOption[];
  align?: "left" | "right";
  className?: string;
  menuClassName?: string;
}
