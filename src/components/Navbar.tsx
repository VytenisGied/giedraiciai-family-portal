
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { NavDesktop } from "./navigation/NavDesktop";
import { NavMobile } from "./navigation/NavMobile";
import { LanguageSelector } from "./navigation/LanguageSelector";
import { useNavigation } from "@/data/navigation";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const { language, setLanguage } = useLanguage();
  const { navItems } = useNavigation();
  const { t } = useTranslation();
  
  const isPathActive = (paths: string[]) => paths.some(path => location.pathname.includes(path));
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gold/20 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center">
          {/* Logo with enhanced hover effect */}
          <Link to={navItems[0].path || "/"} className="flex items-center gap-2 group transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-deep-red flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
              <span className="text-white font-serif text-lg">G</span>
            </div>
            <span className="font-serif text-lg text-dark-text hidden sm:block group-hover:text-deep-red transition-colors duration-300">
              {t('nav.title')}
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <NavDesktop 
              navItems={navItems}
              isPathActive={isPathActive}
            />
          )}
          
          {/* Language Selector and Mobile Menu */}
          <div className="flex items-center gap-2 ml-auto">
            {!isMobile && (
              <LanguageSelector
                currentLanguage={language}
                onLanguageChange={setLanguage}
              />
            )}
            
            {/* Mobile Menu */}
            {isMobile && (
              <NavMobile
                navItems={navItems}
                language={language}
                setLanguage={setLanguage}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
