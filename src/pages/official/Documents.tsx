
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Search, ChevronRight } from "lucide-react";

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
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-6 text-center">Historical Documents</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-12 text-center">
            Explore the rich documentary heritage of the House of Giedraičiai, from medieval royal grants to modern association documents. These materials provide valuable insights into the family's history, status, and influence across centuries.
          </p>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif text-[#8B1E3F] mb-4">Document Categories</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="noble-status" className="border-[#C9A13B]/20">
                <AccordionTrigger className="hover:text-[#8B1E3F] py-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#C9A13B]" />
                    <span>Noble Status Confirmations</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    These documents officially confirm the noble status of the Giedraičiai family across different historical periods. They include royal letters patent, confirmations by successive rulers, and registrations in noble directories and matriculations.
                  </p>
                  <p>
                    The earliest surviving confirmation dates from 1569, though historical records indicate the family's noble status was already well-established by the 14th century.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="land-grants" className="border-[#C9A13B]/20">
                <AccordionTrigger className="hover:text-[#8B1E3F] py-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#C9A13B]" />
                    <span>Land Grants & Property Documents</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    These documents record land grants, estate purchases, and property transfers related to the family's territorial holdings. They provide valuable information about the geographic extent of the family's influence and economic resources.
                  </p>
                  <p>
                    The collection includes grants in Lithuania, Poland, and territories of modern-day Belarus and Ukraine, dating from the 15th to the early 20th centuries.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="ecclesiastical" className="border-[#C9A13B]/20">
                <AccordionTrigger className="hover:text-[#8B1E3F] py-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#C9A13B]" />
                    <span>Ecclesiastical Documents</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Given the significant number of Giedraičiai family members who served in the Church, this collection includes papal bulls, episcopal appointments, and records of church foundations and donations sponsored by the family.
                  </p>
                  <p>
                    Of particular importance are documents related to Merkelis Giedraitis, Bishop of Samogitia (1576-1609), who played a crucial role in the Counter-Reformation in Lithuania.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="military" className="border-[#C9A13B]/20">
                <AccordionTrigger className="hover:text-[#8B1E3F] py-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#C9A13B]" />
                    <span>Military Commissions & Records</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    These documents record the military service of family members, including commissions, promotions, and awards. The collection spans from the 16th to the 20th centuries, covering service in Lithuanian, Polish, Russian, and other armed forces.
                  </p>
                  <p>
                    Notable documents include records from the Livonian War, the Great Northern War, the Polish-Lithuanian uprisings of the 19th century, and the two World Wars.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="genealogy" className="border-[#C9A13B]/20">
                <AccordionTrigger className="hover:text-[#8B1E3F] py-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#C9A13B]" />
                    <span>Genealogical Records</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    This collection includes family trees, birth and marriage records, and comprehensive genealogical documentation compiled at various points in history. Of particular value are the detailed genealogies prepared in the 19th century for confirmation of noble status under Russian Imperial rule.
                  </p>
                  <p>
                    Modern additions include genealogical research conducted by the contemporary House of Giedraičiai Association, documenting branches of the family that settled across Europe, the Americas, and Australia.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="personal" className="border-[#C9A13B]/20">
                <AccordionTrigger className="hover:text-[#8B1E3F] py-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#C9A13B]" />
                    <span>Personal Correspondence</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    This collection includes personal letters, diaries, and memoirs of family members. These documents provide insights into the daily lives, personal relationships, and perspectives of individuals from different generations of the family.
                  </p>
                  <p>
                    The collection is particularly rich for the 18th-20th centuries, with notable correspondence from family members involved in political, cultural, and religious affairs.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {/* Featured Documents */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-[#8B1E3F] mb-6">Featured Documents</h2>
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
                        <Search className="h-4 w-4 mr-2" /> View
                      </Button>
                      <Button className="flex-1 bg-[#C9A13B] hover:bg-[#8B1E3F]">
                        <Download className="h-4 w-4 mr-2" /> Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" className="border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
                View All Documents <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Document Preservation Note */}
          <div className="bg-[#FAF8F4] border border-[#C9A13B]/20 rounded-lg p-6">
            <h3 className="text-xl font-serif text-[#8B1E3F] mb-4">Document Preservation Efforts</h3>
            <p className="mb-4">
              The House of Giedraičiai Association is committed to preserving our documentary heritage for future generations. Our ongoing efforts include:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Digitizing fragile original documents</li>
              <li>Professional conservation of physical documents</li>
              <li>Translating documents from Latin, Old Polish, and other historical languages</li>
              <li>Researching in archives across Europe to discover additional materials</li>
              <li>Creating a secure digital repository accessible to family members and researchers</li>
            </ul>
            <p>
              If you possess documents related to the Giedraičiai family history or are interested in supporting our preservation efforts, please contact our archival committee at archives@giedraiciai.org.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Documents;
