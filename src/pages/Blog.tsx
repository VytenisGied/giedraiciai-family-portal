import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedBlogPostUrl } from "@/utils/urlUtils";
import { useTranslation } from "react-i18next";
import { SupportedLanguage } from "@/utils/languageUtils";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Filter, ChevronDown, Check, Search, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { useDebounce } from "@/hooks/useDebounce";

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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLanguages, setSelectedLanguages] = useState<SupportedLanguage[]>([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const debouncedSearchQuery = useDebounce(searchInputValue, 300);
  const postsPerPage = 4;
  const { language } = useLanguage();
  const { t } = useTranslation();
  
  const filteredPosts = blogPosts
    .filter(post => {
      if (selectedCategories.length === 0) return true;
      return selectedCategories.includes(post.category);
    })
    .filter(post => selectedLanguages.length === 0 || 
      post.languages.some(lang => selectedLanguages.includes(lang)))
    .filter(post => {
      if (!debouncedSearchQuery.trim()) return true;
      
      const query = debouncedSearchQuery.toLowerCase();
      const title = post.title[language]?.toLowerCase() || "";
      const excerpt = post.excerpt[language]?.toLowerCase() || "";
      const category = post.category.toLowerCase();
      
      return title.includes(query) || excerpt.includes(query) || category.includes(query);
    });
  
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchQuery]);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const toggleLanguage = (lang: SupportedLanguage) => {
    setSelectedLanguages(prev => {
      if (prev.includes(lang)) {
        return prev.filter(l => l !== lang);
      } else {
        return [...prev, lang];
      }
    });
    setCurrentPage(1);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const clearFilters = () => {
    setSelectedLanguages([]);
    setSelectedCategories([]);
    setSearchInputValue("");
    setCurrentPage(1);
  };

  const getLanguageSelectionLabel = () => {
    if (selectedLanguages.length === 0) {
      return t('blog.allLanguages');
    } else if (selectedLanguages.length === 1) {
      return selectedLanguages[0] === "EN" ? "English" : 
             selectedLanguages[0] === "LT" ? "Lietuvių" : "Polski";
    } else {
      return `${selectedLanguages.length} ${t('blog.languagesSelected')}`;
    }
  };

  const getCategoriesSelectionLabel = () => {
    if (selectedCategories.length === 0) {
      return t('blog.allCategories') || "All Categories";
    } else if (selectedCategories.length === 1) {
      return t(`blog.categories.${selectedCategories[0].toLowerCase()}`);
    } else {
      return `${selectedCategories.length} ${t('blog.categoriesSelected') || "categories selected"}`;
    }
  };

  const hasActiveFilters = selectedLanguages.length > 0 || selectedCategories.length > 0 || searchInputValue.trim() !== "";
  
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-8 text-center">{t('blog.title')}</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 bg-white rounded-lg shadow-md border border-gray-100 p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <h2 className="text-lg font-medium text-gray-800 flex items-center gap-2">
                <Filter size={18} className="text-[#8B1E3F]" /> 
                {t('blog.filters')}
              </h2>
              
              <div className="relative w-full md:w-auto md:min-w-[280px]">
                <Input
                  placeholder={t('blog.searchPlaceholder') || "Search posts..."}
                  value={searchInputValue}
                  onChange={handleSearchChange}
                  className="pr-10 border-[#C9A13B] focus-visible:ring-[#8B1E3F]"
                />
                {searchInputValue ? (
                  <button 
                    onClick={() => setSearchInputValue('')}
                    className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                ) : null}
                <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto border-[#C9A13B] bg-white text-[#8B1E3F] hover:bg-[#C9A13B]/10 flex gap-2 items-center justify-between"
                  >
                    <span className="truncate">{getLanguageSelectionLabel()}</span>
                    <ChevronDown className="h-4 w-4 opacity-70 flex-shrink-0" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-56 bg-white" align="start">
                  <div className="p-2 border-b">
                    <h3 className="font-medium text-sm text-gray-700 px-2 py-1.5">
                      {t('blog.language')}
                    </h3>
                  </div>
                  <div className="p-2">
                    <div className="grid grid-cols-1 gap-1">
                      <div className="flex items-center space-x-2 px-2 py-1.5 hover:bg-gray-100 rounded-md">
                        <Checkbox 
                          id="en-lang" 
                          checked={selectedLanguages.includes("EN")} 
                          onCheckedChange={() => toggleLanguage("EN")}
                          className="border-[#C9A13B] data-[state=checked]:bg-[#8B1E3F] data-[state=checked]:border-[#8B1E3F]"
                        />
                        <label htmlFor="en-lang" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                          English
                        </label>
                      </div>
                      
                      <div className="flex items-center space-x-2 px-2 py-1.5 hover:bg-gray-100 rounded-md">
                        <Checkbox 
                          id="lt-lang" 
                          checked={selectedLanguages.includes("LT")} 
                          onCheckedChange={() => toggleLanguage("LT")}
                          className="border-[#C9A13B] data-[state=checked]:bg-[#8B1E3F] data-[state=checked]:border-[#8B1E3F]"
                        />
                        <label htmlFor="lt-lang" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                          Lietuvių
                        </label>
                      </div>
                      
                      <div className="flex items-center space-x-2 px-2 py-1.5 hover:bg-gray-100 rounded-md">
                        <Checkbox 
                          id="pl-lang" 
                          checked={selectedLanguages.includes("PL")} 
                          onCheckedChange={() => toggleLanguage("PL")}
                          className="border-[#C9A13B] data-[state=checked]:bg-[#8B1E3F] data-[state=checked]:border-[#8B1E3F]"
                        />
                        <label htmlFor="pl-lang" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                          Polski
                        </label>
                      </div>
                      
                      {selectedLanguages.length > 0 && (
                        <Button 
                          variant="ghost" 
                          onClick={() => setSelectedLanguages([])} 
                          className="text-xs text-[#8B1E3F] mt-1 hover:text-[#8B1E3F]/90 hover:bg-[#8B1E3F]/5"
                        >
                          {t('blog.clearSelection') || "Clear selection"}
                        </Button>
                      )}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto border-[#C9A13B] bg-white text-[#8B1E3F] hover:bg-[#C9A13B]/10 flex gap-2 items-center justify-between"
                  >
                    <span className="truncate">{getCategoriesSelectionLabel()}</span>
                    <ChevronDown className="h-4 w-4 opacity-70 flex-shrink-0" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-56 bg-white" align="start">
                  <div className="p-2 border-b">
                    <h3 className="font-medium text-sm text-gray-700 px-2 py-1.5">
                      {t('blog.category')}
                    </h3>
                  </div>
                  <div className="p-2">
                    <div className="grid grid-cols-1 gap-1">
                      {categories.slice(1).map((category) => (
                        <div key={category} className="flex items-center space-x-2 px-2 py-1.5 hover:bg-gray-100 rounded-md">
                          <Checkbox 
                            id={`category-${category}`} 
                            checked={selectedCategories.includes(category)} 
                            onCheckedChange={() => toggleCategory(category)}
                            className="border-[#C9A13B] data-[state=checked]:bg-[#8B1E3F] data-[state=checked]:border-[#8B1E3F]"
                          />
                          <label 
                            htmlFor={`category-${category}`} 
                            className="text-sm font-medium leading-none cursor-pointer"
                          >
                            {t(`blog.categories.${category.toLowerCase()}`)}
                          </label>
                        </div>
                      ))}
                      
                      {selectedCategories.length > 0 && (
                        <Button 
                          variant="ghost" 
                          onClick={() => setSelectedCategories([])} 
                          className="text-xs text-[#8B1E3F] mt-1 hover:text-[#8B1E3F]/90 hover:bg-[#8B1E3F]/5"
                        >
                          {t('blog.clearSelection') || "Clear selection"}
                        </Button>
                      )}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              
              {hasActiveFilters && (
                <Button 
                  variant="ghost" 
                  onClick={clearFilters}
                  className="text-[#8B1E3F] hover:bg-[#8B1E3F]/5 border border-dashed border-[#C9A13B]/40"
                >
                  <X className="h-4 w-4 mr-2" />
                  {t('blog.clearAllFilters') || "Clear all filters"}
                </Button>
              )}
            </div>
            
            {selectedCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedCategories.map(category => (
                  <Badge 
                    key={category} 
                    variant="outline" 
                    className="bg-[#8B1E3F]/5 text-[#8B1E3F] border-[#C9A13B]/30 hover:bg-[#8B1E3F]/10 cursor-pointer flex items-center gap-1 px-2 py-1"
                    onClick={() => toggleCategory(category)}
                  >
                    {t(`blog.categories.${category.toLowerCase()}`)}
                    <X size={14} />
                  </Badge>
                ))}
              </div>
            )}
            
            <div className="block sm:hidden mt-3 mb-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full border-[#C9A13B] text-[#8B1E3F] hover:bg-[#C9A13B]/10 justify-between">
                    {t('blog.moreFilters') || "More Filters"}
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white w-[94vw] max-w-sm mx-auto">
                  <DropdownMenuLabel>{t('blog.language')}</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem 
                    checked={selectedLanguages.includes("EN")}
                    onCheckedChange={() => toggleLanguage("EN")}
                  >
                    English
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem 
                    checked={selectedLanguages.includes("LT")}
                    onCheckedChange={() => toggleLanguage("LT")}
                  >
                    Lietuvių
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem 
                    checked={selectedLanguages.includes("PL")}
                    onCheckedChange={() => toggleLanguage("PL")}
                  >
                    Polski
                  </DropdownMenuCheckboxItem>
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>{t('blog.category')}</DropdownMenuLabel>
                  
                  {categories.slice(1).map((category) => (
                    <DropdownMenuCheckboxItem 
                      key={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    >
                      {t(`blog.categories.${category.toLowerCase()}`)}
                    </DropdownMenuCheckboxItem>
                  ))}
                  
                  {hasActiveFilters && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        onClick={clearFilters}
                        className="text-center justify-center text-[#8B1E3F] font-medium"
                      >
                        {t('blog.clearAllFilters') || "Clear all filters"}
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="text-sm text-gray-600">
                {filteredPosts.length} {filteredPosts.length === 1 ? t('blog.resultFound') : t('blog.resultsFound')}
              </div>
            </div>
          </div>
          
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
                {hasActiveFilters && (
                  <Button 
                    variant="outline" 
                    onClick={clearFilters}
                    className="mt-4 border-[#C9A13B] text-[#8B1E3F]"
                  >
                    {t('blog.clearFilters') || "Clear filters"}
                  </Button>
                )}
              </div>
            )}
          </div>
          
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
