
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageDropdown } from "@/components/ui/custom-dropdown";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();
  
  return (
    <div className="min-h-screen flex flex-col bg-ivory-white">
      {/* Header/Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-dark-text text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4 text-gold">{t('footer.title')}</h3>
              <p className="text-sm text-gray-300">{t('footer.description')}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">{t('footer.quickLinks')}</h3>
              <nav className="flex flex-col gap-2">
                <Link to={localizedPath("home")} className="text-sm text-gray-300 hover:text-white">{t('nav.home')}</Link>
                <Link to={localizedPath("history")} className="text-sm text-gray-300 hover:text-white">{t('nav.history')}</Link>
                <Link to={localizedPath("coatOfArms")} className="text-sm text-gray-300 hover:text-white">{t('nav.official.coatOfArms')}</Link>
                <Link to={localizedPath("documents")} className="text-sm text-gray-300 hover:text-white">{t('nav.official.documents')}</Link>
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">{t('footer.association')}</h3>
              <nav className="flex flex-col gap-2">
                <Link to={localizedPath("about")} className="text-sm text-gray-300 hover:text-white">{t('nav.association.about')}</Link>
                <Link to={localizedPath("membership")} className="text-sm text-gray-300 hover:text-white">{t('nav.association.membership')}</Link>
                <Link to={localizedPath("submitGenealogy")} className="text-sm text-gray-300 hover:text-white">{t('nav.association.submitGenealogy')}</Link>
                <Link to={localizedPath("blog")} className="text-sm text-gray-300 hover:text-white">{t('nav.blog')}</Link>
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">{t('footer.language')}</h3>
              <LanguageDropdown 
                currentLanguage={language}
                onLanguageChange={setLanguage}
                align="left"
              />
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">{t('footer.contact')}</h3>
                <p className="text-sm text-gray-300">info@giedraiciai.org</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
