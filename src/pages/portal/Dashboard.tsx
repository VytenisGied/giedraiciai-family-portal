
import React from "react";
import { Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PortalLayout from "@/components/portal/PortalLayout";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const { user, userRole, isLoading } = useAuth();
  
  // If not authenticated, redirect to login
  if (!isLoading && !user) {
    return <Navigate to="/portal/login" replace />;
  }
  
  return (
    <PortalLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-serif text-deep-red mb-6">Member Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome, {user?.displayName || user?.email}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You are logged in as: <strong>{userRole}</strong></p>
            </CardContent>
          </Card>
          
          {/* Member Resources - Only visible to all members */}
          <Card>
            <CardHeader>
              <CardTitle>Member Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access exclusive content and resources for members.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Quarterly newsletters</li>
                <li>Genealogy database</li>
                <li>Member directory</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Admin Panel - Only visible to admins */}
          {userRole === 'admin' && (
            <Card>
              <CardHeader>
                <CardTitle>Admin Panel</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Manage organization settings and users.</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>User management</li>
                  <li>Content management</li>
                  <li>Approval queue</li>
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </PortalLayout>
  );
};

export default Dashboard;
