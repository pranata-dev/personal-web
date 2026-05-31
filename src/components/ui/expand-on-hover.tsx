/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface ExperienceData {
  image: string;
  title: string;
  role: string;
  duration: string;
  description: string;
}

const ExpandOnHover = ({ data }: { data: ExperienceData[] }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div className="flex gap-2 md:gap-4 w-full h-[400px] md:h-[500px] max-w-6xl mx-auto">
      {data.map((exp, index) => {
        const isExpanded = expandedIndex === index;
        return (
          <div
            key={index}
            className={cn(
              "relative rounded-2xl overflow-hidden cursor-pointer border border-timberwolf transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
              isExpanded ? "w-[70%] md:w-[60%]" : "w-[15%] md:w-[20%]"
            )}
            onMouseEnter={() => setExpandedIndex(index)}
          >
            {/* Background Image */}
            <img
              src={exp.image}
              alt={exp.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Gradient overlay strictly for text contrast - fades in only when expanded */}
            <div 
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-seashell/95 via-seashell/80 to-transparent transition-opacity duration-700",
                isExpanded ? "opacity-100" : "opacity-0"
              )} 
            />

            {/* Text Overlay */}
            <div 
              className={cn(
                "absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col justify-end text-vandyke transition-all duration-700",
                isExpanded ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-8 pointer-events-none"
              )}
            >
              <h3 className="font-display-lg text-xl md:text-3xl tracking-tight mb-2">
                {exp.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-label-caps text-beaver mb-4 opacity-90">
                <span className="uppercase tracking-widest">{exp.role}</span>
                <span className="w-1 h-1 rounded-full bg-timberwolf"></span>
                <span className="uppercase tracking-widest">{exp.duration}</span>
              </div>
              <p className="font-body-md text-vandyke/80 leading-relaxed max-w-2xl opacity-90 text-sm md:text-base hidden md:block">
                {exp.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpandOnHover;
