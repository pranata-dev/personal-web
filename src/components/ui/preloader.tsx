"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const AnimatedText = ({ text }: { text: string }) => {
  const letters = text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.03, staggerDirection: -1 },
    },
  };

  const child: Variants = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: { ease: [0.16, 1, 0.3, 1], duration: 0.8 },
    },
    exit: {
      y: "-100%",
      transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute flex text-vandyke tracking-[0.2em] lowercase font-sans text-sm md:text-base"
    >
      {letters.map((letter, index) => (
        <span key={index} className="inline-block overflow-hidden relative">
          <motion.span variants={child} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [textState, setTextState] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);

    // 2. Lock scroll immediately
    document.body.style.overflow = "hidden";

    // 3. Animation Sequence Timers
    // 0.0s -> 1.0s: "please wait." (initial state)

    // Switch to "please stay." smoothly
    const textTimer = setTimeout(() => {
      setTextState(1);
    }, 3500);

    // Fade out entire preloader
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(loadingTimer);
      // Failsafe unlock on unmount
      document.body.style.overflow = "unset";
    };
  }, []);

  // Unlock scroll smoothly exactly when the exit animation completes
  const handleExitComplete = () => {
    document.body.style.overflow = "unset";
  };

  // Avoid hydration mismatch by rendering nothing until mounted on client
  if (!isMounted) return null;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isLoading && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-seashell"
        >
          <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              {textState === 0 && <AnimatedText key="wait" text="please wait." />}
              {textState === 1 && <AnimatedText key="stay" text="please stay." />}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
