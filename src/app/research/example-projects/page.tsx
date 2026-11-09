import type { Metadata } from "next";
import ProjectCard from "../../components/projects/ProjectCard";
import { exampleProjects } from "@/data/projects";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Examples of IUCRC-funded Projects",
  description:
    "Examples of research projects funded through the BRAIN Center.",
  alternates: { canonical: "/research/example-projects" },
};

export default function ExampleProjectsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Research"
        title="Examples of IUCRC-funded Projects"
        description="Examples of projects that contribute to the development of neurotechnologies and regulatory science through the BRAIN Center."
      />
      <section className="shell py-12 md:py-16">
        <div className="space-y-6">
          {exampleProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
