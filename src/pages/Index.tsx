import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ChevronRight, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

// Custom component to avoid nesting Links inside NavigationMenuLink
const NavItem = ({ to, children }: { to: string, children: React.ReactNode }) => {
  return (
    <NavigationMenuItem>
      <Link to={to}>
        <div className={navigationMenuTriggerStyle()}>
          {children}
        </div>
      </Link>
    </NavigationMenuItem>
  );
};

const Index = () => {
  const isMobile = useIsMobile();
  const [language, setLanguage] = useState<"EN" | "LT" | "PL">("EN");
  
  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      {/* Header/Navigation */}
      <header className="border-b border-[#C9A13B]/20 bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#8B1E3F] rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-xl">G</span>
            </div>
            <span className="text-xl font-serif text-[#1A1A1A] hidden sm:inline-block">
              House of Giedraičiai
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/history">History</NavItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Official</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <Link to="/official/coat-of-arms" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Coat of Arms</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/official/documents" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Documents</div>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Association</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <Link to="/association/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">About</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/association/membership" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Membership</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/association/submit-genealogy" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Submit Genealogy</div>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavItem to="/blog">Blog</NavItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {language}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[150px] gap-3 p-4">
                      <li>
                        <button 
                          onClick={() => setLanguage("EN")}
                          className={`block w-full text-left select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${language === "EN" ? "bg-accent" : ""}`}
                        >
                          <div className="text-sm font-medium leading-none">English</div>
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => setLanguage("LT")}
                          className={`block w-full text-left select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${language === "LT" ? "bg-accent" : ""}`}
                        >
                          <div className="text-sm font-medium leading-none">Lithuanian</div>
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => setLanguage("PL")}
                          className={`block w-full text-left select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${language === "PL" ? "bg-accent" : ""}`}
                        >
                          <div className="text-sm font-medium leading-none">Polish</div>
                        </button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
          
          {/* Mobile Navigation */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="py-2 text-lg font-medium">Home</Link>
                  <Link to="/history" className="py-2 text-lg font-medium">History</Link>
                  
                  <div className="py-2">
                    <h3 className="text-lg font-medium mb-2">Official</h3>
                    <div className="pl-4 flex flex-col gap-2">
                      <Link to="/official/coat-of-arms" className="text-sm">Coat of Arms</Link>
                      <Link to="/official/documents" className="text-sm">Documents</Link>
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <h3 className="text-lg font-medium mb-2">Association</h3>
                    <div className="pl-4 flex flex-col gap-2">
                      <Link to="/association/about" className="text-sm">About</Link>
                      <Link to="/association/membership" className="text-sm">Membership</Link>
                      <Link to="/association/submit-genealogy" className="text-sm">Submit Genealogy</Link>
                    </div>
                  </div>
                  
                  <Link to="/blog" className="py-2 text-lg font-medium">Blog</Link>
                  
                  <div className="py-2">
                    <h3 className="text-lg font-medium mb-2">Language</h3>
                    <div className="pl-4 flex gap-4">
                      <button 
                        onClick={() => setLanguage("EN")} 
                        className={`px-2 py-1 ${language === "EN" ? "font-bold text-[#8B1E3F]" : ""}`}
                      >
                        EN
                      </button>
                      <button 
                        onClick={() => setLanguage("LT")}
                        className={`px-2 py-1 ${language === "LT" ? "font-bold text-[#8B1E3F]" : ""}`}
                      >
                        LT
                      </button>
                      <button 
                        onClick={() => setLanguage("PL")}
                        className={`px-2 py-1 ${language === "PL" ? "font-bold text-[#8B1E3F]" : ""}`}
                      >
                        PL
                      </button>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </header>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-[#FAF8F4] py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-32 h-32 bg-[#8B1E3F] rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-white font-serif text-4xl">G</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-4">House of Giedraičiai</h1>
          <p className="text-xl italic text-[#8B1E3F] mb-8">"Honor, Nobility, Legacy"</p>
          <p className="text-lg mb-8">Preserving the heritage and legacy of one of Lithuania's most noble houses since the 13th century.</p>
        </div>
      </div>
      
      {/* Intro Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif text-[#8B1E3F] mb-6 text-center">A Legacy of Nobility</h2>
          <p className="text-lg text-center mb-8">
            The House of Giedraičiai traces its origins to the 13th century, with a lineage that has played a pivotal role in Lithuania's history. From medieval knights to bishops, generals, and statesmen, the Giedraičiai family has contributed significantly to the cultural and political landscape of the Baltic region.
          </p>
          <div className="text-center">
            <Link to="/history">
              <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F] text-white">
                Learn More About Our History
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif text-[#8B1E3F] mb-10 text-center">Explore Our Heritage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>History</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the rich historical legacy of the Giedraičiai family through the centuries.</p>
              </CardContent>
              <CardFooter>
                <Link to="/history" className="w-full">
                  <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F] text-white">Explore</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>Coat of Arms</CardTitle>
              </CardHeader>
              <CardContent>
                <p>View and learn about the historical significance of our family's heraldic symbols.</p>
              </CardContent>
              <CardFooter>
                <Link to="/official/coat-of-arms" className="w-full">
                  <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F] text-white">View</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>Join the Association</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Become a member of the Giedraičiai family association and connect with your heritage.</p>
              </CardContent>
              <CardFooter>
                <Link to="/association/membership" className="w-full">
                  <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F] text-white">Join</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>Submit Genealogy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Submit your family information to explore your connection to the Giedraičiai lineage.</p>
              </CardContent>
              <CardFooter>
                <Link to="/association/submit-genealogy" className="w-full">
                  <Button className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F] text-white">Submit</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Blog Preview */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif text-[#8B1E3F] mb-10 text-center">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>Annual Gathering in Vilnius</CardTitle>
                <CardDescription>April 5, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 mb-4 rounded-md"></div>
                <p>The annual gathering of the House of Giedraičiai will take place in Vilnius this summer. Join us for three days of historical presentations, networking, and celebration.</p>
              </CardContent>
              <CardFooter>
                <Link to="/blog/annual-gathering" className="w-full">
                  <Button variant="outline" className="w-full border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>Historical Documents Discovered</CardTitle>
                <CardDescription>March 20, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 mb-4 rounded-md"></div>
                <p>A collection of previously unknown documents related to the Giedraičiai family has been discovered in the National Archives. These papers date back to the 16th century.</p>
              </CardContent>
              <CardFooter>
                <Link to="/blog/historical-documents-discovery" className="w-full">
                  <Button variant="outline" className="w-full border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/blog">
              <Button variant="outline" className="border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
                View All Blog Posts
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4 text-[#C9A13B]">House of Giedraičiai</h3>
              <p className="text-sm text-gray-300">Preserving the heritage and legacy of one of Lithuania's most noble houses since the 13th century.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <Link to="/" className="text-sm text-gray-300 hover:text-white">Home</Link>
                <Link to="/history" className="text-sm text-gray-300 hover:text-white">History</Link>
                <Link to="/official/coat-of-arms" className="text-sm text-gray-300 hover:text-white">Coat of Arms</Link>
                <Link to="/official/documents" className="text-sm text-gray-300 hover:text-white">Documents</Link>
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Association</h3>
              <nav className="flex flex-col gap-2">
                <Link to="/association/about" className="text-sm text-gray-300 hover:text-white">About</Link>
                <Link to="/association/membership" className="text-sm text-gray-300 hover:text-white">Membership</Link>
                <Link to="/association/submit-genealogy" className="text-sm text-gray-300 hover:text-white">Submit Genealogy</Link>
                <Link to="/blog" className="text-sm text-gray-300 hover:text-white">Blog</Link>
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Language</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => setLanguage("EN")} 
                  className={`px-2 py-1 text-sm ${language === "EN" ? "font-bold text-[#C9A13B]" : "text-gray-300"}`}
                >
                  English
                </button>
                <button 
                  onClick={() => setLanguage("LT")}
                  className={`px-2 py-1 text-sm ${language === "LT" ? "font-bold text-[#C9A13B]" : "text-gray-300"}`}
                >
                  Lithuanian
                </button>
                <button 
                  onClick={() => setLanguage("PL")}
                  className={`px-2 py-1 text-sm ${language === "PL" ? "font-bold text-[#C9A13B]" : "text-gray-300"}`}
                >
                  Polish
                </button>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Contact</h3>
                <p className="text-sm text-gray-300">info@giedraiciai.org</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} House of Giedraičiai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
