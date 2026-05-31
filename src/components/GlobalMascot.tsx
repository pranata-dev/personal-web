"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export function GlobalMascot() {
  const pathname = usePathname();
  const router = useRouter();
  // Assume hero state natively on the homepage until told otherwise
  const [isHero, setIsHero] = useState(pathname === "/");

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
      setIsHero(!customEvent.detail.isPastHero);
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
