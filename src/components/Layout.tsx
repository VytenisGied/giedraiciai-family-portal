
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [language, setLanguage] = useState<"EN" | "LT" | "PL">("EN");
  
  return (
    <div className="min-h-screen flex flex-col bg-ivory-white">
      {/* Header/Navigation */}
      <Navbar language={language} setLanguage={setLanguage} />
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-dark-text text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4 text-gold">House of Giedraičiai</h3>
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
                  className={`px-2 py-1 text-sm ${language === "EN" ? "font-bold text-gold" : "text-gray-300"}`}
                >
                  English
                </button>
                <button 
                  onClick={() => setLanguage("LT")}
                  className={`px-2 py-1 text-sm ${language === "LT" ? "font-bold text-gold" : "text-gray-300"}`}
                >
                  Lithuanian
                </button>
                <button 
                  onClick={() => setLanguage("PL")}
                  className={`px-2 py-1 text-sm ${language === "PL" ? "font-bold text-gold" : "text-gray-300"}`}
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
