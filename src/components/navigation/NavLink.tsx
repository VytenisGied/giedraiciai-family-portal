
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  to,
  isActive,
  children,
  className,
}) => {
  return (
    <Link to={to}>
      <Button
        variant="ghost"
        className={cn(
          "h-9 relative overflow-hidden group",
          isActive ? "text-deep-red font-medium" : "",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
        {isActive && (
          <span className="absolute bottom-0 left-0 right-0 mx-auto w-full h-[2px] bg-gold" />
        )}
        <span className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-gold transition-all duration-300 ease-in-out group-hover:w-full origin-center" />
      </Button>
    </Link>
  );
};

export const MobileNavLink: React.FC<NavLinkProps> = ({
  to,
  isActive,
  children,
  className,
}) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "px-2 py-1 text-base font-medium rounded-md relative group overflow-hidden",
        isActive ? "text-deep-red" : "text-dark-text",
        className
      )}
    >
      {children}
      <span className={cn(
        "absolute bottom-0 left-0 right-0 mx-auto h-[2px] bg-gold transition-all duration-300",
        isActive ? "w-full" : "w-0 group-hover:w-full origin-center"
      )} />
    </Link>
  );
};
