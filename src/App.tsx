import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import CoatOfArms from './pages/official/CoatOfArms';
import Documents from './pages/official/Documents';
import About from './pages/association/About';
import Membership from './pages/association/Membership';
import SubmitGenealogy from './pages/association/SubmitGenealogy';
import Portal from './pages/association/Portal';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/en" element={<Layout><Home /></Layout>} />
          <Route path="/lt" element={<Layout><Home /></Layout>} />
          <Route path="/pl" element={<Layout><Home /></Layout>} />
          
          <Route path="/history" element={<Layout><History /></Layout>} />
          <Route path="/en/history" element={<Layout><History /></Layout>} />
          <Route path="/lt/istorija" element={<Layout><History /></Layout>} />
          <Route path="/pl/historia" element={<Layout><History /></Layout>} />
          
          <Route path="/coat-of-arms" element={<Layout><CoatOfArms /></Layout>} />
          <Route path="/en/coat-of-arms" element={<Layout><CoatOfArms /></Layout>} />
          <Route path="/lt/herbas" element={<Layout><CoatOfArms /></Layout>} />
          <Route path="/pl/herb" element={<Layout><CoatOfArms /></Layout>} />
          
          <Route path="/documents" element={<Layout><Documents /></Layout>} />
          <Route path="/en/documents" element={<Layout><Documents /></Layout>} />
          <Route path="/lt/dokumentai" element={<Layout><Documents /></Layout>} />
          <Route path="/pl/dokumenty" element={<Layout><Documents /></Layout>} />
          
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/en/about" element={<Layout><About /></Layout>} />
          <Route path="/lt/apie" element={<Layout><About /></Layout>} />
          <Route path="/pl/o-nas" element={<Layout><About /></Layout>} />
          
          <Route path="/membership" element={<Layout><Membership /></Layout>} />
          <Route path="/en/membership" element={<Layout><Membership /></Layout>} />
          <Route path="/lt/narystė" element={<Layout><Membership /></Layout>} />
          <Route path="/pl/członkostwo" element={<Layout><Membership /></Layout>} />
          
          <Route path="/submit-genealogy" element={<Layout><SubmitGenealogy /></Layout>} />
          <Route path="/en/submit-genealogy" element={<Layout><SubmitGenealogy /></Layout>} />
          <Route path="/lt/pateikti-genealogija" element={<Layout><SubmitGenealogy /></Layout>} />
          <Route path="/pl/przesłać-genealogię" element={<Layout><SubmitGenealogy /></Layout>} />
          
          <Route path="/portal" element={<Layout><Portal /></Layout>} />
          <Route path="/en/portal" element={<Layout><Portal /></Layout>} />
          <Route path="/lt/portalas" element={<Layout><Portal /></Layout>} />
          <Route path="/pl/portal" element={<Layout><Portal /></Layout>} />
          
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/en/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/lt/blogas" element={<Layout><Blog /></Layout>} />
          <Route path="/pl/blog" element={<Layout><Blog /></Layout>} />
          
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}

export default App;
