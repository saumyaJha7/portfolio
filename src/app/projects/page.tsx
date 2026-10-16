import type { Metadata } from "next";
import Projects from "@/components/projects";

export const metadata: Metadata = {
  title: "Projects: Saumya Jha",
  description:
    "Selected projects built around reliable backend systems and clean product detail.",
};

export default function ProjectsPage() {
  return <Projects />;
}
