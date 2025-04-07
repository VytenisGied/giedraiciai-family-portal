
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

const CoatOfArms = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-6 text-center">Coat of Arms</h1>
        
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
              <h2 className="text-3xl font-serif text-[#8B1E3F] mb-4">Formal Blazon</h2>
              <p className="text-lg italic mb-6">
                "Gules, a knight mounted on a white horse rampant, holding in his dexter hand a sword raised above his head, all proper; on a shield azure hanging from his shoulder, a patriarchal cross Or."
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3">Downloads</h3>
                <div className="flex gap-4">
                  <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F]">
                    <Download className="mr-2 h-4 w-4" /> SVG
                  </Button>
                  <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F]">
                    <Download className="mr-2 h-4 w-4" /> PNG
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Symbolism */}
          <div className="mt-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">Symbolism</h2>
            
            <Card className="border-[#C9A13B]/20 mb-8">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">The Knight</h3>
                    <p>Represents the military heritage of the Giedraičiai family and their status as defenders of Lithuania during numerous conflicts.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">The Raised Sword</h3>
                    <p>Symbolizes readiness to defend both faith and homeland, showing the family's commitment to both religious and patriotic values.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">The Patriarchal Cross</h3>
                    <p>Represents the family's strong connection to the Church, with many family members serving in high ecclesiastical positions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Historical Context */}
          <div className="mt-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">Historical Context</h2>
            <p className="text-lg mb-6">
              The Giedraičiai coat of arms is a variation of the "Pogonia" (or "Vytis") design, which is central to Lithuanian heraldry. The family received formal confirmation of their noble status and arms in the 14th century, during the reign of Grand Duke Vytautas.
            </p>
            <p className="text-lg mb-6">
              Throughout centuries, the coat of arms appeared on official seals, church donations, buildings, and military banners associated with the family. It served not only as a symbol of identity but also as a testament to the family's ancient lineage and noble status within the Grand Duchy of Lithuania and later the Polish-Lithuanian Commonwealth.
            </p>
            <p className="text-lg">
              The current representation of the coat of arms is based on historical seals and documents dating from the 16th-18th centuries, with particular reference to those used by the Bishops of Samogitia from the Giedraitis line.
            </p>
          </div>
          
          {/* Variants */}
          <div className="mt-16">
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">Family Branches & Variants</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-[#C9A13B]/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Episcopal Branch</h3>
                  <div className="aspect-square w-24 h-24 mb-4 bg-[#8B1E3F] rounded-full flex items-center justify-center">
                    <div className="text-white text-4xl font-serif">G+</div>
                  </div>
                  <p>
                    Members of the family who entered church service, particularly those who became bishops, used a variant of the arms that included ecclesiastical elements such as miters, croziers, or cardinal's hats depending on their rank.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-[#C9A13B]/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Polish Branch</h3>
                  <div className="aspect-square w-24 h-24 mb-4 bg-[#8B1E3F] rounded-full flex items-center justify-center">
                    <div className="text-white text-4xl font-serif">GP</div>
                  </div>
                  <p>
                    After the Union of Lublin in 1569, branches of the family that became more integrated into Polish nobility sometimes quartered their arms with those of families they married into, creating distinctive variants.
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
