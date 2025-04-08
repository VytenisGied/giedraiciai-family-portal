
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
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
import Layout from "./components/Layout";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

// Create a wrapper component that includes the Layout
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => (
  <Layout>{children}</Layout>
);

const AppRoutes = () => (
  <Routes>
    {/* English Routes */}
    <Route path="/" element={<LayoutWrapper><Index /></LayoutWrapper>} />
    <Route path="/history" element={<LayoutWrapper><History /></LayoutWrapper>} />
    <Route path="/official/coat-of-arms" element={<LayoutWrapper><CoatOfArms /></LayoutWrapper>} />
    <Route path="/official/documents" element={<LayoutWrapper><Documents /></LayoutWrapper>} />
    <Route path="/association/about" element={<LayoutWrapper><About /></LayoutWrapper>} />
    <Route path="/association/membership" element={<LayoutWrapper><Membership /></LayoutWrapper>} />
    <Route path="/association/submit-genealogy" element={<LayoutWrapper><SubmitGenealogy /></LayoutWrapper>} />
    <Route path="/blog" element={<LayoutWrapper><Blog /></LayoutWrapper>} />
    <Route path="/blog/:slug" element={<LayoutWrapper><BlogPost /></LayoutWrapper>} />
    
    {/* Lithuanian Routes */}
    <Route path="/istorija" element={<LayoutWrapper><History /></LayoutWrapper>} />
    <Route path="/oficialus/herbas" element={<LayoutWrapper><CoatOfArms /></LayoutWrapper>} />
    <Route path="/oficialus/dokumentai" element={<LayoutWrapper><Documents /></LayoutWrapper>} />
    <Route path="/asociacija/apie" element={<LayoutWrapper><About /></LayoutWrapper>} />
    <Route path="/asociacija/naryste" element={<LayoutWrapper><Membership /></LayoutWrapper>} />
    <Route path="/asociacija/pateikti-genealogija" element={<LayoutWrapper><SubmitGenealogy /></LayoutWrapper>} />
    <Route path="/tinklarastis" element={<LayoutWrapper><Blog /></LayoutWrapper>} />
    <Route path="/tinklarastis/:slug" element={<LayoutWrapper><BlogPost /></LayoutWrapper>} />
    
    {/* Polish Routes */}
    <Route path="/historia" element={<LayoutWrapper><History /></LayoutWrapper>} />
    <Route path="/oficjalne/herb" element={<LayoutWrapper><CoatOfArms /></LayoutWrapper>} />
    <Route path="/oficjalne/dokumenty" element={<LayoutWrapper><Documents /></LayoutWrapper>} />
    <Route path="/stowarzyszenie/o-nas" element={<LayoutWrapper><About /></LayoutWrapper>} />
    <Route path="/stowarzyszenie/czlonkostwo" element={<LayoutWrapper><Membership /></LayoutWrapper>} />
    <Route path="/stowarzyszenie/przeslij-genealogie" element={<LayoutWrapper><SubmitGenealogy /></LayoutWrapper>} />
    <Route path="/blog" element={<LayoutWrapper><Blog /></LayoutWrapper>} />
    <Route path="/blog/:slug" element={<LayoutWrapper><BlogPost /></LayoutWrapper>} />
    
    {/* 404 Route */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => {
  // Create a new QueryClient instance for each component render
  const [queryClientInstance] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: 1,
      },
    },
  }));

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClientInstance}>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ScrollToTop />
            <AppRoutes />
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
