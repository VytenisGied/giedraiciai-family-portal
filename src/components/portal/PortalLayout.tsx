
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Home, User, FileText, Users, Settings, LogOut } from "lucide-react";

interface PortalLayoutProps {
  children: React.ReactNode;
}

const PortalLayout = ({ children }: PortalLayoutProps) => {
  const { user, userRole, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    await logout();
    navigate("/portal/login");
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gold/20 p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-full bg-deep-red flex items-center justify-center">
            <span className="text-white font-serif text-lg">G</span>
          </div>
          <span className="font-serif text-lg text-dark-text">Portal</span>
        </div>
        
        {/* User info */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <p className="text-sm font-medium">{user?.displayName || user?.email}</p>
              <p className="text-xs text-gray-500 capitalize">{userRole}</p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="space-y-1">
          <Link to="/portal/dashboard" className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors">
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          
          <Link to="/portal/documents" className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors">
            <FileText className="h-4 w-4" />
            Documents
          </Link>
          
          <Link to="/portal/members" className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors">
            <Users className="h-4 w-4" />
            Members
          </Link>
          
          {userRole === 'admin' && (
            <Link to="/portal/settings" className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          )}
        </nav>
        
        {/* Logout button */}
        <div className="mt-auto pt-6 border-t border-gray-200 absolute bottom-4 left-4 right-4 md:static">
          <Button 
            variant="outline" 
            className="w-full justify-start text-gray-600" 
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign out
          </Button>
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default PortalLayout;
