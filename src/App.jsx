import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import UpcomingProject from './pages/UpcomingProject';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AIAssistant from './components/AIAssistant';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Wrapper component to get the location/path
const AppContent = ({ isLoading, setIsLoading }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      <Loader onLoaded={() => setIsLoading(false)} />
      <ScrollToTop />
      {!isLoading && !isAdminPage && <Navbar />}
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/upcoming" element={<UpcomingProject />} />
          <Route path="/why-us" element={<WhyChooseUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>

      {!isLoading && !isAdminPage && <Footer />}
      {!isLoading && !isAdminPage && (
        <>
          <FloatingWhatsApp />
          <AIAssistant />
        </>
      )}
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ReactLenis root>
      <Router>
        <AppContent isLoading={isLoading} setIsLoading={setIsLoading} />
      </Router>
    </ReactLenis>
  );
}

export default App;
