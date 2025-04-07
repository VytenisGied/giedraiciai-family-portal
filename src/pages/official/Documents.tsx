import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Search, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

// Mock document data
const documents = [
  {
    id: 1,
    title: "Letters Patent of Nobility (1569)",
    category: "Noble Status",
    description: "Royal confirmation of noble status granted to the Giedraičiai family by Sigismund II Augustus, King of Poland and Grand Duke of Lithuania.",
    image: "/placeholder.svg",
    file: "#"
  },
  {
    id: 2,
    title: "Land Grant in Samogitia (1576)",
    category: "Land Grants",
    description: "Grant of lands in the Samogitia region by Stephen Báthory, documenting the family's territorial holdings.",
    image: "/placeholder.svg",
    file: "#"
  },
  {
    id: 3,
    title: "Episcopal Appointment (1631)",
    category: "Ecclesiastical",
    description: "Papal bull appointing Merkelis Giedraitis as Bishop of Samogitia, along with royal confirmation.",
    image: "/placeholder.svg",
    file: "#"
  },
  {
    id: 4,
    title: "Military Commission (1702)",
    category: "Military",
    description: "Commission as Colonel in the Lithuanian Army granted to Kazimieras Giedraitis by Augustus II the Strong.",
    image: "/placeholder.svg",
    file: "#"
  },
  {
    id: 5,
    title: "Family Genealogy (1842)",
    category: "Genealogy",
    description: "Comprehensive genealogical documentation compiled for the Russian Imperial authorities to confirm noble status.",
    image: "/placeholder.svg",
    file: "#"
  },
  {
    id: 6,
    title: "Association Charter (2005)",
    category: "Modern",
    description: "Founding charter of the contemporary House of Giedraičiai Association, establishing its mission and governance structure.",
    image: "/placeholder.svg",
    file: "#"
  }
];

const Documents = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-6 text-center">{t("documents.title")}</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-12 text-center">
          {t("documents.description")}
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-serif text-[#8B1E3F] mb-4">{t("documents.categories")}</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="noble-status" className="border-[#C9A13B]/20">
              <AccordionTrigger className="hover:text-[#8B1E3F] py-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#C9A13B]" />
                  <span>{t("documents.nobleStatus")}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  {t("documents.nobleStatusDescription1")}
                </p>
                <p>
                  {t("documents.nobleStatusDescription2")}
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="land-grants" className="border-[#C9A13B]/20">
              <AccordionTrigger className="hover:text-[#8B1E3F] py-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#C9A13B]" />
                  <span>{t("documents.landGrants")}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  {t("documents.landGrantsDescription1")}
                </p>
                <p>
                  {t("documents.landGrantsDescription2")}
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="ecclesiastical" className="border-[#C9A13B]/20">
              <AccordionTrigger className="hover:text-[#8B1E3F] py-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#C9A13B]" />
                  <span>{t("documents.ecclesiastical")}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  {t("documents.ecclesiasticalDescription1")}
                </p>
                <p>
                  {t("documents.ecclesiasticalDescription2")}
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="military" className="border-[#C9A13B]/20">
              <AccordionTrigger className="hover:text-[#8B1E3F] py-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#C9A13B]" />
                  <span>{t("documents.military")}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  {t("documents.militaryDescription1")}
                </p>
                <p>
                  {t("documents.militaryDescription2")}
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="genealogy" className="border-[#C9A13B]/20">
              <AccordionTrigger className="hover:text-[#8B1E3F] py-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#C9A13B]" />
                  <span>{t("documents.genealogy")}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  {t("documents.genealogyDescription1")}
                </p>
                <p>
                  {t("documents.genealogyDescription2")}
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="personal" className="border-[#C9A13B]/20">
              <AccordionTrigger className="hover:text-[#8B1E3F] py-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#C9A13B]" />
                  <span>{t("documents.correspondence")}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  {t("documents.correspondenceDescription1")}
                </p>
                <p>
                  {t("documents.correspondenceDescription2")}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Featured Documents */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-[#8B1E3F] mb-6">{t("documents.featured")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.slice(0, 4).map(document => (
              <Card key={document.id} className="border-[#C9A13B]/20 hover:shadow-md transition-all">
                <div className="aspect-[4/3] bg-gray-100">
                  <img src={document.image} alt={document.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-[#8B1E3F] mb-2">{document.category}</div>
                  <h3 className="text-xl font-serif mb-2">{document.title}</h3>
                  <p className="text-gray-600 mb-4">{document.description}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
                      <Search className="h-4 w-4 mr-2" /> {t("documents.view")}
                    </Button>
                    <Button className="flex-1 bg-[#C9A13B] hover:bg-[#8B1E3F]">
                      <Download className="h-4 w-4 mr-2" /> {t("documents.download")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
              {t("documents.viewAll")} <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Document Preservation Note */}
        <div className="bg-[#FAF8F4] border border-[#C9A13B]/20 rounded-lg p-6">
          <h3 className="text-xl font-serif text-[#8B1E3F] mb-4">{t("documents.preservation")}</h3>
          <p className="mb-4">
            {t("documents.preservationDescription")}
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>{t("documents.digitizing")}</li>
            <li>{t("documents.conservation")}</li>
            <li>{t("documents.translating")}</li>
            <li>{t("documents.researching")}</li>
            <li>{t("documents.repository")}</li>
          </ul>
          <p>
            {t("documents.contactPreservation")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documents;
