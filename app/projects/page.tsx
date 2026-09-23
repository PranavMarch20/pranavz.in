import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Link from "next/link";

import { Divider } from "@/components/common/divider";
import { Footer } from "@/components/common/footer";
import { SectionLabel } from "@/components/home/section-label";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className=" px-5 sm:px-6 start">
      <div className="mx-auto w-full max-w-[670px]">
        <header className="pt-12 sm:pt-14">
          {/* <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-1 text-[14px] font-medium text-nav-link"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />

            <span className="leading-4.5 border-b-2 border-transparent border-dotted transition-colors group-hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">
              Back
            </span>
          </Link> */}

          <h1 className="text-2xl font-semibold leading-8 text-foreground">
            Projects
          </h1>

          <p className="mt-2 text-[15px] font-medium leading-[24.375px] text-half-muted-foreground">
            A collection of projects I&apos;ve built across full-stack
            development, backend systems, cloud infrastructure, and
            real-time applications.
          </p>
        </header>

        <Divider className="!mb-7 mt-4" />

        <section aria-labelledby="projects-list">
          <SectionLabel id="projects-list">
            PROJECTS I&apos;VE BUILT
          </SectionLabel>

          <div className="mt-5 flex flex-col gap-7">
            {projects.map(
              ({ name, subtitle, description, href, Icon, accentClassName }) => (
                <article key={href}>
                  <Link
                    href={href}
                    className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex size-9 mt-[5px] shrink-0 items-center justify-center rounded-lg shadow-xl mt-1 text-white ${accentClassName} ring-2 ring-background/30 ring-offset-2 ring-offset-background/90 ring-inset`}
                      >
                        <Icon
                          aria-hidden="true"
                          className="size-5 stroke-[2.2]"
                        />
                      </span>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <h2 className="text-[15px] font-medium leading-[24.375px] text-foreground">
                            {name}
                          </h2>

                          <ArrowUpRight
                            aria-hidden="true"
                            className="size-4 mb-0.5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </div>

                        <p className="text-[14px] leading-[22.75px] text-muted-foreground">
                          {subtitle}
                        </p>

                        <p className="mt-2 text-[14px] leading-[22.75px] text-half-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
              ),
            )}
          </div>
        </section>
        
      </div>
    </main>
  );
}