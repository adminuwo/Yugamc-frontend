import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ss1 from '../../assets/Screenshot 2026-03-20 080534.png';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Yash Heights',
      desc: 'Premium residential living with modern architectural excellence.',
      img: ss1,
      link: '/projects'
    },
    {
      id: 2,
      title: 'City Plaza',
      desc: 'Future-ready commercial spaces at the heart of the city.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      link: '/upcoming'
    }
  ];

  return (
    <section className="py-24 bg-[#EDEDED]/30">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent tracking-[0.3em] text-[10px] uppercase font-bold mb-2 block">Premium Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-serif text-text leading-tight">Our Signature <span className="italic font-light">Developments</span></h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Link to="/projects" className="text-[10px] font-sans tracking-[0.3em] uppercase pb-2 border-b border-text/20 text-text/60 hover:text-accent hover:border-accent transition-all duration-300">
              Explore All Projects
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="group"
            >
              <Link to={project.link}>
                <div className="relative h-[450px] md:h-[600px] w-full mb-8 overflow-hidden rounded-2xl shadow-xl bg-white">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center backdrop-blur-sm">
                     <div className="w-12 h-px bg-accent mb-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
                     <span className="text-white font-sans tracking-[0.5em] uppercase text-[10px]">View Details</span>
                  </div>
                </div>
              </Link>
              <div className="flex flex-col space-y-2">
                 <h3 className="text-3xl font-serif text-text group-hover:text-accent transition-colors duration-500">{project.title}</h3>
                 <p className="text-text/50 font-sans font-light text-sm max-w-md">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
