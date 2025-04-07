
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedBlogPostUrl } from "@/utils/urlUtils";
import { useTranslation } from "react-i18next";
import { SupportedLanguage } from "@/utils/languageUtils";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Filter, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Slider } from "@/components/ui/slider";

// Enhanced blog data structure with language support
const blogPosts = [
  {
    id: 1,
    slug: "annual-gathering",
    title: {
      EN: "Annual Gathering in Vilnius",
      LT: "Kasmetinis susitikimas Vilniuje",
      PL: "Coroczne spotkanie w Wilnie"
    },
    date: "April 5, 2025",
    excerpt: {
      EN: "The annual gathering of the House of Giedraičiai will take place in Vilnius this summer. Join us for three days of historical presentations, networking, and celebration.",
      LT: "Šią vasarą Vilniuje vyks kasmetinis Giedraičių giminės susitikimas. Prisijunkite prie trijų dienų istorinių pristatymų, bendravimo ir šventės.",
      PL: "Coroczne spotkanie rodu Giedraitis odbędzie się tego lata w Wilnie. Dołącz do nas na trzy dni prezentacji historycznych, kontaktów i świętowania."
    },
    category: "Events",
    image: "/placeholder.svg",
    languages: ["EN", "LT", "PL"] as SupportedLanguage[]
  },
  {
    id: 2,
    slug: "historical-documents-discovery",
    title: {
      EN: "Historical Documents Discovered",
      LT: "Atrasti istoriniai dokumentai",
      PL: "Odkryto historyczne dokumenty"
    },
    date: "March 20, 2025",
    excerpt: {
      EN: "A collection of previously unknown documents related to the Giedraičiai family has been discovered in the National Archives. These papers date back to the 16th century.",
      LT: "Nacionaliniame archyve atrasta anksčiau nežinomų dokumentų, susijusių su Giedraičių šeima, kolekcija. Šie dokumentai datuojami XVI amžiumi.",
      PL: "W Archiwum Narodowym odkryto kolekcję nieznanych wcześniej dokumentów związanych z rodziną Giedraitis. Te dokumenty pochodzą z XVI wieku."
    },
    category: "History",
    image: "/placeholder.svg",
    languages: ["EN", "LT", "PL"] as SupportedLanguage[]
  },
  {
    id: 3,
    slug: "monument-restoration",
    title: {
      EN: "Monument Restoration Project",
      LT: "Paminklo restauravimo projektas",
      PL: "Projekt renowacji pomnika"
    },
    date: "February 15, 2025",
    excerpt: {
      EN: "The historic Giedraičiai family chapel is undergoing restoration. Learn about the project and how you can contribute to preserving this important heritage site.",
      LT: "Istorinė Giedraičių šeimos koplyčia restauruojama. Sužinokite apie projektą ir kaip galite prisidėti prie šio svarbaus paveldo objekto išsaugojimo.",
      PL: "Zabytkowa kaplica rodzinna Giedraitis jest poddawana renowacji. Dowiedz się o projekcie i jak możesz przyczynić się do zachowania tego ważnego miejsca dziedzictwa."
    },
    category: "Projects",
    image: "/placeholder.svg",
    languages: ["EN", "LT"] as SupportedLanguage[]
  },
  {
    id: 4,
    slug: "genealogy-research-advances",
    title: {
      EN: "Advances in Genealogy Research",
      LT: "Pažanga genealogijos tyrimuose",
      PL: "Postępy w badaniach genealogicznych"
    },
    date: "January 30, 2025",
    excerpt: {
      EN: "Our genealogy team has made significant progress in documenting the family's branches in Eastern Europe. New connections have been established with descendants in Poland and Belarus.",
      LT: "Mūsų genealogijos komanda padarė didelę pažangą dokumentuojant šeimos šakas Rytų Europoje. Užmegzti nauji ryšiai su palikuonimis Lenkijoje ir Baltarusijoje.",
      PL: "Nasz zespół genealogiczny poczynił znaczne postępy w dokumentowaniu gałęzi rodziny w Europie Wschodniej. Nawiązano nowe kontakty z potomkami w Polsce i na Białorusi."
    },
    category: "Genealogy",
    image: "/placeholder.svg",
    languages: ["EN", "PL"] as SupportedLanguage[]
  },
  {
    id: 5,
    slug: "new-board-members",
    title: {
      EN: "New Association Board Members",
      LT: "Nauji asociacijos valdybos nariai",
      PL: "Nowi członkowie zarządu stowarzyszenia"
    },
    date: "January 10, 2025",
    excerpt: {
      EN: "The Giedraičiai Family Association welcomes three new board members. Learn about their backgrounds and vision for the organization's future.",
      LT: "Giedraičių šeimos asociacija sveikina tris naujus valdybos narius. Sužinokite apie jų patirtį ir viziją organizacijos ateičiai.",
      PL: "Stowarzyszenie Rodziny Giedraitis wita trzech nowych członków zarządu. Poznaj ich pochodzenie i wizję przyszłości organizacji."
    },
    category: "Association",
    image: "/placeholder.svg",
    languages: ["EN", "LT", "PL"] as SupportedLanguage[]
  },
  {
    id: 6,
    slug: "interview-with-historian",
    title: {
      EN: "Interview with Historian Dr. Aleksas Vaitkus",
      LT: "Interviu su istoriku dr. Aleksu Vaitkumi",
      PL: "Wywiad z historykiem dr Aleksasem Vaitkusem"
    },
    date: "December 12, 2024",
    excerpt: {
      EN: "Renowned Lithuanian historian Dr. Aleksas Vaitkus discusses his recent findings about the Giedraičiai family's role during the medieval period.",
      LT: "Garsus Lietuvos istorikas dr. Aleksas Vaitkus aptaria savo naujausius atradimus apie Giedraičių šeimos vaidmenį viduramžiais.",
      PL: "Uznany litewski historyk dr Aleksas Vaitkus omawia swoje najnowsze odkrycia dotyczące roli rodziny Giedraitis w okresie średniowiecza."
    },
    category: "History",
    image: "/placeholder.svg",
    languages: ["EN", "LT"] as SupportedLanguage[]
  },
];

