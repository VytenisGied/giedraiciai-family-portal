
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-6 text-center">About the Association</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-12 text-center">
            The House of Giedraičiai Association unites descendants and researchers of one of Lithuania's most historic noble families, preserving our heritage and fostering connections among members worldwide.
          </p>
          
          {/* Mission & Vision */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-8 text-center">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-[#C9A13B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-[#8B1E3F] mb-4">Mission</h3>
                  <p className="mb-4">
                    The House of Giedraičiai Association exists to preserve, document, and promote the rich heritage of the Giedraičiai family through historical research, genealogical documentation, and cultural activities that strengthen connections among descendants worldwide.
                  </p>
                  <p>
                    We are committed to maintaining the legacy and values established by our ancestors while adapting to the modern world's challenges and opportunities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-[#C9A13B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-[#8B1E3F] mb-4">Vision</h3>
                  <p className="mb-4">
                    We envision a global community of individuals connected by shared heritage, actively engaged in preserving their family history and contributing to the cultural richness of their respective communities.
                  </p>
                  <p>
                    Through our efforts, the significant historical contributions of the Giedraičiai family will be recognized and understood by future generations, serving as a source of inspiration and pride.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* History of the Association */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">Association History</h2>
            <div className="space-y-6">
              <p>
                The modern House of Giedraičiai Association was formally established in 2005, though informal gatherings of family members had been occurring since the 1990s following Lithuania's restoration of independence. The association was founded by a group of seven descendants who recognized the need to document and preserve the family's heritage that had been fragmented during the Soviet era.
              </p>
              
              <p>
                In its early years, the association focused primarily on genealogical research, working to reconnect branches of the family that had become separated during the tumultuous events of the 20th century. Members in Lithuania, Poland, the United States, Canada, and Australia began sharing family records, photographs, and oral histories.
              </p>
              
              <p>
                The first formal reunion was held in Vilnius in 2006, attended by over 50 descendants from eight countries. This gathering marked a turning point, establishing regular meetings and a more structured approach to the association's activities.
              </p>
              
              <p>
                In 2010, the association expanded its mission beyond genealogy to include historical research, cultural preservation, and educational outreach. Partnerships were established with museums, universities, and archives in Lithuania and Poland to support research into the family's historical significance.
              </p>
              
              <p>
                Today, the association has over 200 members across four continents and continues to grow as more descendants discover their connection to this historic family. While maintaining a focus on heritage and historical documentation, the association has increasingly embraced digital technologies to connect members and share resources.
              </p>
            </div>
          </div>
          
          {/* Activities & Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">Activities & Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A13B]/20">
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Genealogical Research</h3>
                <p>
                  Ongoing documentation of family connections, including verification of lineage claims and creation of a comprehensive digital family tree accessible to members.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A13B]/20">
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Annual Gatherings</h3>
                <p>
                  Yearly reunions held in locations of historical significance to the family, featuring presentations, tours, and social activities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A13B]/20">
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Archive Preservation</h3>
                <p>
                  Collection, digitization, and preservation of documents, photographs, and artifacts related to family history, with a physical archive maintained in Vilnius.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A13B]/20">
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Educational Outreach</h3>
                <p>
                  Development of educational materials about the family's historical significance for schools and cultural organizations in regions connected to family history.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A13B]/20">
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Historic Preservation</h3>
                <p>
                  Support for the restoration and maintenance of sites associated with the family, including the chapel in Videniškiai and family graves throughout Lithuania and Poland.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A13B]/20">
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">Publications</h3>
                <p>
                  Quarterly newsletter and occasional scholarly publications documenting family history and the lives of notable family members.
                </p>
              </div>
            </div>
          </div>
          
          {/* Leadership */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-1">Dr. Jonas Giedraitis</h3>
                <p className="text-gray-600 mb-3">President</p>
                <p className="text-sm">
                  Historian and professor at Vilnius University, specializing in Baltic nobility during the Grand Duchy period.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-1">Marta Giedroyć</h3>
                <p className="text-gray-600 mb-3">Vice President</p>
                <p className="text-sm">
                  Genealogist based in Warsaw who has documented Polish branches of the family for over 25 years.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-1">Dr. Elena Paulauskienė</h3>
                <p className="text-gray-600 mb-3">Research Director</p>
                <p className="text-sm">
                  Medieval historian and manuscript expert who leads the association's archival research efforts.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>
                The association is governed by a Board of Directors consisting of nine members elected to three-year terms. Committees focus on specific areas including genealogy, archives, events, and outreach.
              </p>
            </div>
          </div>
          
          {/* Join Us CTA */}
          <div className="bg-[#FAF8F4] border border-[#C9A13B]/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif text-[#8B1E3F] mb-4">Join Our Community</h2>
            <p className="mb-6">
              Whether you're a direct descendant, connected through marriage, or simply interested in the history of the Giedraičiai family, we welcome you to become part of our association.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/association/membership">
                <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F] text-white">
                  Membership Information
                </Button>
              </Link>
              <Link to="/association/submit-genealogy">
                <Button variant="outline" className="border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
                  Submit Your Genealogy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
