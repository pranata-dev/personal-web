import { Metadata } from "next";
import { SOCIAL_LINKS } from "@/lib/data";
import { SocialCard } from "@/components/ui/social-card";
import { FadeInScroll } from "@/components/ui/fade-in-scroll";

export const metadata: Metadata = {
  title: "Contact | Pranata",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-surface-container-low">
      {/* Subtle Background Pattern Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <FadeInScroll className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Feel free to reach out for collaborations, inquiries, or just to say hello.
          </p>
        </div>

        <div className="flex justify-center w-full">
          <SocialCard socialLinks={SOCIAL_LINKS} />
        </div>
      </FadeInScroll>
    </main>
  );
}
