
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import History from "./pages/History";
import CoatOfArms from "./pages/official/CoatOfArms";
import Documents from "./pages/official/Documents";
import About from "./pages/association/About";
import Membership from "./pages/association/Membership";
import SubmitGenealogy from "./pages/association/SubmitGenealogy";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/history" element={<History />} />
            
            {/* Official Routes */}
            <Route path="/official/coat-of-arms" element={<CoatOfArms />} />
            <Route path="/official/documents" element={<Documents />} />
            
            {/* Association Routes */}
            <Route path="/association/about" element={<About />} />
            <Route path="/association/membership" element={<Membership />} />
            <Route path="/association/submit-genealogy" element={<SubmitGenealogy />} />
            
            {/* Blog Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
