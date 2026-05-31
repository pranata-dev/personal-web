"use client";

import { useEffect, useRef } from "react";

export function HeroScrollTrigger() {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // The user is "past the hero" if the top of the next section 
        // is intersecting the viewport OR has scrolled entirely above it.
        const isPastHero = entry.isIntersecting || entry.boundingClientRect.top <= 0;
        
        window.dispatchEvent(
          new CustomEvent("hero-visibility-change", { detail: { isPastHero } })
        );
      },
      { 
        root: null, 
        rootMargin: "0px", 
        threshold: 0 
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // An invisible 1px line that tracks intersection
  return <div ref={triggerRef} className="w-full h-[1px] opacity-0 pointer-events-none" />;
}
