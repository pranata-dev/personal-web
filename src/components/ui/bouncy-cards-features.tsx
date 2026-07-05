/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Categories data is passed via props
const BounceCard = ({ category, onClick }: { category: any; onClick: () => void }) => {

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 0.95, rotate: -1 }}
      className={cn(
        "cursor-pointer rounded-3xl p-6 md:p-8 flex flex-col justify-between border shadow-sm transition-colors",
        category.color,
        category.size === "large" ? "md:col-span-2" : "md:col-span-1"
      )}
    >
      {/* Feature Demo Block inside Card */}
      <div className="relative overflow-hidden w-full h-32 md:h-40 rounded-2xl bg-white/50 border border-timberwolf/40 flex items-center justify-center mb-6 shadow-inner">
        {category.imageSrc && (
          <Image
            src={category.imageSrc}
            alt={category.title}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="flex justify-between items-end">
        <div>
          <h3 className="font-display-lg text-xl md:text-2xl tracking-tight text-vandyke mb-2">
            {category.title}
          </h3>
          <span className="text-xs font-label-caps tracking-widest uppercase text-beaver">
            {category.articles.length} Articles
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Modal = ({ category, onClose }: { category: any; onClose: () => void }) => {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-seashell/80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative w-full max-w-2xl border rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]",
          category.color
        )}
      >
        <div className="p-6 md:p-10 flex-shrink-0 border-b border-white/20 dark:border-black/10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 bg-white/50 rounded-xl shadow-sm border border-timberwolf/40 overflow-hidden">
                {category.imageSrc && (
                  <Image
                    src={category.imageSrc}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <h2 className="font-display-lg text-2xl md:text-3xl tracking-tight text-vandyke">{category.title}</h2>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 bg-white/50 hover:bg-white/80 rounded-full transition-colors border border-timberwolf/40 shadow-sm"
            >
              <X className="w-5 h-5 text-vandyke" />
            </button>
          </div>
        </div>
        
        <div className="p-6 md:p-10 overflow-y-auto space-y-3">
          {category.articles.map((article: any, i: number) => {
            const isExpanded = expandedArticle === i;
            const slug = article.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setExpandedArticle(isExpanded ? null : i)}
                className={cn(
                  "bg-white/70 rounded-xl border transition-colors shadow-sm cursor-pointer overflow-hidden group",
                  isExpanded 
                    ? "border-timberwolf/50 bg-white" 
                    : "border-timberwolf/20 hover:bg-white"
                )}
              >
                <div className="p-4 md:p-5 flex items-center gap-4">
                  <div className={cn(
                    "w-2 h-2 rounded-full transition-colors flex-shrink-0",
                    isExpanded ? "bg-vandyke" : "bg-beaver/30 group-hover:bg-beaver/60"
                  )} />
                  <span className={cn(
                    "font-body-lg font-semibold text-sm md:text-base leading-relaxed transition-colors",
                    isExpanded ? "text-vandyke" : "text-vandyke/80"
                  )}>
                    {article.title}
                  </span>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    >
                      <div className="px-4 md:px-5 pb-5 pt-1 ml-6 border-t border-timberwolf/40">
                        <p className="font-body-md text-beaver text-sm md:text-base leading-relaxed mb-5 mt-3">
                          {article.summary}
                        </p>
                        <Link href={`/blog/${slug}`} className="text-vandyke font-label-caps text-xs uppercase tracking-widest hover:text-beaver transition-colors flex items-center gap-2">
                          Read full post <span className="text-lg leading-none">&rarr;</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export function BouncyCardsFeatures({ categories }: { categories: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
        {categories.map((category) => (
          <BounceCard 
            key={category.id} 
            category={category} 
            onClick={() => setSelectedCategory(category)} 
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <Modal category={selectedCategory} onClose={() => setSelectedCategory(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
