
import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { SupportedLanguage } from "@/utils/languageUtils";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import { LanguageSelector } from "./LanguageSelector";
import { MobileNavLink } from "./NavLink";

interface NavMobileProps {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
}

export const NavMobile: React.FC<NavMobileProps> = ({ 
  language, 
  setLanguage 
}) => {
  const location = useLocation();
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-gold/10 transition-colors duration-300">
          <Menu className="h-5 w-5 text-gold" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] border-l border-gold/20">
        <nav className="flex flex-col gap-5 mt-8">
          <MobileNavLink
            to={localizedPath("home")}
            isActive={isActive(localizedPath("home"))}
          >
            {t('nav.home')}
          </MobileNavLink>
          
          <MobileNavLink
            to={localizedPath("history")}
            isActive={isActive(localizedPath("history"))}
          >
            {t('nav.history')}
          </MobileNavLink>
          
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
          
          <MobileNavLink
            to={localizedPath("blog")}
            isActive={isActive(localizedPath("blog"))}
          >
            {t('nav.blog')}
          </MobileNavLink>
          
          {/* Mobile Language Selector */}
          <LanguageSelector 
            currentLanguage={language}
            onLanguageChange={setLanguage}
            isMobile={true}
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
};
