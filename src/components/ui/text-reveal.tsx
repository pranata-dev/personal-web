/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FC, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const { scrollY } = useScroll();
  // Reveal over the first 400px of scrolling
  const scrollYProgress = useTransform(scrollY, [0, 400], [0, 1]);
  const words = text.split(" ");

  return (
    <p
      className={cn(
        "flex flex-wrap font-body-lg text-body-lg text-on-secondary-container",
        className
      )}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-1.5 mb-1.5">
      <span className="absolute opacity-20">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="text-on-surface"
      >
        {children}
      </motion.span>
    </span>
  );
};
