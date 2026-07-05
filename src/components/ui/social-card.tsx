/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

const GithubIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || 2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || 2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MediumIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || 2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="6" cy="12" rx="6" ry="6" />
    <ellipse cx="17" cy="12" rx="3" ry="6" />
    <ellipse cx="22" cy="12" rx="1" ry="6" />
  </svg>
);

// Social links are passed via props
export function SocialCard({ socialLinks }: { socialLinks: any[] }) {
  const getIcon = (icon: any) => {
    if (icon === "LinkedinIcon") return LinkedinIcon;
    if (icon === "GithubIcon") return GithubIcon;
    if (icon === "MediumIcon") return MediumIcon;
    if (icon === "Mail" || icon === Mail) return Mail;
    return Mail; // Default fallback
  };

  return (
    <motion.div
      className="relative w-64 h-64 rounded-3xl bg-gradient-to-br from-white to-seashell border border-timberwolf/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm flex items-center justify-center cursor-pointer group hover:border-beaver transition-all duration-500"
      whileHover="hover"
      initial="initial"
    >
      {/* Center Text that fades out on hover */}
      <motion.h3 
        className="font-display-lg text-2xl tracking-tight text-vandyke absolute z-10"
        variants={{
          initial: { opacity: 1, scale: 1 },
          hover: { opacity: 0, scale: 0.8 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        Let&apos;s Connect
      </motion.h3>

      {/* Social Boxes that spring out on hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {socialLinks.map((social, index) => {
          const Icon = getIcon(social.icon);
          return (
          <motion.div
            key={social.name}
            className="absolute pointer-events-auto"
            variants={{
              initial: { x: 0, y: 0, opacity: 0, scale: 0.5 },
              hover: { x: social.position.x, y: social.position.y, opacity: 1, scale: 1 },
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.05,
            }}
          >
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-white to-seashell border border-timberwolf shadow-[0_4px_20px_rgb(0,0,0,0.04)] backdrop-blur-sm rounded-2xl text-vandyke/70 hover:text-vandyke hover:scale-110 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-beaver transition-all duration-500"
              aria-label={social.name}
            >
              <Icon strokeWidth={1.5} size={24} />
            </Link>
          </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
