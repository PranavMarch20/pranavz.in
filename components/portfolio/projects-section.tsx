import { projects } from "@/data/projects";

import { ProjectItem } from "./project-item";

export function ProjectsSection() {
  return (
    <ul className="space-y-7">
      {projects.map((project) => (
        <ProjectItem key={project.name} project={project} />
      ))}
    </ul>
  );
}
