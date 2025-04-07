import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const History = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-6 text-center">{t("history.title")}</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-12 text-center">
          {t("history.intro")}
        </p>
        
        {/* Timeline */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#C9A13B] before:to-transparent">
          
          {/* Timeline Item 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="font-bold">13c</span>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-[#8B1E3F]">{t("history.origins")}</h3>
              <time className="block mb-2 text-sm text-gray-500">{t("history.originsTime")}</time>
              <p className="text-gray-700">
                {t("history.originsDesc")}
              </p>
            </div>
          </div>
          
          {/* Timeline Item 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="font-bold">15c</span>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-[#8B1E3F]">{t("history.religious")}</h3>
              <time className="block mb-2 text-sm text-gray-500">{t("history.religiousTime")}</time>
              <p className="text-gray-700">
                {t("history.religiousDesc")}
              </p>
            </div>
          </div>
          
          {/* Timeline Item 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="font-bold">16c</span>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-[#8B1E3F]">{t("history.military")}</h3>
              <time className="block mb-2 text-sm text-gray-500">{t("history.militaryTime")}</time>
              <p className="text-gray-700">
                {t("history.militaryDesc")}
              </p>
            </div>
          </div>
          
          {/* Timeline Item 4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="font-bold">18c</span>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-[#8B1E3F]">{t("history.commonwealth")}</h3>
              <time className="block mb-2 text-sm text-gray-500">{t("history.commonwealthTime")}</time>
              <p className="text-gray-700">
                {t("history.commonwealthDesc")}
              </p>
            </div>
          </div>
          
          {/* Timeline Item 5 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="font-bold">19c</span>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-[#8B1E3F]">{t("history.revival")}</h3>
              <time className="block mb-2 text-sm text-gray-500">{t("history.revivalTime")}</time>
              <p className="text-gray-700">
                {t("history.revivalDesc")}
              </p>
            </div>
          </div>
          
          {/* Timeline Item 6 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="font-bold">20c</span>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-[#8B1E3F]">{t("history.modern")}</h3>
              <time className="block mb-2 text-sm text-gray-500">{t("history.modernTime")}</time>
              <p className="text-gray-700">
                {t("history.modernDesc")}
              </p>
            </div>
          </div>
          
          {/* Timeline Item 7 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#8B1E3F] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="font-bold">21c</span>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-[#8B1E3F]">{t("history.contemporary")}</h3>
              <time className="block mb-2 text-sm text-gray-500">{t("history.contemporaryTime")}</time>
              <p className="text-gray-700">
                {t("history.contemporaryDesc")}
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional Sections */}
        <div className="mt-20 space-y-12">
          <section>
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">{t("history.notableMembers")}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-[#C9A13B]/20">
                <h3 className="text-xl font-serif mb-2">{t("history.merkelisTitle")}</h3>
                <p className="text-sm text-gray-500 mb-4">{t("history.merkelisPosition")}</p>
                <p>{t("history.merkelisDesc")}</p>
              </Card>
              
              <Card className="p-6 border-[#C9A13B]/20">
                <h3 className="text-xl font-serif mb-2">{t("history.romualdTitle")}</h3>
                <p className="text-sm text-gray-500 mb-4">{t("history.romualdPosition")}</p>
                <p>{t("history.romualdDesc")}</p>
              </Card>
              
              <Card className="p-6 border-[#C9A13B]/20">
                <h3 className="text-xl font-serif mb-2">{t("history.jozefTitle")}</h3>
                <p className="text-sm text-gray-500 mb-4">{t("history.jozefPosition")}</p>
                <p>{t("history.jozefDesc")}</p>
              </Card>
              
              <Card className="p-6 border-[#C9A13B]/20">
                <h3 className="text-xl font-serif mb-2">{t("history.jerzyTitle")}</h3>
                <p className="text-sm text-gray-500 mb-4">{t("history.jerzyPosition")}</p>
                <p>{t("history.jerzyDesc")}</p>
              </Card>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6">{t("history.estates")}</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-serif">{t("history.giedraitiaiManor")}</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">{t("history.giedraitiaiManorDesc1")}</p>
                  <p>{t("history.giedraitiaiManorDesc2")}</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-serif">{t("history.videniskiaiMonastery")}</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">{t("history.videniskiaiMonasteryDesc1")}</p>
                  <p>{t("history.videniskiaiMonasteryDesc2")}</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-serif">{t("history.volhynia")}</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">{t("history.volhyniaDesc1")}</p>
                  <p>{t("history.volhyniaDesc2")}</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-serif">{t("history.warsaw")}</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">{t("history.warsawDesc1")}</p>
                  <p>{t("history.warsawDesc2")}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
};

export default History;
