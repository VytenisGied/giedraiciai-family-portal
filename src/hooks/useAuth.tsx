
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type UserRole = 'member' | 'admin' | null;

interface User {
  id: string;
  email: string;
  displayName?: string;
}

interface AuthContextType {
  user: User | null;
  userRole: UserRole;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  hasPermission: (requiredRole: UserRole) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock authentication service (would be replaced with real auth system)
const mockUsers = [
  { id: '1', email: 'admin@giedraiciai.org', password: 'admin123', displayName: 'Admin User', role: 'admin' as UserRole },
  { id: '2', email: 'member@giedraiciai.org', password: 'member123', displayName: 'Regular Member', role: 'member' as UserRole }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in (e.g., from session storage)
  useEffect(() => {
    const storedUser = sessionStorage.getItem('auth_user');
    const storedRole = sessionStorage.getItem('auth_role');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setUserRole(storedRole as UserRole);
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    
    if (!foundUser) {
      setIsLoading(false);
      throw new Error('Invalid credentials');
    }
    
    const { password: _, ...userWithoutPassword } = foundUser;
    
    // Set user and role
    setUser({ 
      id: userWithoutPassword.id, 
      email: userWithoutPassword.email,
      displayName: userWithoutPassword.displayName
    });
    setUserRole(userWithoutPassword.role);
    
    // Store in session
    sessionStorage.setItem('auth_user', JSON.stringify({ 
      id: userWithoutPassword.id, 
      email: userWithoutPassword.email,
      displayName: userWithoutPassword.displayName
    }));
    sessionStorage.setItem('auth_role', userWithoutPassword.role || '');
    
    setIsLoading(false);
  };

  const logout = async (): Promise<void> => {
    // Clear user data
    setUser(null);
    setUserRole(null);
    
    // Clear session storage
    sessionStorage.removeItem('auth_user');
    sessionStorage.removeItem('auth_role');
  };

  const hasPermission = (requiredRole: UserRole): boolean => {
    if (!requiredRole) return true; // No permission required
    if (!userRole) return false; // User has no role
    
    // Admin has access to everything
    if (userRole === 'admin') return true;
    
    // Member only has access to member pages
    if (userRole === 'member' && requiredRole === 'member') return true;
    
    return false;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      userRole,
      isLoading, 
      login, 
      logout, 
      hasPermission
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
