
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { DropdownOption } from "@/components/ui/custom-dropdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import { NavDesktop } from "./navigation/NavDesktop";
import { NavMobile } from "./navigation/NavMobile";
import { LanguageSelector } from "./navigation/LanguageSelector";

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();
  
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
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <NavDesktop 
              officialOptions={officialOptions}
              associationOptions={associationOptions}
              isPathActive={isPathActive}
            />
          )}
          
          {/* Language Selector and Mobile Menu */}
          <div className="flex items-center gap-2">
            {!isMobile && (
              <LanguageSelector
                currentLanguage={language}
                onLanguageChange={setLanguage}
              />
            )}
            
            {/* Mobile Menu */}
            {isMobile && (
              <NavMobile
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
