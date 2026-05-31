"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInScroll } from "@/components/ui/fade-in-scroll";

const EXPERIENCE_DATA = [
  {
    date: "2023 — PRES.",
    role: "Co-Founder & Technical Lead",
    organization: "Lumora Labs",
    description: "Co-founded an AI automation agency focusing on optimizing operations for businesses. Leading the development of scalable automated communication infrastructure, integrating large language models with enterprise APIs, and automating complex workflows (e.g., Docker orchestration via n8n). Also developing scalable training pipelines for small language models and researching efficient fine-tuning techniques like QLoRA."
  },
  {
    date: "2023 — PRES.",
    role: "Vice President",
    organization: "HIMAFI (Physics Student Association)",
    description: "Oversaw internal and external affairs for the Physics Student Association, managing operations for 40+ staff across two departments. Focused on standardizing operational procedures, automating administrative tasks, and bridging communication between the student body and university department leadership."
  },
  {
    date: "2021 — 2023",
    role: "Laboratory Assistant & Private Tutor",
    organization: "University Science Dept. & Self-Employed",
    description: "Laboratory Assistant for Basic Electronics, managing equipment and guiding undergraduate students through electronics experiments. Concurrently working as a private tutor for Physics and Mathematical Physics, simplifying complex scientific concepts into intuitive explanations. Previously served as Computational Physics Assistant, simulating multi-body gravitational systems and visualizing high-dimensional data using Python."
  }
];

export function CatalogIndex() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <FadeInScroll>
        <div className="mb-16">
          <h1 className="font-display-lg text-4xl md:text-5xl text-vandyke mb-4 tracking-tight">
            Catalog Index
          </h1>
          <p className="font-label-caps text-xs text-beaver uppercase tracking-widest">
            Professional & Academic Archives
          </p>
        </div>

        <div className="flex flex-col border-t border-timberwolf">
          {EXPERIENCE_DATA.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div key={index} className="border-b border-timberwolf overflow-hidden">
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className={`w-full text-left transition-colors duration-300 ${
                    isExpanded ? "bg-white/50" : "bg-khaki/10 hover:bg-timberwolf/40"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr] gap-4 p-6 md:p-8 items-center">
                    <div className="font-mono text-xs text-beaver uppercase tracking-widest font-semibold self-start md:self-center">
                      {item.date}
                    </div>
                    <div>
                      <h2 className="font-sans text-xl text-vandyke font-bold mb-1">
                        {item.role}
                      </h2>
                      <h3 className="font-sans text-sm text-beaver">
                        {item.organization}
                      </h3>
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="bg-white/50"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr] gap-4 px-6 md:px-8 pb-8 pt-2">
                        {/* Empty left column to align with right */}
                        <div className="hidden md:block"></div>
                        <div className="text-vandyke font-sans text-base leading-relaxed">
                          {item.description}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </FadeInScroll>
    </div>
  );
}
