
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./hooks/useAuth";
import ScrollToTop from "./components/ScrollToTop";
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

// Portal Routes
import Login from "./pages/portal/Login";
import Dashboard from "./pages/portal/Dashboard";
import PortalDocuments from "./pages/portal/Documents";
import Members from "./pages/portal/Members";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const AppRoutes = () => (
  <Routes>
    {/* English Routes */}
    <Route path="/" element={<Index />} />
    <Route path="/history" element={<History />} />
    <Route path="/official/coat-of-arms" element={<CoatOfArms />} />
    <Route path="/official/documents" element={<Documents />} />
    <Route path="/association/about" element={<About />} />
    <Route path="/association/membership" element={<Membership />} />
    <Route path="/association/submit-genealogy" element={<SubmitGenealogy />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    
    {/* Lithuanian Routes */}
    <Route path="/istorija" element={<History />} />
    <Route path="/oficialus/herbas" element={<CoatOfArms />} />
    <Route path="/oficialus/dokumentai" element={<Documents />} />
    <Route path="/asociacija/apie" element={<About />} />
    <Route path="/asociacija/naryste" element={<Membership />} />
    <Route path="/asociacija/pateikti-genealogija" element={<SubmitGenealogy />} />
    <Route path="/tinklarastis" element={<Blog />} />
    <Route path="/tinklarastis/:slug" element={<BlogPost />} />
    
    {/* Polish Routes */}
    <Route path="/historia" element={<History />} />
    <Route path="/oficjalne/herb" element={<CoatOfArms />} />
    <Route path="/oficjalne/dokumenty" element={<Documents />} />
    <Route path="/stowarzyszenie/o-nas" element={<About />} />
    <Route path="/stowarzyszenie/czlonkostwo" element={<Membership />} />
    <Route path="/stowarzyszenie/przeslij-genealogie" element={<SubmitGenealogy />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    
    {/* Portal Routes (Not translated - admin area) */}
    <Route path="/portal/login" element={<Login />} />
    <Route path="/portal/dashboard" element={<Dashboard />} />
    <Route path="/portal/documents" element={<PortalDocuments />} />
    <Route path="/portal/members" element={<Members />} />
    
    {/* 404 Route */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ScrollToTop />
            <AppRoutes />
          </TooltipProvider>
        </LanguageProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
