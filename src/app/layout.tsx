import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalMascot } from "@/components/GlobalMascot";
import { Preloader } from "@/components/ui/preloader";

export const metadata: Metadata = {
  title: "Pranata | Building, Writing, Exploring",
  description: "A personal archive of projects, essays, films, music, and curiosities collected over time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth`}
    >
      <body className="font-sans font-body-md text-vandyke selection:bg-beaver selection:text-seashell bg-seashell">
        <Preloader />
        <GlobalMascot />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
