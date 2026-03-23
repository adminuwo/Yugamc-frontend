import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Target, Compass, Lightbulb, Grid, Building2, MessageSquare, BarChart3, Star } from 'lucide-react';
import h8 from '../assets/h8.webp';
import w1 from '../assets/w1.jpg';
import AboutVideoSection from '../components/about/AboutVideoSection';


const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (

    <div className="pt-24 min-h-screen bg-primary">


      <AboutVideoSection />

      {/* Who We Are */}
      <section ref={sectionRef} className="py-24 md:py-32 overflow-hidden bg-gradient-to-r from-white to-[#f7f7f7]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
            {/* Text content (Right on Desktop, Top on Mobile) */}
            <div className="w-full md:w-1/2 text-left">
              <motion.div
                initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth > 768 ? 50 : 0, y: typeof window !== 'undefined' && window.innerWidth <= 768 ? 30 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-[1px] bg-accent"
                  />
                  <Star className="text-accent fill-accent" size={12} />
                </div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-5xl lg:text-7xl font-serif text-text mb-8"
                >
                  Who We Are
                </motion.h2>

                <div className="space-y-6 max-w-[600px]">
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-xl text-text/70 font-sans leading-[1.8]"
                  >
                    YUG AMC is a forward-thinking real estate brand transforming Jabalpur's skyline with 
                    <span className="text-accent font-semibold px-1 italic">trust</span>, 
                    <span className="text-accent font-semibold px-1 italic">vision</span>, and 
                    <span className="text-accent font-semibold px-1 italic">innovation</span>. 
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-xl text-text/70 font-sans leading-[1.8]"
                  >
                    We bring international standards of architecture and premium lifestyle amenities to the heart of the city, ensuring every development stands as a benchmark of 
                    <span className="text-accent font-semibold px-1 italic">excellence</span>.
                  </motion.p>
                </div>

                <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: false }}
                   transition={{ delay: 1, duration: 1 }}
                   className="mt-12 flex items-center gap-6"
                >
                  <div className="h-12 w-px bg-secondary" />
                  <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-accent/60">
                    Est. 2014 · Jabalpur
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* High-quality building image (Left on Desktop, Bottom on Mobile) */}
            <div className="w-full md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth > 768 ? -50 : 0, y: typeof window !== 'undefined' && window.innerWidth <= 768 ? 30 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative"
              >
                {/* Decorative background depth card */}
                <div className="absolute -inset-4 border border-secondary rounded-2xl -z-10 translate-x-4 translate-y-4" />
                
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <motion.img 
                    style={{ y }}
                    src={w1} 
                    alt="Premium Building" 
                    className="w-full aspect-square md:aspect-[5/4] object-cover scale-110 transition-transform duration-1000 group-hover:scale-125"
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  {/* Subtle blur overlay on hover */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-none group-hover:backdrop-blur-[2px] transition-all duration-700 pointer-events-none" />
                </div>

                {/* Micro design element: Floating badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-8 shadow-2xl rounded-xl border border-secondary hidden sm:block"
                >
                  <div className="text-center">
                    <span className="block text-4xl font-serif text-accent mb-1 italic">10+</span>
                    <span className="block text-[10px] tracking-widest uppercase text-text/50 font-bold whitespace-nowrap">Years of Legacy</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Vision, Mission, Philosophy */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f5f5f5]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          >
            {[
              { 
                title: "Our Vision", 
                desc: "To create modern spaces that enhance lifestyles and deliver lasting value for generations.",
                icon: <Target size={28} />,
                accentWords: ["modern spaces", "lasting value"]
              },
              { 
                title: "Our Mission", 
                desc: "To build high-quality developments with transparency, innovation, and customer-first thinking.",
                icon: <Compass size={28} />,
                accentWords: ["high-quality", "transparency", "innovation"]
              },
              { 
                title: "Our Philosophy", 
                desc: "We don't just build projects. We build confidence, comfort, and future-ready spaces.",
                icon: <Lightbulb size={28} />,
                accentWords: ["confidence", "comfort", "future-ready"]
              }
            ].map((item, index) => {
              // Mouse tracking for "light follow" effect
              const mouseX = useMotionValue(0);
              const mouseY = useMotionValue(0);

              function handleMouseMove({ currentTarget, clientX, clientY }) {
                const { left, top } = currentTarget.getBoundingClientRect();
                mouseX.set(clientX - left);
                mouseY.set(clientY - top);
              }

              return (
                <motion.div 
                  key={index}
                  onMouseMove={handleMouseMove}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    backgroundColor: "#fffaf7",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group relative bg-white p-10 md:p-12 rounded-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.04)] border border-[#eeeeee] hover:border-accent hover:shadow-[0_0_0_1px_#C46A4A,0_10px_30px_rgba(196,106,74,0.2)] transition-all duration-500 overflow-hidden"
                >
                  {/* Mouse Follow Light Effect */}
                  <motion.div 
                    className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: useTransform(
                        [mouseX, mouseY],
                        ([latestX, latestY]) => `radial-gradient(circle at ${latestX}px ${latestY}px, rgba(196,106,74,0.12), transparent 80%)`
                      )
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="w-16 h-16 flex items-center justify-center rounded-2xl mb-8 bg-primary group-hover:bg-accent/10 text-accent transition-colors duration-500"
                    >
                      {item.icon}
                    </motion.div>

                    <h3 className="text-2xl font-serif text-text mb-4 group-hover:text-black transition-colors duration-500">
                      {item.title}
                    </h3>
                    
                    <p className="text-text/70 font-sans leading-relaxed text-sm md:text-base group-hover:text-text/90">
                      {item.desc.split(new RegExp(`(${item.accentWords.join('|')})`, 'gi')).map((part, i) => 
                        item.accentWords.some(word => word.toLowerCase() === part.toLowerCase()) ? (
                          <span key={i} className="text-accent/90 font-medium">{part}</span>
                        ) : part
                      )}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why We're Different - Clean Timeline Style */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">Why We're Different</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line with Scroll Growth */}
            <div className="absolute left-[32px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#eeeeee] -translate-x-1/2 z-0">
               <motion.div 
                 initial={{ height: 0 }}
                 whileInView={{ height: "100%" }}
                 viewport={{ once: false }}
                 transition={{ duration: 2, ease: "easeOut" }}
                 className="w-full bg-accent origin-top"
               />
            </div>

            <div className="space-y-24 md:space-y-32 relative z-10">
              {[
                { 
                  num: "01",
                  title: "Thoughtful Planning",
                  desc: "Every square foot is optimized for maximum utility and spatial elegance, ensuring zero wasted space."
                },
                { 
                  num: "02",
                  title: "Strong Construction Standards",
                  desc: "We use only top-tier materials and rigorous testing to ensure structural integrity and longevity."
                },
                { 
                  num: "03",
                  title: "Clear Communication",
                  desc: "Enjoy 100% transparency from booking to possession with our dedicated relationship managers."
                },
                { 
                  num: "04",
                  title: "Long-Term Value Creation",
                  desc: "Our strategic choice of locations guarantees high appreciation and meaningful lifestyle upgrades."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Number Column */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="w-full md:w-1/2 flex justify-start md:justify-center mb-4 md:mb-0 relative pl-12 md:pl-0"
                  >
                    <span className="text-4xl md:text-7xl font-serif font-bold text-text/10 group-hover:text-accent transition-colors duration-500 select-none">
                      {item.num}
                    </span>
                    {/* Interaction point on the line */}
                    <div className="absolute left-[-16px] md:left-auto md:right-[-4.5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border-2 border-accent" />
                  </motion.div>

                  {/* Content Column */}
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="w-full md:w-1/2 pl-12 md:px-12 group cursor-default"
                  >
                    <h3 className="text-2xl font-serif text-text mb-4 relative inline-block transition-transform duration-500 group-hover:translate-x-2">
                       {item.title}
                       <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
                    </h3>
                    <p className="text-text/70 font-sans leading-relaxed text-sm md:text-base max-w-md">
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
