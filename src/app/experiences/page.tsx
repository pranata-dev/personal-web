import { Metadata } from "next";
import { EXPERIENCES_DATA } from "@/lib/data";
import ExpandOnHover from "@/components/ui/expand-on-hover";
import { FadeInScroll } from "@/components/ui/fade-in-scroll";

export const metadata: Metadata = {
  title: "Experience | Pranata",
};

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 flex flex-col items-center bg-surface-container-low border-t border-outline-variant/20">
      <FadeInScroll className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="text-center mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">
            Experience
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            A comprehensive look at my professional roles, academic involvement, and research contributions.
          </p>
        </div>

        {/* Providing enough min-height for the expanded text container */}
        <div className="w-full min-h-[600px] flex items-center justify-center">
          <ExpandOnHover data={EXPERIENCES_DATA} />
        </div>
      </FadeInScroll>
    </main>
  );
}
