"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

import { Project } from "@/lib/notion";

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-video rounded-md overflow-hidden group bg-timberwolf/20 border border-timberwolf/40">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-vandyke/60 text-seashell opacity-0 group-hover:opacity-100 transition-opacity hover:bg-vandyke/90 shadow-md backdrop-blur-sm z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-vandyke/60 text-seashell opacity-0 group-hover:opacity-100 transition-opacity hover:bg-vandyke/90 shadow-md backdrop-blur-sm z-10"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-vandyke/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                idx === currentIndex ? "bg-seashell scale-125" : "bg-seashell/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectsDossier({ projects }: { projects: Project[] }) {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Reset scroll when modal opens
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
      setIsDescriptionExpanded(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  // Fan calculations for 5 cards
  const calculateFanTransform = (index: number) => {
    const rotations = [-15, -7, 0, 7, 15];
    const yOffsets = [30, 8, 0, 8, 30];
    const xOffsets = [-160, -80, 0, 80, 160];

    return {
      rotate: rotations[index],
      y: yOffsets[index],
      x: xOffsets[index]
    };
  };

  return (
    <div className="w-full min-h-screen bg-seashell relative">
      
      {/* ---------------- MOBILE LAYOUT (Standard Grid) ---------------- */}
      <div className="md:hidden pt-32 pb-24 px-6 space-y-8">
        <div className="mb-12">
          <h1 className="font-display-lg text-4xl text-vandyke mb-4">Archives</h1>
          <p className="font-label-caps text-xs text-beaver uppercase tracking-widest">Research & Development</p>
        </div>
        
        {projects.map((project) => (
          <div key={project.id} className="bg-white border border-timberwolf/60 shadow-sm rounded-md overflow-hidden flex flex-col">
            <div className="w-full h-48 relative">
               <Image src={project.images[0]} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="text-xs font-mono text-beaver mb-2 uppercase">{project.year}</div>
              <h2 className="text-xl font-display-lg text-vandyke mb-3 leading-tight">{project.title}</h2>
              <div className="w-full h-px bg-timberwolf/40 mb-3" />
              <p className="text-beaver text-sm font-sans mb-6">{project.shortSummary}</p>
              
              <div className="flex gap-2 flex-wrap mb-6">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-[10px] uppercase tracking-widest bg-timberwolf/30 text-beaver border border-timberwolf px-2 py-1 rounded-sm">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4 pt-4 border-t border-timberwolf/40">
                <a href={project.githubLink} className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-vandyke hover:text-beaver transition-colors">
                  <GithubIcon size={14} /> Code
                </a>
                <a href={project.liveLink} className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-vandyke hover:text-beaver transition-colors">
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- DESKTOP LAYOUT (Balatro Fan) ---------------- */}
      <div className="hidden md:flex relative w-full h-[100dvh] overflow-hidden items-center justify-center pt-10">
         
         {/* Background Title */}
         <div className="absolute top-24 right-12 lg:right-24 pointer-events-none z-0 text-right">
            <h1 className="font-display-lg text-5xl lg:text-7xl text-vandyke mb-4 tracking-tight">Project Archives</h1>
            <p className="font-label-caps text-xs lg:text-sm text-beaver uppercase tracking-widest">Select a file to inspect</p>
         </div>

         {/* State 1: The Fan Container */}
         <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex items-center justify-center w-full h-[450px]">
           {projects.map((project, index) => {
             const fanTransform = calculateFanTransform(index);
             const isActive = activeProject === project.id;
             const isAnyActive = activeProject !== null;

             if (isActive) return null; // Rendered in the center expanding container

             return (
               <motion.div
                 key={project.id}
                 layoutId={`card-container-${project.id}`}
                 onClick={() => setActiveProject(project.id)}
                 initial={false}
                 animate={{
                   rotate: isAnyActive ? 0 : fanTransform.rotate,
                   y: isAnyActive ? 400 : fanTransform.y, // Drop down offscreen if another is active
                   x: isAnyActive ? fanTransform.x : fanTransform.x,
                   opacity: isAnyActive ? 0 : 1,
                   scale: 1,
                   zIndex: index
                 }}
                 whileHover={!isAnyActive ? {
                   rotate: 0,
                   y: -30,
                   scale: 1.05,
                   zIndex: 20,
                   transition: { duration: 0.2 }
                 } : undefined}
                 transition={{ type: "spring", stiffness: 260, damping: 25 }}
                 className="absolute w-64 h-80 bg-white border border-timberwolf shadow-[0_10px_30px_rgba(76,57,45,0.08)] cursor-pointer flex flex-col rounded-md origin-bottom overflow-hidden group"
               >
                 <motion.div layoutId={`card-image-${project.id}`} className="w-full h-[40%] relative border-b border-timberwolf/40 shrink-0">
                    <Image src={project.images[0]} alt={project.title} fill className="object-cover" />
                 </motion.div>

                 <div className="p-5 flex flex-col flex-grow bg-seashell/20 group-hover:bg-white transition-colors">
                   <motion.div layoutId={`card-header-${project.id}`}>
                     <div className="text-[10px] font-mono text-beaver mb-2 uppercase">{project.year}</div>
                     <h2 className="text-xl font-display-lg text-vandyke mb-2 leading-tight">{project.title}</h2>
                   </motion.div>
                 </div>
               </motion.div>
             );
           })}
         </div>

         {/* State 2 & 3: Active Centered Card & Dossier Detail */}
         <AnimatePresence>
           {activeProject && (() => {
             const project = projects.find(p => p.id === activeProject)!;
             return (
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="absolute inset-0 z-50 flex items-center justify-center bg-seashell/70 backdrop-blur-md px-8"
               >
                 {/* Click outside to close */}
                 <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveProject(null)} />

                 <motion.div
                   layoutId={`card-container-${project.id}`}
                   className="relative w-full max-w-[900px] min-h-[500px] bg-white border border-timberwolf/60 shadow-[0_30px_60px_rgba(76,57,45,0.2)] rounded-lg overflow-hidden z-10 flex flex-col"
                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
                 >
                   <button 
                     onClick={() => setActiveProject(null)}
                     className="absolute top-4 right-4 z-20 p-2 text-beaver hover:text-vandyke bg-seashell/50 hover:bg-timberwolf/30 rounded-full transition-colors shadow-sm border border-timberwolf/30"
                   >
                     <X size={20} />
                   </button>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 h-full flex-grow">
                     
                     {/* Left Column (Identity & Visuals) */}
                     <div className="flex flex-col h-full justify-between">
                       <motion.div layoutId={`card-header-${project.id}`} className="mb-6">
                         <div className="text-xs font-mono text-beaver mb-3 uppercase">{project.year}</div>
                         <h2 className="text-3xl font-display-lg text-vandyke mb-3 leading-tight font-bold">{project.title}</h2>
                         <p className="text-beaver text-base font-sans">{project.shortSummary}</p>
                       </motion.div>

                       <motion.div layoutId={`card-image-${project.id}`} className="mt-auto shadow-sm">
                          <ImageCarousel images={project.images} />
                       </motion.div>
                     </div>

                     {/* Right Column (Technical Specs) */}
                     <motion.div 
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.15, duration: 0.4 }}
                       className="flex flex-col h-full"
                     >
                       <div className="w-full h-px bg-timberwolf/40 mb-6 md:hidden" />
                       
                       <motion.div layout className="mb-8 flex-grow flex flex-col items-start">
                         <motion.p layout className={`text-vandyke font-sans text-sm leading-relaxed ${!isDescriptionExpanded ? 'line-clamp-4' : ''}`}>
                           {project.fullDescription}
                         </motion.p>
                         <button
                           onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                           className="text-sm font-medium text-beaver opacity-70 hover:opacity-100 transition-opacity mt-2"
                         >
                           {isDescriptionExpanded ? 'Show less' : 'Read more'}
                         </button>
                       </motion.div>
                       
                       <div className="mb-8">
                         <h4 className="text-[10px] font-mono text-beaver uppercase tracking-widest mb-3">Technologies</h4>
                         <div className="flex gap-2 flex-wrap">
                           {project.techStack.map(tech => (
                             <span key={tech} className="text-xs font-mono tracking-wide bg-seashell border border-timberwolf text-beaver px-3 py-1.5 rounded-sm">{tech}</span>
                           ))}
                         </div>
                       </div>

                       <div className="flex gap-6 pt-6 border-t border-timberwolf/40">
                         <a href={project.githubLink} className="flex items-center gap-2 text-sm font-label-caps uppercase tracking-widest text-vandyke hover:text-beaver transition-colors">
                           <GithubIcon size={16} /> Repository
                         </a>
                         <a href={project.liveLink} className="flex items-center gap-2 text-sm font-label-caps uppercase tracking-widest text-vandyke hover:text-beaver transition-colors">
                           <ExternalLink size={16} /> Live Demo
                         </a>
                       </div>
                     </motion.div>
                     
                   </div>
                 </motion.div>
               </motion.div>
             );
           })()}
         </AnimatePresence>
      </div>
    </div>
  );
}
