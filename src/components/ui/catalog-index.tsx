"use client";

import { FadeInScroll } from "@/components/ui/fade-in-scroll";
import { ExperienceList } from "@/components/ui/experience-list";

import { Experience } from "@/lib/notion";

export function CatalogIndex({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <FadeInScroll>
        <div className="mb-16">
          <h1 className="font-display-lg text-4xl md:text-5xl text-vandyke mb-4 tracking-tight">
            Catalog Index
          </h1>
          <p className="font-label-caps text-xs text-beaver uppercase tracking-widest">
            Professional & Academic Archives
          </p>
        </div>

        <ExperienceList experiences={experiences} />
      </FadeInScroll>
    </div>
  );
}
