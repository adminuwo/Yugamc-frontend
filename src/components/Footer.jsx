import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import yugLogo from '../assets/yug logo.webp';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      url: "https://www.instagram.com/yug_amc/", 
      label: "Instagram" 
    },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
      ), 
      url: "https://www.facebook.com/profile.php?id=61575266951524", 
      label: "Facebook" 
    },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.396 2.966 7.396 6.93 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592 0 12.017 0z"/>
        </svg>
      ), 
      url: "https://in.pinterest.com/Yugamcpvtltd/", 
      label: "Pinterest" 
    },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19 9.457 12.504h-7.406l-5.799-7.581-6.639 7.581H.47l8.59-9.816L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.291 19.497h2.039L6.486 3.24H4.298l13.312 17.41z"/>
        </svg>
      ), 
      url: "https://x.com/yugamc22", 
      label: "Twitter" 
    },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      url: "https://www.youtube.com/@Yugamc", 
      label: "YouTube" 
    },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
        </svg>
      ), 
      url: "https://www.linkedin.com/in/yug-amc-pvt-ltd-943ab3371/", 
      label: "LinkedIn" 
    },
  ];

  return (
    <footer className="bg-[#f1ede7] text-[#444] pt-24 pb-12 overflow-hidden border-t border-black/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 mb-20">
          {/* Column 1: Brand info */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col items-start gap-4 group">
              <img 
                src={yugLogo} 
                alt="YUG AMC Logo" 
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="text-3xl font-serif font-bold text-black">
                YUG<span className="text-accent">AMC</span>
              </span>
            </Link>
            <p className="text-[#444] font-sans leading-relaxed max-w-sm">
              At YUGAMC, we don't just develop properties — we create spaces where life grows, businesses thrive, and investments multiply. Driven by trust, precision, and modern lifestyles.
            </p>
            
            {/* Social Icons - Premium Style */}
            <div className="flex gap-3 md:gap-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#C46A4A", // accent color
                    borderColor: "#C46A4A",
                    y: -4
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-[#444] group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick links */}
          <div className="lg:pl-12">
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-10 text-black">Quick Links</h4>
            <ul className="space-y-5 font-sans">
              <li><Link to="/about" className="hover:text-accent transition-colors duration-300">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors duration-300">Projects</Link></li>
              <li><Link to="/upcoming" className="hover:text-accent transition-colors duration-300">City Plaza</Link></li>
              <li><Link to="/why-us" className="hover:text-accent transition-colors duration-300">Why Choose Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact info */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-10 text-black">Contact info</h4>
              <address className="not-italic space-y-5 font-sans leading-relaxed">
                <a 
                  href="https://www.google.com/maps?ll=23.140702,79.925953&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=9922169436067378815" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3 group hover:text-accent transition-colors duration-300"
                >
                  <MapPin className="mt-1 text-accent transition-transform duration-300 group-hover:scale-110" size={18} />
                  <span>SG Square, Rampur Chowk,<br/> Jabalpur, MP</span>
                </a>

                <a 
                  href="https://wa.me/918871190020" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 group hover:text-accent transition-colors duration-300"
                >
                  <Phone className="text-accent transition-transform duration-300 group-hover:scale-110" size={18} />
                  <span>+91 8871190020</span>
                </a>

                <a 
                  href="mailto:admin@uwo24.com" 
                  className="flex items-center gap-3 group hover:text-accent transition-colors duration-300"
                >
                  <Mail className="text-accent transition-transform duration-300 group-hover:scale-110" size={18} />
                  <span>admin@uwo24.com</span>
                </a>
              </address>
          </div>
        </div>
        
        {/* Bottom Section with separator */}
        <div className="border-t border-black/[0.08] pt-10 flex flex-col md:flex-row justify-between items-center text-[13px] text-[#444]/50 font-sans tracking-wide">
          <p>&copy; {new Date().getFullYear()} YUG Asset Management Company. All rights reserved.</p>
          <div className="mt-6 md:mt-0 flex space-x-10">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-accent transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
