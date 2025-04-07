
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NavDropdown, LanguageDropdown, DropdownOption } from "@/components/ui/custom-dropdown";

interface NavbarProps {
  language: "EN" | "LT" | "PL";
  setLanguage: (language: "EN" | "LT" | "PL") => void;
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const isActive = (path: string) => location.pathname === path;
  const isPathActive = (paths: string[]) => paths.some(path => location.pathname.includes(path));
  
  // Official dropdown options
  const officialOptions: DropdownOption[] = [
    {
      label: "Coat of Arms",
      value: "coat-of-arms",
      href: "/official/coat-of-arms"
    },
    {
      label: "Documents",
      value: "documents",
      href: "/official/documents"
    }
  ];
  
  // Association dropdown options
  const associationOptions: DropdownOption[] = [
    {
      label: "About",
      value: "about",
      href: "/association/about"
    },
    {
      label: "Membership",
      value: "membership",
      href: "/association/membership"
    },
    {
      label: "Submit Genealogy",
      value: "submit-genealogy",
      href: "/association/submit-genealogy"
    }
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gold/20 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-deep-red flex items-center justify-center">
              <span className="text-white font-serif text-lg">G</span>
            </div>
            <span className="font-serif text-lg text-dark-text hidden sm:block">
              House of Giedraičiai
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-2">
              <Link to="/">
                <Button
                  variant="ghost"
                  className={cn(
                    "h-9",
                    isActive("/") ? "bg-accent text-accent-foreground" : ""
                  )}
                >
                  Home
                </Button>
              </Link>
              
              <Link to="/history">
                <Button
                  variant="ghost"
                  className={cn(
                    "h-9",
                    isActive("/history") ? "bg-accent text-accent-foreground" : ""
                  )}
                >
                  History
                </Button>
              </Link>
              
              <NavDropdown
                label="Official"
                options={officialOptions}
                isActive={isPathActive(["/official"])}
              />
              
              <NavDropdown
                label="Association"
                options={associationOptions}
                isActive={isPathActive(["/association"])}
              />
              
              <Link to="/blog">
                <Button
                  variant="ghost"
                  className={cn(
                    "h-9",
                    isActive("/blog") ? "bg-accent text-accent-foreground" : ""
                  )}
                >
                  Blog
                </Button>
              </Link>
            </nav>
          )}
          
          {/* Language Selector - Shown on both mobile and desktop */}
          <div className="flex items-center gap-2">
            {!isMobile && (
              <LanguageDropdown
                currentLanguage={language}
                onLanguageChange={setLanguage}
              />
            )}
            
            {/* Mobile Menu */}
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px]">
                  <nav className="flex flex-col gap-5 mt-8">
                    <Link 
                      to="/" 
                      className={cn(
                        "px-2 py-1 text-base font-medium rounded-md",
                        isActive("/") ? "bg-accent text-accent-foreground" : ""
                      )}
                    >
                      Home
                    </Link>
                    
                    <Link 
                      to="/history" 
                      className={cn(
                        "px-2 py-1 text-base font-medium rounded-md",
                        isActive("/history") ? "bg-accent text-accent-foreground" : ""
                      )}
                    >
                      History
                    </Link>
                    
                    <div className="space-y-3">
                      <p className="font-medium text-base px-2">Official</p>
                      <div className="ml-3 flex flex-col gap-2">
                        <Link 
                          to="/official/coat-of-arms" 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md",
                            isActive("/official/coat-of-arms") ? "bg-accent text-accent-foreground" : ""
                          )}
                        >
                          Coat of Arms
                        </Link>
                        <Link 
                          to="/official/documents" 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md",
                            isActive("/official/documents") ? "bg-accent text-accent-foreground" : ""
                          )}
                        >
                          Documents
                        </Link>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="font-medium text-base px-2">Association</p>
                      <div className="ml-3 flex flex-col gap-2">
                        <Link 
                          to="/association/about" 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md",
                            isActive("/association/about") ? "bg-accent text-accent-foreground" : ""
                          )}
                        >
                          About
                        </Link>
                        <Link 
                          to="/association/membership" 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md",
                            isActive("/association/membership") ? "bg-accent text-accent-foreground" : ""
                          )}
                        >
                          Membership
                        </Link>
                        <Link 
                          to="/association/submit-genealogy" 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md",
                            isActive("/association/submit-genealogy") ? "bg-accent text-accent-foreground" : ""
                          )}
                        >
                          Submit Genealogy
                        </Link>
                      </div>
                    </div>
                    
                    <Link 
                      to="/blog" 
                      className={cn(
                        "px-2 py-1 text-base font-medium rounded-md",
                        isActive("/blog") ? "bg-accent text-accent-foreground" : ""
                      )}
                    >
                      Blog
                    </Link>
                    
                    {/* Mobile Language Selector */}
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-base font-medium px-2 mb-2">Language</p>
                      <div className="flex gap-2 px-2">
                        <Button 
                          variant={language === "EN" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setLanguage("EN")}
                          className={language === "EN" ? "bg-gold hover:bg-gold/90" : "border-gold text-gold hover:bg-gold/10"}
                        >
                          EN
                        </Button>
                        <Button 
                          variant={language === "LT" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setLanguage("LT")}
                          className={language === "LT" ? "bg-gold hover:bg-gold/90" : "border-gold text-gold hover:bg-gold/10"}
                        >
                          LT
                        </Button>
                        <Button 
                          variant={language === "PL" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setLanguage("PL")}
                          className={language === "PL" ? "bg-gold hover:bg-gold/90" : "border-gold text-gold hover:bg-gold/10"}
                        >
                          PL
                        </Button>
                      </div>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
