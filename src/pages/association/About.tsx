
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-6 text-center">{t("about.title")}</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-12 text-center">
            {t("about.description")}
          </p>
          
          {/* Mission & Vision */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-8 text-center">{t("about.missionVision")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-[#C9A13B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-[#8B1E3F] mb-4">{t("about.mission")}</h3>
                  <p className="mb-4">
                    {t("about.missionDescription1")}
                  </p>
                  <p>
                    {t("about.missionDescription2")}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-[#C9A13B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-[#8B1E3F] mb-4">{t("about.vision")}</h3>
                  <p className="mb-4">
                    {t("about.visionDescription1")}
                  </p>
                  <p>
                    {t("about.visionDescription2")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* History of the Association */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">{t("about.associationHistory")}</h2>
            <div className="space-y-6">
              <p>
                {t("about.historyParagraph1")}
              </p>
              
              <p>
                {t("about.historyParagraph2")}
              </p>
              
              <p>
                {t("about.historyParagraph3")}
              </p>
              
              <p>
                {t("about.historyParagraph4")}
              </p>
              
              <p>
                {t("about.historyParagraph5")}
              </p>
            </div>
          </div>
          
          {/* Activities & Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">{t("about.activitiesProjects")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A13B]/20">
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("about.genealogicalResearch")}</h3>
                <p>
                  {t("about.genealogicalResearchDescription")}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A13B]/20">
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("about.annualGatherings")}</h3>
                <p>
                  {t("about.annualGatheringsDescription")}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A13B]/20">
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("about.archivePreservation")}</h3>
                <p>
                  {t("about.archivePreservationDescription")}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A13B]/20">
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("about.educationalOutreach")}</h3>
                <p>
                  {t("about.educationalOutreachDescription")}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A13B]/20">
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("about.historicPreservation")}</h3>
                <p>
                  {t("about.historicPreservationDescription")}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A13B]/20">
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-3">{t("about.publications")}</h3>
                <p>
                  {t("about.publicationsDescription")}
                </p>
              </div>
            </div>
          </div>
          
          {/* Leadership */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">{t("about.leadership")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-1">Dr. Jonas Giedraitis</h3>
                <p className="text-gray-600 mb-3">{t("about.president")}</p>
                <p className="text-sm">
                  {t("about.presidentDescription")}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-1">Marta Giedroyć</h3>
                <p className="text-gray-600 mb-3">{t("about.vicePresident")}</p>
                <p className="text-sm">
                  {t("about.vicePresidentDescription")}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-serif text-[#8B1E3F] mb-1">Dr. Elena Paulauskienė</h3>
                <p className="text-gray-600 mb-3">{t("about.researchDirector")}</p>
                <p className="text-sm">
                  {t("about.researchDirectorDescription")}
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>
                {t("about.governance")}
              </p>
            </div>
          </div>
          
          {/* Join Us CTA */}
          <div className="bg-[#FAF8F4] border border-[#C9A13B]/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif text-[#8B1E3F] mb-4">{t("about.joinCommunity")}</h2>
            <p className="mb-6">
              {t("about.joinDescription")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/association/membership">
                <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F] text-white">
                  {t("about.membershipInfo")}
                </Button>
              </Link>
              <Link to="/association/submit-genealogy">
                <Button variant="outline" className="border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
                  {t("about.submitGenealogy")}
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
