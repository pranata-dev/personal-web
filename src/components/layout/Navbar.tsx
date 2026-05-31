"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-seashell/80 backdrop-blur-md transition-all",
        scrolled && "shadow-ambient"
      )}
    >
      <div className="flex items-center justify-center w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6">
        <div className="hidden md:flex items-center gap-20 font-body-md text-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "transition-colors duration-300 border-b-2 border-current pb-1",
                  isActive
                    ? "text-vandyke font-semibold"
                    : "text-vandyke/70 hover:text-beaver"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={cn(
              "transition-colors duration-300 border-b-2 border-current pb-1",
              pathname === "/contact"
                ? "text-vandyke font-regular"
                : "text-vandyke/90 font-regular hover:text-beaver"
            )}
          >
            Contact Me
          </Link>
        </div>
        <button className="md:hidden text-vandyke ml-auto">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
