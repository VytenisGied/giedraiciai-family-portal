
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Membership = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState("types");
  
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-6 text-center">{t("membership.title")}</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-12 text-center">
            {t("membership.description")}
          </p>
          
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-16">
            <div className="border-b mb-4 border-[#C9A13B]/30 pb-1">
              <TabsList className="w-full bg-transparent shadow-none p-0 h-auto space-x-6">
                <TabsTrigger 
                  value="types" 
                  className="font-serif text-lg py-3 px-2 border-b-2 border-transparent data-[state=active]:border-[#C9A13B] data-[state=active]:text-[#8B1E3F] data-[state=active]:font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none transition-all duration-300 text-dark-text/80"
                >
                  {t("membership.types")}
                </TabsTrigger>
                
                <TabsTrigger 
                  value="benefits" 
                  className="font-serif text-lg py-3 px-2 border-b-2 border-transparent data-[state=active]:border-[#C9A13B] data-[state=active]:text-[#8B1E3F] data-[state=active]:font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none transition-all duration-300 text-dark-text/80"
                >
                  {t("membership.benefits")}
                </TabsTrigger>
                
                <TabsTrigger 
                  value="process" 
                  className="font-serif text-lg py-3 px-2 border-b-2 border-transparent data-[state=active]:border-[#C9A13B] data-[state=active]:text-[#8B1E3F] data-[state=active]:font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none transition-all duration-300 text-dark-text/80"
                >
                  {t("membership.process")}
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Membership Types Tab */}
            <TabsContent value="types" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-[#C9A13B]/20 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl font-serif text-[#8B1E3F]">{t("membership.fullMember")}</CardTitle>
                    <CardDescription className="text-center">{t("membership.forDirectDescendants")}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>{t("membership.directDescendant")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>{t("membership.fullVoting")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>{t("membership.leadershipPositions")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>{t("membership.fullArchiveAccess")}</span>
                      </li>
                    </ul>
                  </CardContent>
                  <div className="mt-auto px-6">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-[#8B1E3F]">€75</div>
                      <div className="text-sm text-gray-500">{t("membership.annualDues")}</div>
                    </div>
                    <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F] mb-6">{t("membership.apply")}</Button>
                  </div>
                </Card>
                
                <Card className="border-[#C9A13B]/20 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl font-serif text-[#8B1E3F]">{t("membership.associateMember")}</CardTitle>
                    <CardDescription className="text-center">{t("membership.forExtendedFamily")}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>{t("membership.relatedThrough")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>{t("membership.limitedVoting")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>{t("membership.committees")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>{t("membership.mostArchiveAccess")}</span>
                      </li>
                    </ul>
                  </CardContent>
                  <div className="mt-auto px-6">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-[#8B1E3F]">€50</div>
                      <div className="text-sm text-gray-500">{t("membership.annualDues")}</div>
                    </div>
                    <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F] mb-6">{t("membership.apply")}</Button>
                  </div>
                </Card>
                
                <Card className="border-[#C9A13B]/20 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl font-serif text-[#8B1E3F]">{t("membership.friendMember")}</CardTitle>
                    <CardDescription className="text-center">{t("membership.forResearchers")}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>{t("membership.researchers")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>{t("membership.noVoting")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>{t("membership.eventsParticipation")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                        <span>{t("membership.limitedArchiveAccess")}</span>
                      </li>
                    </ul>
                  </CardContent>
                  <div className="mt-auto px-6">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-[#8B1E3F]">€30</div>
                      <div className="text-sm text-gray-500">{t("membership.annualDues")}</div>
                    </div>
                    <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F] mb-6">{t("membership.apply")}</Button>
                  </div>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  {t("membership.reducedRates")}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {t("membership.honorary")}
                </p>
              </div>
            </TabsContent>
            
            {/* Benefits Tab */}
            <TabsContent value="benefits" className="mt-6">
              <Card className="border-[#C9A13B]/20">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("membership.communityConnection")}</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.globalNetwork")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.attendGatherings")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.connectRelatives")}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("membership.genealogicalResources")}</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.genealogicalDatabase")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.researchAssistance")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.lineageCertification")}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("membership.historicalArchives")}</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.digitizedDocuments")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.researchSupport")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.translatedMaterials")}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("membership.publicationsEducation")}</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.newsletter")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.discounts")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.webinars")}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("membership.heritageProjects")}</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.preservationEfforts")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.guidedTours")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.researchInitiatives")}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("membership.recognition")}</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.officialDocumentation")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.emblemUse")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C9A13B] shrink-0 mt-0.5" />
                          <span>{t("membership.familyRegistry")}</span>
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
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("membership.applicationSteps")}</h3>
                      <ol className="space-y-4 list-decimal pl-5">
                        <li>
                          <p className="font-medium">{t("membership.initialApplication")}</p>
                          <p className="text-gray-600">{t("membership.initialApplicationDescription")}</p>
                        </li>
                        <li>
                          <p className="font-medium">{t("membership.provideDocumentation")}</p>
                          <p className="text-gray-600">{t("membership.provideDocumentationDescription")}</p>
                        </li>
                        <li>
                          <p className="font-medium">{t("membership.reviewProcess")}</p>
                          <p className="text-gray-600">{t("membership.reviewProcessDescription")}</p>
                        </li>
                        <li>
                          <p className="font-medium">{t("membership.approvalPayment")}</p>
                          <p className="text-gray-600">{t("membership.approvalPaymentDescription")}</p>
                        </li>
                        <li>
                          <p className="font-medium">{t("membership.welcomePackage")}</p>
                          <p className="text-gray-600">{t("membership.welcomePackageDescription")}</p>
                        </li>
                      </ol>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("membership.requiredDocumentation")}</h3>
                      <p className="mb-4">{t("membership.documentationVary")}</p>
                      
                      <Accordion type="single" collapsible>
                        <AccordionItem value="full" className="border-[#C9A13B]/20">
                          <AccordionTrigger className="font-medium text-[#8B1E3F]">{t("membership.fullMembershipDocumentation")}</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>{t("membership.birthCertificates")}</li>
                              <li>{t("membership.marriageCertificates")}</li>
                              <li>{t("membership.baptismalRecords")}</li>
                              <li>{t("membership.officialGenealogical")}</li>
                              <li>{t("membership.dnaTest")}</li>
                              <li>{t("membership.nobleRegisters")}</li>
                            </ul>
                            <p className="mt-4 text-sm">
                              <strong>{t("membership.fullMembershipNote")}</strong>
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="associate" className="border-[#C9A13B]/20">
                          <AccordionTrigger className="font-medium text-[#8B1E3F]">{t("membership.associateMembershipDocumentation")}</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>{t("membership.marriageCertificateDirect")}</li>
                              <li>{t("membership.familyRelationship")}</li>
                              <li>{t("membership.letterReference")}</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="friend" className="border-[#C9A13B]/20">
                          <AccordionTrigger className="font-medium text-[#8B1E3F]">{t("membership.friendMembershipDocumentation")}</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>{t("membership.statementInterest")}</li>
                              <li>{t("membership.professionalCredentials")}</li>
                              <li>{t("membership.academicReferences")}</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    
                    <div className="bg-[#FAF8F4] border border-[#C9A13B]/20 rounded-lg p-6">
                      <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("membership.uncertainConnection")}</h3>
                      <p className="mb-4">
                        {t("membership.uncertainDescription")}
                      </p>
                      <Link to="/association/submit-genealogy">
                        <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F]">
                          {t("membership.submitGenealogy")}
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
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">{t("membership.codeOfConduct")}</h2>
            <Card className="border-[#C9A13B]/20">
              <CardContent className="pt-6">
                <p className="italic text-lg mb-6 text-center">
                  {t("membership.codeOfConductMotto")}
                </p>
                
                <p className="mb-4">
                  {t("membership.codeOfConductDescription")}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("membership.honorIntegrity")}</h3>
                    <p>
                      {t("membership.honorIntegrityDescription")}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("membership.respectInclusion")}</h3>
                    <p>
                      {t("membership.respectInclusionDescription")}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("membership.serviceContribution")}</h3>
                    <p>
                      {t("membership.serviceContributionDescription")}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("membership.heritageEducation")}</h3>
                    <p>
                      {t("membership.heritageEducationDescription")}
                    </p>
                  </div>
                </div>
                
                <p className="mt-6">
                  {t("membership.bylaws")}
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">{t("membership.readyToJoin")}</h2>
            <p className="text-lg mb-8">
              {t("membership.readyToJoinDescription")}
            </p>
            <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F] text-white text-lg px-8 py-6">
              {t("membership.beginApplication")}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Membership;
