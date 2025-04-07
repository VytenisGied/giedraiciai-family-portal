import { Link } from "react-router-dom";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();
  const [language, setLanguage] = useState<"EN" | "LT" | "PL">("EN");
  
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4]">
      {/* Header/Navigation */}
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
                  <NavigationMenuItem>
                    <Link to="/">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/history">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        History
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Official</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        <li>
                          <Link to="/official/coat-of-arms" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Coat of Arms</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/official/documents" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Documents</div>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Association</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        <li>
                          <Link to="/association/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">About</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/association/membership" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Membership</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/association/submit-genealogy" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Submit Genealogy</div>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/blog">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Blog
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              {/* Separate Language dropdown using DropdownMenu instead of NavigationMenu */}
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
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4 text-[#C9A13B]">House of Giedraičiai</h3>
              <p className="text-sm text-gray-300">Preserving the heritage and legacy of one of Lithuania's most noble houses since the 13th century.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <Link to="/" className="text-sm text-gray-300 hover:text-white">Home</Link>
                <Link to="/history" className="text-sm text-gray-300 hover:text-white">History</Link>
                <Link to="/official/coat-of-arms" className="text-sm text-gray-300 hover:text-white">Coat of Arms</Link>
                <Link to="/official/documents" className="text-sm text-gray-300 hover:text-white">Documents</Link>
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Association</h3>
              <nav className="flex flex-col gap-2">
                <Link to="/association/about" className="text-sm text-gray-300 hover:text-white">About</Link>
                <Link to="/association/membership" className="text-sm text-gray-300 hover:text-white">Membership</Link>
                <Link to="/association/submit-genealogy" className="text-sm text-gray-300 hover:text-white">Submit Genealogy</Link>
                <Link to="/blog" className="text-sm text-gray-300 hover:text-white">Blog</Link>
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Language</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => setLanguage("EN")} 
                  className={`px-2 py-1 text-sm ${language === "EN" ? "font-bold text-[#C9A13B]" : "text-gray-300"}`}
                >
                  English
                </button>
                <button 
                  onClick={() => setLanguage("LT")}
                  className={`px-2 py-1 text-sm ${language === "LT" ? "font-bold text-[#C9A13B]" : "text-gray-300"}`}
                >
                  Lithuanian
                </button>
                <button 
                  onClick={() => setLanguage("PL")}
                  className={`px-2 py-1 text-sm ${language === "PL" ? "font-bold text-[#C9A13B]" : "text-gray-300"}`}
                >
                  Polish
                </button>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Contact</h3>
                <p className="text-sm text-gray-300">info@giedraiciai.org</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} House of Giedraičiai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
