import { Metadata } from "next";
import { CatalogIndex } from "@/components/ui/catalog-index";

export const metadata: Metadata = {
  title: "Experience | Pranata",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-seashell pt-24 pb-24">
      <CatalogIndex />
    </main>
  );
}
