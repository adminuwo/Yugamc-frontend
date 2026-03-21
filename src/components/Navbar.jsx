import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import yugLogo from '../assets/yug logo.webp';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Upcoming', path: '/upcoming' },
    { name: 'Why YUGAMC', path: '/why-us' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-white/10 backdrop-blur-sm py-6'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-50 flex items-center">
            <img
              src={yugLogo}
              alt="YUG AMC"
              className="h-14 md:h-20 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === link.path ? 'text-accent' : 'text-text/80'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="px-6 py-2.5 bg-accent text-white font-medium text-sm hover:bg-text transition-all transform hover:scale-105 duration-300 shadow-xl shadow-accent/20">
              Book Site Visit
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-text z-50 p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={30} className="text-text" /> : <Menu size={30} className="text-text" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay - Now outside header for true fixed inset-0 behavior */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-white z-[99999] flex flex-col p-8 overflow-y-auto"
          >
            {/* Overlay Header */}
            <div className="flex items-center justify-between mb-20">
              <Link to="/" onClick={toggleMobileMenu} className="flex items-center">
                <img
                  src={yugLogo}
                  alt="YUG AMC"
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-text hover:text-accent transition-colors"
                aria-label="Close Menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-8 my-auto min-h-max">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.08) }}
                >
                  <Link
                    to={link.path}
                    className={`text-4xl md:text-6xl font-serif transition-all hover:pl-6 hover:text-accent inline-block ${location.pathname === link.path ? 'text-accent pl-6' : 'text-text'}`}
                    onClick={toggleMobileMenu}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Overlay Footer Info */}
            <div className="mt-20 pt-10 border-t border-secondary">
              <span className="text-accent text-[11px] tracking-[0.4em] uppercase font-bold block mb-4">Inquiries</span>
              <p className="text-text font-serif text-xl mb-1">yugamcteam@gmail.com</p>
              <p className="text-text/70 font-sans text-lg">+91 97523 26763</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
