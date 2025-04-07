
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedBlogPostUrl, getLocalizedPath } from "@/utils/urlUtils";

// Mock blog post data
const blogPostsData = {
  "annual-gathering": {
    title: "Annual Gathering in Vilnius",
    date: "April 5, 2025",
    author: "Mindaugas Giedraitis",
    category: "Events",
    readTime: "5 min read",
    image: "/placeholder.svg",
    content: `
      <p class="mb-4 text-lg">The annual gathering of the House of Giedraičiai will take place in Vilnius this summer. Join us for three days of historical presentations, networking, and celebration of our shared heritage.</p>
      
      <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Event Details</h2>
      <p class="mb-4">The gathering will be held from July 15-17, 2025, at the Grand Hotel Vilnius. The event will feature presentations by historians, genealogists, and family members, as well as tours of historical sites associated with the Giedraičiai family.</p>
      
      <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Program Highlights</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>Opening ceremony and welcome reception</li>
        <li>Keynote address by Dr. Jonas Mikalauskas on "The Giedraičiai Family in the Grand Duchy of Lithuania"</li>
        <li>Panel discussion: "Preserving Family Heritage in the Modern Age"</li>
        <li>Guided tour of the Old Town Vilnius, including sites associated with the family</li>
        <li>Excursion to the town of Giedraičiai and the ancestral manor site</li>
        <li>Genealogy workshop and individual consultations</li>
        <li>Gala dinner with traditional Lithuanian entertainment</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Registration</h2>
      <p class="mb-4">Registration will open on May 1, 2025. The event fee is €250 per person, which includes all presentations, tours, and meals. Accommodation at the Grand Hotel Vilnius is available at a special rate for participants.</p>
      
      <p class="mb-4">Early bird registration (before June 1) will receive a 15% discount. Association members receive an additional 10% discount.</p>
      
      <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Accommodations</h2>
      <p class="mb-6">We have secured a block of rooms at the Grand Hotel Vilnius at a special rate of €120 per night for single occupancy and €140 for double occupancy. To book at this rate, please use the code "GIEDRAITIS2025" when making your reservation.</p>
      
      <p class="text-lg font-medium mt-8 mb-4">We look forward to seeing you in Vilnius!</p>
    `,
    relatedPosts: [
      {
        slug: "monument-restoration",
        title: "Monument Restoration Project",
        excerpt: "The historic Giedraičiai family chapel is undergoing restoration.",
        image: "/placeholder.svg"
      },
      {
        slug: "new-board-members",
        title: "New Association Board Members",
        excerpt: "The Giedraičiai Family Association welcomes three new board members.",
        image: "/placeholder.svg"
      }
    ]
  },
  "historical-documents-discovery": {
    title: "Historical Documents Discovered",
    date: "March 20, 2025",
    author: "Dr. Elena Paulauskienė",
    category: "History",
    readTime: "8 min read",
    image: "/placeholder.svg",
    content: `
      <p class="mb-4 text-lg">A collection of previously unknown documents related to the Giedraičiai family has been discovered in the National Archives of Lithuania. These papers, dating back to the 16th century, shed new light on the family's role in the Grand Duchy of Lithuania.</p>
      
      <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">The Discovery</h2>
      <p class="mb-4">The documents were found during a routine digitization project at the National Archives. They were part of a larger collection of administrative records from the Vilnius Voivodeship. Archivist Dr. Tomas Rimkus recognized the Giedraičiai family seal on several of the documents and alerted our association's historical research committee.</p>
      
      <p class="mb-4">The collection includes correspondence, land grants, judicial records, and personal letters spanning from 1526 to 1658.</p>
      
      <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Historical Significance</h2>
      <p class="mb-4">The documents provide new insights into several aspects of the family's history:</p>
      
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>Previously unknown land holdings in the Samogitia region</li>
        <li>Correspondence with the royal court regarding diplomatic missions</li>
        <li>Details of a marriage alliance with the Radziwiłł family in 1542</li>
        <li>Records of the family's participation in the Livonian War</li>
        <li>Personal letters that reveal daily life and relationships</li>
      </ul>
      
      <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Research Project</h2>
      <p class="mb-4">Our association has launched a research project to study, translate, and digitize these documents. The project will be led by Dr. Elena Paulauskienė, professor of medieval history at Vilnius University, with assistance from graduate students and our association's historical committee.</p>
      
      <p class="mb-4">The first phase of the project will focus on transcription and translation of the documents. The second phase will involve historical analysis and publication of findings. We anticipate that the project will take approximately 18 months to complete.</p>
      
      <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Future Access</h2>
      <p class="mb-6">Once the documents have been digitized and analyzed, they will be made available through our association's digital archive. Members will have full access to high-resolution scans, transcriptions, translations, and analytical papers. Selected documents will also be featured in an exhibition at the National Museum of Lithuania in 2026.</p>
      
      <p class="text-lg font-medium mt-8 mb-4">This discovery represents a significant addition to our understanding of the Giedraičiai family's history and its role in the political and social life of the Grand Duchy of Lithuania.</p>
    `,
    relatedPosts: [
      {
        slug: "interview-with-historian",
        title: "Interview with Historian Dr. Aleksas Vaitkus",
        excerpt: "Renowned Lithuanian historian Dr. Aleksas Vaitkus discusses his recent findings.",
        image: "/placeholder.svg"
      },
      {
        slug: "genealogy-research-advances",
        title: "Advances in Genealogy Research",
        excerpt: "Our genealogy team has made significant progress in documenting the family's branches.",
        image: "/placeholder.svg"
      }
    ]
  },
  // Add other blog posts as needed
};

const BlogPost = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const post = slug ? blogPostsData[slug as keyof typeof blogPostsData] : null;
  
  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-3xl font-serif text-[#8B1E3F] mb-6">Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to={getLocalizedPath("blog", language)}>
            <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F]">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="mb-8">
          <Link to={getLocalizedPath("blog", language)}>
            <Button variant="outline" className="border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        
        <div className="mb-6">
          <Badge variant="outline" className="border-[#C9A13B] text-[#8B1E3F] mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#8B1E3F] mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
            <div>By {post.author}</div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="aspect-video bg-gray-100 mb-8 rounded-lg overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
        
        {/* Blog Content */}
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Share Links */}
        <div className="flex items-center gap-3 border-t border-gray-200 mt-12 pt-6">
          <span className="font-medium text-gray-700 flex items-center">
            <Share2 className="h-4 w-4 mr-2" /> Share:
          </span>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0">
              <span className="sr-only">Share on Facebook</span>
              F
            </Button>
            <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0">
              <span className="sr-only">Share on Twitter</span>
              T
            </Button>
            <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0">
              <span className="sr-only">Share on LinkedIn</span>
              L
            </Button>
          </div>
        </div>
        
        {/* Related Posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif text-[#8B1E3F] mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost, index) => (
                <Link to={getLocalizedBlogPostUrl(relatedPost.slug, language)} key={index}>
                  <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all h-full">
                    <div className="aspect-video bg-gray-100">
                      <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="pt-4">
                      <CardTitle className="text-lg font-serif text-[#8B1E3F] mb-2">
                        {relatedPost.title}
                      </CardTitle>
                      <p className="text-sm text-gray-700">{relatedPost.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogPost;
