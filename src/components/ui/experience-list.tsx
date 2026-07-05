"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Experience } from "@/lib/notion";

export function ExperienceList({ experiences }: { experiences: Experience[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col border-t border-timberwolf w-full">
      {experiences.map((item, index) => {
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
  );
}
