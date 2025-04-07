
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'member' | 'admin' | null;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole = 'member' 
}) => {
  const { user, userRole, isLoading, hasPermission } = useAuth();
  
  // Show loading state while authentication status is being determined
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-deep-red"></div>
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/portal/login" replace />;
  }
  
  // Check role-based permissions
  if (!hasPermission(requiredRole)) {
    return <Navigate to="/portal/dashboard" replace />;
  }
  
  // Render children if authenticated and authorized
  return <>{children}</>;
};

export default ProtectedRoute;
