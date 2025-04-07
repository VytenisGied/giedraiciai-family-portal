
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PortalLayout from "@/components/portal/PortalLayout";
import ProtectedRoute from "@/components/portal/ProtectedRoute";

const Documents = () => {
  return (
    <ProtectedRoute>
      <PortalLayout>
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-serif text-deep-red mb-6">Member Documents</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Annual Meeting Minutes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Minutes from the annual member meetings.</p>
                <ul className="divide-y">
                  <li className="py-2 flex items-center justify-between">
                    <span>2025 Annual Meeting</span>
                    <a href="#" className="text-deep-red hover:underline">Download PDF</a>
                  </li>
                  <li className="py-2 flex items-center justify-between">
                    <span>2024 Annual Meeting</span>
                    <a href="#" className="text-deep-red hover:underline">Download PDF</a>
                  </li>
                  <li className="py-2 flex items-center justify-between">
                    <span>2023 Annual Meeting</span>
                    <a href="#" className="text-deep-red hover:underline">Download PDF</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Family Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Access to genealogical research documents.</p>
                <ul className="divide-y">
                  <li className="py-2 flex items-center justify-between">
                    <span>Lithuania Archives Access Guide</span>
                    <a href="#" className="text-deep-red hover:underline">Download PDF</a>
                  </li>
                  <li className="py-2 flex items-center justify-between">
                    <span>Family Tree Template</span>
                    <a href="#" className="text-deep-red hover:underline">Download XLSX</a>
                  </li>
                  <li className="py-2 flex items-center justify-between">
                    <span>Research Methodology</span>
                    <a href="#" className="text-deep-red hover:underline">Download PDF</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </PortalLayout>
    </ProtectedRoute>
  );
};

export default Documents;
