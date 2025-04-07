
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
          {/* Logo */}
          <Link to={localizedPath("home")} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-deep-red flex items-center justify-center">
              <span className="text-white font-serif text-lg">G</span>
            </div>
            <span className="font-serif text-lg text-dark-text hidden sm:block">
              {t('nav.title')}
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-2">
              <Link to={localizedPath("home")}>
                <Button
                  variant="ghost"
                  className={cn(
                    "h-9",
                    isActive(localizedPath("home")) ? "bg-accent text-accent-foreground" : ""
                  )}
                >
                  {t('nav.home')}
                </Button>
              </Link>
              
              <Link to={localizedPath("history")}>
                <Button
                  variant="ghost"
                  className={cn(
                    "h-9",
                    isActive(localizedPath("history")) ? "bg-accent text-accent-foreground" : ""
                  )}
                >
                  {t('nav.history')}
                </Button>
              </Link>
              
              <NavDropdown
                label={t('nav.official')}
                options={officialOptions}
                isActive={isPathActive(["/official", "/oficjalus", "/oficjalne"])}
              />
              
              <NavDropdown
                label={t('nav.association')}
                options={associationOptions}
                isActive={isPathActive(["/association", "/asociacija", "/stowarzyszenie"])}
              />
              
              <Link to={localizedPath("blog")}>
                <Button
                  variant="ghost"
                  className={cn(
                    "h-9",
                    isActive(localizedPath("blog")) ? "bg-accent text-accent-foreground" : ""
                  )}
                >
                  {t('nav.blog')}
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
                      to={localizedPath("home")} 
                      className={cn(
                        "px-2 py-1 text-base font-medium rounded-md",
                        isActive(localizedPath("home")) ? "bg-accent text-accent-foreground" : ""
                      )}
                    >
                      {t('nav.home')}
                    </Link>
                    
                    <Link 
                      to={localizedPath("history")} 
                      className={cn(
                        "px-2 py-1 text-base font-medium rounded-md",
                        isActive(localizedPath("history")) ? "bg-accent text-accent-foreground" : ""
                      )}
                    >
                      {t('nav.history')}
                    </Link>
                    
                    <div className="space-y-3">
                      <p className="font-medium text-base px-2">{t('nav.official')}</p>
                      <div className="ml-3 flex flex-col gap-2">
                        <Link 
                          to={localizedPath("coatOfArms")} 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md",
                            isActive(localizedPath("coatOfArms")) ? "bg-accent text-accent-foreground" : ""
                          )}
                        >
                          {t('nav.official.coatOfArms')}
                        </Link>
                        <Link 
                          to={localizedPath("documents")} 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md",
                            isActive(localizedPath("documents")) ? "bg-accent text-accent-foreground" : ""
                          )}
                        >
                          {t('nav.official.documents')}
                        </Link>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="font-medium text-base px-2">{t('nav.association')}</p>
                      <div className="ml-3 flex flex-col gap-2">
                        <Link 
                          to={localizedPath("about")} 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md",
                            isActive(localizedPath("about")) ? "bg-accent text-accent-foreground" : ""
                          )}
                        >
                          {t('nav.association.about')}
                        </Link>
                        <Link 
                          to={localizedPath("membership")} 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md",
                            isActive(localizedPath("membership")) ? "bg-accent text-accent-foreground" : ""
                          )}
                        >
                          {t('nav.association.membership')}
                        </Link>
                        <Link 
                          to={localizedPath("submitGenealogy")} 
                          className={cn(
                            "px-2 py-1 text-sm rounded-md",
                            isActive(localizedPath("submitGenealogy")) ? "bg-accent text-accent-foreground" : ""
                          )}
                        >
                          {t('nav.association.submitGenealogy')}
                        </Link>
                      </div>
                    </div>
                    
                    <Link 
                      to={localizedPath("blog")} 
                      className={cn(
                        "px-2 py-1 text-base font-medium rounded-md",
                        isActive(localizedPath("blog")) ? "bg-accent text-accent-foreground" : ""
                      )}
                    >
                      {t('nav.blog')}
                    </Link>
                    
                    {/* Mobile Language Selector */}
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-base font-medium px-2 mb-2">{t('footer.language')}</p>
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
