"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { FadeInScroll } from "@/components/ui/fade-in-scroll";

const volumeSteps = [
  { value: 30, label: "Brief cut" },
  { value: 50, label: "Standard cut" },
  { value: 75, label: "Extended cut" },
  { value: 150, label: "Director's cut" },
];

const BIO_TEXTS: Record<number, string> = {
  30: "Hi, I'm Dzulfiqar Yudha Pranata, often called Nata. I'm a physics student exploring technology, cinema, music, and writing. This space is a personal archive of ideas shaping my perspective.",
  50: "Hi, I'm Dzulfiqar Yudha Pranata, often called Nata. I'm a physics student exploring technology, cinema, music, and writing. This space serves as an archive of projects and ideas shaping my perspective. Through building and documenting, I collect experiences that inspire both my creative and technical work.",
  75: "Hi, I'm Dzulfiqar Yudha Pranata, often called Nata. I'm a physics student exploring technology, cinema, music, and writing. This space serves as an archive of projects and ideas shaping my perspective. Through building and documenting, I collect experiences that inspire my creative and technical work. Here you'll find a mix of experiments, personal reflections, and things I've encountered along the way, each representing a part of an ongoing journey.",
  150: "Hi, I'm Dzulfiqar Yudha Pranata, often called Nata. I'm a physics student exploring technology, cinema, music, and writing. This space serves as an archive of projects and ideas shaping my perspective. Through building and documenting, I collect experiences that inspire my creative and technical work. Here you'll find a mix of experiments, personal reflections, and things I've encountered along the way, each representing a part of an ongoing journey.\n\nI’m particularly interested in the intersection of science, technology, and storytelling, and how different disciplines influence how we understand the world. Whether I'm working on a project, writing about a film, exploring an idea, or documenting something worth remembering, I see each experience as part of a larger process of discovery. This website is less about presenting finished answers and more about keeping track of the questions, curiosities, and passions that evolve over time."
};

export default function AboutPage() {
  const [selectedWordCount, setSelectedWordCount] = useState<number>(30);

  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse movement to subtle rotation
  const rotateX = useTransform(y, [-300, 300], [8, -8]);
  const rotateY = useTransform(x, [-300, 300], [-8, 8]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <main className="min-h-screen bg-seashell pt-32 pb-24 px-6 md:px-12 flex items-center justify-center relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(var(--color-timberwolf) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px"
        }}
      />

      <FadeInScroll>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">

          {/* Left Column: 3D Interactive Landscape Artifact */}
          <div className="flex flex-col items-center justify-center w-full">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-lg cursor-default"
              style={{ perspective: 1200 }}
            >
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-full rounded-xl overflow-hidden shadow-[0_15px_45px_rgb(0,0,0,0.08)]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Image
                  src="/about-card.png"
                  alt="Artifact ID: D.Y. Pranata"
                  width={800}
                  height={500}
                  className="w-full h-auto object-contain rounded-sm"
                  priority
                />
              </motion.div>
            </div>
            <p className="mt-8 text-xs font-mono text-beaver opacity-90 tracking-widest uppercase text-center">
              Artifact ID: D.Y. Pranata, Jakarta, Issued 2021
            </p>
          </div>

          {/* Right Column: The Dossier & Stepped Volume Line */}
          <div className="w-full max-w-lg flex flex-col justify-center">

            <div className="mb-14">
              <h1 className="font-display-lg text-4xl md:text-5xl text-vandyke mb-4 tracking-tight">
                Character Selection
              </h1>
              <p className="font-label-caps text-xs text-beaver uppercase tracking-widest">
                Runtime
              </p>
            </div>

            {/* Volume Line UI */}
            <div className="relative w-full h-[2px] bg-timberwolf mb-20 mt-4 flex items-center justify-between px-1">
              {volumeSteps.map((step) => {
                const isActive = selectedWordCount === step.value;
                return (
                  <div
                    key={step.value}
                    className="relative flex flex-col items-center justify-center cursor-pointer group"
                    onClick={() => setSelectedWordCount(step.value)}
                  >
                    <div
                      className={`absolute w-3.5 h-3.5 rounded-full transition-all duration-300 ${isActive ? "bg-vandyke scale-150" : "bg-timberwolf group-hover:bg-khaki"
                        }`}
                    />
                    <span className={`absolute top-6 text-xs font-sans transition-colors ${isActive ? "text-vandyke font-bold" : "text-beaver font-medium"}`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Bio Content */}
            <div className="relative min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedWordCount}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-vandyke font-sans text-base md:text-lg leading-relaxed whitespace-pre-wrap"
                >
                  {BIO_TEXTS[selectedWordCount]}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </FadeInScroll>
    </main>
  );
}
