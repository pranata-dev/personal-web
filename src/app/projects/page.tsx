import { Metadata } from "next";
import { ProjectsDossier } from "@/components/ui/projects-dossier";
import { getProjects } from "@/lib/notion";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Projects | Pranata",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main>
      <ProjectsDossier projects={projects} />
    </main>
  );
}
