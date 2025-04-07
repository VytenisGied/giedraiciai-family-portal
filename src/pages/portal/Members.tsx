
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import PortalLayout from "@/components/portal/PortalLayout";
import ProtectedRoute from "@/components/portal/ProtectedRoute";

// Mock members data
const mockMembers = [
  { id: 1, name: "Anna Giedraitis", location: "Vilnius, Lithuania", joined: "2020" },
  { id: 2, name: "Jonas Giedraitis", location: "Kaunas, Lithuania", joined: "2018" },
  { id: 3, name: "Matas Giedraitis", location: "Warsaw, Poland", joined: "2019" },
  { id: 4, name: "Elena Giedraitienė", location: "Chicago, USA", joined: "2017" },
  { id: 5, name: "Tomas Giedraitis", location: "Toronto, Canada", joined: "2021" },
  { id: 6, name: "Lina Giedraitytė", location: "Dublin, Ireland", joined: "2022" },
  { id: 7, name: "Petras Giedraitis", location: "London, UK", joined: "2020" },
  { id: 8, name: "Ona Giedraitienė", location: "Sydney, Australia", joined: "2019" }
];

const Members = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter members based on search term
  const filteredMembers = mockMembers.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <ProtectedRoute>
      <PortalLayout>
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-serif text-deep-red mb-6">Member Directory</h1>
          
          <div className="mb-6">
            <Input
              type="search"
              placeholder="Search members by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Family Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Location</th>
                      <th className="text-left py-3 px-4">Member Since</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {filteredMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4">{member.name}</td>
                        <td className="py-3 px-4">{member.location}</td>
                        <td className="py-3 px-4">{member.joined}</td>
                      </tr>
                    ))}
                    {filteredMembers.length === 0 && (
                      <tr>
                        <td colSpan={3} className="py-6 text-center text-gray-500">
                          No members found matching your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </PortalLayout>
    </ProtectedRoute>
  );
};

export default Members;
