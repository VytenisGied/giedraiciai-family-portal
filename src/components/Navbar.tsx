
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface NavbarProps {
  language: "EN" | "LT" | "PL";
  setLanguage: (language: "EN" | "LT" | "PL") => void;
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const isMobile = useIsMobile();

  // Custom NavItem component for regular navigation items
  const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <NavigationMenuItem>
      <Link to={to}>
        <div className={navigationMenuTriggerStyle()}>
          {children}
        </div>
      </Link>
    </NavigationMenuItem>
  );
  
  return (
    <header className="border-b border-[#C9A13B]/20 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#8B1E3F] rounded-full flex items-center justify-center">
            <span className="text-white font-serif text-xl">G</span>
          </div>
          <span className="text-xl font-serif text-[#1A1A1A] hidden sm:inline-block">
            House of Giedraičiai
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/history">History</NavItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Official</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[200px] gap-3 p-4">
                      <Link 
                        to="/official/coat-of-arms" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Coat of Arms</div>
                      </Link>
                      <Link 
                        to="/official/documents" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Documents</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Association</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[200px] gap-3 p-4">
                      <Link 
                        to="/association/about" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">About</div>
                      </Link>
                      <Link 
                        to="/association/membership" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Membership</div>
                      </Link>
                      <Link 
                        to="/association/submit-genealogy" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Submit Genealogy</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavItem to="/blog">Blog</NavItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Language dropdown using DropdownMenu */}
            <DropdownMenu>
              <DropdownMenuTrigger className="ml-2 inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium">
                {language}
                <ChevronDown className="ml-1 h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuItem 
                  onClick={() => setLanguage("EN")}
                  className={`${language === "EN" ? "bg-accent text-accent-foreground" : ""}`}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage("LT")}
                  className={`${language === "LT" ? "bg-accent text-accent-foreground" : ""}`}
                >
                  Lithuanian
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage("PL")}
                  className={`${language === "PL" ? "bg-accent text-accent-foreground" : ""}`}
                >
                  Polish
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
        
        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="py-2 text-lg font-medium">Home</Link>
                <Link to="/history" className="py-2 text-lg font-medium">History</Link>
                
                <div className="py-2">
                  <h3 className="text-lg font-medium mb-2">Official</h3>
                  <div className="pl-4 flex flex-col gap-2">
                    <Link to="/official/coat-of-arms" className="text-sm">Coat of Arms</Link>
                    <Link to="/official/documents" className="text-sm">Documents</Link>
                  </div>
                </div>
                
                <div className="py-2">
                  <h3 className="text-lg font-medium mb-2">Association</h3>
                  <div className="pl-4 flex flex-col gap-2">
                    <Link to="/association/about" className="text-sm">About</Link>
                    <Link to="/association/membership" className="text-sm">Membership</Link>
                    <Link to="/association/submit-genealogy" className="text-sm">Submit Genealogy</Link>
                  </div>
                </div>
                
                <Link to="/blog" className="py-2 text-lg font-medium">Blog</Link>
                
                <div className="py-2">
                  <h3 className="text-lg font-medium mb-2">Language</h3>
                  <div className="pl-4 flex gap-4">
                    <button 
                      onClick={() => setLanguage("EN")} 
                      className={`px-2 py-1 ${language === "EN" ? "font-bold text-[#8B1E3F]" : ""}`}
                    >
                      EN
                    </button>
                    <button 
                      onClick={() => setLanguage("LT")}
                      className={`px-2 py-1 ${language === "LT" ? "font-bold text-[#8B1E3F]" : ""}`}
                    >
                      LT
                    </button>
                    <button 
                      onClick={() => setLanguage("PL")}
                      className={`px-2 py-1 ${language === "PL" ? "font-bold text-[#8B1E3F]" : ""}`}
                    >
                      PL
                    </button>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Navbar;
