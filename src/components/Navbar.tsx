
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NavDropdown, LanguageDropdown, DropdownOption } from "@/components/ui/custom-dropdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();
  
  const isActive = (path: string) => location.pathname === path;
  const isPathActive = (paths: string[]) => paths.some(path => location.pathname.includes(path));
  
  // Official dropdown options with localized paths
  const officialOptions: DropdownOption[] = [
    {
      label: t('nav.official.coatOfArms'),
      value: "coat-of-arms",
      href: localizedPath("coatOfArms")
    },
    {
      label: t('nav.official.documents'),
      value: "documents",
      href: localizedPath("documents")
    }
  ];
  
  // Association dropdown options with localized paths
  const associationOptions: DropdownOption[] = [
    {
      label: t('nav.association.about'),
      value: "about",
      href: localizedPath("about")
    },
    {
      label: t('nav.association.membership'),
      value: "membership",
      href: localizedPath("membership")
    },
    {
      label: t('nav.association.submitGenealogy'),
      value: "submit-genealogy",
      href: localizedPath("submitGenealogy")
    }
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gold/20 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced hover effect */}
          <Link to={localizedPath("home")} className="flex items-center gap-2 group transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-deep-red flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
              <span className="text-white font-serif text-lg">G</span>
            </div>
            <span className="font-serif text-lg text-dark-text hidden sm:block group-hover:text-deep-red transition-colors duration-300">
              {t('nav.title')}
            </span>
          </Link>
          
          {/* Desktop Navigation with enhanced styling */}
          {!isMobile && (
            <nav className="flex items-center gap-2">
              <Link to={localizedPath("home")}>
                <Button
                  variant="ghost"
                  className={cn(
                    "h-9 relative overflow-hidden group",
                    isActive(localizedPath("home")) ? "text-deep-red font-medium" : ""
                  )}
                >
                  <span className="relative z-10">{t('nav.home')}</span>
                  {isActive(localizedPath("home")) && (
                    <span className="absolute bottom-0 left-0 right-0 mx-auto w-full h-[2px] bg-gold" />
                  )}
                  <span className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-gold transition-all duration-300 ease-in-out group-hover:w-full origin-center" />
                </Button>
              </Link>
              
              <Link to={localizedPath("history")}>
                <Button
                  variant="ghost"
                  className={cn(
                    "h-9 relative overflow-hidden group",
                    isActive(localizedPath("history")) ? "text-deep-red font-medium" : ""
                  )}
                >
                  <span className="relative z-10">{t('nav.history')}</span>
                  {isActive(localizedPath("history")) && (
                    <span className="absolute bottom-0 left-0 right-0 mx-auto w-full h-[2px] bg-gold" />
                  )}
                  <span className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-gold transition-all duration-300 ease-in-out group-hover:w-full origin-center" />
                </Button>
              </Link>
              
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
              
              <Link to={localizedPath("blog")}>
                <Button
                  variant="ghost"
                  className={cn(
                    "h-9 relative overflow-hidden group",
                    isActive(localizedPath("blog")) ? "text-deep-red font-medium" : ""
                  )}
                >
                  <span className="relative z-10">{t('nav.blog')}</span>
                  {isActive(localizedPath("blog")) && (
                    <span className="absolute bottom-0 left-0 right-0 mx-auto w-full h-[2px] bg-gold" />
                  )}
                  <span className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-gold transition-all duration-300 ease-in-out group-hover:w-full origin-center" />
                </Button>
              </Link>
            </nav>
          )}
          
          {/* Language Selector with enhanced styling */}
          <div className="flex items-center gap-2">
            {!isMobile && (
              <LanguageDropdown
                currentLanguage={language}
                onLanguageChange={setLanguage}
              />
            )}
            
            {/* Mobile Menu with improved styling */}
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-gold/10 transition-colors duration-300">
                    <Menu className="h-5 w-5 text-gold" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] border-l border-gold/20">
                  <nav className="flex flex-col gap-5 mt-8">
                    <Link 
                      to={localizedPath("home")} 
                      className={cn(
                        "px-2 py-1 text-base font-medium rounded-md relative group overflow-hidden",
                        isActive(localizedPath("home")) ? "text-deep-red" : "text-dark-text"
                      )}
                    >
                      {t('nav.home')}
                      <span className={cn(
                        "absolute bottom-0 left-0 right-0 mx-auto h-[2px] bg-gold transition-all duration-300",
                        isActive(localizedPath("home")) ? "w-full" : "w-0 group-hover:w-full origin-center"
                      )} />
                    </Link>
                    
                    <Link 
                      to={localizedPath("history")} 
                      className={cn(
                        "px-2 py-1 text-base font-medium rounded-md relative group overflow-hidden",
                        isActive(localizedPath("history")) ? "text-deep-red" : "text-dark-text"
                      )}
                    >
                      {t('nav.history')}
                      <span className={cn(
                        "absolute bottom-0 left-0 right-0 mx-auto h-[2px] bg-gold transition-all duration-300",
                        isActive(localizedPath("history")) ? "w-full" : "w-0 group-hover:w-full origin-center"
                      )} />
                    </Link>
                    
                    {/* Official section with enhanced styling */}
                    <div className="space-y-3">
                      <p className="font-medium text-base px-2 text-deep-red">{t('nav.official.title')}</p>
                      <div className="ml-3 flex flex-col gap-2">
                        <Link 
                          to={localizedPath("coatOfArms")} 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md relative group overflow-hidden transition-colors duration-300",
                            isActive(localizedPath("coatOfArms")) ? "text-deep-red" : "text-dark-text hover:text-deep-red"
                          )}
                        >
                          {t('nav.official.coatOfArms')}
                          <span className={cn(
                            "absolute bottom-0 left-0 right-0 mx-auto h-[1px] bg-gold transition-all duration-300",
                            isActive(localizedPath("coatOfArms")) ? "w-full" : "w-0 group-hover:w-full origin-center"
                          )} />
                        </Link>
                        <Link 
                          to={localizedPath("documents")} 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md relative group overflow-hidden transition-colors duration-300",
                            isActive(localizedPath("documents")) ? "text-deep-red" : "text-dark-text hover:text-deep-red"
                          )}
                        >
                          {t('nav.official.documents')}
                          <span className={cn(
                            "absolute bottom-0 left-0 right-0 mx-auto h-[1px] bg-gold transition-all duration-300",
                            isActive(localizedPath("documents")) ? "w-full" : "w-0 group-hover:w-full origin-center"
                          )} />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Association section with enhanced styling */}
                    <div className="space-y-3">
                      <p className="font-medium text-base px-2 text-deep-red">{t('nav.association.title')}</p>
                      <div className="ml-3 flex flex-col gap-2">
                        <Link 
                          to={localizedPath("about")} 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md relative group overflow-hidden transition-colors duration-300",
                            isActive(localizedPath("about")) ? "text-deep-red" : "text-dark-text hover:text-deep-red"
                          )}
                        >
                          {t('nav.association.about')}
                          <span className={cn(
                            "absolute bottom-0 left-0 right-0 mx-auto h-[1px] bg-gold transition-all duration-300",
                            isActive(localizedPath("about")) ? "w-full" : "w-0 group-hover:w-full origin-center"
                          )} />
                        </Link>
                        <Link 
                          to={localizedPath("membership")} 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md relative group overflow-hidden transition-colors duration-300",
                            isActive(localizedPath("membership")) ? "text-deep-red" : "text-dark-text hover:text-deep-red"
                          )}
                        >
                          {t('nav.association.membership')}
                          <span className={cn(
                            "absolute bottom-0 left-0 right-0 mx-auto h-[1px] bg-gold transition-all duration-300",
                            isActive(localizedPath("membership")) ? "w-full" : "w-0 group-hover:w-full origin-center"
                          )} />
                        </Link>
                        <Link 
                          to={localizedPath("submitGenealogy")} 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md relative group overflow-hidden transition-colors duration-300",
                            isActive(localizedPath("submitGenealogy")) ? "text-deep-red" : "text-dark-text hover:text-deep-red"
                          )}
                        >
                          {t('nav.association.submitGenealogy')}
                          <span className={cn(
                            "absolute bottom-0 left-0 right-0 mx-auto h-[1px] bg-gold transition-all duration-300",
                            isActive(localizedPath("submitGenealogy")) ? "w-full" : "w-0 group-hover:w-full origin-center"
                          )} />
                        </Link>
                      </div>
                    </div>
                    
                    <Link 
                      to={localizedPath("blog")} 
                      className={cn(
                        "px-2 py-1 text-base font-medium rounded-md relative group overflow-hidden",
                        isActive(localizedPath("blog")) ? "text-deep-red" : "text-dark-text"
                      )}
                    >
                      {t('nav.blog')}
                      <span className={cn(
                        "absolute bottom-0 left-0 right-0 mx-auto h-[2px] bg-gold transition-all duration-300",
                        isActive(localizedPath("blog")) ? "w-full" : "w-0 group-hover:w-full origin-center"
                      )} />
                    </Link>
                    
                    {/* Mobile Language Selector with enhanced styling */}
                    <div className="mt-4 pt-4 border-t border-gold/20">
                      <p className="text-base font-medium px-2 mb-2 text-deep-red">{t('footer.language')}</p>
                      <div className="flex gap-2 px-2">
                        <Button 
                          variant={language === "EN" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setLanguage("EN")}
                          className={cn(
                            language === "EN" 
                              ? "bg-gold hover:bg-gold/90 transition-colors duration-300" 
                              : "border-gold text-gold hover:bg-gold/10 transition-all duration-300"
                          )}
                        >
                          EN
                        </Button>
                        <Button 
                          variant={language === "LT" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setLanguage("LT")}
                          className={cn(
                            language === "LT" 
                              ? "bg-gold hover:bg-gold/90 transition-colors duration-300" 
                              : "border-gold text-gold hover:bg-gold/10 transition-all duration-300"
                          )}
                        >
                          LT
                        </Button>
                        <Button 
                          variant={language === "PL" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setLanguage("PL")}
                          className={cn(
                            language === "PL" 
                              ? "bg-gold hover:bg-gold/90 transition-colors duration-300" 
                              : "border-gold text-gold hover:bg-gold/10 transition-all duration-300"
                          )}
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
