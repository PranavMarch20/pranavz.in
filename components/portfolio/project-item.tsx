import { MoveRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/data/projects";

type ProjectItemProps = {
  project: Project;
};

export function ProjectItem({ project }: ProjectItemProps) {
  const { Icon } = project;

  return (
    <li className="flex gap-4">
      <div
        className={`flex size-9 mt-[5px] shrink-0 items-center justify-center rounded-lg shadow-xl mt-1 text-white ${project.accentClassName}`}
      >
        <Icon aria-hidden="true" className="size-5 stroke-[2.2]" />
      </div>

      <div className="min-w-0 ">
        <h3 className="text-[15px] font-medium leading-[24.375px] text-foreground">
          <Link
          title="View on Github"
            href={project.github}
            className="group inline-flex flex-wrap items-center gap-1 text-[15px] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            <span className="inline-block leading-5 border-b-2 border-transparent border-dotted group-hover:border-stone-400 transition-colors">{project.name}</span>
            <ExternalLink
              aria-hidden="true"
              className="size-[14px] text-muted-foreground mb-0.5"
            />
          </Link>
        </h3>
        <p className="mt-1 text-[14px] font-normal leading-[22.75px] text-muted-foreground">
          {project.description}
        </p>
        <Link
          title="More about project"
          href={project.href}
          className=" group mt-2 inline-flex items-center gap-1 text-[14px] font-normal leading-[22.75px] text-link transition-colors hover:text-link-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
        >
          <span className="font-normal inline-block leading-4.5 border-b-2 border-dotted border-transparent group-hover:border-link/80 transition-colors">View details</span>
          <span> <MoveRight className="size-4 stroke-[1.2]"/> </span>
        </Link>
      </div>
    </li>
  );
}