const categories = ["All", "History", "Events", "Projects", "Genealogy", "Association"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [languageFilter, setLanguageFilter] = useState<"all" | SupportedLanguage>("all");
  const postsPerPage = 4;
  const { language } = useLanguage();
  const { t } = useTranslation();
  
  // Filter posts by category and language
  const filteredPosts = blogPosts
    .filter(post => selectedCategory === "All" || post.category === selectedCategory)
    .filter(post => languageFilter === "all" || post.languages.includes(languageFilter));
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-8 text-center">{t('blog.title')}</h1>
        
        <div className="max-w-6xl mx-auto">
          {/* Redesigned Filters Section */}
          <div className="mb-10 bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <h2 className="text-lg font-medium text-gray-800 flex items-center gap-2">
                <Filter size={18} className="text-[#8B1E3F]" /> 
                {t('blog.filters')}
              </h2>
              
              {/* Mobile: Filters in Dropdown */}
              <div className="md:hidden w-full">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full border-[#C9A13B] text-[#8B1E3F] justify-between">
                      {t('blog.filters')}
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full min-w-[200px]">
                    <div className="px-2 py-1.5 text-sm font-medium text-gray-500">
                      {t('blog.language')}
                    </div>
                    <DropdownMenuItem 
                      className={languageFilter === "all" ? "bg-[#C9A13B]/10" : ""}
                      onClick={() => setLanguageFilter("all")}
                    >
                      {t('blog.allLanguages')}
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className={languageFilter === "EN" ? "bg-[#C9A13B]/10" : ""}
                      onClick={() => setLanguageFilter("EN")}
                    >
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className={languageFilter === "LT" ? "bg-[#C9A13B]/10" : ""}
                      onClick={() => setLanguageFilter("LT")}
                    >
                      Lietuvių
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className={languageFilter === "PL" ? "bg-[#C9A13B]/10" : ""}
                      onClick={() => setLanguageFilter("PL")}
                    >
                      Polski
                    </DropdownMenuItem>
                    
                    <div className="px-2 py-1.5 text-sm font-medium text-gray-500 mt-2">
                      {t('blog.category')}
                    </div>
                    {categories.map(category => (
                      <DropdownMenuItem 
                        key={category}
                        className={selectedCategory === category ? "bg-[#8B1E3F]/10" : ""}
                        onClick={() => {
                          setSelectedCategory(category);
                          setCurrentPage(1);
                        }}
                      >
                        {t(`blog.categories.${category.toLowerCase()}`)}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              {/* Desktop: Language Filter in Popover */}
              <div className="hidden md:flex items-center gap-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="border-[#C9A13B] bg-white text-[#8B1E3F] hover:bg-[#C9A13B]/10 flex gap-2 items-center"
                    >
                      {languageFilter === "all" 
                        ? t('blog.allLanguages') 
                        : languageFilter === "EN" 
                          ? "English" 
                          : languageFilter === "LT" 
                            ? "Lietuvių" 
                            : "Polski"}
                      <ChevronDown className="h-4 w-4 opacity-70" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 w-48">
                    <div className="px-2 py-1.5 text-sm font-medium text-gray-500 border-b">
                      {t('blog.language')}
                    </div>
                    <div className="p-2">
                      <div className="grid grid-cols-1 gap-1">
                        <Button 
                          variant={languageFilter === "all" ? "default" : "ghost"}
                          className={languageFilter === "all" ? "bg-[#C9A13B] justify-start" : "justify-start"}
                          onClick={() => {
                            setLanguageFilter("all");
                            setCurrentPage(1);
                          }}
                        >
                          {t('blog.allLanguages')}
                        </Button>
                        <Button 
                          variant={languageFilter === "EN" ? "default" : "ghost"}
                          className={languageFilter === "EN" ? "bg-[#C9A13B] justify-start" : "justify-start"}
                          onClick={() => {
                            setLanguageFilter("EN");
                            setCurrentPage(1);
                          }}
                        >
                          English
                        </Button>
                        <Button 
                          variant={languageFilter === "LT" ? "default" : "ghost"}
                          className={languageFilter === "LT" ? "bg-[#C9A13B] justify-start" : "justify-start"}
                          onClick={() => {
                            setLanguageFilter("LT");
                            setCurrentPage(1);
                          }}
                        >
                          Lietuvių
                        </Button>
                        <Button 
                          variant={languageFilter === "PL" ? "default" : "ghost"}
                          className={languageFilter === "PL" ? "bg-[#C9A13B] justify-start" : "justify-start"}
                          onClick={() => {
                            setLanguageFilter("PL");
                            setCurrentPage(1);
                          }}
                        >
                          Polski
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            {/* Desktop: Category Filter as Toggle Group */}
            <div className="hidden md:block">
              <div className="px-1 py-1 mb-2 text-sm font-medium text-gray-600">
                {t('blog.category')}
              </div>
              <ToggleGroup 
                type="single" 
                variant="outline"
                value={selectedCategory}
                onValueChange={(value) => {
                  if (value) {
                    setSelectedCategory(value);
                    setCurrentPage(1);
                  }
                }}
                className="justify-start flex-wrap"
              >
                {categories.map((category) => (
                  <ToggleGroupItem 
                    key={category} 
                    value={category}
                    className={`
                      border-[#C9A13B] text-gray-700 
                      data-[state=on]:text-white 
                      data-[state=on]:bg-[#8B1E3F]
                      data-[state=on]:border-[#8B1E3F]
                      hover:text-[#8B1E3F]
                    `}
                  >
                    {t(`blog.categories.${category.toLowerCase()}`)}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
            
            {/* Results count */}
            <div className="mt-4 pt-3 border-t border-gray-100 text-sm text-gray-500">
              {filteredPosts.length} {t('blog.resultsFound')}
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {currentPosts.length > 0 ? (
              currentPosts.map(post => (
                <Card key={post.id} className="border-[#C9A13B]/20 overflow-hidden hover:shadow-md transition-all">
                  <div className="aspect-video bg-gray-100">
                    <img src={post.image} alt={post.title[language]} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="border-[#C9A13B] text-[#8B1E3F]">
                        {t(`blog.categories.${post.category.toLowerCase()}`)}
                      </Badge>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">{post.date}</span>
                        <div className="flex gap-1">
                          {post.languages.map(lang => (
                            <Badge key={lang} variant="secondary" className="text-xs">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-serif text-[#8B1E3F] mb-2">
                      {post.title[language]}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-700 mb-4">
                      {post.excerpt[language]}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link to={getLocalizedBlogPostUrl(post.slug, language)} className="w-full">
                      <Button variant="outline" className="w-full border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
                        {t('blog.readMore')}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-lg text-gray-500">{t('blog.noPostsFound')}</p>
              </div>
            )}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="border-[#C9A13B]"
              >
                {t('blog.previous')}
              </Button>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <Button
                  key={index}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 
                    ? "bg-[#8B1E3F]" 
                    : "border-[#C9A13B]"}
                >
                  {index + 1}
                </Button>
              ))}
              
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="border-[#C9A13B]"
              >
                {t('blog.next')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
