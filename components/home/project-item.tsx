import { MoveRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { Tooltip } from "../common/tooltip";

type ProjectItemProps = {
  project: Project;
};

export function ProjectItem({ project }: ProjectItemProps) {
  const { Icon } = project;

  return (
    <li className="flex gap-4">
      <div
        className={`flex size-9 mt-[5px] shrink-0 items-center justify-center rounded-lg shadow-xl mt-1 text-white ${project.accentClassName} ring-2 ring-white/30 ring-offset-2 ring-offset-[${project.accentClassName}]/90 ring-inset`}
      >
        <Icon aria-hidden="true" className="size-5 stroke-[2.2]" />
      </div>

      <div className="min-w-0 ">
        <h3 className="text-[15px] font-medium leading-[24.375px] text-foreground">
          <div className="flex justify-between flex-wrap">
            <Link
              href={project.github}
              className="group inline-flex flex-wrap items-center gap-1 text-[15px] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
              target="_blank"
              >
              <Tooltip message={"Got to github"}>
                <span className="inline-flex items-center gap-1 pt-0.5 leading-5">
                  {project.name}
                  <ExternalLink
                    aria-hidden="true"
                    className="size-[14px] text-muted-foreground mb-0.5"
                    />
                </span>
              </Tooltip>
            </Link>

            <Link
              href={project.href}
              className="group mt-1 inline-flex items-center justify-end gap-1 text-[14px] font-normal leading-[22.75px] text-link transition-colors hover:text-link-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              <span className="font-normal inline-block leading-4.5 border-b-2 border-dotted border-transparent group-hover:border-link/80 transition-colors">View details</span>
              <span> <MoveRight className="size-4 stroke-[1.2] transition-transform duration-200 group-hover:translate-x-0.5"/> </span>
            </Link>
          </div>
        </h3>
        <p className="mt-1 text-[14px] font-normal leading-[22.75px] text-muted-foreground">
          {project.description}
        </p>
        
      </div>
    </li>
  );
}
