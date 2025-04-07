
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const History = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-6 text-center">Our History</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-12 text-center">
            The House of Giedraičiai traces its origins to the 13th century, during the formation of the Grand Duchy of Lithuania. Throughout centuries, members of this noble family have served as military leaders, clergy, politicians, and cultural figures, leaving an indelible mark on Lithuanian history.
          </p>
          
          {/* Timeline */}
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#C9A13B] before:to-transparent">
            
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold">13c</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-[#8B1E3F]">Origins & Nobility</h3>
                <time className="block mb-2 text-sm text-gray-500">13th Century</time>
                <p className="text-gray-700">
                  The Giedraičiai family (also known as Giedroyć) emerges as a noble Lithuanian family, descendants of Duke Giedrius. They establish their seat in the Giedraičiai region, northwest of Vilnius.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold">15c</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-[#8B1E3F]">Religious Influence</h3>
                <time className="block mb-2 text-sm text-gray-500">15th Century</time>
                <p className="text-gray-700">
                  Mathias Giedraitis becomes the Bishop of Samogitia, beginning a tradition of Giedraičiai family members serving in high ecclesiastical positions within the Grand Duchy of Lithuania.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold">16c</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-[#8B1E3F]">Military Prominence</h3>
                <time className="block mb-2 text-sm text-gray-500">16th Century</time>
                <p className="text-gray-700">
                  Multiple Giedraičiai family members serve as military commanders in the wars against Muscovy. The family receives additional lands and titles for their service to the Grand Duchy.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold">18c</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-[#8B1E3F]">Polish-Lithuanian Commonwealth</h3>
                <time className="block mb-2 text-sm text-gray-500">18th Century</time>
                <p className="text-gray-700">
                  The Giedraičiai family holds significant political positions within the Polish-Lithuanian Commonwealth. Several family members serve in the Seimas (parliament) and as regional administrators.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 5 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold">19c</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-[#8B1E3F]">National Revival</h3>
                <time className="block mb-2 text-sm text-gray-500">19th Century</time>
                <p className="text-gray-700">
                  Despite Russian Imperial rule, Giedraičiai family members participate in the 1830 and 1863 uprisings. They become important figures in the Lithuanian national revival movement, supporting Lithuanian language and culture.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 6 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold">20c</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-[#8B1E3F]">Modern Era</h3>
                <time className="block mb-2 text-sm text-gray-500">20th Century</time>
                <p className="text-gray-700">
                  The family faces challenges during Soviet occupation, with many members forced into exile. Despite this, they maintain their heritage and traditions abroad, establishing cultural organizations in the diaspora.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 7 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold">21c</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-[#8B1E3F]">Contemporary Revival</h3>
                <time className="block mb-2 text-sm text-gray-500">21st Century</time>
                <p className="text-gray-700">
                  Following Lithuanian independence, the Giedraičiai family association is formally established. Family members from around the world reconnect with their heritage, documenting genealogy and preserving historical artifacts.
                </p>
              </div>
            </div>
          </div>
          
          {/* Additional Sections */}
          <div className="mt-20 space-y-12">
            <section>
              <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">Notable Family Members</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-[#C9A13B]/20">
                  <h3 className="text-xl font-serif mb-2">Merkelis Giedraitis (1536-1609)</h3>
                  <p className="text-sm text-gray-500 mb-4">Bishop of Samogitia</p>
                  <p>A significant figure in the Counter-Reformation in Lithuania, he promoted education and published religious texts in the Lithuanian language.</p>
                </Card>
                
                <Card className="p-6 border-[#C9A13B]/20">
                  <h3 className="text-xl font-serif mb-2">Romualdas Giedraitis (1750-1824)</h3>
                  <p className="text-sm text-gray-500 mb-4">Bishop of Samogitia</p>
                  <p>Known for his educational reforms and support of Lithuanian language during a period of intense Polonization.</p>
                </Card>
                
                <Card className="p-6 border-[#C9A13B]/20">
                  <h3 className="text-xl font-serif mb-2">Józef Giedroyc (1754-1838)</h3>
                  <p className="text-sm text-gray-500 mb-4">Military Commander</p>
                  <p>Participated in the 1794 Kościuszko Uprising and later served as a senator in the Congress Kingdom of Poland.</p>
                </Card>
                
                <Card className="p-6 border-[#C9A13B]/20">
                  <h3 className="text-xl font-serif mb-2">Jerzy Giedroyc (1906-2000)</h3>
                  <p className="text-sm text-gray-500 mb-4">Publisher and Political Activist</p>
                  <p>Though born in Minsk, he became a significant figure in Polish emigre circles, founding the influential Literary Institute in Paris.</p>
                </Card>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">Estates & Territories</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-serif">Giedraičiai Manor</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">The ancestral seat of the family, located in the town of Giedraičiai (Giedraitis) in present-day Lithuania. The manor house was established in the 15th century and underwent several reconstructions.</p>
                    <p>During its height in the 17th-18th centuries, the estate included thousands of hectares of land, several villages, and multiple subsidiary manors.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl font-serif">Videniškiai Monastery</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">Founded by the Giedraitis family in the early 17th century, this monastery became an important religious and cultural center in the region.</p>
                    <p>The complex included a church, living quarters for monks, a school, and a library that contained rare manuscripts and books.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl font-serif">Lands in Volhynia</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">By the 16th century, branches of the family had established estates in the Volhynia region (present-day Ukraine).</p>
                    <p>These lands remained in family possession until the early 20th century and included several manor houses and agricultural enterprises.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl font-serif">Warsaw Properties</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">In the 18th and 19th centuries, the family maintained townhouses in Warsaw, which served as their residences during parliamentary sessions and royal court activities.</p>
                    <p>These properties were confiscated following the failed uprisings against Russian rule in the 19th century.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History;
