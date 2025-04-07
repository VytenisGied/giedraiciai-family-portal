import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedBlogPostUrl } from "@/utils/urlUtils";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    slug: "annual-gathering",
    title: "Annual Gathering in Vilnius",
    date: "April 5, 2025",
    excerpt: "The annual gathering of the House of Giedraičiai will take place in Vilnius this summer. Join us for three days of historical presentations, networking, and celebration.",
    category: "Events",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    slug: "historical-documents-discovery",
    title: "Historical Documents Discovered",
    date: "March 20, 2025",
    excerpt: "A collection of previously unknown documents related to the Giedraičiai family has been discovered in the National Archives. These papers date back to the 16th century.",
    category: "History",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    slug: "monument-restoration",
    title: "Monument Restoration Project",
    date: "February 15, 2025",
    excerpt: "The historic Giedraičiai family chapel is undergoing restoration. Learn about the project and how you can contribute to preserving this important heritage site.",
    category: "Projects",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    slug: "genealogy-research-advances",
    title: "Advances in Genealogy Research",
    date: "January 30, 2025",
    excerpt: "Our genealogy team has made significant progress in documenting the family's branches in Eastern Europe. New connections have been established with descendants in Poland and Belarus.",
    category: "Genealogy",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    slug: "new-board-members",
    title: "New Association Board Members",
    date: "January 10, 2025",
    excerpt: "The Giedraičiai Family Association welcomes three new board members. Learn about their backgrounds and vision for the organization's future.",
    category: "Association",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    slug: "interview-with-historian",
    title: "Interview with Historian Dr. Aleksas Vaitkus",
    date: "December 12, 2024",
    excerpt: "Renowned Lithuanian historian Dr. Aleksas Vaitkus discusses his recent findings about the Giedraičiai family's role during the medieval period.",
    category: "History",
    image: "/placeholder.svg"
  },
];

const categories = ["All", "History", "Events", "Projects", "Genealogy", "Association"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const { language } = useLanguage();
  
  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);
  
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
        <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-6 text-center">Blog</h1>
        
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category 
                  ? "bg-[#8B1E3F] hover:bg-[#8B1E3F]/80" 
                  : "border-[#C9A13B] text-[#8B1E3F] hover:bg-[#C9A13B]/20"}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {currentPosts.length > 0 ? (
              currentPosts.map(post => (
                <Card key={post.id} className="border-[#C9A13B]/20 overflow-hidden hover:shadow-md transition-all">
                  <div className="aspect-video bg-gray-100">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="border-[#C9A13B] text-[#8B1E3F]">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle className="text-2xl font-serif text-[#8B1E3F] mb-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-700 mb-4">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link to={getLocalizedBlogPostUrl(post.slug, language)} className="w-full">
                      <Button variant="outline" className="w-full border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-lg text-gray-500">No posts found in this category.</p>
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
                Previous
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
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
