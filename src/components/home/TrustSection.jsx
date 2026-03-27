import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform, useScroll } from 'framer-motion';

// Cinematic noise texture overlay
const NoiseOverlay = () => (
  <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.04] mix-blend-soft-light" 
       style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 fill=%22%23000%22/%3E%3C/svg%3E")' }}>
  </div>
);

const AnimatedCounter = ({ end, duration = 3, label, desc, suffix = '', index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      let startValue = 0;
      const endValue = end;
      const totalFrames = duration * 60;
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutExpo = 1 - Math.pow(2, -12 * progress);
        const currentValue = Math.floor(easeOutExpo * endValue);
        
        setCount(currentValue);
        
        if (frame === totalFrames) {
          clearInterval(timer);
          setCount(endValue);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative flex flex-col items-center text-center px-6 py-10 group cursor-default h-full min-h-[300px] justify-center"
    >
      {/* Cinematic Floating Card Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E27A5D] via-[#B05436] to-[#8E3A21] rounded-[60px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] transition-all duration-700 group-hover:shadow-[0_60px_100px_-20px_rgba(142,58,33,0.5)] border border-white/10 -z-10" />
      
      {/* Top Corner Radial Light Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.15)_0%,_transparent_50%)] rounded-[60px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Glassmorphism Shine Overlay (Removed backdrop-blur to fix text clarity) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-700 rounded-[60px]" />
      
      <NoiseOverlay />

      {/* Luxury Serif Number with Shine */}
      <div className="relative mb-6">
        <motion.div 
          className="text-5xl lg:text-6xl font-serif text-white tracking-tighter drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)] font-bold bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent"
        >
          {count}{suffix}
        </motion.div>
        {/* Under-glow for the number */}
        <div className="absolute inset-0 bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </div>

      {/* Title Text (Minimal & Spaced) */}
      <div className="mb-4">
        <h4 className="text-[10px] font-sans tracking-[0.6em] uppercase text-white/70 font-bold group-hover:text-white transition-colors duration-500">
          {label}
        </h4>
      </div>

      {/* Spacing line */}
      <div className="h-[2px] w-8 bg-white/20 mb-4 group-hover:w-16 transition-all duration-700 ease-[0.76, 0, 0.24, 1]" />

      {/* Bottom Text (Dark Bold Contrast) */}
      <p className="text-[11px] font-sans text-black font-extrabold tracking-[0.3em] uppercase italic leading-tight drop-shadow-sm px-4">
        {desc}
      </p>
    </motion.div>
  );
};

const TrustSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const sectionScale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative -mt-32 pt-48 pb-40 overflow-hidden z-10"
    >
      {/* Abstract Background Design */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#FBFBFB]" />
        {/* Soft Blurred Ambient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E27A5D]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#B05436]/5 blur-[200px] rounded-full" />
        <NoiseOverlay />
      </div>

      {/* Top Transition Fade */}
      <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-[#FBFBFB] to-transparent pointer-events-none z-10" />

      <motion.div 
        style={{ scale: sectionScale, opacity: sectionOpacity }}
        className="container mx-auto px-6 max-w-[1500px] relative z-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
          <AnimatedCounter index={0} end={10} suffix="+" label="Years of Trust" desc="A Decade of Excellence" />
          <AnimatedCounter index={1} end={15} suffix="+" label="Masterpieces Built" desc="Iconic Developments" />
          <AnimatedCounter index={2} end={500} suffix="+" label="Families Happy" desc="Lives Transformed" />
          <AnimatedCounter index={3} end={1} suffix="M+" label="SQ. FT. Area" desc="Quality Urban Spaces" />
        </div>
      </motion.div>

      {/* Floor Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </section>
  );
};

export default TrustSection;
