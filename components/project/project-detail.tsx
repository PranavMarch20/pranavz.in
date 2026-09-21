import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Divider } from "@/components/common/divider";
import { Footer } from "@/components/common/footer";
import { SectionLabel } from "@/components/home/section-label";
import type { Project } from "@/data/projects";

type ProjectDetailProps = {
  project: Project;
};

const accentTextClasses: Record<string, string> = {
  "bg-blue-500": "text-blue-500",
  "bg-orange-500": "text-orange-500",
  "bg-teal-500": "text-teal-500",
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const Icon = project.Icon;

  return (
    <div className="px-5 sm:px-6">
        <header className="pt-7 sm:pt-16">
          <Link
            href="/"
            className="group inline-flex items-center gap-1 text-[14px] font-medium text-nav-link"
          >
            <ArrowLeft aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span className="inline-flex leading-4.5 border-b-2 border-transparent border-dotted group-hover:border-stone-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">Back</span>
          </Link>

          <div className="mt-8 flex items-start gap-4">
            <div className={`mt-1 flex size-9 shrink-0 items-center justify-center rounded-lg text-white shadow-xl ${project.accentClassName}`}>
              <Icon aria-hidden="true" className="size-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl font-semibold leading-8 text-foreground">
                {project.name}
              </h1>
              <p className="text-[15px] font-medium leading-[24.375px] text-stone-400">
                {project.subtitle}
              </p>
            </div>
          </div>

          <a
            title="View on Github"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-1 text-[14px] font-medium text-nav-link"
          >
            <span className="leading-4.5 border-b-2 border-transparent border-dotted group-hover:border-stone-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">GitHub</span>
            <ExternalLink aria-hidden="true" className="size-3.5 mb-0.5" />
          </a>
        </header>

        <Divider className="mt-5"/>

        <section aria-labelledby="about">
          <SectionLabel id="about">ABOUT</SectionLabel>
          <p className="mt-5 text-[15px] font-medium leading-[24.375px] text-half-muted-foreground">
            {project.description}
          </p>
        </section>

        <Divider />

        <section aria-labelledby="key-highlights">
          <SectionLabel id="key-highlights">KEY HIGHLIGHTS</SectionLabel>
          <ul className="mt-5 space-y-3 text-[15px] font-medium leading-[24.375px] text-half-muted-foreground">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5">
                <CheckCircle2
                  aria-hidden="true"
                  className={`mt-1 size-4 shrink-0 ${accentTextClasses[project.accentClassName]}`}
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        <Divider />

        <section aria-labelledby="tech-stack">
          <SectionLabel id="tech-stack">TECH STACK</SectionLabel>
          <dl className="mt-5 space-y-4 text-[14px] leading-[22.75px]">
            {project.techStack.map(({ category, technologies }) => (
              <div key={category} className="grid gap-1 sm:grid-cols-[105px_1fr] sm:gap-5">
                <dt className="font-medium text-foreground">{category}</dt>
                <dd className="text-muted-foreground">{technologies}</dd>
              </div>
            ))}
          </dl>
        </section>

    </div>
  );
}
