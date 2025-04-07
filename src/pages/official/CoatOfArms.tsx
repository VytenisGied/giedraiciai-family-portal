
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

const CoatOfArms = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-6 text-center">{t("coatOfArms.title")}</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Coat of Arms Image */}
            <div className="flex justify-center">
              <div className="relative w-64 h-80">
                <div className="absolute inset-0 bg-[#8B1E3F] rounded-lg flex items-center justify-center">
                  <div className="text-white text-9xl font-serif">G</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C9A13B] rounded-full flex items-center justify-center text-white font-serif text-2xl">
                  1253
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div>
              <h2 className="text-3xl font-serif text-[#8B1E3F] mb-4">{t("coatOfArms.formalBlazon")}</h2>
              <p className="text-lg italic mb-6">
                {t("coatOfArms.blazonDescription")}
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3">{t("coatOfArms.downloads")}</h3>
                <div className="flex gap-4">
                  <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F]">
                    <Download className="mr-2 h-4 w-4" /> {t("coatOfArms.svg")}
                  </Button>
                  <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F]">
                    <Download className="mr-2 h-4 w-4" /> {t("coatOfArms.png")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Symbolism */}
          <div className="mt-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">{t("coatOfArms.symbolism")}</h2>
            
            <Card className="border-[#C9A13B]/20 mb-8">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{t("coatOfArms.knight")}</h3>
                    <p>{t("coatOfArms.knightDescription")}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">{t("coatOfArms.sword")}</h3>
                    <p>{t("coatOfArms.swordDescription")}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">{t("coatOfArms.cross")}</h3>
                    <p>{t("coatOfArms.crossDescription")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Historical Context */}
          <div className="mt-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">{t("coatOfArms.history")}</h2>
            <p className="text-lg mb-6">
              {t("coatOfArms.historyParagraph1")}
            </p>
            <p className="text-lg mb-6">
              {t("coatOfArms.historyParagraph2")}
            </p>
            <p className="text-lg">
              {t("coatOfArms.historyParagraph3")}
            </p>
          </div>
          
          {/* Variants */}
          <div className="mt-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">{t("coatOfArms.branches")}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-[#C9A13B]/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">{t("coatOfArms.episcopal")}</h3>
                  <div className="aspect-square w-24 h-24 mb-4 bg-[#8B1E3F] rounded-full flex items-center justify-center">
                    <div className="text-white text-4xl font-serif">G+</div>
                  </div>
                  <p>
                    {t("coatOfArms.episcopalDescription")}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-[#C9A13B]/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">{t("coatOfArms.polish")}</h3>
                  <div className="aspect-square w-24 h-24 mb-4 bg-[#8B1E3F] rounded-full flex items-center justify-center">
                    <div className="text-white text-4xl font-serif">GP</div>
                  </div>
                  <p>
                    {t("coatOfArms.polishDescription")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoatOfArms;
