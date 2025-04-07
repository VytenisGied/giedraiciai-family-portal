
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Membership = () => {
  const [selectedTab, setSelectedTab] = useState("types");
  
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-6 text-center">Membership</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-12 text-center">
            Join the House of Giedraičiai Association and become part of a global community dedicated to preserving our shared heritage and fostering connections among descendants and researchers worldwide.
          </p>
          
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-16">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="types">Membership Types</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="process">Application Process</TabsTrigger>
            </TabsList>
            
            {/* Membership Types Tab */}
            <TabsContent value="types" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-[#C9A13B]/20">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl font-serif text-[#8B1E3F]">Full Member</CardTitle>
                    <CardDescription className="text-center">For direct descendants</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>Direct descendant of the Giedraičiai family (documented)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>Full voting rights in association matters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>Can hold leadership positions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>Access to all archives and resources</span>
                      </li>
                    </ul>
                    <div className="mt-6 text-center">
                      <div className="text-2xl font-bold text-[#8B1E3F]">€75</div>
                      <div className="text-sm text-gray-500">Annual dues</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F]">Apply Now</Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-[#C9A13B]/20">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl font-serif text-[#8B1E3F]">Associate Member</CardTitle>
                    <CardDescription className="text-center">For extended family & spouses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>Related through marriage or family connection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>Limited voting rights (non-governance matters)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>Can serve on committees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>Access to most archives and resources</span>
                      </li>
                    </ul>
                    <div className="mt-6 text-center">
                      <div className="text-2xl font-bold text-[#8B1E3F]">€50</div>
                      <div className="text-sm text-gray-500">Annual dues</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F]">Apply Now</Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-[#C9A13B]/20">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl font-serif text-[#8B1E3F]">Friend Member</CardTitle>
                    <CardDescription className="text-center">For researchers & supporters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>Historians, researchers, and enthusiasts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>No voting rights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>Can participate in events and projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>Limited access to archives (by request)</span>
                      </li>
                    </ul>
                    <div className="mt-6 text-center">
                      <div className="text-2xl font-bold text-[#8B1E3F]">€30</div>
                      <div className="text-sm text-gray-500">Annual dues</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F]">Apply Now</Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  * Reduced rates available for students, seniors, and members in countries with economic hardship.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  * Honorary memberships are occasionally granted for exceptional contributions to family history.
                </p>
              </div>
            </TabsContent>
            
            {/* Benefits Tab */}
            <TabsContent value="benefits" className="mt-6">
              <Card className="border-[#C9A13B]/20">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Community & Connection</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Join a global network of family members and researchers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Attend annual gatherings and regional events</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Connect with relatives you may not have known</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Genealogical Resources</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Access to the family's genealogical database</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Personalized research assistance from our experts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Documentation verification and lineage certification</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Historical Archives</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Access to digitized historical documents and images</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Research support in European archives</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Translated materials from multiple languages</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Publications & Education</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Quarterly newsletter with research updates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Discounts on association publications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Access to webinars and educational materials</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Heritage Projects</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Participate in historical preservation efforts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Guided tours of family historical sites</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Contribute to ongoing research initiatives</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Recognition</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Official documentation of your family connection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Use of the association's emblem (per guidelines)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>Inclusion in the official family registry</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Application Process Tab */}
            <TabsContent value="process" className="mt-6">
              <Card className="border-[#C9A13B]/20">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Application Steps</h3>
                      <ol className="space-y-4 list-decimal pl-5">
                        <li>
                          <p className="font-medium">Submit Initial Application</p>
                          <p className="text-gray-600">Complete the online application form with your personal information and details about your potential connection to the family.</p>
                        </li>
                        <li>
                          <p className="font-medium">Provide Documentation</p>
                          <p className="text-gray-600">For Full Membership, submit genealogical documentation showing your lineage. For Associate Membership, provide evidence of your family connection or marriage.</p>
                        </li>
                        <li>
                          <p className="font-medium">Review Process</p>
                          <p className="text-gray-600">The Membership Committee will review your application and documentation. This process typically takes 4-6 weeks for Full Membership and 2-3 weeks for other categories.</p>
                        </li>
                        <li>
                          <p className="font-medium">Approval and Payment</p>
                          <p className="text-gray-600">Upon approval, you'll receive an invitation to complete your membership by paying the annual dues.</p>
                        </li>
                        <li>
                          <p className="font-medium">Welcome Package</p>
                          <p className="text-gray-600">New members receive a welcome package with a membership certificate, information about accessing member resources, and upcoming events.</p>
                        </li>
                      </ol>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Required Documentation</h3>
                      <p className="mb-4">Documentation requirements vary by membership type:</p>
                      
                      <Accordion type="single" collapsible>
                        <AccordionItem value="full" className="border-[#C9A13B]/20">
                          <AccordionTrigger className="font-medium text-[#8B1E3F]">Full Membership Documentation</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Birth certificates establishing your direct lineage</li>
                              <li>Marriage certificates of linking generations</li>
                              <li>Baptismal records or church documentation</li>
                              <li>Official genealogical research from recognized sources</li>
                              <li>DNA test results (as supplementary evidence only)</li>
                              <li>Previously established noble registers or directories</li>
                            </ul>
                            <p className="mt-4 text-sm">
                              <strong>Note:</strong> Documents should connect you to an established member of the Giedraičiai family. Our genealogy committee can assist if you have gaps in your documentation.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="associate" className="border-[#C9A13B]/20">
                          <AccordionTrigger className="font-medium text-[#8B1E3F]">Associate Membership Documentation</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Marriage certificate to a direct descendant</li>
                              <li>Documentation showing family relationship</li>
                              <li>Letter of reference from a current Full Member</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="friend" className="border-[#C9A13B]/20">
                          <AccordionTrigger className="font-medium text-[#8B1E3F]">Friend Membership Documentation</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Brief statement of interest in the family's history</li>
                              <li>Professional credentials (for historians/researchers)</li>
                              <li>References from academic institutions (if applicable)</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    
                    <div className="bg-[#FAF8F4] border border-[#C9A13B]/20 rounded-lg p-6">
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Uncertain About Your Connection?</h3>
                      <p className="mb-4">
                        If you believe you may be connected to the Giedraičiai family but don't have complete documentation, don't worry! Our genealogy team can help you research your potential connection.
                      </p>
                      <Link to="/association/submit-genealogy">
                        <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F]">
                          Submit Your Genealogy Information
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Code of Conduct */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">Member Code of Conduct</h2>
            <Card className="border-[#C9A13B]/20">
              <CardContent className="pt-6">
                <p className="italic text-lg mb-6 text-center">
                  "By joining the House of Giedraičiai Association, you honor a legacy of nobility, service, and cultural heritage spanning over eight centuries."
                </p>
                
                <p className="mb-4">
                  Members of the association are expected to uphold the values and traditions established by our ancestors while adapting them to contemporary contexts. The following principles guide our conduct as members:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Honor & Integrity</h3>
                    <p>
                      Members conduct themselves with honor and integrity in personal and professional endeavors, reflecting the ethical standards that have characterized the family throughout its history.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Respect & Inclusion</h3>
                    <p>
                      Members treat all people with respect and dignity, recognizing the diversity within our global family and the communities where we live.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Service & Contribution</h3>
                    <p>
                      Following a centuries-long tradition of public service, members are encouraged to contribute positively to society through civic engagement and community service.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Heritage & Education</h3>
                    <p>
                      Members commit to learning about and preserving family history while educating others about the cultural heritage associated with the Giedraičiai name.
                    </p>
                  </div>
                </div>
                
                <p className="mt-6">
                  All members agree to abide by the association's bylaws, respect the privacy of other members, participate constructively in association activities, and represent the family name with dignity.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">Ready to Join?</h2>
            <p className="text-lg mb-8">
              Apply today to become part of the House of Giedraičiai's living legacy and global community.
            </p>
            <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F] text-white text-lg px-8 py-6">
              Begin Application Process
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Membership;
