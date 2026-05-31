import { Metadata } from "next";
import { ProjectsDossier } from "@/components/ui/projects-dossier";

export const metadata: Metadata = {
  title: "Projects | Pranata",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsDossier />
    </main>
  );
}
