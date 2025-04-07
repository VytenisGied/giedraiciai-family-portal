
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const Index = () => {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-[#FAF8F4] py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-32 h-32 bg-[#8B1E3F] rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-white font-serif text-4xl">G</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-4">{t('home.hero.title')}</h1>
          <p className="text-xl italic text-[#8B1E3F] mb-8">{t('home.hero.motto')}</p>
          <p className="text-lg mb-8">{t('home.hero.description')}</p>
        </div>
      </div>
      
      {/* Intro Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6 text-center">{t('home.legacy.title')}</h2>
          <p className="text-lg text-center mb-8">{t('home.legacy.description')}</p>
          <div className="text-center">
            <Link to={localizedPath("history")}>
              <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F] text-white">
                {t('home.legacy.button')}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif text-[#8B1E3F] mb-10 text-center">{t('home.explore.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all flex flex-col">
              <CardHeader>
                <CardTitle>{t('home.explore.history.title')}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{t('home.explore.history.description')}</p>
              </CardContent>
              <CardFooter className="pt-4">
                <Link to={localizedPath("history")} className="w-full">
                  <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F] text-white">{t('home.explore.history.button')}</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all flex flex-col">
              <CardHeader>
                <CardTitle>{t('home.explore.coatOfArms.title')}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{t('home.explore.coatOfArms.description')}</p>
              </CardContent>
              <CardFooter className="pt-4">
                <Link to={localizedPath("coatOfArms")} className="w-full">
                  <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F] text-white">{t('home.explore.coatOfArms.button')}</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all flex flex-col">
              <CardHeader>
                <CardTitle>{t('home.explore.join.title')}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{t('home.explore.join.description')}</p>
              </CardContent>
              <CardFooter className="pt-4">
                <Link to={localizedPath("membership")} className="w-full">
                  <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F] text-white">{t('home.explore.join.button')}</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all flex flex-col">
              <CardHeader>
                <CardTitle>{t('home.explore.genealogy.title')}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{t('home.explore.genealogy.description')}</p>
              </CardContent>
              <CardFooter className="pt-4">
                <Link to={localizedPath("submitGenealogy")} className="w-full">
                  <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F] text-white">{t('home.explore.genealogy.button')}</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Blog Preview */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif text-[#8B1E3F] mb-10 text-center">{t('home.latest.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all flex flex-col">
              <CardHeader>
                <CardTitle>{t('blog.annual')}</CardTitle>
                <CardDescription>April 5, 2025</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-video bg-gray-100 mb-4 rounded-md"></div>
                <p>{t('blog.annual.description')}</p>
              </CardContent>
              <CardFooter className="pt-4">
                <Link to={`${localizedPath("blog")}/annual-gathering`} className="w-full">
                  <Button variant="outline" className="w-full border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
                    {t('home.latest.readMore')}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all flex flex-col">
              <CardHeader>
                <CardTitle>{t('blog.documents')}</CardTitle>
                <CardDescription>March 20, 2025</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-video bg-gray-100 mb-4 rounded-md"></div>
                <p>{t('blog.documents.description')}</p>
              </CardContent>
              <CardFooter className="pt-4">
                <Link to={`${localizedPath("blog")}/historical-documents-discovery`} className="w-full">
                  <Button variant="outline" className="w-full border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
                    {t('home.latest.readMore')}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <Link to={localizedPath("blog")}>
              <Button variant="outline" className="border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
                {t('home.latest.viewAll')}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
