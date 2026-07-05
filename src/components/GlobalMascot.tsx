"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export function GlobalMascot() {
  const pathname = usePathname();
  const router = useRouter();
  // Assume hero state natively on the homepage until told otherwise
  const [isHero, setIsHero] = useState(pathname === "/");

  useEffect(() => {
    const checkInitialState = () => {
      if (pathname === '/') {
        // Force hero state if on homepage and at the very top
        if (window.scrollY < 50) {
          setIsHero(true);
        }
      } else {
        // If not on homepage, always keep it in the corner
        setIsHero(false);
      }
    };

    // Run immediately
    checkInitialState();

    // Also run after a slight delay to ensure it catches the state after the preloader lifts
    const timeoutId = setTimeout(checkInitialState, 500);

    const handleNativeScroll = () => {
      if (window.scrollY === 0 && pathname === '/') {
        setIsHero(true);
      }
    };
    
    window.addEventListener('scroll', handleNativeScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleNativeScroll);
    };
  }, [pathname]);

  useEffect(() => {
    // Non-home routes are automatically in corner state
    if (pathname !== "/") {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsHero(false);
      return;
    }

    const handleVisibilityChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ isPastHero: boolean }>;
      // Absolute failsafe: If the user is at the very top, force hero state.
      if (window.scrollY === 0) {
        setIsHero(true);
      } else {
        setIsHero(!customEvent.detail.isPastHero);
      }
    };

    // Failsafe: manual check on load/scroll if at the absolute top
    const handleScrollFailsafe = () => {
      if (window.scrollY === 0) setIsHero(true);
    };

    window.addEventListener("hero-visibility-change", handleVisibilityChange);
    window.addEventListener("scroll", handleScrollFailsafe);

    // Run failsafe once immediately
    handleScrollFailsafe();

    return () => {
      window.removeEventListener("hero-visibility-change", handleVisibilityChange);
      window.removeEventListener("scroll", handleScrollFailsafe);
    };
  }, [pathname]);

  return (
    <video
      src="/astrofix.webm"
      aria-label="Animated mascot"
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      controlsList="nodownload noplaybackrate"
      data-state={isHero ? "hero" : "corner"}
      className="global-mascot"
      onClick={(e) => {
        e.preventDefault();
        if (pathname !== "/") {
          router.push("/");
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      Your browser does not support the video tag.
    </video>
  );
}
