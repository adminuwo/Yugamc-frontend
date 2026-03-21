import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 3, label, desc, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center lg:px-12 py-10 lg:py-0 border-b lg:border-b-0 lg:border-r border-text/10 last:border-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-serif text-accent mb-4 font-light tracking-tighter"
      >
        {count}{suffix}
      </motion.div>
      <div className="text-[10px] font-sans tracking-[0.4em] uppercase text-text/80 font-bold mb-3">{label}</div>
      <div className="text-[11px] font-sans text-text/30 tracking-widest font-light italic uppercase">{desc}</div>
    </div>
  );
};

const TrustSection = () => {
  return (
    <section className="py-32 bg-[#F8F8F8] border-y border-secondary/50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 items-center">
          <AnimatedCounter end={10} suffix="+" label="Years of Trust" desc="A Decade of Excellence" />
          <AnimatedCounter end={15} suffix="+" label="Masterpieces Built" desc="Iconic Developments" />
          <AnimatedCounter end={500} suffix="+" label="Families Happy" desc="Lives Transformed" />
          <AnimatedCounter end={1} suffix="M+" label="SQ. FT. Area" desc="Quality Urban Spaces" />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
