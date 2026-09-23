import { AchievementsSection } from "@/components/home/achievements-section";
import { Divider } from "@/components/common/divider";
import { HomeHeader } from "@/components/home/home-header";
import { Intro } from "@/components/home/intro";
import { SectionLabel } from "@/components/home/section-label";
import { SkillsSection } from "@/components/home/skills-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { EducationSection } from "@/components/home/education-section";
import { Quote } from "@/components/home/quote";

export default function Home() {
  return (
    <main className="min-h-screen px-5 sm:px-6">
      <div className="mt-5 sm:mt-0">
        <HomeHeader />

        <div className="pt-12">
          <Intro />
        </div>

        <Divider />

        <section aria-labelledby="what-i-know">
          <SectionLabel id="what-i-know">WHAT I KNOW</SectionLabel>
          <div className="mt-6">
            <SkillsSection />
          </div>
        </section>

        <Divider />

        <section aria-labelledby="projects">
          <SectionLabel id="projects">PROJECTS I&apos;VE WORKED ON</SectionLabel>
          <div className="mt-6">
            <ProjectsSection />
          </div>
        </section>

        <Divider />

        <section aria-labelledby="achievements">
          <SectionLabel id="achievements">ACHIEVEMENTS</SectionLabel>
          <div className="mt-5">
            <AchievementsSection />
          </div>
        </section>

        <Divider />

        <section aria-labelledby="education">
          <SectionLabel id="education">WHERE I HAVE STUDIED</SectionLabel>
          <div className="mt-6">
            <EducationSection />
          </div>
        </section>

        <Divider />

        <section aria-labelledby="education">
          <div className="mt-6">
            <Quote />
          </div>
        </section>
      </div>
    </main>
  );
}
