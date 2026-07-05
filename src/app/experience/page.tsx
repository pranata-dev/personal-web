import { Metadata } from "next";
import { CatalogIndex } from "@/components/ui/catalog-index";
import { getExperiences } from "@/lib/notion";

export const metadata: Metadata = {
  title: "Experience | Pranata",
};

export default async function ExperiencePage() {
  const experiences = await getExperiences();

  return (
    <main className="min-h-screen bg-seashell pt-24 pb-24">
      <CatalogIndex experiences={experiences} />
    </main>
  );
}
