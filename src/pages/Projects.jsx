import React from 'react';
import { motion } from 'framer-motion';
import ss1 from '../assets/Screenshot 2026-03-20 080534.png';
import ss2 from '../assets/Screenshot 2026-03-20 080543.png';
import ss3 from '../assets/Screenshot 2026-03-20 080604.png';
import ss4 from '../assets/Screenshot 2026-03-20 080612.png';
import ss5 from '../assets/Screenshot 2026-03-20 080627.png';
import elevation_1_2 from '../assets/elevation_1_2.png';
import sg_square from '../assets/sg_square.png';
import villa1 from '../assets/villa_elevation_1.jpeg';
import uwo_comm from '../assets/uwo_commercial.jpeg';
import sbi_comm from '../assets/commercial_elevation_1.jpeg';
import naivedyam_comm from '../assets/commercial_elevation_2.jpeg';
import yash_heights_entrance from '../assets/yash_heights_entrance.jpeg';

const Projects = () => {
  const projects = [
    {
      title: "Yash Heights",
      status: "Ready to Move",
      location: "South Civil Lines, Jabalpur",
      highlights: ["Premium Residential", "Modern Amenities", "Luxury Living"],
      img: ss1
    },
    {
      title: "City Plaza",
      status: "Upcoming",
      location: "Rampur Chowk, Jabalpur",
      highlights: ["Commercial Hub", "High Footfall", "Business Center"],
      img: elevation_1_2
    },
    {
      title: "SG Square",
      status: "Completed",
      location: "Vijay Nagar, Jabalpur",
      highlights: ["Lifestyle Residencies", "Iconic Architecture", "Modern Design"],
      img: sg_square
    },
    {
      title: "Luxury Villa",
      status: "Ongoing",
      location: "Civil Lines, Jabalpur",
      highlights: ["Modern Architecture", "Private Car Port", "Premium Lifestyle"],
      img: villa1
    },
    {
      title: "SBI Commercial Point",
      status: "Completed",
      location: "Vijay Nagar, Jabalpur",
      highlights: ["Strategic Location", "Premium Outlets", "Modern Facade"],
      img: sbi_comm
    },
    {
      title: "UWO Business Hub",
      status: "Upcoming",
      location: "Vijay Nagar, Jabalpur",
      highlights: ["Corporate Suites", "High Tech Infrastructure", "Prime Location"],
      img: uwo_comm
    },
    {
      title: "Naivedyam Center",
      status: "Completed",
      location: "Rampur, Jabalpur",
      highlights: ["Lifestyle Hub", "Iconic Brands", "Commercial Excellence"],
      img: naivedyam_comm
    },
    {
      title: "Yash Premium",
      status: "Ready to Move",
      location: "South Civil Lines, Jabalpur",
      highlights: ["Luxury Residences", "Grand Entrance", "Secure Living"],
      img: yash_heights_entrance
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-primary pb-24 text-text">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-text mb-6"
          >
            Our <span className="italic font-light text-accent">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg font-sans text-text/70 max-w-2xl mx-auto font-light"
          >
            A curated collection of developments built with quality, trust, and excellence.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] md:h-[550px] w-full mb-8 overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className={`px-5 py-2 text-[10px] font-semibold tracking-[0.2em] uppercase backdrop-blur-md ${project.status === 'Upcoming' ? 'bg-accent/90 text-white' : 'bg-white/95 text-text border border-text/5'}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-start border-b border-text/10 pb-8 group-hover:border-accent transition-colors">
                <div>
                  <h3 className="text-4xl font-serif text-text mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-text/60 font-sans italic text-sm">{project.location}</p>
                </div>
                
                <div className="flex flex-col items-end space-y-2">
                  {project.highlights.map((hlt, i) => (
                    <span key={i} className="text-[11px] font-sans tracking-widest uppercase text-text/50">{hlt}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
