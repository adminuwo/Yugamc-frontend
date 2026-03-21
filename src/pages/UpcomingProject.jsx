import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  Navigation, 
  TrendingUp, 
  PieChart, 
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import uph1 from '../assets/uph1.jpg';
import o1 from '../assets/o1.jpg';

const UpcomingProject = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 250]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Premium Cinematic Hero - Global Level Enhancement */}
      <section ref={containerRef} className="relative min-h-screen pt-[90px] md:pt-[120px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Layer with Parallax, Continuous Zoom & Blur */}
        <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
          <motion.img 
            initial={{ scale: 1, filter: "blur(4px)" }}
            animate={{ 
              scale: 1.05, 
              filter: "blur(1.5px)",
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "linear" 
            }}
            src={uph1} 
            alt="City Plaza Architecture" 
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-Layered Overlays for Profound Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/85 z-10" />
          <div className="absolute inset-0 radial-vignette opacity-40 pointer-events-none z-10" />
        </motion.div>
        
        {/* Refined Glass Container (Sky Region / Upper Center) */}
        <motion.div 
          style={{ opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 text-center px-10 py-16 md:px-20 md:py-24 bg-black/15 backdrop-blur-xl rounded-[40px] border border-white/10 max-w-6xl mt-10 overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-white/5 blur-[100px] -z-10" />

          <motion.span 
            variants={itemVariants}
            className="inline-block text-accent tracking-[0.6em] text-[10px] md:text-xs uppercase font-bold mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Upcoming Destination
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-white mb-10"
          >
            <span className="block text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]">A New Landmark for</span>
            <span className="block text-6xl md:text-9xl lg:text-[10rem] font-serif italic text-accent drop-shadow-[0_0_30px_rgba(196,106,74,0.4)] tracking-wide">Business & Growth</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-white/95 text-lg md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          >
            City Plaza — a premium commercial hub designed for visibility, growth, and long-term investment.
          </motion.p>
        </motion.div>
      </section>

      {/* CSS for Subtle Vignette */}
      <style>{`
        .radial-vignette {
          background: radial-gradient(circle, transparent 40%, rgba(0,0,0,0.8) 150%);
        }
      `}</style>

      {/* Modern Overview Section - Split Layout */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-16 lg:gap-24">
            {/* Left: Premium Visual Storytelling */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <div className="relative group rounded-[20px] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[700px]">
                <img 
                  src={o1} 
                  alt="City Plaza Interior" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>

            {/* Right: Refined Narrative Content */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <span className="text-accent text-[11px] tracking-[0.4em] uppercase font-bold block mb-4">The Vision</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-10 leading-tight">Architecture of <br/><span className="italic font-light">Opportunity</span></h2>
              
              <div className="space-y-6 text-text/70 text-lg leading-[1.8] font-light max-w-xl">
                <p className="italic">
                  City Plaza is envisioned as the city's most vibrant commercial destination, seamlessly bringing together premium retail spaces, hypermarkets, corporate offices, and lifestyle entertainment.
                </p>
                <p>
                  Designed with state-of-the-art architecture, it promises striking visibility and an elevated shopping experience. It's not just a commercial hub; it's a statement of Jabalpur's growing prominence.
                </p>
              </div>

              <div className="mt-12">
                <Link to="/contact" className="inline-flex items-center group px-10 py-5 bg-accent text-white font-sans text-xs tracking-[0.3em] uppercase font-bold hover:shadow-[0_20px_40px_-5px_rgba(196,106,74,0.3)] transition-all duration-300">
                  Explore Investment
                  <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-8 mt-20 pt-10 border-t border-secondary">
                <div>
                  <h4 className="text-text font-serif text-2xl mb-1">State-of-the-art</h4>
                  <p className="text-text/50 text-xs uppercase tracking-widest font-bold">Architecture</p>
                </div>
                <div>
                  <h4 className="text-text font-serif text-2xl mb-1">Multi-Level</h4>
                  <p className="text-text/50 text-xs uppercase tracking-widest font-bold">Retail Zones</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages & Investment - Modern Card Grid */}
      <section className="py-32 bg-[#fcfcfc] relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C46A4A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Location Advantage */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-accent text-[11px] tracking-[0.4em] uppercase font-bold block mb-4">Strategic Location</span>
                <h2 className="text-4xl md:text-5xl font-serif text-text">Location Advantage</h2>
              </div>
              <p className="text-text/60 max-w-sm font-light leading-relaxed">Positioned at the epicenter of Jabalpur's most promising real estate corridor.</p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { 
                  icon: <Navigation size={24} />, 
                  title: "Prime Connectivity", 
                  desc: "Located at the heart of arterial roads ensuring easy inflow from all cardinal points of the city." 
                },
                { 
                  icon: <Users size={24} />, 
                  title: "High Footfall Potential", 
                  desc: "Surrounded by densely populated premium residential zones with high purchasing power." 
                },
                { 
                  icon: <MapPin size={24} />, 
                  title: "Easy Accessibility", 
                  desc: "Ample parking and multi-point entry/exit points designed for seamless visitor convenience." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={cardVariants}
                  className="group relative bg-white rounded-[24px] p-10 border border-secondary/50 shadow-sm hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary/30 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 scale-110 group-hover:scale-100">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-text mb-4 transition-colors group-hover:text-black">
                    {item.title}
                  </h3>
                  <p className="text-text/60 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="h-px bg-secondary/50 w-full mb-32" />

          {/* Why Invest */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-accent text-[11px] tracking-[0.4em] uppercase font-bold block mb-4">Investment Potential</span>
                <h2 className="text-4xl md:text-5xl font-serif text-text">Why Invest in City Plaza</h2>
              </div>
              <p className="text-text/60 max-w-sm font-light leading-relaxed">A strategic asset for those who value long-term stability and high capital growth.</p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { 
                  icon: <TrendingUp size={24} />, 
                  title: "High ROI Potential", 
                  desc: "Commercial spaces in such prime hubs yield substantially higher rental returns than residential." 
                },
                { 
                  icon: <PieChart size={24} />, 
                  title: "Growing Demand", 
                  desc: "Jabalpur's shifting commercial landscape demands high-quality premium spaces for brands." 
                },
                { 
                  icon: <ArrowUpRight size={24} />, 
                  title: "Strong Appreciation", 
                  desc: "The combination of limited supply and strategic location ensures continuous value growth." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={cardVariants}
                  className="group relative bg-white rounded-[24px] p-10 border border-secondary/50 shadow-sm hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary/30 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 scale-110 group-hover:scale-100">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-text mb-4 transition-colors group-hover:text-black">
                    {item.title}
                  </h3>
                  <p className="text-text/60 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* Premium Cinematic CTA - High Conversion Redesign with CTA-Footer Separation */}
      <section className="py-40 relative overflow-hidden flex items-center justify-center border-b border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
        {/* Background Layer with Blurred Architecture - Adjusted opacity for lighter base */}
        <div className="absolute inset-0 z-0">
          <img 
            src={uph1} 
            alt="City Plaza Architecture" 
            className="w-full h-full object-cover blur-[5px] scale-110 opacity-50" 
          />
          {/* Top-to-Bottom Gradient for better Footer separation */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/65" />
        </div>
        
        {/* Decorative Light Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[40px] p-12 md:p-24 text-center shadow-[0_60px_120px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Inner Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />


            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              Secure Your Legacy in <br/>
              <span className="italic font-light text-accent drop-shadow-[0_0_25px_rgba(196,106,74,0.4)]">The Future of Business</span>
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl font-sans mb-14 max-w-2xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-md">
              Take the first step towards a high-yield investment in Jabalpur’s most anticipated commercial landmark. Limited spaces available.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link 
                to="/contact" 
                className="px-12 py-6 bg-accent text-white font-sans text-xs tracking-[0.4em] uppercase font-bold hover:shadow-[0_20px_40px_-5px_rgba(196,106,74,0.6)] hover:-translate-y-1.5 transition-all duration-500 rounded-full"
              >
                Book Space Now
              </Link>
              <button 
                className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white font-sans text-xs tracking-[0.4em] uppercase font-bold hover:bg-white hover:text-black hover:-translate-y-1.5 transition-all duration-500 rounded-full"
              >
                Brochure Pack
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default UpcomingProject;
